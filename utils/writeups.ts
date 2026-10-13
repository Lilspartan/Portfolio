import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import './prose-grammar';

const WRITEUPS_DIR = path.join(process.cwd(), 'writeups');


export interface WriteupMeta {
    slug: string;
    title: string;
    project: string;
    date: string;
    description: string;
    cover: string | null;
    readingMinutes: number;
}

export interface Writeup extends WriteupMeta {
    html: string;
}

function resolveImageSrc(slug: string, href: string): string {
    return /^(https?:\/\/|\/)/.test(href) ? href : `/images/writings/${slug}/${href}`;
}

function buildMeta(slug: string, data: { [key: string]: any }, content: string): WriteupMeta {
    // cover or the first image in the writeup
    const coverHref: string | undefined = data.cover ?? content.match(/!\[[^\]]*\]\(([^)\s]+)/)?.[1];
    const words = content.split(/\s+/).filter(Boolean).length;
    return {
        slug,
        title: data.title,
        project: data.project,
        date: data.date instanceof Date ? data.date.toISOString().split('T')[0] : String(data.date),
        description: data.description,
        cover: coverHref ? resolveImageSrc(slug, coverHref) : null,
        readingMinutes: Math.max(1, Math.round(words / 200)),
    };
}

export function getAllWriteups(): WriteupMeta[] {
    if (!fs.existsSync(WRITEUPS_DIR)) return [];
    return fs.readdirSync(WRITEUPS_DIR)
        .filter(f => f.endsWith('.md'))
        .map(filename => {
            const slug = filename.replace(/\.md$/, '');
            const raw = fs.readFileSync(path.join(WRITEUPS_DIR, filename), 'utf-8');
            const { data, content } = matter(raw);
            if (data.draft && process.env.NODE_ENV === 'production') return null;
            return buildMeta(slug, data, content);
        })
        .filter((w): w is WriteupMeta => w !== null)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getWriteupsByProject(projectSlug: string): WriteupMeta[] {
    return getAllWriteups().filter(w => w.project === projectSlug);
}

export function getWriteupBySlug(slug: string): Writeup | null {
    const filepath = path.join(WRITEUPS_DIR, `${slug}.md`);
    if (!fs.existsSync(filepath)) return null;
    const raw = fs.readFileSync(filepath, 'utf-8');
    const { data, content } = matter(raw);

    const renderer = new marked.Renderer();

    renderer.image = ({ href, title, text }) => {
        const src = resolveImageSrc(slug, href);
        return `<img src="${src}" alt="${text}"${title ? ` title="${title}"` : ''} />`;
    };

    renderer.code = ({ text, lang }) => {
        const grammar = lang && Prism.languages[lang];
        if (grammar) {
            const highlighted = Prism.highlight(text, grammar, lang);
            return `<pre class="language-${lang}"><code class="language-${lang}">${highlighted}</code></pre>`;
        }
        const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const cls = lang ? ` class="language-${lang}"` : '';
        return `<pre><code${cls}>${escaped}</code></pre>`;
    };

    return {
        ...buildMeta(slug, data, content),
        html: marked(content, { renderer }) as string,
    };
}

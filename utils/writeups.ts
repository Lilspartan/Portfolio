import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import './prose-grammar';

const WRITEUPS_DIR = path.join(process.cwd(), 'writeups');

export interface WriteupMeta {
    slug: string;
    title: string;
    project: string;
    date: string;
    description: string;
}

export interface Writeup extends WriteupMeta {
    html: string;
}

export function getAllWriteups(): WriteupMeta[] {
    if (!fs.existsSync(WRITEUPS_DIR)) return [];
    return fs.readdirSync(WRITEUPS_DIR)
        .filter(f => f.endsWith('.md'))
        .map(filename => {
            const slug = filename.replace(/\.md$/, '');
            const raw = fs.readFileSync(path.join(WRITEUPS_DIR, filename), 'utf-8');
            const { data } = matter(raw);
            return {
                slug,
                title: data.title,
                project: data.project,
                date: String(data.date),
                description: data.description,
            };
        })
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

    const imageBase = `/images/writings/${slug}/`;
    renderer.image = ({ href, title, text }) => {
        const src = /^(https?:\/\/|\/)/.test(href) ? href : imageBase + href;
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
        slug,
        title: data.title,
        project: data.project,
        date: String(data.date),
        description: data.description,
        html: marked(content, { renderer }) as string,
    };
}

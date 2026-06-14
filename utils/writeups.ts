import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

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

    return {
        slug,
        title: data.title,
        project: data.project,
        date: String(data.date),
        description: data.description,
        html: marked(content, { renderer }) as string,
    };
}

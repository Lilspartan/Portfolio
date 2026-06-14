import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { Button } from '../../components';
import Lightbox from '../../components/Lightbox';
import { getAllWriteups, getWriteupBySlug, Writeup } from '../../utils/writeups';
import { projects } from '../../utils/projects';

interface Props {
    writeup: Writeup;
}

const WriteupPage = ({ writeup }: Props) => {
    const project = projects.find(p => p.link === writeup.project);
    const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

    const handleProseClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'IMG') {
            const img = target as HTMLImageElement;
            setLightbox({ src: img.src, caption: img.alt });
        }
    };

    return (
        <div className="bg-background min-h-screen text-white">
            <section className="py-16 mt-16 px-4 max-w-3xl mx-auto">
                <a href="/writing" className="inline-flex items-center gap-1 text-white/40 hover:text-white/70 text-sm transition duration-200 mb-6 block">
                    ← Writing
                </a>

                <div className="flex flex-wrap items-center gap-3 mb-2">
                    {project && (
                        <a href={`/projects/${project.link}`} className="border border-accent/30 text-accent/80 hover:border-accent hover:text-accent px-2 py-0.5 text-xs font-semibold tracking-wider uppercase transition duration-200">
                            {project.name}
                        </a>
                    )}
                    <span className="text-white/30 text-xs">
                        {new Date(writeup.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                </div>

                <h1 className="text-4xl font-extrabold text-white border-l-4 border-accent pl-4 mb-10">
                    {writeup.title}
                </h1>

                <div
                    className="prose prose-invert prose-purple max-w-none prose-headings:font-extrabold prose-a:text-accent prose-code:text-accent/80 prose-pre:bg-primary prose-pre:border prose-pre:border-white/10 prose-img:cursor-zoom-in"
                    dangerouslySetInnerHTML={{ __html: writeup.html }}
                    onClick={handleProseClick}
                />

                {lightbox && (
                    <Lightbox
                        src={lightbox.src}
                        caption={lightbox.caption}
                        onClose={() => setLightbox(null)}
                    />
                )}

                <div className="mt-16 w-48">
                    <Button link="/writing">← Back to Writing</Button>
                </div>
            </section>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const writeups = getAllWriteups();
    return {
        paths: writeups.map(w => ({ params: { slug: w.slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const writeup = getWriteupBySlug(params!.slug as string);
    if (!writeup) return { notFound: true };
    return { props: { writeup } };
};

export default WriteupPage;

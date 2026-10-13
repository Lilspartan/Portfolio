import { GetStaticProps } from 'next';
import { SectionHeading } from '../../components';
import ScrollReveal from '../../components/ScrollReveal';
import SEO from '../../components/SEO';
import { getAllWriteups, WriteupMeta } from '../../utils/writeups';
import { formatWriteupDate } from '../../utils/dates';
import { projects } from '../../utils/projects';

interface Props {
    writeups: WriteupMeta[];
}

const WriteupMetaLine = ({ writeup }: { writeup: WriteupMeta }) => {
    const project = projects.find(p => p.link === writeup.project);
    return (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            {project && (
                <span className="border border-accent/30 text-accent/80 px-2 py-0.5 font-semibold tracking-wider uppercase whitespace-nowrap">
                    {project.name}
                </span>
            )}
            <span className="text-white/40 whitespace-nowrap">
                {formatWriteupDate(writeup.date)} <span className="text-white/20 mx-1">·</span> {writeup.readingMinutes} min read
            </span>
        </div>
    );
};

const Cover = ({ writeup, className = '' }: { writeup: WriteupMeta; className?: string }) => (
    <div className={`relative aspect-video overflow-hidden ${className}`}>
        {writeup.cover ? (
            <img
                src={writeup.cover}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        ) : <></> }
    </div>
);

const WritingPage = ({ writeups }: Props) => {
    const [latest, ...rest] = writeups;

    return (
        <div className="bg-background min-h-screen">
            <SEO
                title="Writeups - Gabe Krahulik"
                description="Dev writeups and project postmortems from Gabe Krahulik."
                url="writing"
            />
            <section className="pt-32 pb-24 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
                <ScrollReveal animation="reveal-right" duration="0.6" className="block mb-16">
                    <SectionHeading>Writeups</SectionHeading>
                </ScrollReveal>

                {latest && (
                    <ScrollReveal animation="bounce-up" duration="0.6" className="block mb-16">
                        <a href={`/writing/${latest.slug}`} className="group grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
                            <Cover writeup={latest} />
                            <div>
                                <span className="text-xs font-bold text-white/40 tracking-widest uppercase block mb-3">Latest</span>
                                <h2 className="text-3xl font-extrabold leading-tight text-white group-hover:text-accent transition duration-200 mb-3">
                                    {latest.title}
                                </h2>
                                <p className="text-white/60 leading-relaxed mb-5">{latest.description}</p>
                                <WriteupMetaLine writeup={latest} />
                                <span className="inline-block mt-6 text-accent/80 group-hover:text-accent transition duration-200 font-semibold">
                                    Read writeup →
                                </span>
                            </div>
                        </a>
                    </ScrollReveal>
                )}

                {rest.length > 0 && (
                    <div className="flex flex-col divide-y divide-white/5 border-t border-b border-white/5">
                        {rest.map((w, i) => (
                            <ScrollReveal key={w.slug} animation="bounce-up" duration="0.5" delay={String(Math.round(i * 0.05 * 10) / 10)}>
                                <a href={`/writing/${w.slug}`} className="group grid grid-cols-1 sm:grid-cols-[14rem_1fr_auto] gap-4 sm:gap-8 items-center py-8">
                                    <Cover writeup={w} />
                                    <div className="min-w-0">
                                        <h3 className="text-xl font-bold leading-snug text-white group-hover:text-accent transition duration-200 mb-2">
                                            {w.title}
                                        </h3>
                                        <p className="text-white/50 text-sm leading-relaxed mb-3">{w.description}</p>
                                        <WriteupMetaLine writeup={w} />
                                    </div>
                                    <span className="hidden sm:block text-white/30 group-hover:text-accent transition duration-200 text-lg">→</span>
                                </a>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const writeups = getAllWriteups();
    return { props: { writeups } };
};

export default WritingPage;

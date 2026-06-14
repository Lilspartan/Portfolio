import { GetStaticProps } from 'next';
import { Card } from '../../components';
import { getAllWriteups, WriteupMeta } from '../../utils/writeups';
import { projects } from '../../utils/projects';

interface Props {
    writeups: WriteupMeta[];
}

const WritingPage = ({ writeups }: Props) => {
    return (
        <div className="bg-background min-h-screen">
            <section className="py-24 px-4 max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white mb-8 border-l-4 border-accent pl-4">Writeups</h2>
                {writeups.length === 0 ? (
                    <></>
                ) : (
                    <div className="flex flex-col gap-4">
                        {writeups.map(w => {
                            const project = projects.find(p => p.link === w.project);
                            return (
                                <a key={w.slug} href={`/writing/${w.slug}`} className="block group">
                                    <Card>
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                            <div>
                                                <h3 className="text-white font-bold text-lg group-hover:text-accent transition duration-200">
                                                    {w.title}
                                                </h3>
                                                <p className="text-white/60 text-sm mt-1 leading-relaxed">{w.description}</p>
                                            </div>
                                            <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                                                {project && (
                                                    <span className="border border-accent/30 text-accent/80 px-2 py-0.5 text-xs font-semibold tracking-wider uppercase whitespace-nowrap">
                                                        {project.name}
                                                    </span>
                                                )}
                                                <span className="text-white/30 text-xs">
                                                    {new Date(w.date + 'T12:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </a>
                            );
                        })}
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

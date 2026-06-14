import Head from 'next/head';
import SEO from '../components/SEO';
import { projects, charity, Tools } from '../utils/projects';
import { ShortTech } from '../utils/interfaces';

const experience = [
    {
        role: "Teaching Assistant - GAM200/250",
        org: "DigiPen Institute of Technology",
        dates: "Fall 2025 - Spring 2026",
        bullets: [
            "Supported sophomore teams building custom C++ game engines from scratch through to an original game.",
            "Held office hours, reviewed code, and guided students on engine architecture and gameplay systems.",
        ],
    },
    {
        role: "Teaching Assistant - CS260",
        org: "DigiPen Institute of Technology",
        dates: "Summer 2026",
        bullets: [
            "Assisted instruction for Computer Networks I covering socket programming, TCP/UDP, and network protocols.",
            "Graded assignments and helped students debug low-level networking code.",
        ],
    },
];

const technologies = [
    "C/C++", "TypeScript", "JavaScript", "Node.js", "Next.js",
    "React", "Tailwind CSS", "Electron", "Socket.IO",
    "MongoDB", "Redis", "Docker", "HTML/CSS", "Bun",
];

const disciplines = [
    "Full-Stack Development",
    "Systems Programming",
    "Real-Time Networking",
    "Game Engine Development",
    "Software Architecture",
    "Cross-Platform Apps",
];

function techName(short: ShortTech): string {
    return Tools[short]?.name ?? short;
}

const resumeProjects = projects.filter(p => p.resumeBullets && p.link !== 'portfolio');
const otherProjects  = projects.filter(p => !p.resumeBullets && p.active && p.link !== 'portfolio');
const totalCharity   = charity.reduce((sum, e) => sum + (e.raised ?? 0), 0);

// ─── shared inline-style tokens for the print layout ───────────────────────
const P = {
    purple:    '#7238a0',
    black:     '#111111',
    body:      '#2d2d2d',
    muted:     '#555555',
    faint:     '#888888',
    rule:      '#dddddd',
    gap:       '11pt',
    sectionMb: '13pt',
} as const;

const ResumePage = () => (
    <div className="bg-background min-h-screen pt-20">
        <SEO
            title="Gabe Krahulik | Resume"
            description="Resume of Gabe Krahulik - game and web developer from Seattle."
            url="resume"
        />

        <Head>
            <style>{`
                @page { size: letter; margin: 0.42in 0.5in; }
                @media print {
                    nav { display: none !important; }
                    html { background: white !important; background-image: none !important; }
                }
            `}</style>
        </Head>

        {/* SCREEN LAYOUT (hidden when printing) */}
        <div className="print:hidden max-w-4xl mx-auto px-6 py-10 pb-24">

            <div className="flex justify-end mb-6">
                <button
                    onClick={() => window.print()}
                    className="border border-accent/50 text-accent/80 hover:text-accent hover:border-accent px-5 py-2 text-sm font-semibold tracking-wider uppercase transition duration-200"
                >
                    Print / Save as PDF
                </button>
            </div>

            <header className="mb-6">
                <h1 className="gradient-name text-4xl font-extrabold mb-1">Gabe Krahulik</h1>
                <p className="text-white/60 text-lg font-medium mb-3">Game &amp; Web Developer · Seattle, WA</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/50">
                    <a href="mailto:gabe@gabekrahulik.dev" className="hover:text-accent transition duration-150">gabe@gabekrahulik.dev</a>
                    <a href="https://gabekrahulik.dev" target="_blank" rel="noreferrer" className="hover:text-accent transition duration-150">gabekrahulik.dev</a>
                    <a href="https://github.com/Lilspartan" target="_blank" rel="noreferrer" className="hover:text-accent transition duration-150">github.com/Lilspartan</a>
                    <a href="https://www.linkedin.com/in/gabe-krahulik/" target="_blank" rel="noreferrer" className="hover:text-accent transition duration-150">linkedin.com/in/gabe-krahulik</a>
                </div>
                <hr className="border-white/10 mt-5" />
            </header>

            <section className="mb-7">
                <ScreenTitle>Summary</ScreenTitle>
                <p className="text-white/70 leading-relaxed text-sm">
                    Developer from Seattle building games and web applications across the full stack.
                    Experienced in real-time networking, game engine architecture, and full-stack web development.
                    Currently pursuing a BS in Computer Science at DigiPen (2023-2027) while serving as a Teaching Assistant.
                </p>
            </section>

            <section className="mb-7">
                <ScreenTitle>Experience</ScreenTitle>
                <div className="flex flex-col gap-4">
                    {experience.map(e => (
                        <div key={e.role} className="border border-white/10 p-4">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                                <div>
                                    <p className="text-white font-semibold">{e.role}</p>
                                    <p className="text-accent/80 text-sm">{e.org}</p>
                                </div>
                                <span className="text-white/40 text-xs tracking-wider shrink-0 pt-0.5">{e.dates}</span>
                            </div>
                            <ul className="mt-3 flex flex-col gap-1.5 pl-4">
                                {e.bullets.map((b, i) => (
                                    <li key={i} className="text-white/60 text-sm list-disc">{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-7">
                <ScreenTitle>Education</ScreenTitle>
                <div className="border border-white/10 p-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <div>
                            <p className="text-white font-semibold">BS in Computer Science</p>
                            <a href="https://www.digipen.edu/" target="_blank" rel="noreferrer" className="text-accent/80 text-sm">
                                DigiPen Institute of Technology · Redmond, WA
                            </a>
                        </div>
                        <span className="text-white/40 text-xs tracking-wider shrink-0 pt-0.5">2023 - 2027</span>
                    </div>
                </div>
            </section>

            <section className="mb-7">
                <ScreenTitle>Skills</ScreenTitle>
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map(t => (
                                <span key={t} className="border border-accent/30 text-accent/80 px-2.5 py-0.5 text-xs font-semibold tracking-wider uppercase">{t}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Disciplines</p>
                        <div className="flex flex-wrap gap-2">
                            {disciplines.map(d => (
                                <span key={d} className="border border-white/10 text-white/60 px-2.5 py-0.5 text-xs font-semibold tracking-wider uppercase">{d}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-7">
                <ScreenTitle>Projects</ScreenTitle>
                <div className="flex flex-col gap-4">
                    {resumeProjects.map(p => (
                        <div key={p.link} className="border border-white/10 p-4">
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                    <p className="text-white font-bold text-sm">
                                        {p.resumeRole}
                                        {!p.active && <span className="ml-2 text-xs font-normal text-accent/50">(Inactive)</span>}
                                    </p>
                                    <p className="text-white/50 text-xs italic mt-0.5">
                                        {p.name}{p.resumeDates ? `, ${p.resumeDates}` : ''}
                                        {p.tech.length > 0 && (
                                            <span className="not-italic text-white/30">{' · '}{p.tech.map(t => techName(t)).join(', ')}</span>
                                        )}
                                    </p>
                                    <ul className="mt-2 flex flex-col gap-1 pl-4">
                                        {p.resumeBullets!.map((b, i) => (
                                            <li key={i} className="text-white/60 text-sm list-disc">{b}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-1 shrink-0">
                                    {p.links.filter(l => l.external).map(l => (
                                        <a key={l.url} href={l.url} target="_blank" rel="noreferrer"
                                            className="text-accent/60 hover:text-accent text-xs transition duration-150">
                                            {l.text} ↗
                                        </a>
                                    ))}
                                    {p.detail?.paragraphs !== null && (
                                        <a href={`/projects/${p.link}`} className="text-accent/60 hover:text-accent text-xs transition duration-150">
                                            More info →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {otherProjects.length > 0 && (
                    <div className="border border-white/10 p-4 mt-4">
                        <p className="text-white/30 text-xs tracking-widest uppercase mb-3">Other Projects</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {otherProjects.map(p => (
                                <div key={p.link}>
                                    <span className="text-white text-sm font-semibold">{p.name}</span>
                                    <p className="text-white/50 text-xs mt-0.5">{p.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            <section>
                <ScreenTitle>Charity &amp; Community</ScreenTitle>
                <div className="border border-white/10 p-4">
                    <p className="text-white/70 text-sm leading-relaxed">
                        Organized and participated in {charity.length} charity streaming events raising a combined{' '}
                        <span className="text-accent font-semibold">${Intl.NumberFormat().format(Math.round(totalCharity))}</span>{' '}
                        for Child's Play Charity and World Builders including the PA League Gives Back marathon racing series and the Draw4Charity summer streams.
                    </p>
                </div>
            </section>
        </div>

        {/* PRINT LAYOUT (only visible when printing) */}
        <div className="hidden print:block" style={{ fontFamily: "'Space Grotesk', sans-serif", color: P.black, background: 'white' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '185pt 1fr', columnGap: '22pt', alignItems: 'start' }}>

                <aside style={{ borderRight: `1pt solid ${P.rule}`, paddingRight: '18pt' }}>

                    <h1 style={{ fontSize: '29pt', fontWeight: 900, color: P.black, lineHeight: 1.1, marginBottom: '4pt' }}>
                        Gabe<br />Krahulik
                    </h1>
                    <p style={{ fontSize: '9.5pt', color: P.black, marginBottom: '10pt', lineHeight: 1.4 }}>
                        Game &amp; Web Developer<br />Seattle, WA
                    </p>
                    <hr style={{ borderColor: P.rule, marginBottom: '10pt' }} />

                    <div style={{ marginBottom: '10pt' }}>
                        <SideLabel>Contact</SideLabel>
                        {[
                            'gabe@gabekrahulik.dev',
                            'gabekrahulik.dev',
                            'github.com/Lilspartan',
                            'linkedin.com/in/gabe-krahulik',
                        ].map(s => (
                            <p key={s} style={{ fontSize: '9pt', color: P.black, lineHeight: 1.65 }}>{s}</p>
                        ))}
                    </div>
                    <hr style={{ borderColor: P.rule, marginBottom: '10pt' }} />

                    <div style={{ marginBottom: '10pt' }}>
                        <SideLabel>Education</SideLabel>
                        <p style={{ fontSize: '9.5pt', fontWeight: 700, color: P.black, lineHeight: 1.4 }}>BS Computer Science</p>
                        <p style={{ fontSize: '9pt', color: P.black, lineHeight: 1.4 }}>DigiPen Institute of Technology</p>
                        <p style={{ fontSize: '9pt', color: P.black, lineHeight: 1.4 }}>Redmond, WA · 2023 - 2027</p>
                    </div>
                    <hr style={{ borderColor: P.rule, marginBottom: '10pt' }} />

                    <div style={{ marginBottom: '10pt' }}>
                        <SideLabel>Technologies</SideLabel>
                        {technologies.map(t => (
                            <p key={t} style={{ fontSize: '9pt', color: P.black, lineHeight: 1.65 }}>· {t}</p>
                        ))}
                    </div>
                    <hr style={{ borderColor: P.rule, marginBottom: '10pt' }} />

                    <div>
                        <SideLabel>Disciplines</SideLabel>
                        {disciplines.map(d => (
                            <p key={d} style={{ fontSize: '9pt', color: P.black, lineHeight: 1.65 }}>· {d}</p>
                        ))}
                    </div>
                </aside>

                <main>

                    <p style={{ fontSize: '10.5pt', color: P.black, lineHeight: 1.6, marginBottom: P.sectionMb }}>
                        Developer from Seattle building games and web applications across the full stack.
                        Experienced in real-time networking, game engine architecture, and full-stack web development.
                        Currently pursuing a BS in Computer Science at DigiPen (2023-2027) while serving as a Teaching Assistant.
                    </p>

                    <PrintSection title="Experience">
                        {experience.map((e, i) => (
                            <div key={e.role} style={{ marginBottom: i < experience.length - 1 ? P.gap : 0 }}>
                                <p style={{ fontWeight: 700, fontSize: '10.5pt', color: P.black }}>{e.role}</p>
                                <p style={{ fontStyle: 'italic', fontSize: '10pt', color: P.black, marginBottom: '2pt' }}>
                                    {e.org} · {e.dates}
                                </p>
                                {e.bullets.map((b, bi) => (
                                    <p key={bi} style={{ fontSize: '10pt', color: P.black, paddingLeft: '11pt', lineHeight: 1.5 }}>· {b}</p>
                                ))}
                            </div>
                        ))}
                    </PrintSection>

                    <PrintSection title="Projects">
                        {resumeProjects.map((p, i) => (
                            <div key={p.link} style={{ marginBottom: i < resumeProjects.length - 1 ? P.gap : 0 }}>
                                <p style={{ fontWeight: 700, fontSize: '10.5pt', color: P.black }}>
                                    {p.resumeRole}
                                    {!p.active && <span style={{ fontWeight: 400, color: P.black, marginLeft: '4pt' }}>(Inactive)</span>}
                                </p>
                                <p style={{ fontStyle: 'italic', fontSize: '10pt', color: P.black, marginBottom: '2pt' }}>
                                    {p.name}{p.resumeDates ? `, ${p.resumeDates}` : ''}
                                </p>
                                {p.resumeBullets!.map((b, bi) => (
                                    <p key={bi} style={{ fontSize: '10pt', color: P.black, paddingLeft: '11pt', lineHeight: 1.5 }}>· {b}</p>
                                ))}
                            </div>
                        ))}
                    </PrintSection>

                    <PrintSection title="Volunteer Work">
                        <p style={{ fontSize: '10pt', color: P.black, lineHeight: 1.6 }}>
                            · Organized and ran multiple charity streaming events raising over{' '}
                            <span style={{ color: P.black, fontWeight: 600 }}>${Intl.NumberFormat().format(Math.round(totalCharity))}</span>{' '}
                            for Child's Play Charity and World Builders.
                        </p>
                        <p style={{ fontSize: '10pt', color: P.black, paddingLeft: 0, lineHeight: 1.6 }}>
                            · Events include the PA League Gives Back marathon racing series and the Draw4Charity summer streams.
                        </p>
                    </PrintSection>

                </main>
            </div>
        </div>
    </div>
);

const ScreenTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-xs font-bold text-white/40 tracking-widest uppercase border-l-4 border-accent pl-3 mb-4">
        {children}
    </h2>
);

const SideLabel = ({ children }: { children: React.ReactNode }) => (
    <p style={{ fontSize: '9.5pt', fontWeight: 700, color: P.black, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '4pt' }}>
        {children}
    </p>
);

const PrintSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: P.sectionMb }}>
        <p style={{ fontSize: '14pt', fontWeight: 700, color: P.black, borderBottom: `1pt solid ${P.rule}`, paddingBottom: '3pt', marginBottom: '7pt' }}>
            {title}
        </p>
        {children}
    </div>
);

export default ResumePage;

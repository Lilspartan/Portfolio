const SectionHeading = ({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) => (
    <div>
        <span className="text-white/50 text-sm uppercase tracking-[0.3em] font-semibold block mb-3">{eyebrow}</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white">{children}</h2>
    </div>
);

export default SectionHeading;

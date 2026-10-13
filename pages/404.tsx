import { Button, ContactIcons, SectionHeading } from '../components';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col justify-between">
            <SEO title="404 - Gabe Krahulik" description="Page not found." />

            <section className="flex-1 flex items-center justify-center text-center px-4 pt-24 pb-16">
                <div data-m="scale" data-m-duration="0.75">
                    <span className="text-white/50 text-sm uppercase tracking-[0.3em] font-semibold block mb-4">
                        Error 404
                    </span>
                    <h1 className="text-7xl sm:text-8xl font-extrabold leading-none">
                        <span className="gradient-name">404</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-white/70 mt-6">
                        That page does not exist
                    </p>
                    <div
                        data-m="bounce-up"
                        data-m-delay="0.4"
                        data-m-duration="0.75"
                        className="flex flex-col sm:flex-row gap-3 justify-center mt-10"
                    >
                        <Button
                            link="/#projects"
                            type="outline"
                            glow
                            className="bg-accent! text-primary! border-accent! hover:opacity-90! py-4! text-lg! sm:w-auto! px-8!"
                        >View my Projects</Button>
                        <Button
                            link="/"
                            type="outline"
                            className="py-4! text-lg! sm:w-auto! px-8!"
                        >Back Home</Button>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 text-center">
                <SectionHeading>Get in Touch</SectionHeading>
                <p className="text-white/40 mt-4 mb-8 max-w-md mx-auto">Open to new opportunities and collaborations.</p>
                <ContactIcons className="text-white flex flex-row flex-wrap justify-center gap-1 lg:gap-4" keyPrefix="404-" />
                <p className="mt-16 text-white/20 text-sm">
                    Made with <span className="text-accent">Next.js</span> and <span className="text-accent">Tailwind CSS</span>
                </p>
            </section>
        </div>
    );
};

export default NotFound;

import { useRef, useEffect, useState } from 'react';

interface Props {
    children: React.ReactNode;
    animation?: string;
    duration?: string;
    delay?: string;
    className?: string;
}

const ScrollReveal = ({ children, animation = 'bounce-up', duration = '0.6', delay = '0', className = '' }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            data-m={visible ? animation : undefined}
            data-m-duration={visible ? duration : undefined}
            data-m-delay={visible ? delay : undefined}
            className={className}
            style={visible ? undefined : { opacity: 0 }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;

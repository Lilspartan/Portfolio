import { useEffect } from 'react';

interface Props {
    src: string;
    caption: string;
    onClose: () => void;
}

const Lightbox = ({ src, caption, onClose }: Props) => {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <img
                src={src}
                alt={caption}
                className="max-h-[80vh] max-w-full object-contain shadow-2xl"
                onClick={e => e.stopPropagation()}
            />
            {caption && (
                <p className="mt-4 text-white/60 text-sm text-center max-w-xl" onClick={e => e.stopPropagation()}>
                    {caption}
                </p>
            )}
        </div>
    );
};

export default Lightbox;

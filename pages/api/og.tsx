import { ImageResponse } from '@vercel/og';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { searchParams } = new URL(req.url!, 'http://localhost');
    const title = searchParams.get('title') ?? 'Gabe Krahulik';
    const description = searchParams.get('description') ?? '';
    const label = searchParams.get('label') ?? '';
    const type = searchParams.get('type') ?? '';

    const titleSize = title.length > 50 ? '44px' : title.length > 30 ? '54px' : '64px';
    const shortDesc = description.length > 140 ? description.slice(0, 140) + '…' : description;

    const imageResponse = new ImageResponse(
        (
            <div
                style={{
                    background: '#0f0f1a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Left accent bar */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: '#c084fc', display: 'flex' }} />

                {/* Subtle gradient glow */}
                <div style={{
                    position: 'absolute', top: '-200px', right: '-200px',
                    width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(192,132,252,0.08) 0%, transparent 70%)',
                    display: 'flex',
                }} />

                {/* Main content */}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '56px 72px 56px 80px' }}>

                    {/* Label / type badge */}
                    {label && (
                        <div style={{ display: 'flex', marginBottom: '28px' }}>
                            <div style={{
                                border: '1px solid rgba(192,132,252,0.4)',
                                color: 'rgba(192,132,252,0.9)',
                                padding: '4px 14px',
                                fontSize: '13px',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                display: 'flex',
                            }}>
                                {label}
                            </div>
                            {type && (
                                <div style={{
                                    marginLeft: '10px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'rgba(255,255,255,0.3)',
                                    padding: '4px 14px',
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                }}>
                                    {type}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Title */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: label ? 'flex-start' : 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            fontSize: titleSize,
                            fontWeight: 900,
                            color: '#ffffff',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}>
                            {title}
                        </div>

                        {shortDesc && (
                            <div style={{
                                marginTop: '20px',
                                fontSize: '20px',
                                color: 'rgba(255,255,255,0.45)',
                                lineHeight: 1.5,
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}>
                                {shortDesc}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '20px',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        marginTop: '24px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '8px', height: '8px', background: '#c084fc', display: 'flex', borderRadius: '50%' }} />
                            <span style={{ color: '#c084fc', fontSize: '18px', fontWeight: 700, letterSpacing: '-0.01em', display: 'flex' }}>
                                gabekrahulik.dev
                            </span>
                        </div>
                        {!label && type && (
                            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex' }}>
                                {type}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        ),
        { width: 1200, height: 630 }
    );

    const buffer = Buffer.from(await imageResponse.arrayBuffer());
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, immutable, no-transform, max-age=31536000');
    res.send(buffer);
}

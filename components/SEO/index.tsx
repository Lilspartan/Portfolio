import Head from 'next/head';

const BASE_URL = 'https://gabekrahulik.dev';

type Props = {
    title?: string;
    description?: string;
    url?: string;
    ogImage?: string;
}

const SEO = ({
    title = "Gabe Krahulik | Developer",
    description = "Game and web developer from Seattle. Check out my projects.",
    url = "",
    ogImage,
}: Props) => {
    const pageUrl = `${BASE_URL}/${url}`;
    const imageUrl = ogImage
        ? (ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`)
        : `${BASE_URL}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

    return (
        <Head>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="author" content="Gabe Krahulik" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={pageUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Head>
    );
};

export default SEO;

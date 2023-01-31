import Head from 'next/head';

type Props = {
    title?: string,
    description?: string,
    url?: string,
}

const index = ({
    title = "Gabe Krahulik's Portfolio",
    description = "Check out my projects and information about me",
    url = ""
}: Props) => {
  return (
    <Head>
        <title>{ title }</title>
        <link rel="icon" href="/logo_small.png" />
        <link rel="stylesheet" href="https://use.typekit.net/mzl0gsb.css" />

        <meta name="author" content = "Gabe Krahulik" />
        <meta name="keywords" content="Gabir Motors, Krahulik, portfolio, web developer, full stack, website" />

        <meta name="title" content={ title } />
        <meta name="description" content={ description } />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://gabekrahulik.dev/${url}`} />
        <meta property="og:title" content={ title } />
        <meta property="og:description" content={ description } />
        {/* <meta property="og:image" content="/header.jpg" /> */}

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://gabekrahulik.dev/${url}`} />
        <meta property="twitter:title" content={ title } />
        <meta property="twitter:description" content={ description } />
        {/* <meta property="twitter:image" content="/header.jpg"></meta> */}
    </Head>
  )
}

export default index
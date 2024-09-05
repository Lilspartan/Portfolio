import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang = "en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/logo.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#171C27" />
          <meta
            name="description"
            content="Gabe Kahulik's Portfolio"
          />
          <meta name="author" content="Gabe Krahulik" />
          <mets name="keywords" content="web development,gabir motors,pa league,gabe krahulik,portfolio,full stack,back end, front end" />

          <title>Gabe Krahulik | Web Developer</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet" />	
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
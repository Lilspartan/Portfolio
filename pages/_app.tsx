import '../styles/globals.css';
import '../styles/prose-highlight.css';
import { Analytics } from '@vercel/analytics/react';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp

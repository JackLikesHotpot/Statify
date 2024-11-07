// src/pages/_app.js

import '../styles/globals.css'; // Import global CSS including Tailwind directives
import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
  <>
  {/* Set default meta tags for all pages */}
  <Head>
    <title>Statify</title>
    <meta name="description" content="Discover your recently played tracks and favorite artists from Spotify." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
    {/* Wrap all pages with a global layout */}
  <div className="layout">
    <Component {...pageProps} />;
    
    {/* <Footer/> */}
  </div>
  </>
  );
}

export default MyApp;

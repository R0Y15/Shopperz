import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { Navbar, Footer, SiteLoader } from '../components';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Change this delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // return <SiteLoader />;
  }

  return (
    <div className="layout">
      <Head>
        <title>Shopperz</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>

  )
}

export default Layout
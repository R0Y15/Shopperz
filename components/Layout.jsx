import React from 'react';
import head from 'next/head'
import { Navbar, Footer } from '../components';

const Layout = ({ children }) => {
  return (


    <div className="layout">
      <head>
        <title>Shopperz</title>
      </head>
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
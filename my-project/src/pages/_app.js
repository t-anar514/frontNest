// pages/_app.js
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import '../styles/globals.css'; // assuming you have a global stylesheet

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <main className="max-w-screen min-h-screen bg-white">
        <Component {...pageProps} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;

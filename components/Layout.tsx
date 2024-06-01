import React from 'react';
import Footer from './Footer';
import Header from './Header';

import { Analytics } from '@vercel/analytics/react';

function Layout({ children }: any) {
    return (
        <div className="backdrop-blur-[2px] backdrop-brightness-50 min-h-screen flex flex-col justify-between">
            <Header />
            <article className="flex flex-1 flex-col items-center align-center mx-auto md:w-full bg-black/75">
                {children}
            </article>
            <section className="flex-grow bg-black/75"></section>
            <Footer />
            <Analytics />
        </div>
    );
}

export default Layout;
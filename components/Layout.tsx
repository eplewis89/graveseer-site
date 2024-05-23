import React from 'react';
import Footer from './Footer';
import Header from './Header';

import { Analytics } from '@vercel/analytics/react';

function Layout({ children }: any) {
    return (
        <div className="backdrop-blur-[2px] backdrop-brightness-50 min-h-screen">
            <Header />
            <article className="flex flex-col items-center align-center mx-auto md:w-full bg-black/75">
                {children}
            </article>
            <Footer />
            <Analytics />
        </div>
    );
}

export default Layout;
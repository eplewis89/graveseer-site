import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: any) {
    return (
        <>
            <Header />
            <article className="flex flex-col items-center">
                {children}
            </article>
            <Footer />
        </>
    );
}

export default Layout;
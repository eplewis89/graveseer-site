import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: any) {
    return (
        <>
            <Header />
            <article className="flex flex-col items-center align-center mx-auto md:w-full lg:w-1/3">
                {children}
            </article>
            <Footer />
        </>
    );
}

export default Layout;
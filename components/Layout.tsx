import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: any) {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center pt-10">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
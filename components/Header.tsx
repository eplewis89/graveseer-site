import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="body-font" >
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="cursor-pointer flex cursor title-font font-medium items-center mb-5 md:mb-0">
                    <span className="max-w-xs ml-5 text-xl">
                        <img src="/graveseer-logo-dead.png"/>
                    </span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <ul className="flex">
                        <li className="mr-5 hover:text-gray-100">
                            <Link href='/shows'>
                                Shows
                            </Link>
                        </li>

                        <li className="mr-5 hover:text-gray-100">
                            <Link href='/about'>
                                About Us
                            </Link>
                        </li>

                        <li className="mr-5 hover:text-gray-100">
                            <Link href='mailto:graveseerband@gmail.com'>
                                Contact
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}
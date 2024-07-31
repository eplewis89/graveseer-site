import React from 'react';

import Link from 'next/link';
import Image from 'next/image'

export default function Header() {
    return (
        <header className="body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="cursor-pointer flex cursor title-font font-medium items-center mb-5 md:mb-0">
                    <span className="max-w-xs text-xl">
                        <Image
                            src="/graveseer-logo-dead.png"
                            alt="graveseer logo"
                            width={80}
                            height={80}/>
                    </span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <ul className="flex">
                        <li className="mr-5 hover:text-gray-100">
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
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
                            <Link href='https://graveseer.bandcamp.com/merch' target='_blank'>
                                Merch
                            </Link>
                        </li>

                        { /*email*/ }
                        <li className="mr-3 hover:text-gray-100">
                            <Link href='mailto:booking@graveseerband.com'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                                </svg>
                            </Link>
                        </li>

                        { /*instagram*/ }
                        <li className="mr-3 hover:text-gray-100">
                            <Link href='https://www.instagram.com/graveseerband' target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </Link>
                        </li>

                        { /*youtube*/ }
                        <li className="mr-3 hover:text-gray-100">
                            <Link href='https://www.youtube.com/@graveseer' target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
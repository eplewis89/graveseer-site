import React from 'react';
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="mt-auto bg-black">
            <div className="text-center text-md m-4">
                <p className="p-2">
                    For booking inquiries, please contact us at <Link href='mailto:booking@graveseerband.com'>booking@graveseerband.com</Link>
                </p>
                <p className="p-2">
                    Graveseer © { new Date().getFullYear() }
                </p>
            </div>
        </div>
    )
}
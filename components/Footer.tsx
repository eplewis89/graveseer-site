import React from 'react';

export default function Footer() {
    return (
        <>
        <div className="flex justify-center items-center m-4">
            <span>
                © { new Date().getFullYear() } Graveseer
            </span>
        </div>
        </>
    )
}
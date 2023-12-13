import React from 'react';

export default function Footer() {
    return (
        <>
        <div className="flex justify-center items-center">
            <span className="m-4">
                © { new Date().getFullYear() } Graveseer
            </span>
        </div>
        </>
    )
}
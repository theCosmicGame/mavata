import Link from 'next/link';
import React, { useState } from 'react';
import { userState, useEffect } from 'react';

const NavBar = () => {

    return (
        <nav className="flex justify-center pt-3 pb-3 space-x-4 border-b bg-cyan-500 border-gray-300">
            {[
                ["All Companies", "/firm/companies"],
                ["Company Profile", "/firm/company"],
                ["Settings", "/user/settings"]
            ].map(([title, url], index) => (
                <Link href={url} key={index}>
                    <a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"> {title}</a>
                </Link>
            ))
            }
        </nav>
    )
}

export default ({ onSignIn }) => {
    return (
        <nav className="flex justify-center pt-3 pb-3 space-x-4 border-b bg-cyan-500 border-gray-300">
            {[
                ["All Companies", "/firm/companies"],
                ["Company Profile", "/firm/company"],
                ["Settings", "/user/settings"]
            ].map(([title, url], index) => (
                <Link href={url} key={index}>
                    <a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"> {title}</a>
                </Link>
            ))
            }
        </nav>
    )
};
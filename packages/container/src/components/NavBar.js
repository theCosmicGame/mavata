import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles/HeaderStyles';

// import { useState, useEffect } from 'react'

const Navbar = () => {
    //const [signedUser, setSignedUser] = useState(false)
    const classes = useStyles();

    const linkMap = [
        ["All Companies ", "/companies"],
        ["Company Profile ", "/company"],
        ["Settings ", "/settings"]
    ];

    return (
        <div>
            {linkMap.map(([title, url], index) => (
                <Link href={url} key={index}>
                    <a>{title} </a>
                </Link>
            ))}
        </div>
    )
}

export default Navbar
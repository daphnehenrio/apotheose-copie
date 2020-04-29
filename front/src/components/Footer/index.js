// == Import npm
import React from 'react';

// == import Material UI

import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import './styles.scss'


// -------------------------- Export --------------------------

export default function Footer() {

    const preventDefault = (event) => event.preventDefault();

    return (
        <Box className="footer--styled box" component="div" m={1} >
            <Link className="footer--styled link" href="#" onClick={preventDefault}>
                Contact
            </Link>
            <p>-</p>
            <Link className="footer--styled link" href="#" onClick={preventDefault}>
                Mentions légales
            </Link>
        </Box>
    );
};


// == Import npm
import React from 'react';

// == import Material UI

import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

// -------------------------- styles composants --------------------------

const StyledBox = withStyles({
    root: {
        padding:'0.5rem 0',
        display: 'flex',
        justifyContent: 'center',
        margin: '0',
        backgroundColor: 'rgba(230, 230, 230, 0.4)',
        alignItems: 'center',
    },
})(Box);

const StyledLink = withStyles({
    root: {
        marginRight: '1rem',
        marginLeft: '1rem',
        fontSize: '0.9rem',
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
})(Link);


// -------------------------- Export --------------------------

export default function Footer() {

    const preventDefault = (event) => event.preventDefault();

    return (
        <StyledBox component="div" m={1} >
            <StyledLink href="#" onClick={preventDefault}>
                Contact
            </StyledLink>
            <p>-</p>
            <StyledLink href="#" onClick={preventDefault}>
                Mentions légales
            </StyledLink>
        </StyledBox>
    );
};


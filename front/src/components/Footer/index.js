// == Import npm
import React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const StyledBox = withStyles({
    root: {
        height: '5%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '9999',
        margin: '0',
        backgroundColor: 'rgba(230, 230, 230, 0.4)',
        alignItems: 'center',
    },
})(Box);

const StyledLink = withStyles({
    root: {
        marginRight: '2rem',
        fontSize: '0.9rem',
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
})(Link);


// == Composant
const Footer = () => {

    const preventDefault = (event) => event.preventDefault();

    return (
        <StyledBox component="div" m={1} >
            <StyledLink href="#" onClick={preventDefault}>
                Contact
            </StyledLink>
            <StyledLink href="#" onClick={preventDefault}>
                Mentions légales
            </StyledLink>
        </StyledBox>
    );
};

// == Export
export default Footer;

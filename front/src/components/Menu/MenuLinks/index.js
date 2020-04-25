import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import DescriptionIcon from '@material-ui/icons/Description';

import './styles.css';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },

});

const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiExpansionPanelDetails-root': {
            display: 'flex',
            flexDirection: 'column',
            padding: '0 0 0 1rem',
        },
        '.MuiExpansionPanel-root': {
            position: 'static',
        },
        '.MuiExpansionPanelSummary-root': {
            '&:hover': {
                backgroundColor: '#F0F1F9',
            },
            '&:focus': {
                backgroundColor: '#F0F1F9',
            },
            padding: '0.6rem 1rem',
        },
        '.MuiExpansionPanel-root.Mui-expanded': {
            margin: '0',
        },
        '.MuiExpansionPanelSummary-content': {
            margin: '0',
        },
        '.MuiExpansionPanelSummary-content.Mui-expanded': {
            margin: '0',
        },
        '.MuiPaper-root::-webkit-scrollbar': {
            width: '0',
        },

    },
})(() => null);



const StyledLink = withStyles({
    root: {
        '&:hover': {
            backgroundColor: '#F0F1F9',
            textDecoration: 'none',
        },
        padding: '1.5rem 1rem',
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
            backgroundColor: '#F0F1F9',
        },
    },
})(Link);

const SubLink = withStyles({
    root: {
        marginTop: '0.5rem',
        '&:hover': {
            backgroundColor: '#F0F1F9',
            textDecoration: 'none',
            borderTopLeftRadius: '3rem',
            borderBottomLeftRadius: '3rem',
        },
        padding: '1.5rem 1rem',
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
            backgroundColor: '#F0F1F9',
            borderTopLeftRadius: '3rem',
            borderBottomLeftRadius: '3rem',
        },
        marginBottom: '0.5rem',
    },
})(Link);

const StyledExpansionPanel = withStyles({
    root: {
        boxShadow: 'none',
    },
})(ExpansionPanel);

export default function FileSystemNavigator() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <div className={classes.root}>
            <GlobalCss />

            <StyledLink href="#" onClick={preventDefault}>
                Accueil
            </StyledLink>
            <StyledExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >Services</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <SubLink href="#" onClick={preventDefault}>
                        <AccountBalanceIcon color='primary' />
                        <p className='tree-item-link'>
                            Banques
                        </p>
                    </SubLink>
                    <SubLink href="#" onClick={preventDefault}>
                        <PhonelinkSetupIcon color='primary' />
                        <p className='tree-item-link'>
                            Internet & Mobiles
                        </p>
                    </SubLink>
                </ExpansionPanelDetails>
            </StyledExpansionPanel>

            <StyledExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >Articles</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <SubLink href="#" onClick={preventDefault}>
                        <AccountBalanceIcon color='primary' />
                        <p className='tree-item-link'>
                            Caf
                        </p>
                    </SubLink>
                    <SubLink href="#" onClick={preventDefault}>
                        <PhonelinkSetupIcon color='primary' />
                        <p className='tree-item-link'>
                            Pôle emploi
                        </p>
                    </SubLink>
                    <SubLink href="#" onClick={preventDefault}>
                        <PhonelinkSetupIcon color='primary' />
                        <p className='tree-item-link'>
                            Impôts
                        </p>
                    </SubLink>
                </ExpansionPanelDetails>
            </StyledExpansionPanel>
            
            <StyledLink href="#" onClick={preventDefault}>
                Simulation
            </StyledLink>
            <StyledLink href="#" onClick={preventDefault}>
                Support
            </StyledLink>
        </div>
    );
}
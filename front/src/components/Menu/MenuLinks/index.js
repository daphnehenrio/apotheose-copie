import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// == import Material UI

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

// == import styles
import './styles.scss';


// -------------------------- styles composants --------------------------
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
                backgroundColor: '#1B4353',
            },
            '&:focus': {
                backgroundColor: '#1B4353',
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
            backgroundColor: '#1B4353',
            textDecoration: 'none',
        },
        padding: '1.5rem 1rem',
        textDecoration: 'none',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
            backgroundColor: '#1B4353',
        },
    },
})(Link);

const SubLink = withStyles({
    root: {
        marginTop: '0.5rem',
        '&:hover': {
            backgroundColor: '#1B4353',
            textDecoration: 'none',
            borderTopLeftRadius: '3rem',
            borderBottomLeftRadius: '3rem',
        },
        padding: '1.5rem 1rem',
        textDecoration: 'none',
        color: '#FBFEF9',
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
            backgroundColor: '#1B4353',
            borderTopLeftRadius: '3rem',
            borderBottomLeftRadius: '3rem',
        },
        marginBottom: '0.5rem',
    },
})(Link);

const StyledExpansionPanel = withStyles({
    root: {
        boxShadow: 'none',
        backgroundColor: '#001B2E',
        color: '#FBFEF9',
    },
})(ExpansionPanel);

const StyledSubExpansionPanel = withStyles({
    root: {
        marginTop: '1rem',
        boxShadow: 'none',
        backgroundColor: '#001B2E',
        color: '#FBFEF9',
        '&:hover': {
            borderTopLeftRadius: '3rem',
            borderBottomLeftRadius: '3rem',
        }
    },
})(ExpansionPanel);

const StyledIcon = withStyles({
    root: {
        color: 'white'
    },
})(ExpandMoreIcon);


// -------------------------- Export --------------------------

export default function FileSystemNavigator() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

// -------------------------- Fonctions Dispatch --------------------------

    const preventDefault = (event, route) => {
        event.preventDefault();
        dispatch({ type: 'CHANGE_PAGE', route, history });
    };

// -------------------------- Return --------------------------

    return (
        <div className={classes.root}>
            <GlobalCss />

            <Link className="menu--link" href="/" onClick={(event) => preventDefault(event, "")}>
                Accueil
            </Link>
            <ExpansionPanel className="menu--ExpansionPanel">
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className="menu--ExpandMoreIcon" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >Services</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Link className="menu--sublink" href="/services/banques" onClick={(event) => preventDefault(event, "banques")}>
                        <AccountBalanceIcon color='primary' />
                        <p className='tree-item-link'>
                            Banques
                        </p>
                    </Link>
                    <Link className="menu--sublink" href="/services/internet-et-mobiles" onClick={(event) => preventDefault(event, "internet-et-mobiles")}>
                        <PhonelinkSetupIcon color='primary' />
                        <p className='tree-item-link'>
                            Internet & Mobiles
                        </p>
                    </Link>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className="menu--ExpansionPanel">
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className="menu--ExpandMoreIcon" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >Articles</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ExpansionPanel className="menu--SubExpansionPanel">
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon className="menu--ExpandMoreIcon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography >Banques</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Link className="menu--sublink" href="/services/banques" onClick={(event) => preventDefault(event, "banques")}>
                                <AccountBalanceIcon color='primary' />
                                <p className='tree-item-link'>
                                    Banques
                                </p>
                            </Link>
                            <Link className="menu--sublink" href="/services/internet-et-mobiles" onClick={(event) => preventDefault(event, "internet-et-mobiles")}>
                                <PhonelinkSetupIcon color='primary' />
                                <p className='tree-item-link'>
                                    Internet & Mobiles
                                </p>
                            </Link>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className="menu--ExpansionPanel">
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon className="menu--ExpandMoreIcon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography >Etat</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Link className="menu--sublink" href="/services/banques" onClick={(event) => preventDefault(event, "banques")}>
                                <AccountBalanceIcon color='primary' />
                                <p className='tree-item-link'>
                                    Banques
                                </p>
                            </Link>
                            <Link className="menu--sublink" href="/services/internet-et-mobiles" onClick={(event) => preventDefault(event, "internet-et-mobiles")}>
                                <PhonelinkSetupIcon color='primary' />
                                <p className='tree-item-link'>
                                    Internet & Mobiles
                                </p>
                            </Link>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className="menu--ExpansionPanel">
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon className="menu--ExpandMoreIcon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography >Other</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Link className="menu--sublink" href="/services/banques" onClick={(event) => preventDefault(event, "banques")}>
                                <AccountBalanceIcon color='primary' />
                                <p className='tree-item-link'>
                                    Banques
                                </p>
                            </Link>
                            <Link className="menu--sublink" href="/services/internet-et-mobiles" onClick={(event) => preventDefault(event, "internet-et-mobiles")}>
                                <PhonelinkSetupIcon color='primary' />
                                <p className='tree-item-link'>
                                    Internet & Mobiles
                                </p>
                            </Link>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <Link className="menu--link" href="#" onClick={preventDefault}>
                Simulation
            </Link>
            <Link className="menu--link" href="#" onClick={preventDefault}>
                Support
            </Link>
        </div>
    );
}

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


// -------------------------- Export --------------------------

export default function FileSystemNavigator() {
    const history = useHistory();
    const dispatch = useDispatch();

// -------------------------- Fonctions Dispatch --------------------------

    const preventDefault = (event, route) => {
        event.preventDefault();
        dispatch({ type: 'CHANGE_PAGE', route, history });
    };

// -------------------------- Return --------------------------

    return (
        <div className="menu--links">

            <Link className="menu--link home" href="/" onClick={(event) => preventDefault(event, "")}>
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

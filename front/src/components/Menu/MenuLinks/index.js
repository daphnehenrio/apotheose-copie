/* eslint-disable consistent-return */
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import slugify from '@sindresorhus/slugify';

// == import Material UI

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Link from '@material-ui/core/Link';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';


import { actionChangePage } from 'src/actions/routes';


import ServicesLinks from './ServiceLink';
import ArticlesPanelMenu from './ArticlesPanel';

// -------------------------- Export --------------------------

export default function FileSystemNavigator() {
  const history = useHistory();
  const dispatch = useDispatch();

  // -------------------------- Fonctions Dispatch --------------------------

  const preventDefault = (event, route) => {
    event.preventDefault();
    dispatch(actionChangePage(route, history));
  };


  // -------------------------- Return --------------------------

  return (
    <div className="menu--links">
      <Link className="menu--link home" href="/" onClick={(event) => preventDefault(event, '/')}>
        Accueil
      </Link>
      <ExpansionPanel className="menu--ExpansionPanel">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className="menu--ExpandMoreIcon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Services</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ServicesLinks />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className="menu--ExpansionPanel">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className="menu--ExpandMoreIcon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Articles</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ArticlesPanelMenu />
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

import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import slugify from '@sindresorhus/slugify';

// == import Material UI


import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import RouterIcon from '@material-ui/icons/Router';
import Link from '@material-ui/core/Link';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SchoolIcon from '@material-ui/icons/School'
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import DescriptionIcon from '@material-ui/icons/Description';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import data from '../data/data-menu'



// -------------------------- Export --------------------------

export default function FileSystemNavigator() {
    const history = useHistory();
    const dispatch = useDispatch();

// -------------------------- Fonctions Dispatch --------------------------

    const preventDefault = (event, route) => {
        event.preventDefault();
        dispatch({ type: 'CHANGE_PAGE', route, history });
    };

// Compnents

    const ServicesLinks = data.map((category) => {
      return (
        <Link key={category.name} className="menu--sublink" href={`services/${slugify(category.name)}`} onClick={(event) => preventDefault(event, `/services/${slugify(category.name)}`)}>

          <Button
            disabled
            endIcon={
              <Icon
                color="primary"
                style={{ fontSize: 30 }}
              >
                {category.icon}
              </Icon>
            }
          />
          <p className='tree-item-link'>
              {category.name}
          </p>
        </Link>
      )
    })

    const ArticlesCategoryLinks = (category, name)  => category.map((sousCat) => {
      return (
        <Link key={sousCat.name} className="menu--sublink" href={`articles/${slugify(name)}/${slugify(sousCat.name)}`} onClick={(event) => preventDefault(event, `/articles/${slugify(name)}/${slugify(sousCat.name)}`)}>


          <p className='tree-item-link'>
              {sousCat.name}
          </p>
        </Link>
      )
    })

    const ArticlesLinks = data.map((category) => {
      if (category.sousCat.length === 0) {
        console.log('accueil')
        return (
          <Link key={category.name} className="menu--sublink" href={`articles/${slugify(category.name)}`} onClick={(event) => preventDefault(event, `/articles/${slugify(category.name)}`)}>

          <Button
            disabled
            endIcon={
              <Icon
                color="primary"
                style={{ fontSize: 30 }}
              >
                {category.icon}
              </Icon>
            }
          />
          <p className='tree-item-link'>
              {category.name}
          </p>
        </Link>
        )
      }
      return (
        <ExpansionPanel className="menu--ExpansionPanel" key={category.name}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className="menu--ExpandMoreIcon" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography >{category.name}</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            {ArticlesCategoryLinks(category.sousCat, category.name)}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    })

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
                {ServicesLinks}
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
                {ArticlesLinks}
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

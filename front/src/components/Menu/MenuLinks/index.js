/* eslint-disable consistent-return */
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import slugify from '@sindresorhus/slugify';

// == import Material UI


import { makeStyles, withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Link from '@material-ui/core/Link';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import DescriptionIcon from '@material-ui/icons/Description';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import { actionChangePage } from '../../../actions/routes';


// -------------------------- Export --------------------------

export default function FileSystemNavigator() {
  const history = useHistory();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.category);

  // -------------------------- Fonctions Dispatch --------------------------

  const preventDefault = (event, route) => {
    event.preventDefault();
    dispatch(actionChangePage(route, history));
  };


  // Compnents

  const ServicesLinks = menu.map((category) => {
    if (menu.length > 0 && category.id < 5) {
      const imageName = `${slugify(category.name)}.png`;
      const image = require(`src/assets/image/menu-category/${imageName}`);

      return (
        <Link key={category.name} className="menu--sublink" href={`services/${slugify(category.name)}`} onClick={(event) => preventDefault(event, `/services/${slugify(category.name)}`)}>

          <p className="tree-item-link">
            <img
              className="icon-menu"
              src={image.default}
              alt={category.name}
            />
            {category.name}
          </p>
        </Link>
      );
    }
  });

  const ArticlesCategoryLinks = (category, name) => category.map((sousCat) => (
    <Link key={sousCat.id} className="menu--sublink" href={`articles/${slugify(name)}/${slugify(sousCat.name)}`} onClick={(event) => preventDefault(event, `/articles/${slugify(name)}/${slugify(sousCat.name)}`)}>


      <p className="tree-item-link">

        {sousCat.name}
      </p>
    </Link>
  ));

  const ArticlesLinks = menu.map((category) => {
    const imageName = `${slugify(category.name)}.png`;
    const image = require(`src/assets/image/menu-category/${imageName}`);

    if (!category.sub_category || category.sub_category?.length === 0) {
      return; /* (
          <Link key={category.name} className="menu--sublink" href={`articles/${slugify(category.name)}`} onClick={(event) => preventDefault(event, `/articles/${slugify(category.name)}`)}>

          <p className='tree-item-link'>
              {category.name}
          </p>
        </Link>
        ) */
    }

    if(category.id > 5 && category.id <10) {



    return (
      <ExpansionPanel className="menu--ExpansionPanel" key={category.name}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className="menu--ExpandMoreIcon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >

          <img
            className="icon-menu"
            src={image.default}
            alt={category.name}
          />
          <Typography>{category.name}</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          {ArticlesCategoryLinks(category.sub_category, category.name)}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
   }
  });

  // -------------------------- Return --------------------------

  return (
    <div className="menu--links">
      <Link className="menu--link home" href="/" onClick={(event) => preventDefault(event, '')}>
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
          {ServicesLinks}
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

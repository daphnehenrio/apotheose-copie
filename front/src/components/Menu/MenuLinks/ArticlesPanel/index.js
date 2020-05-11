/* eslint-disable global-require */
/* eslint-disable consistent-return */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import slugify from '@sindresorhus/slugify';


import Link from '@material-ui/core/Link';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import { actionChangePage } from 'src/actions/routes';

export default function ArticlesPanelMenu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.category);

  // -------------------------- Fonctions Dispatch --------------------------

  const preventDefault = (event, route) => {
    event.preventDefault();
    dispatch(actionChangePage(route, history));
  };

  let counter = 0; // pour limiter le menu

  const ArticlesCategoryLinks = (category, name) => category.map((sousCat) => (
    <Link
      key={sousCat.id}
      className="menu--sublink"
      href={`articles/${slugify(name)}/${slugify(sousCat.name)}`}
      onClick={(event) => preventDefault(event, `/articles/${slugify(name)}/${slugify(sousCat.name)}`)}
    >


      <p className="tree-item-link">

        {sousCat.name}
      </p>
    </Link>
  ));


  const ArticlePanel = menu.map((category) => {
    const imageName = `${slugify(category.name)}.png`;
    const image = require(`src/assets/image/menu-category/${imageName}`);

    if (!category.sub_category || category.sub_category?.length === 0) {
      return;
    }

    if (counter < 5) {
      counter += 1;
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

  return (

    <>

      { menu.length > 0 && ([ArticlePanel]) }

    </>
  );
}

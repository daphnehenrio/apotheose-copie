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
import Switch from '@material-ui/core/Switch';

import { actionChangePage } from 'src/actions/routes';
import { actionGetArticles } from '../../../../actions/articles';

export default function ArticlesPanelMenu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.category);

  const [checked, setChecked] = React.useState(false);

  // -------------------------- Fonctions Dispatch --------------------------

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const preventDefault = (event, sub_category, route) => {
    event.preventDefault();
    dispatch(actionGetArticles(sub_category));
    dispatch(actionChangePage(route, history));
  };

  let counter = 0; // pour limiter le menu

  const ArticlesCategoryLinks = (category, name) => category.map((sousCat) => (
    <Link
      key={sousCat.id}
      className="menu--sublink"
      href={`articles/${slugify(name)}/${slugify(sousCat.name)}`}
      onClick={(event) => preventDefault(event, sousCat.id, `/articles/${slugify(name)}/${slugify(sousCat.name)}`)}
    >


      <p className="tree-item-link">

        {sousCat.name}
      </p>
    </Link>
  ));


  const ArticlePanel = menu.map((category) => {
    const imageName = `${slugify(category.name)}.png`;

    if (!category.sub_category || category.sub_category?.length === 0) {
      return;
    }

    if (!checked ? counter < 5 : true) {
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
              src={`/images/menu-category/${imageName}`}
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

      <div className="tree-item-link toogle-menu" onClick={toggleChecked}>
        <img
          className="icon-menu"
          src={`/images/menu-category/${checked ? 'less' : 'more'}.png`}
          alt={checked ? 'moins' : 'plus'}
        />
        <span className="toogle-menu--more-less">
          Afficher {checked ? 'moins' : 'plus'}
        </span>

      </div>

    </>

  );
}

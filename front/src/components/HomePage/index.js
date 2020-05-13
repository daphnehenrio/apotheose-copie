import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


// == import Material UI

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Import styles
import './styles.scss';
import ArticleDescription from '../Articles/ArticleDescription';
import { actionGetLastArticles } from '../../actions/articles';

// -------------------------- styles composants --------------------------


// -------------------------- Export --------------------------

export default function HomePage() {

  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.articles)
  const AccueilOk = useSelector(state => state.articles.AccueilOk)

  useEffect(() => {
    if (!AccueilOk) {
      dispatch(actionGetLastArticles());
    }
  }, [!AccueilOk]);

// -------------------------- Return --------------------------

  return (
    <div className="home-page--container">
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
        spacing={5}
        
      >

        <Grid item>
          <h2 className="page-title">ACCUEIL</h2>
        </Grid>
        <Grid item>
          <div className="page-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </div>
        </Grid>
        <Grid
          item
          container
          spacing={3}
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={3}
          className = 'container-main-home'
        >
          <h3 className="page-content-title">Derniers articles</h3>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
            wrap="wrap"
          >

            {
              articles.length > 0
              ? ( articles.map((article) => <ArticleDescription key={article.title} article={article} />))
              : "Il n'y a pas encore d'articles disponnible"
            }

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

import React from 'react';

// == import Material UI

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
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

// == import oomponents
import ArticleDescription from './ArticleDescription';
import { useSelector } from 'react-redux';

// -------------------------- styles composants --------------------------




// -------------------------- Export --------------------------

export default function Articles(titles) {
  console.log(titles)
  const articles = useSelector(state => state.articles.articles)

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
          <h2 className='page-title'>{titles.category}</h2>
        </Grid>

        <Grid
          item
          container
          spacing={3}
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={3}
        >
          <h3 className='title-category'>
            {titles.sub_category}
          </h3>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
            wrap
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
};


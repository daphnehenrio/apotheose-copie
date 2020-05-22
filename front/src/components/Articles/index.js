import React from 'react';

// == import Material UI
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// Import styles
import './styles.scss';

// == import oomponents
import ArticleDescription from './ArticleDescription';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

// -------------------------- Export --------------------------

export default function Articles(titles) {
  const articles = useSelector(state => state.articles.articles);
  const loading = useSelector((state) => state.document.loading);
  const classes = useStyles();

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
            { !loading && (
              articles.length > 0
              ? ( articles.map((article) => <ArticleDescription key={article.title} article={article} />))
              : "Il n'y a pas encore d'articles disponnible"
            )}

          </Grid>
        </Grid>
      </Grid>
      <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
    </div>
  );
};


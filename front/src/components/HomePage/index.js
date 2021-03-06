import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';



// == import Material UI

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Import styles
import './styles.scss';
import ArticleDescription from '../Articles/ArticleDescription';
import { actionGetLastArticles } from '../../actions/articles';


// == Import actions
import { actionChangePage } from 'src/actions/routes';


// -------------------------- styles composants --------------------------

const StyledButton = withStyles({
  root: {
    position: 'relative',
    bottom: '0',
    right: '-0.4rem',
    float: 'right',
    color: 'white',
    border: '2px solid white',
    // backgroundColor: 'white',
    transition: 'all 0.4s',
    '&:hover': {
      backgroundColor: '#E04644',
      color: 'white',
      border: '2px solid #E04644',
      transform: 'scale(1.1)',
      backgroundPosition: '-60px',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    }

  },
})(Button);


// -------------------------- Export --------------------------

export default function HomePage() {

  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.articles);
  const AccueilOk = useSelector(state => state.articles.AccueilOk);
  const history = useHistory();


  useEffect(() => {
    if (!AccueilOk) {
      dispatch(actionGetLastArticles());
    }
  }, [!AccueilOk]);

  const preventDefault = (event, route) => {
    event.preventDefault();
    dispatch(actionChangePage(route, history));
  };

  // -------------------------- Return --------------------------

  return (

    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      className="home-page--container"
    >
      <Grid item xs={12} className="page-description-container">
        <div className="page-description">
          {/*<img src='/images/homepage/dossiers.jpg' className='curve' />*/}
          <p>
            <strong>Administration</strong>. Si rien qu'à la vue de ce mot vous vous sentez perdu ou désemparé, sachez qu'<strong>
              Aldahe </strong> est là pour vous aider à vous y retrouver. <em>Gérez</em> vos documents, <em>organisez-vous</em> grâce à des checklists gérées

              automatiquement par nos soins, garder à porter de mains toutes les informations que <em>vous</em> jugez importantes,

               bref simplifiez-vous la vie.
            </p>
        </div>
        <StyledButton variant="outlined" onClick={(event) => preventDefault(event, '/infos')}>
          EN SAVOIR PLUS
            </StyledButton>

      </Grid>
      <h3 className="page-content-title">Derniers articles</h3>

      <Grid container spacing={5} justify='center' item xs={12}>
          {
        articles.length > 0
          ? (articles.map((article) => <Grid key={article.id} item sm={8} lg={4} md={6}> <ArticleDescription key={article.title} article={article} /> </Grid>))
          : "Il n'y a pas encore d'articles disponibles"
      }
      </Grid>


    </Grid>

  );
}

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


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

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// == Import actions
import { actionChangePage } from 'src/actions/routes';


// -------------------------- styles composants --------------------------

const StyledButton = withStyles({
  root: {
    position: 'relative',
    bottom: '2rem',
    float: 'right',
    color: 'coral',
    border: '2px solid coral',
    backgroundColor: 'white',
    transition: 'all 0.4s',
    '&:hover': {
      backgroundColor: 'coral',
      color: 'white',
      border: '2px solid coral',
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
    <div className="home-page--container">

          <div className="page-description-container">
            <div className="page-description">
              <img src='/images/homepage/dossiers.jpg' className='curve' />
              <p>
                <strong>Administration</strong>. Si rien qu'à la vue de ce mot vous vous sentez perdu où désemparé, sachez qu'<strong>
                  Aldahe </strong> est là pour vous aider à vous y retrouver. <em>Gérez</em> vos documents, <em>organisez-vous</em> grâce à des checklists gérées
              automatiquement par nos soins, garder à porter de mains toutes les informations que <em>VOUS</em> jugez importantes,
               bref simplifiez-vous la vie.
            </p>
            </div>
            <StyledButton  variant="outlined" onClick={(event) => preventDefault(event, '/infos')}>
              EN SAVOIR PLUS
            </StyledButton>
          </div>

          <h3 className="page-content-title">Derniers articles</h3>

      <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            removeArrowOnDeviceType={["mobile", "tablet"]}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
              },
              mobile: {
                breakpoint: {
                  max: 750,
                  min: 0
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 750
                },
                items: 2,
              }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {
              articles.length > 0
                ? (articles.map((article) => <ArticleDescription key={article.title} article={article} />))
                : "Il n'y a pas encore d'articles disponnible"
            }
          </Carousel>

    </div>
  );
}

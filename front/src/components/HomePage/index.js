import React from 'react';

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

// -------------------------- styles composants --------------------------


// -------------------------- Export --------------------------

export default function HomePage() {
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
            <Grid item xs={10} md={3} sm={5}>
              <Card className="root-card">
                <CardActionArea>
                  <CardMedia
                    className="card-media"
                    image="https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Titre
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <div className="card-label">
                    Service
                  </div>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={10} md={3} sm={5}>
              <Card className="root-card">
                <CardActionArea>
                  <CardMedia
                    className="card-media"
                    image="https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Titre
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <div className="card-label">
                    Service
                  </div>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={10} md={3} sm={5}>
              <Card className="root-card">
                <CardActionArea>
                  <CardMedia
                    className="card-media"
                    image="https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Titre
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <div className="card-label">
                    Service
                  </div>
                </CardActions>
              </Card>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

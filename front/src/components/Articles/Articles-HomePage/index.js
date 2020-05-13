import React from 'react';
import { useSelector } from 'react-redux';

// == import Material UI
import Grid from '@material-ui/core/Grid';


// Import styles
import './styles.scss';


// -------------------------- Export --------------------------

export default function Articles_HomePage() {

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
                    <h2 className='page-title'>Articles</h2>
                </Grid>
                <Grid item>
                    <div className='page-description'>
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
                    <h3 className='title-category'>
                        Caf
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
                        ? ( articles.map((article) => <Article article={article} />))
                        : "Il n'y a pas encore d'articles disponnible"
                      }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};


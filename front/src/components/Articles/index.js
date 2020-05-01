// == Import npm
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// == import Material UI


// Import styles
import './styles.scss';
import Articles_HomePage from './Articles-HomePage';

// -------------------------- styles composants --------------------------




// -------------------------- Export --------------------------

export default function ArticlesHomePage() {

// -------------------------- Return --------------------------

    return (

          <Switch>
            <Route exact path="/articles/services-public/caf">
              <div>
                <Articles_HomePage/>
              </div>
            </Route>
            <Route exact path="/articles/accueil">
              <div>
                <Articles_HomePage/>
              </div>
            </Route>
          </Switch>
    );
};


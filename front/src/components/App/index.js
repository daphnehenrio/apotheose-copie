/* eslint-disable camelcase */
// == Import npm
import React, { useEffect, useLayoutEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import slugify from '@sindresorhus/slugify';

// == import Material UI

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

// == Import styles
import './styles.scss';
import './responsive.scss';

// == import composants local
import AppBar from 'src/components/AppBar';
import Menu from 'src/components/Menu';
import Footer from 'src/components/Footer';
import HomePage from 'src/components/HomePage';
import Signup from 'src/components/Signup';
import DashBoard from 'src/components/DashBoard';
import Profil from 'src/components/Profil';
import Documents from 'src/components/Documents';
import TargetedDocuments from 'src/components/Documents/TargetedDocuments';
import About from 'src/components/About';

// == import action
import { actionSetConnected } from 'src/actions/user_profil';
import { actionGetMenu } from '../../actions/menu';
import Services from '../Services';
import Articles from '../Articles';
import Page404 from '../ErrorPages/404';
import Page403 from '../ErrorPages/403';
import { actionGetAllArticles } from '../../actions/articles';
import Article from '../Articles/Article';


// -------------------------- styles composants --------------------------

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));




// -------------------------- Export --------------------------

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { category, menuOK } = useSelector((state) => state.menu);
  const { allTitles, allTitleOk, articles } = useSelector((state) => state.articles);
  const { openDrawer } = useSelector((state) => state.toggle);
  const { connected } = useSelector((state) => state.user_profil);
  const userSession = JSON.parse(window.sessionStorage.getItem('user'));
  console.log(allTitles)

  useEffect(() => {
    if (!menuOK) {
      dispatch(actionGetMenu());
    }
    if (!allTitleOk) {
      dispatch(actionGetAllArticles());
    }
  }, [!menuOK, !allTitleOk]);

  // -------------------------- Return --------------------------

  return (
    <div className="app">
      <AppBar />
      <Menu />
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: openDrawer,
        })}
      >
        <Switch>
          <Route exact path="/">
            <div>
              <HomePage />
            </div>
          </Route>
          <Route exact path='/infos'>
            <div>
              <About/>
            </div>
          </Route>
          {
            category.length > 0 && (
              <Route exact path="/services/tous-les-services">
                <div>
                  <Services category="Tous les services" />
                </div>
              </Route>
            )
          }

          {
            category.length > 0 && (

              category.map((cat) => {
                // console.log(`/services/${slugify(cat.name)}`);

                return (
                  <Route key={cat.name} exact path={`/services/${slugify(cat.name)}`}>
                    <div>
                      <Services category={cat.name} />
                    </div>
                  </Route>
                );
              })
            )
          }

          {
            category.length > 0 && (

              category.map((cat) => {
                return ( cat.sub_category.map((sub_cat) => {

                  // console.log(`/articles/${slugify(cat.name)}/${slugify(sub_cat.name)}`);

                  return (
                    <Route key={sub_cat.name} exact path={`/articles/${slugify(cat.name)}/${slugify(sub_cat.name)}`}>
                      <div>
                        <Articles category={cat.name} sub_category={sub_cat.name} />
                      </div>
                    </Route>

                  );
                })
                )
              })
            )
          }

          {
            allTitles.length > 0 && (

              allTitles.map((title) => {
                // console.log(`/services/${slugify(cat.name)}`);

                return (
                  <Route key={title} exact path={`/article/${slugify(title)}`}>
                    <Article article={articles[0]}/>
                  </Route>
                );
              })
            )
          }

          <Route exact path="/articles/search-result">
            <Articles article={articles}/>
          </Route>


          <Route exact path="/inscription">
            <div>
              <Signup />
            </div>
          </Route>
          <Route
            path="/mon-espace-personnel"
            exact
            render={() => {
              if (!userSession || !userSession.token) {
                return <Redirect to="/403" />;
              }
              return (
                <div>
                  <DashBoard />
                </div>
              );
            }}
          />
          <Route
            path="/profil"
            exact
            render={() => {
              if (!userSession || !userSession.token) {
                return <Redirect to="/403" />;
              }
              return (
                <div>
                  <Profil />
                </div>
              );
            }}
          />
          <Route
            path="/mes-documents"
            exact
            render={() => {
              if (!userSession || !userSession.token) {
                return <Redirect to="/403" />;
              }
              return (
                <div>
                  <Documents />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/mes-documents/documents"
            render={() => {
              if (!userSession || !userSession.token) {
                return <Redirect to="/403" />;
              }
              return (
                <div>
                  <TargetedDocuments />
                </div>
              );
            }}
          />
          <Route exact path="/403">
            <Page403 />
          </Route>
          <Route>
            <Page404 />
          </Route>

        </Switch>
        <Footer />
      </div>
    </div>
  );
};

// == Export
export default App;

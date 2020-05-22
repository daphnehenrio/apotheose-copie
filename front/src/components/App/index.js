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
import TargetedDocuments from 'src/components/Documents/TargetedDocuments';
import About from 'src/components/About';
import DocumentsCategory from 'src/components/Documents/DocumentsCategory'
import DocumentsSubCategory from 'src/components/Documents/DocumentsSubCategory'

// == import action
import { actionGetMenu } from '../../actions/menu';
import Services from '../Services';
import Articles from '../Articles';
import Page404 from '../ErrorPages/404';
import Page403 from '../ErrorPages/403';
import { actionGetAllArticles } from '../../actions/articles';
import Article from '../Articles/Article';
import AcceptTerms from '../AcceptTerms';



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
/**
 *  Returns AppBar , Menu, all routes
 */
const App = () => {
  // == styles
  const classes = useStyles();

  // == hook
  const dispatch = useDispatch();

  // == selector reducers
  const { category, menuOK } = useSelector((state) => state.menu);
  const { allTitles, allTitleOk, articles } = useSelector((state) => state.articles);
  const { openDrawer } = useSelector((state) => state.toggle);
  const categoriesFolder = useSelector((state) => state.document.category)

  // == session storage
  const userSession = JSON.parse(window.sessionStorage.getItem('user'));

  // == use effect
  useEffect( () => {

    if (!menuOK) {
      dispatch(actionGetMenu());
    }

    if (!allTitleOk) {
      dispatch(actionGetAllArticles());

    }
  }, [!allTitleOk]);

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

          <Route exact path="/accept-terms">
            <div>
              <AcceptTerms />
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
                  <DocumentsCategory />
                </div>
              );
            }}
          />
          <Route
            path="/mes-documents/documents"
            exact
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

          {
            categoriesFolder.length > 0 && (
              categoriesFolder.map((cat) => {
                return (
                  <Route key={cat.name} exact path={`/mes-documents/${slugify(cat.name)}`}>
                    <div>
                      <DocumentsSubCategory category={cat.name} />
                    </div>
                  </Route>
                );
              })
            )
          }

          {
            categoriesFolder.length > 0 && (
              categoriesFolder.map((cat) => {
                return ( cat.sub_category.map((sub_cat) => {
                  return (
                    <Route key={sub_cat.name} exact path={`/mes-documents/${slugify(cat.name)}/${slugify(sub_cat.name)}`}>
                      <div>
                        <TargetedDocuments category={cat.name} sub={sub_cat.name}  />
                      </div>
                    </Route>
                  );
                })
                )
              })
            )
          }
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

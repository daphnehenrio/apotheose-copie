// == Import npm
import React, { useEffect, useLayoutEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// == import Material UI

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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

// == import action
import { actionGetMenu } from '../../actions/menu';
import { actionCheckSession } from '../../actions/user';


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
  const { openDrawer } = useSelector((state) => state.toggle);
  const { connected } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  let classesContent = "menu--content";
  classesContent += openDrawer ? ' contentShift' : '';

     /*useLayoutEffect(() => {
      (function checkSession() {
        dispatch(actionCheckSession());
      })();
     })*/


    useEffect(() => {

      (function getMenu() {
        dispatch(actionGetMenu());
      })();
    }, []);

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
                <HomePage/>
              </div>
            </Route>
            <Route exact path="/inscription">
              <div>
                <Signup />
              </div>
            </Route>
            <Route exact path="/mon-espace-personnel"
              render={() => {
                if (!connected) {
                  return <Redirect to="/" />;
                }
                return (
                  <div>
                    <DashBoard/>
                  </div>
                );
              }}
            >
            </Route>
            <Route
              exact
              path="/profil"
              render={() => {
                if (!connected) {
                  return <Redirect to="/" />;
                }
                return (
                  <div>
                    <Profil/>
                  </div>
                );
              }}
            >

            </Route>
          </Switch>
          <Footer />
        </div>
    </div>
  );
};

// == Export
export default App;

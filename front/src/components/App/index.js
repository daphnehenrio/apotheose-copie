// == Import npm
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// == Import styles
import './styles.css';

// == Import components
import AppBar from 'src/components/AppBar';
import Menu from 'src/components/Menu';
import Footer from 'src/components/Footer';
import HomePage from 'src/components/HomePage';
import Signup from 'src/components/Signup';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
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

// == Composant
const App = () => {
  const classes = useStyles();
  const openDrawer = useSelector((state) => state.openDrawer);

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
          </Switch>
          <Footer />
        </div>
    </div>
  );
};

// == Export
export default App;

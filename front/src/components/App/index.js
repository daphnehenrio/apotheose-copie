// == Import npm
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// == Import styles
import './styles.css';

// == Import components
import AppBar from 'src/components/AppBar';
import Menu from 'src/components/Menu';


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
    flexGrow: 1,
    padding: theme.spacing(3),
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
      <AppBar/>
      <Menu/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openDrawer,
        })}
      >
        <div className={classes.drawerHeader} />
        <p>Ceci est un test</p>
      </main>
    </div>
  );
};

// == Export
export default App;

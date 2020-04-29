import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == import Material UI

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


// == import components
import MenuLinks from 'src/components/Menu/MenuLinks';

// == import actions local

import { actionSetDrawer } from '../../actions/toggle';

// -------------------------- styles composants --------------------------

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#001B2E',

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#001B2E',
    borderRight:'none',
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

const MenuTitle = withStyles({
    root: {
      marginRight:'2rem',
      color: 'white',
    },
  })(Typography);


// -------------------------- Export --------------------------

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const openDrawer = useSelector((state) => state.toggle.openDrawer);

// -------------------------- Fonctions State & Dispatch --------------------------

  const handleDrawer= () => {
    dispatch(actionSetDrawer());
  };

// -------------------------- Return --------------------------

  return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <MenuTitle variant="h6" noWrap>
            Menu
          </MenuTitle>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{color:'white'}}/> : <ChevronRightIcon style={{color:'white'}}/>}
          </IconButton>
        </div>
       {/* Drawer body content */}
       <MenuLinks/>
      </Drawer>
  );
}

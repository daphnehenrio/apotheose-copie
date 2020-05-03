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

// == import styles
import './styles.scss';


// -------------------------- Export --------------------------

export default function PersistentDrawerLeft() {
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
      className="menu--drawer"
      variant="persistent"
      anchor="left"
      open={openDrawer}
      classes={{
        paper: "menu--drawer-paper",
      }}
    >
      <div className="menu--drawer-header">
        <Typography className="menu--title" variant="h6" noWrap>
          Menu
        </Typography>
        <IconButton onClick={handleDrawer}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon style={{color:'white'}}/> : <ChevronRightIcon style={{color:'white'}}/>}
        </IconButton>
      </div>
      {/* Drawer body content */}
      <MenuLinks/>
    </Drawer>
  );
}

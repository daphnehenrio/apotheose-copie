import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == import Material UI

import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderIcon from '@material-ui/icons/Folder';
import CreateIcon from '@material-ui/icons/Create';
import Badge from '@material-ui/core/Badge';
import Link from '@material-ui/core/Link';



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

  const handleDrawer = () => {
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
        paper: 'menu--drawer-paper',
      }}
    >
      <div className="menu--drawer-header">
        <div className='responsive-group-btn-icon'>

          <Link onClick={(event) => preventDefault(event, '/mes-documents')}>
            <IconButton aria-label="documents">
              <FolderIcon />
            </IconButton>
          </Link>
          <IconButton aria-label="dashboard">
            <Link onClick={(event) => preventDefault(event, '/mon-espace-personnel')}>
              <Badge badgeContent={4} color="secondary">
                <DashboardIcon />
              </Badge>
            </Link>
          </IconButton>
        </div>
        <Typography className="menu--title" variant="h6" noWrap>
          Menu
        </Typography>
        <IconButton onClick={handleDrawer}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: 'white' }} /> : <ChevronRightIcon style={{ color: 'white' }} />}
        </IconButton>
      </div>
      {/* Drawer body content */}
      <MenuLinks />
    </Drawer>
  );
}

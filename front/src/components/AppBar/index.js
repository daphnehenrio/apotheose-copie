import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// == import Material UI

import clsx from 'clsx';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Link from '@material-ui/core/Link';

// == import for connected user
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderIcon from '@material-ui/icons/Folder';
import CreateIcon from '@material-ui/icons/Create';
import Badge from '@material-ui/core/Badge';

// == import composants local
import Login from 'src/components/Login';

// == import actions local
import { actionSetLoginForm, actionSetDrawer } from '../../actions/toggle';
import { actionLogout } from '../../actions/user';
import { actionChangePage } from '../../actions/routes';

// == import style
import './styles.scss';

// -------------------------- styles composants --------------------------


const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiAppBar-colorPrimary': {
      backgroundColor: '#0f4c81',
    },
    /*  '.MuiToolbar-root': {
           minWidth: '870px',
         } */

  },
})(() => null);

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
    backgroundColor: '#001B2E',
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
  title: {
    flexGrow: 1,
    letterSpacing: '0.1rem',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


// -------------------------- Export --------------------------

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // Get the state of the drawer to check if it's open or close (true or false)
  const { openDrawer } = useSelector((state) => state.toggle);
  const { connected } = useSelector((state) => state.user);


  // -------------------------- Fonctions Dispatch --------------------------

  const handleDrawer = () => {
    dispatch(actionSetDrawer());
  };

  const handleLogin = () => {
    connected
      ? dispatch(actionLogout(history))
      : dispatch(actionSetLoginForm());
  };

  const preventDefault = (event, route) => {
    event.preventDefault();
    dispatch(actionChangePage(route, history));
  };


  const ProfilIcon = () => (
    <>
      <Tooltip title="Bloc note" arrow>
        <IconButton aria-label="note">
          <CreateIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Mes documents" arrow>
        <IconButton aria-label="documents">
          <FolderIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Mon espace" arrow>
        <IconButton aria-label="dashboard">
          <Link onClick={(event) => preventDefault(event, '/mon-espace-personnel')}>
            <Badge badgeContent={4} color="secondary">
              <DashboardIcon />
            </Badge>
          </Link>
        </IconButton>
      </Tooltip>
      <IconButton aria-label="avatar">
        <Link onClick={(event) => preventDefault(event, '/profil')}>
          <Avatar>H</Avatar>
        </Link>
      </IconButton>
    </>
  );
  // -------------------------- Return --------------------------

  return (
    <div className={classes.root}>
      <CssBaseline />
      <GlobalCss />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, openDrawer && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            ALDAHE
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Rechercher..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {connected ? <ProfilIcon /> : '' }
          <Button
            className="styled button"
            variant="contained"
            onClick={handleLogin}
          >
            {connected ? 'Déconnexion' : 'Connexion'}
          </Button>
        </Toolbar>
      </AppBar>
      <Login />
    </div>
  );
}

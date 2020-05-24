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
import Collapse from '@material-ui/core/Collapse';
import { Alert, AlertTitle } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

// == import for connected user
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderIcon from '@material-ui/icons/Folder';
import CreateIcon from '@material-ui/icons/Create';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// == import composants local
import Login from 'src/components/Login';
import ForgotPassword from '../ForgetPassword';

// == import actions local
import { actionSetLoginForm, actionSetDrawer } from 'src/actions/toggle';
import { actionLogout } from 'src/actions/login';
import { actionChangePage } from 'src/actions/routes';
import { actionSetConnected } from 'src/actions/user_profil';

import { actionLoading } from 'src/actions/document'
import { actionGetFolder } from 'src/actions/document';
import { actionGetNote } from 'src/actions/user_note';
import { actionGetMemo } from 'src/actions/user_memo';

// == import style
import './styles.scss';
import { actionGetSearchArticles } from '../../actions/articles';

// -------------------------- styles composants --------------------------


const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiAppBar-colorPrimary': {
      backgroundColor: '#3a5892',
    },
  },
})(() => null);

const StyledLink = withStyles({
  root: {
    color: 'white',
    '&:hover': {
      textDecoration: 'none',
    }
  },
})(Link);

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
  title: {
    flexGrow: 1,
    letterSpacing: '0.1rem',
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
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
  const { connected } = useSelector((state) => state.user_profil);
  const userSession = JSON.parse(window.sessionStorage.getItem("user"));

  if (userSession && userSession.token && userSession.login && userSession.user_id && !connected) {
    dispatch(actionSetConnected())
  }

  // -------------------------- Fonctions Dispatch --------------------------

  const handleDrawer = () => {
    dispatch(actionSetDrawer());
  };

  const submitSearch = (value) => {
    dispatch(actionGetSearchArticles(value))
    dispatch(actionChangePage('/articles/search-result', history))
  }

  const handleLogin = () => {
    connected
      ? dispatch(actionLogout(history))
      : dispatch(actionSetLoginForm());
  };

  const preventDefault = (event, route) => {
    event.preventDefault();
    dispatch(actionChangePage(route, history));
  };

  const getFolder = (event, route) => {
    event.preventDefault();
    dispatch(actionLoading(true));
    dispatch(actionGetFolder())
    dispatch(actionChangePage(route, history));
  };

  const getDashboard = (event, route) => {
    event.preventDefault();
    dispatch(actionGetMemo())
    dispatch(actionGetNote())
    dispatch({
      type: 'GET_ARTICLE_USER_FAVORITE'
    })
    dispatch(actionChangePage(route, history));
  };

  const [open, setOpen] = React.useState(true);


  const ProfilIcon = () => (
    <>
      <div className='group-btn-icon'>
        <Tooltip title="Mes documents" arrow>
          <Link onClick={(event) => getFolder(event, '/mes-documents')}>
            <IconButton aria-label="documents">
              <FolderIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Mon espace" arrow>
          <IconButton aria-label="dashboard">
            <Link onClick={(event) => getDashboard(event, '/mon-espace-personnel')}>
              <Badge badgeContent={4} color="secondary">
                <DashboardIcon />
              </Badge>
            </Link>
          </IconButton>
        </Tooltip>
      </div>
      <IconButton aria-label="avatar">
        <StyledLink onClick={(event) => preventDefault(event, '/profil')}>
          <Avatar>{userSession.login.substring(0, 1).toUpperCase()}</Avatar>
        </StyledLink>
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
            <StyledLink href='#' onClick={(event) => preventDefault(event, '/')}>
              ALDAHE
            </StyledLink>
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
              onKeyDown={(event) => {
                if (event.keyCode == 13) {
                  submitSearch(event.target.value)
                }
              }}
            />
          </div>
          {connected ? <ProfilIcon /> : ''}
          <div className='log-btn'>
            <Button
              className="styled button"
              variant="contained"
              onClick={handleLogin}
            >
              {connected ? 'Déconnexion' : 'Connexion'}
            </Button>
          </div>
          <div className='responsive-log-btn'>
            <IconButton aria-label="disconnect">
              <ExitToAppIcon />
            </IconButton>
          </div>
        </Toolbar>
        <Collapse in={open} className="disclamer">
          <Alert severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
            Le site est actuellement <strong>en cours de développement</strong> et ne dispose pas encore de toutes les protection requise à la sécuritées des données — <strong>Nous vous déconseillons fortement d'inscrire des données sensibles pour une question de sécuritée</strong>
          </Alert>
        </Collapse>
      </AppBar>

      <Login />
    </div>
  );
}

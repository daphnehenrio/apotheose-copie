import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

// == import Material UI

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/core/Link';
import { Alert, AlertTitle } from '@material-ui/lab';

// == import actions local

import {
  actionLogin,
  actionSetLogin,
  actionSetPassword,
} from '../../actions/user';

import {
  actionSetLoginForm,
} from '../../actions/toggle';


// == import style
import './styles.scss';


// -------------------------- Export --------------------------

export default function Login() {
  const dispatch = useDispatch();
  const openLoginForm = useSelector((state) => state.toggle.openLoginForm);
  const { user, messageWrongLogin } = useSelector((state) => state.user);

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const history = useHistory();

  // -------------------------- Fonctions State & Dispatch --------------------------

  const handleLogin = () => {
    dispatch(actionLogin(history));
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    dispatch(actionSetLoginForm());
  };

  // -------------------------- Return --------------------------

  return (

    <Dialog className="login-dialog" open={openLoginForm} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Connexion</DialogTitle>
      <DialogContent>
        <form className="form-group" noValidate autoComplete="off" onSubmit={handleLogin}>
          <TextField
            id="outlined-basic"
            label="Nom d'utilisateur"
            variant="outlined"
            error={!user.login && typeof messageWrongLogin === 'string'}
            fullWidth
            autoFocus
            onChange={(evt) => {
              dispatch(actionSetLogin(evt.target.value));
            }}
          />

          <TextField
            variant="outlined"
            id="outlined-adornment-password"
            label="Mot de passe"
            error={!user.password && typeof messageWrongLogin === 'string'}
            fullWidth
            type={values.showPassword ? 'text' : 'password'}
            onChange={(evt) => {
              dispatch(actionSetPassword(evt.target.value));
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {
            typeof messageWrongLogin === 'string'
              ? (
                <Alert severity="error">
                  <AlertTitle>Erreur</AlertTitle>
                  {messageWrongLogin}
                </Alert>
              )
              : ''
          }

        </form>
        <Link className="login-dialog--link" href="/inscription">
          Créer un compte
        </Link>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Annuler
        </Button>
        <Button className="login-dialog--button" onClick={handleLogin} variant="contained">
          Valider
        </Button>
      </DialogActions>
    </Dialog>

  );
}

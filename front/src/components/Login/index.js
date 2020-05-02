import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

// == import actions local

import {
    actionLogin,
    actionSetUsername,
    actionSetPassword,
} from '../../actions/user'

import {
    actionSetLoginForm,
} from '../../actions/toggle'


// == import style
import './styles.scss';



// -------------------------- Export --------------------------

export default function Login() {
    const dispatch = useDispatch();
    const openLoginForm = useSelector((state) => state.toggle.openLoginForm);
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    // -------------------------- Fonctions State & Dispatch --------------------------

    const handleLogin = () => {
        dispatch(actionSetLoginForm());
        dispatch(actionLogin());
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    // -------------------------- Return --------------------------

    return (

      <Dialog className="login-dialog" open={openLoginForm} onClose={handleLogin} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Connexion</DialogTitle>
          <DialogContent>
            <form className="form-group" noValidate autoComplete="off">
              <TextField
                  id="outlined-basic"
                  label="Nom d'utilisateur"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  onChange={(evt) => { dispatch(actionSetUsername(evt.target.value)) }}
              />

              <TextField
                variant="outlined"
                id="outlined-adornment-password"
                label="Mot de passe"
                fullWidth
                type={values.showPassword ? 'text' : 'password'}
                onChange={(evt) => { dispatch(actionSetPassword(evt.target.value)) }}
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
                  )
                }}
              />

            </form>
            <Link className="login-dialog--link" href="/inscription">
              Créer un compte
            </Link>
          </DialogContent>
          <DialogActions>
            <Button className="login-dialog--button" onClick={handleLogin} variant="contained">
              Valider
            </Button>
          </DialogActions>
      </Dialog>

    );

};


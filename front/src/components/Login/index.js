import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';

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
} from '../../actions/login';

import {
  actionSetLoginForm,
  actionSetForgetPassword,
} from '../../actions/toggle';

// == import style
import './styles.scss';
import { actionChangePage } from '../../actions/routes';


// -------------------------- Export --------------------------

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const { openLoginForm } = useSelector((state) => state.toggle);
  const { messageWrongLogin } = useSelector((state) => state.login);

  const [values, setValues] = React.useState({
    showPassword: false,
  });


  // -------------------------- Fonctions State & Dispatch --------------------------

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    dispatch(actionSetLoginForm());
  };

  const onSubmit = (data) => {
    dispatch(actionLogin(data, history));
  };

  // -------------------------- Return --------------------------

  return (

    <Dialog className="login-dialog" open={openLoginForm} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Connexion</DialogTitle>
      <form className="form-group" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

        <DialogContent>
          <TextField
            id="outlined-adornment-login"
            label="Nom d'utilisateur"
            name="login"
            variant="outlined"
            inputRef={register({ required: true, maxLength: 76 })}
            error={errors.login || (typeof messageWrongLogin === 'string' && (messageWrongLogin.search('login') > 0))}
            helperText={(errors.login && errors.login.type === 'required') && 'Ce champs est obligatoire' || (errors.login && errors.login.type === 'maxLength') && ('maximum 76 caractères')}
            fullWidth
            autoFocus
          />

          <TextField
            variant="outlined"
            id="outlined-adornment-password"
            label="Mot de passe"
            name="password"
            inputRef={register({ required: true, maxLength: 76 })}
            error={errors.password || typeof messageWrongLogin === 'string'}
            helperText={(errors.password && errors.password.type === 'required') && 'Ce champs est obligatoire' || (errors.password && errors.password.type === 'maxLength') && ('maximum 76 caractères')}
            fullWidth
            type={values.showPassword ? 'text' : 'password'}
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

        <div className="login-dialog--div-link">
          <Link
            className="login-dialog--link"
            onClick={() => {
              dispatch(actionChangePage('/inscription', history))
              dispatch(actionSetLoginForm())
            }}>
            Créer un compte
          </Link>

          <Link
            className="login-dialog--link"
            onClick={() => {
              dispatch(actionSetLoginForm())
              dispatch(actionSetForgetPassword())
            }}>
            Mot de passe oublié
          </Link>
        </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Annuler
          </Button>
          <Button type="submit" className="MuiButtonBase-root MuiButton-root MuiButton-contained login-dialog--button" variant="contained">
            Valider
          </Button>
        </DialogActions>
      </form>
    </Dialog>


  );
}

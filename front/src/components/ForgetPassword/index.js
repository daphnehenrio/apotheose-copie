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
  const { mail } = useSelector((state)=>state.forget_password);


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
      <DialogTitle id="form-dialog-title">Valider</DialogTitle>
      <form className="form-group" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

        <DialogContent>
          <TextField
            id="outlined-adornment-login"
            label="Veuillez saisir votre adresse mail"
            name="login"
            variant="outlined"
            inputRef={register({ required: true, maxLength: 76 })}
            value={mail}         
            fullWidth
            autoFocus
          />          

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

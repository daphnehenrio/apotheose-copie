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
// == import actions local

import {
  actionSetForgetPassword,
} from '../../actions/toggle';


// == import style
import './styles.scss';
import { actionChangePage } from '../../actions/routes';
import { actionSendMailForgetPassword } from '../../actions/forget_password';


// -------------------------- Export --------------------------

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const { mail } = useSelector((state) => state.forget_password);
  const { openForgetPassword } = useSelector((state) => state.toggle)


  // -------------------------- Fonctions State & Dispatch --------------------------

  const handleClose = () => {
    dispatch(actionSetForgetPassword());
  };

  const onSubmit = (data) => {
    dispatch(actionSetForgetPassword(data, history));
    dispatch(actionSendMailForgetPassword(data));
  };

  // -------------------------- Return --------------------------

  return (

    <Dialog className="forgot-password--dialog" open={openForgetPassword} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Valider</DialogTitle>
      <form className="form-group" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

        <DialogContent>
          <TextField
            id="outlined-adornment-forgot-password-"
            label="Veuillez saisir votre adresse mail"
            name="email"
            variant="outlined"
            inputRef={register({ required: true, maxLength: 76 })}
            fullWidth
            autoFocus
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Annuler
          </Button>
          <Button type="submit" className="MuiButtonBase-root MuiButton-root MuiButton-contained forgot-password--dialog--button" variant="contained">
            Valider
          </Button>
        </DialogActions>
      </form>
    </Dialog>

  );
}

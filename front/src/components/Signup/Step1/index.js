import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Inport Material UI
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormLabel from '@material-ui/core/FormLabel';
import { Alert, AlertTitle } from '@material-ui/lab';

// == import actions local
import {
  actionSetLastName,
  actionSetFirstName,
  actionSetLogin,
  actionSetPassword,
  actionSetConfirmPasswordValue,
  actionSetConfirmPassword,
  actionSetEmail,
} from '../../../actions/user';


// -------------------------- Export --------------------------

export default function Step1() {
  const dispatch = useDispatch();
  const {
    user, missingField, isPasswordCorrect, passwordStrength, emailExists,
  } = useSelector((state) => state.user);
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

  const checkPasswordsInputs = () => {
    if (user.confirmPassword) {
      if (user.password === user.confirmPassword) {
        return true;
      }
    }
    else {
      return false;
    }
  };

  // -------------------------- Return --------------------------

  return (
    <form className="form-group" noValidate autoComplete="off">
      <FormLabel component="legend" className="form-group--label">Nom et Prénom</FormLabel>
      <div className="group-input">
        <TextField
          id="last_name"
          required
          label="Nom"
          value={user.lastName}
          variant="outlined"
          error={!user.lastName && missingField}
          helperText={(!user.lastName && missingField) ? 'Champs vide' : null}
          autoFocus
          onChange={(evt) => {
            dispatch(actionSetLastName(evt.target.value));
          }}
        />
        <TextField
          id="first_name"
          required
          value={user.first_name}
          error={!user.first_name && missingField}
          helperText={(!user.first_name && missingField) ? 'Champs vide' : null}
          label="Prénom"
          variant="outlined"
          onChange={(evt) => {
            dispatch(actionSetFirstName(evt.target.value));
          }}

        />
      </div>
      <FormLabel component="legend" className="form-group--label">Information de connexion</FormLabel>
      <TextField
        id="login"
        required
        value={user.login}
        error={!user.login && missingField}
        helperText={(!user.login && missingField) ? 'Champs vide' : null}
        label="Nom d'utilisateur"
        variant="outlined"
        fullWidth
        onChange={(evt) => {
          dispatch(actionSetLogin(evt.target.value));
        }}

      />
      <TextField
        id="email"
        required
        value={user.email}
        error={!user.email && missingField || !emailExists}
        helperText={(!user.email && missingField) ? 'Champs vide' : (!emailExists) ? 'Email invalide' : null}
        label="Email"
        variant="outlined"
        fullWidth
        type="email"
        onChange={(evt) => {
          dispatch(actionSetEmail(evt.target.value));
        }}
      />
      <div className="group-input--password">
        <TextField
          variant="outlined"
          id="password"
          label="Mot de passe"
          error={!isPasswordCorrect && !checkPasswordsInputs() || (!user.password && missingField)}
          onChange={(evt) => {
            checkPasswordsInputs(); dispatch(actionSetPassword(evt.target.value));
          }}
          fullWidth
          value={user.password}
          type={values.showPassword ? 'text' : 'password'}
          helperText={(!user.password && missingField) ? 'Champs vide' : null}
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

        <TextField
          fullWidth
          variant="outlined"
          label="Confirmation"
          value={user.confirmPassword}
          error={!isPasswordCorrect && !checkPasswordsInputs() || (!user.confirmPassword && missingField)}
          id="password_confirm"
          onChange={(evt) => {
            checkPasswordsInputs();
            dispatch(actionSetConfirmPasswordValue(evt.target.value));
            dispatch(actionSetConfirmPassword(evt.target.value));
          }}
          type={values.showPassword ? 'text' : 'password'}
          helperText={(!user.confirmPassword && missingField) ? 'Champs vide' : null}
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
      </div>

      {!passwordStrength && (
        <Alert severity="error">
          <AlertTitle>Erreur</AlertTitle>
          Le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 nombre et un caractère spécial.
        </Alert>
      )}
    </form>
  );
}

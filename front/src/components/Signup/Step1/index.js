import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Inport Material UI
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormLabel from '@material-ui/core/FormLabel';

// == import actions local
import {
  actionSetLastName,
  actionSetFirstName,
  actionSetUsername,
  actionSetPassword,
  actionSetConfirmPassword,
  actionSetEmail,
} from '../../../actions/user';


// -------------------------- Export --------------------------

export default function Step1() {
  const dispatch = useDispatch();
  const { user, missingField, isPasswordCorrect } = useSelector((state) => state.user);
  const [values, setValues] = React.useState({
    showPassword: false,
  });

// -------------------------- Fonctions State & Dispatch --------------------------

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

// -------------------------- Return --------------------------

  return (
    <form className="form-group" noValidate autoComplete="off">
      <FormLabel component="legend" className="form-group--label">Nom et Prénom</FormLabel>
      <div className='group-input'>
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
            dispatch(actionSetLastName(evt.target.value))
          }}
        />
        <TextField
          id="first_name"
          required
          value={user.firstName}
          error={!user.firstName && missingField}
          helperText={(!user.firstName && missingField) ? 'Champs vide' : null}
          label="Prénom"
          variant="outlined"
          onChange={(evt) => { dispatch(actionSetFirstName(evt.target.value)) }}

        />
      </div>
      <FormLabel component="legend" className="form-group--label">Information de connexion</FormLabel>
      <TextField
        id="username"
        required
        value={user.username}
        error={!user.username && missingField}
        helperText={(!user.username && missingField) ? 'Champs vide' : null}
        label="Nom d'utilisateur"
        variant="outlined"
        fullWidth
        onChange={(evt) => { dispatch(actionSetUsername(evt.target.value)) }}

      />
      <TextField
        id="email"
        required
        value={user.email}
        error={!user.email && missingField}
        helperText={(!user.email && missingField) ? 'Champs vide' : null}
        label="Email"
        variant="outlined"
        fullWidth
        type='email'
        onChange={(evt) => { dispatch(actionSetEmail(evt.target.value)) }}
      />
      <div className='group-input--password'>
        <FormControl variant="outlined" required>
          <InputLabel htmlFor="password">Mot de passe</InputLabel>
          <OutlinedInput
            id="password"
            error={!isPasswordCorrect || (!user.email && missingField)}
            onChange={(evt) => { dispatch(actionSetPassword(evt.target.value)) }}
            fullWidth
            type={values.showPassword ? 'text' : 'password'}
            endAdornment={
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
            }
            labelWidth={110}
          />
        </FormControl>
        <FormControl variant="outlined" required>
          <InputLabel htmlFor="password_confirm">Confirmation</InputLabel>
          <OutlinedInput
            fullWidth
            error={!isPasswordCorrect || (!user.email && missingField)}
            id="password_confirm"
            onChange={(evt) => { dispatch(actionSetConfirmPassword(evt.target.value)) }}
            type={values.showPassword ? 'text' : 'password'}
            endAdornment={
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
            }
            labelWidth={105}
          />
        </FormControl>
      </div>

    </form>
  );
}

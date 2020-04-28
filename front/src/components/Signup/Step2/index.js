import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
  }),
);

const RadioGroupGender = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Mme" control={<Radio />} label="Mme" />
        <FormControlLabel value="M." control={<Radio />} label="M." />
      </RadioGroup>
    </FormControl>
  );
}



export default function Step1() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <RadioGroupGender />
      <TextField
          id="address"
          label="Adresse"
          variant="outlined"

          autoFocus
      />
      <div className='group-input'>
      <TextField
          id="zip_code"
          label="Code Postal"
          variant="outlined"
      />
      <TextField
          id="city"
          label="Ville"
          variant="outlined"
      />
      </div>
      <TextField
          id="phone_number"
          label="Fix"
          variant="outlined"
      />
      <TextField
          id="cellphone_number"
          label="Portable"
          variant="outlined"
      />
      <TextField
          id="phone_work"
          label="Travail"
          variant="outlined"
      />

        <div className='group-input'>
        <FormControl variant="outlined">
          <InputLabel htmlFor="password">Mot de passe</InputLabel>
          <OutlinedInput
              fullWidth
              id="password"
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
              labelWidth={100}
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="password_confirm">Confirmation</InputLabel>
          <OutlinedInput
              fullWidth
              id="password_confirm"
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
              labelWidth={100}
          />
        </FormControl>
      </div>

    </form>
  );
}

import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

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
      <div className='group-input'>
      <TextField
          id="outlined-basic"
          label="Nom"
          variant="outlined"

          autoFocus
      />
      <TextField
          id="outlined-basic"
          label="Prénom"
          variant="outlined"


      />
      </div>
        <TextField
            id="outlined-basic"
            label="Nom d'utilisateur"
            variant="outlined"
            fullWidth

        />
        <div className='group-input'>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
          <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
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
          <InputLabel htmlFor="outlined-adornment-password">Confirmation</InputLabel>
          <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
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

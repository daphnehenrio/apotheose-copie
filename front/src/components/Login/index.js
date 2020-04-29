import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == import Material UI

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
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


// -------------------------- styles composants --------------------------

const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiFormControl-root': {
            width: '100%',
        },
        '.MuiDialog-paper': {
            height: '20rem',
            minHeight: '300px'

        },
        '.MuiDialogContent-root': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },

    },
})(() => null);

const StyledDialog = withStyles({
    root: {
        padding: '2rem',
        margin: '0 auto',

    },
})(Dialog);

const StyledLink = withStyles({
    root: {
        marginLeft: '0.5rem',
    },
})(Link);

const StyledBtn = withStyles({
    root: {
        backgroundColor: '#0F4C81',
        color: 'white',
        '&:hover': {
            backgroundColor: '#001B2E',
        },
    },
})(Button);


// -------------------------- Export --------------------------

export default function Login() {
    const dispatch = useDispatch();
    const user = useSelector((state => state.user));
    const openLoginForm = useSelector((state) => state.toggle.openLoginForm);
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    // -------------------------- Fonctions State & Dispatch --------------------------

    const handleLogin = () => {
        dispatch(actionSetLoginForm());
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    // -------------------------- Return --------------------------

    return (
        <form onSubmit={(evt) => {
            dispatch(actionLogin());
        }}>
            <StyledDialog open={openLoginForm} onClose={handleLogin} aria-labelledby="form-dialog-title">
                <GlobalCss />
                <DialogTitle id="form-dialog-title">Connexion</DialogTitle>
                <DialogContent>
                    <TextField
                        id="outlined-basic"
                        label="Nom d'utilisateur"
                        variant="outlined"
                        fullWidth
                        autoFocus
                        onChange={(evt) => { dispatch(actionSetUsername(evt.target.value)) }}
                    />
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                        <OutlinedInput
                            fullWidth
                            onChange={(evt) => {dispatch(actionSetPassword(evt.target.value))}}
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
                    <StyledLink href="/inscription">
                        Créer un compte
                </StyledLink>
                </DialogContent>
                <DialogActions>
                    <StyledBtn onClick={handleLogin} variant="contained">
                        Valider
                </StyledBtn>
                </DialogActions>
            </StyledDialog>
        </form>
    );

};


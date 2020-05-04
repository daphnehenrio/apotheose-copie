import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormLabel from '@material-ui/core/FormLabel';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

// == Import actions

import {
    actionSetOpenEditProfil,
} from '../../../actions/profil';

const EditFormContent = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        '&::-webkit-scrollbar': {
            width: '0',
          }
    }
})(DialogContent);

const EditForm = withStyles({
    root: {
        width: ' 100%',
    },
    paper: {
        width: '70rem',
        maxWidth: '70rem',
        height: '80vh'
    },
})(Dialog);

const GenderInput = withStyles({
    root: {
        width: ' 50%',
    },
})(FormControl);



export default function EditProfil() {
    const dispatch = useDispatch();
    const openEditProfil = useSelector((state) => state.profil.openEditProfil);

    const handleEditProfil = (bool) => {
        dispatch(actionSetOpenEditProfil(bool));
    }

    const [gender, setGender] = React.useState('Homme');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <div className='edit-profil-form'>
            <EditForm open={openEditProfil} onClose={(evt) => handleEditProfil(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Profil</DialogTitle>
                <EditFormContent>
                    <div className='left-edit-profil'>
                        <FormLabel component="legend" className="form-group-label">Nom et Prénom</FormLabel>
                        <div className='group-input'>
                            <TextField
                                id="last_name"
                                label="Nom"
                                variant="outlined"
                                autoFocus
                            />
                            <TextField
                                id="first_name"
                                label="Prénom"
                                variant="outlined"

                            />
                        </div>
                        <FormLabel component="legend" className="form-group-label">Information de connexion</FormLabel>
                        <TextField
                            id="login"
                            label="Nom d'utilisateur"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            type='email'
                        />
                        <FormLabel component="legend" className="form-group-label">Social</FormLabel>
                        <div className='group-input'>
                            <TextField
                                id="age"
                                label="Age"
                                variant="outlined"
                            />
                            <GenderInput variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Genre</InputLabel>
                                <Select
                                    value={gender}
                                    onChange={handleChange}
                                    label="Genre"
                                >
                                    <MenuItem value={'Homme'}>Homme</MenuItem>
                                    <MenuItem value={'Femme'}>Femme</MenuItem>
                                </Select>
                            </GenderInput>
                            <GenderInput variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Statut</InputLabel>
                                <Select
                                    value={gender}
                                    onChange={handleChange}
                                    label="Statut"
                                >
                                    <MenuItem value={'Homme'}>Marié</MenuItem>
                                    <MenuItem value={'Femme'}>Célibataire</MenuItem>
                                    <MenuItem value={'Femme'}>Pacsé</MenuItem>
                                    <MenuItem value={'Femme'}>En concubinage</MenuItem>
                                </Select>
                            </GenderInput>
                            <TextField
                                id="children"
                                label="Enfant"
                                variant="outlined"
                                type="Number"
                            />
                        </div>
                    </div>
                    <div className='right-edit-profil'>
                        <FormLabel component="legend" className="form-group-label">Adresse</FormLabel>
                        <TextField
                            id="adress"
                            label="Adresse"
                            variant="outlined"
                            fullWidth
                        />
                        <div className='group-input'>
                            <TextField
                                id="city"
                                label="Ville"
                                variant="outlined"
                            />
                            <TextField
                                id="zip-code"
                                label="Code Postal"
                                variant="outlined"
                            />
                        </div>
                        <FormLabel component="legend" className="form-group-label">Téléphones</FormLabel>
                        <div className='group-input'>
                            <TextField
                                id="fix"
                                label="Fix"
                                variant="outlined"
                            />
                            <TextField
                                id="cellphone"
                                label="Portable"
                                variant="outlined"
                            />
                            <TextField
                                id="work"
                                label="Travail"
                                variant="outlined"
                            />
                        </div>

                    </div>
                </EditFormContent>
                <DialogActions>
                    <Button onClick={(evt) => handleEditProfil(false)} color="primary">
                        Cancel
          </Button>
                    <Button onClick={(evt) => handleEditProfil(false)} color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </EditForm>
        </div>
    );
}
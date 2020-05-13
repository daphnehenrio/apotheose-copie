import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormLabel from '@material-ui/core/FormLabel';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

// == Import actions

import {
  actionSetOpenEditProfil,
  actionSaveUpdateProfil,
} from '../../../actions/user_profil';

// == import style
import './styles.scss';

const EditFormContent = withStyles({


  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    '&::-webkit-scrollbar': {
      width: '0',
    },
  },

})(DialogContent);

const EditForm = withStyles({
  root: {
    width: ' 100%',
  },
  paper: {
    width: '70rem',
    maxWidth: '70rem',
    height: '80vh',
  },
})(Dialog);

const GenderInput = withStyles({
  root: {
    width: ' 50%',
  },
})(FormControl);


export default function EditProfil() {
  const dispatch = useDispatch();
  const { openEditProfil } = useSelector((state) => state.user_profil);
  const user = useSelector((state) => state.user_profil);
  const [gender, setGender] = React.useState(user.gender);
  const [statut, setStatut] = React.useState(user.statut);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    dispatch(actionSaveUpdateProfil(data));
  };


  const handleEditProfil = (bool) => {
    if (!bool) {
      return dispatch(actionSetOpenEditProfil(bool));
    }
    if (bool) {
      dispatch(actionSetOpenEditProfil(!bool));
    }
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeStatut = (event) => {
    setStatut(event.target.value);
  };

  return (
    <div className="edit-profil-form">
      <EditForm open={openEditProfil} onClose={(evt) => handleEditProfil(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Profil</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="form--edit-profil">
          <EditFormContent>
            <div className="left-edit-profil">
              <FormLabel component="legend" className="form-group-label">Nom et Prénom</FormLabel>
              <div className="group-input">
                <TextField
                  id="last_name"
                  label="Nom *"
                  name="last_name"
                  defaultValue={user.last_name}
                  inputRef={register({ required: true, maxLength: 60 })}
                  error={errors.last_name}
                  helperText={(errors.last_name && errors.last_name.type === 'required') && 'Ce champs est obligatoire' || (errors.last_name && errors.last_name.type === 'maxLength') && ('maximum 60 caractères')}
                  variant="outlined"
                  autoFocus
                />
                <TextField
                  id="first_name"
                  label="Prénom *"
                  name="first_name"
                  defaultValue={user.first_name}
                  inputRef={register({ required: true, maxLength: 60 })}
                  error={errors.first_name}
                  helperText={(errors.first_name && errors.first_name.type === 'required') && 'Ce champs est obligatoire' || (errors.first_name && errors.first_name.type === 'maxLength') && ('maximum 60 caractères')}
                  variant="outlined"
                />
              </div>
              <FormLabel component="legend" className="form-group-label">Information de connexion</FormLabel>
              <TextField
                id="login"
                label="Nom d'utilisateur *"
                name="login"
                defaultValue={user.login}
                inputRef={register({ required: true, maxLength: 76 })}
                error={errors.login}
                helperText={(errors.login && errors.login.type === 'required') && 'Ce champs est obligatoire' || (errors.login && errors.login.type === 'maxLength') && ('maximum 76 caractères')}
                variant="outlined"
                fullWidth
              />
              <TextField
                id="email"
                label="Email *"
                name="email"
                type="email"
                defaultValue={user.email}
                inputRef={register({ required: true, maxLength: 76 })}
                error={errors.email}
                helperText={(errors.email && errors.email.type === 'required') && 'Ce champs est obligatoire' || (errors.email && errors.email.type === 'maxLength') && ('maximum 76 caractères')}
                variant="outlined"
                fullWidth
              />
              <FormLabel component="legend" className="form-group-label">Social</FormLabel>
              <div className="group-input">

                <GenderInput variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">Civilité</InputLabel>
                  <Select
                    name="gender"
                    defaultValue={user.gender}
                    value={gender}
                    inputRef={register()}
                    onChange={handleChangeGender}
                  >
                    <MenuItem value="M">M</MenuItem>
                    <MenuItem value="Mme">Mme</MenuItem>
                  </Select>
                </GenderInput>

                <TextField
                  id="age"
                  label="Age"
                  name="age"
                  type="number"
                  defaultValue={user.age}
                  inputRef={register({ min: '16' })}
                  error={errors.age}
                  helperText={(errors.age) ? 'Age minimum : 16 ans' : null}
                  variant="outlined"
                />
                {errors.age && (<Alert severity="warning">Attention, nous rappelons que la création de compte est interdit aux moins de 16 ans</Alert>)}


                <GenderInput variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">Statut</InputLabel>
                  <Select
                    label="Statut"
                    name="statut"
                    defaultValue={user.statut}
                    value={statut}
                    inputRef={register()}
                    onChange={handleChangeStatut}
                  >
                    <MenuItem name="statut" value="Marié">Marié</MenuItem>
                    <MenuItem name="statut" value="Célibataire">Célibataire</MenuItem>
                    <MenuItem name="statut" value="Pacsé">Pacsé</MenuItem>
                    <MenuItem name="statut" value="Concubinage">En concubinage</MenuItem>
                  </Select>
                </GenderInput>
                <TextField
                  id="children"
                  label="Enfant"
                  name="children"
                  type="Number"
                  min={0}
                  defaultValue={user.children}
                  inputRef={register({ min: 0 })}
                  error={errors.children}
                  helperText={(errors.children) ? 'Le nombres d\'enfants doit être >= 0' : null}
                  variant="outlined"
                />
              </div>
            </div>
            <div className="right-edit-profil">
              <FormLabel component="legend" className="form-group-label">Adresse</FormLabel>
              <TextField
                id="adress"
                label="Adresse"
                variant="outlined"
                fullWidth
                defaultValue={user.address}
                name="address"
                inputRef={register()}
              />
              <div className="group-input">
                <TextField
                  id="city"
                  label="Ville"
                  variant="outlined"
                  defaultValue={user.city}
                  name="city"
                  inputRef={register()}
                />
                <TextField
                  id="zip-code"
                  label="Code Postal"
                  variant="outlined"
                  defaultValue={user.zip_code}
                  name="zip_code"
                  inputRef={register()}
                />
              </div>
              <FormLabel component="legend" className="form-group-label">Téléphones</FormLabel>
              <div className="group-input">
                <TextField
                  id="fix"
                  label="Maison"
                  variant="outlined"
                  defaultValue={user.phone_number}
                  name="phone_number"
                  inputRef={register()}
                />
                <TextField
                  id="cellphone"
                  label="Portable"
                  variant="outlined"
                  defaultValue={user.cellphone_number}
                  name="cellphone_number"
                  inputRef={register()}
                />
                <TextField
                  id="work"
                  label="Travail"
                  variant="outlined"
                  defaultValue={user.phone_work}
                  name="phone_work"
                  inputRef={register()}
                />
              </div>
            </div>


          </EditFormContent>
          <DialogActions>
            <Button onClick={(evt) => handleEditProfil(false)} color="secondary">
              Cancel
            </Button>
            <input type="submit" className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" />
          </DialogActions>
        </form>
      </EditForm>
    </div>
  );
}

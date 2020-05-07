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
    actionSaveUpdateProfil,
    actionUpdateLastName,
    actionUpdateFirstName,
    actionUpdateLogin,
    actionUpdateEmail,
    actionUpdateAge,
    actionUpdateStatut,
    actionUpdateGender,
    actionUpdateAddress,
    actionUpdateZipCode,
    actionUpdateCity,
    actionUpdateFixNumber,
    actionUpdateCellphoneNumber,
    actionUpdateWorkPhone,
    actionUpdateChildren

} from '../../../actions/profil';


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
  const openEditProfil = useSelector((state) => state.profil.openEditProfil);
  const user = useSelector((state) => state.user.user);
  const [gender, setGender] = React.useState(user.gender);
  const [statut, setStatut] = React.useState(user.statut);

  const handleEditProfil = (bool) => {
    if(!bool){
      return dispatch(actionSetOpenEditProfil(bool));
    }
    if(bool){
      console.log('true save profil')


      dispatch(actionSetOpenEditProfil(!bool));

    }
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
    dispatch(actionUpdateGender(event.target.value))
};

  const handleChangeStatut = (event) => {
    setStatut(event.target.value);
    dispatch(actionUpdateStatut(event.target.value))
  };





  return (
    <div className="edit-profil-form">
      <EditForm open={openEditProfil} onClose={(evt) => handleEditProfil(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Profil</DialogTitle>
        <EditFormContent>
          <div className="left-edit-profil">
            <FormLabel component="legend" className="form-group-label">Nom et Prénom</FormLabel>
            <div className="group-input">
              <TextField
                id="last_name"
                label="Nom"
                variant="outlined"
                defaultValue={user.last_name}
                onChange={() => dispatch(actionUpdateLastName(event.target.value))}
                autoFocus
              />
              <TextField
                id="first_name"
                label="Prénom"
                variant="outlined"
                defaultValue={user.first_name}
                onChange={() => dispatch(actionUpdateFirstName(event.target.value))}
              />
            </div>
            <FormLabel component="legend" className="form-group-label">Information de connexion</FormLabel>
            <TextField
              id="login"
              label="Nom d'utilisateur"
              variant="outlined"
              fullWidth
              defaultValue={user.login}
              onChange={() => dispatch(actionUpdateLogin(event.target.value))}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              defaultValue={user.email}
              onChange={() => dispatch(actionUpdateEmail(event.target.value))}
            />
            <FormLabel component="legend" className="form-group-label">Social</FormLabel>
            <div className="group-input">
              <TextField
                id="age"
                label="Age"
                variant="outlined"
                defaultValue={user.age}
                onChange={() => dispatch(actionUpdateAge(event.target.value))}
              />
              <GenderInput variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Genre</InputLabel>
                <Select
                  value={gender}
                  onChange={handleChangeGender}
                  label="Genre"
                >
                  <MenuItem value="Homme">M</MenuItem>
                  <MenuItem value="Femme">Mme</MenuItem>
                </Select>
              </GenderInput>
              <GenderInput variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Statut</InputLabel>
                <Select
                  value={statut}
                  onChange={handleChangeStatut}
                  label="Statut"
                >
                  <MenuItem value="Marié">Marié</MenuItem>
                  <MenuItem value="Célibataire">Célibataire</MenuItem>
                  <MenuItem value="Pacsé">Pacsé</MenuItem>
                  <MenuItem value="concubinage">En concubinage</MenuItem>
                </Select>
              </GenderInput>
              <TextField
                id="children"
                label="Enfant"
                variant="outlined"
                type="Number"
                defaultValue={user.children}
                onChange={() => dispatch(actionUpdateChildren(event.target.value))}
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
              onChange={() => dispatch(actionUpdateAddress(event.target.value))}
            />
            <div className="group-input">
              <TextField
                id="city"
                label="Ville"
                variant="outlined"
                defaultValue={user.city}
                onChange={() => dispatch(actionUpdateCity(event.target.value))}
              />
              <TextField
                id="zip-code"
                label="Code Postal"
                variant="outlined"
                defaultValue={user.zip_code}
                onChange={() => dispatch(actionUpdateZipCode(event.target.value))}
              />
            </div>
            <FormLabel component="legend" className="form-group-label">Téléphones</FormLabel>
            <div className="group-input">
              <TextField
                id="fix"
                label="Fix"
                variant="outlined"
                defaultValue={user.phone_number}
                onChange={() => dispatch(actionUpdateFixNumber(event.target.value))}
              />
              <TextField
                id="cellphone"
                label="Portable"
                variant="outlined"
                defaultValue={user.cellphone_number}
                onChange={() => dispatch(actionUpdateCellphoneNumber(event.target.value))}
              />
              <TextField
                id="work"
                label="Travail"
                variant="outlined"
                defaultValue={user.phone_work}
                onChange={() => dispatch(actionUpdateWorkPhone(event.target.value))}
              />
            </div>
          </div>
        </EditFormContent>
        <DialogActions>
          <Button onClick={(evt) => handleEditProfil(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={(evt) => {
            dispatch(actionSaveUpdateProfil());
            handleEditProfil(true);
            }}
            color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </EditForm>
    </div>
  );
}

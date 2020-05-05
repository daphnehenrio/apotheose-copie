import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == import Material UI

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Alert from '@material-ui/lab/Alert';

// == import utils
import { handdleVerifEmptyValue } from 'src/utils/checkSpaces';


// == import actions local

import {
  actionSetAddress,
  actionSetZipCode,
  actionSetCity,
  actionSetFixNumber,
  actionSetCellphoneNumber,
  actionSetWorkPhone,
  actionSetChildren,
  actionSetGender,
} from '../../../actions/user';

// -------------------------- Export --------------------------

const RadioGroupGender = () => {
  const [value, setValue] = React.useState('female');
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // -------------------------- Fonctions State & Dispatch --------------------------

  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(actionSetGender(event.target.value));
  };

  // -------------------------- Return --------------------------

  return (
    <FormControl component="fieldset" className="form-group--gender">
      <FormLabel component="legend" className="form-group--label">Civilité</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={user.gender} onChange={handleChange}>
        <FormControlLabel value="Mme" control={<Radio />} label="Mme" />
        <FormControlLabel value="M." control={<Radio />} label="M." />
      </RadioGroup>
    </FormControl>
  );
};


export default function Step1() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);


  return (
    <form className="form-group" noValidate autoComplete="off">
      <Alert severity="info" className="form-group--info">Toutes ces informations sont falcutatives. Elles serviront à compléter votre profil. Ces données vous permettront par la suite de simplifier les actions sur la plateforme en ayant accès à du contenu pré rempli. Vous pourrez toujours y accéder plus tard, dirrectement dans votre profil.</Alert>
      <RadioGroupGender />
      <FormLabel component="legend" className="form-group--label">Adresse domicile</FormLabel>
      <TextField
        className="group-input--input"
        id="address"
        label="Adresse"
        value={user.adress}
        variant="outlined"
        onChange={(evt) => {
          dispatch(actionSetAddress(evt.target.value));
        }}
        autoFocus
      />
      <div className="group-input">
        <TextField
          className="group-input--input"
          id="zip_code"
          label="Code Postal"
          value={user.zipCode}
          variant="outlined"
          onChange={(evt) => {
            dispatch(actionSetZipCode(evt.target.value));
          }}
        />
        <TextField
          className="group-input--input"
          id="city"
          label="Ville"
          variant="outlined"
          value={user.city}
          onChange={(evt) => {
            dispatch(actionSetCity(evt.target.value));
          }}
        />
      </div>
      <FormLabel component="legend" className="form-group--label">Téléphonne</FormLabel>
      <div className="group-input">
        <TextField
          className="group-input--input"
          id="phone_number"
          value={user.fixNumber}
          label="Fix"
          variant="outlined"
          onChange={(evt) => {
            dispatch(actionSetFixNumber(evt.target.value));
          }}
        />
        <TextField
          className="group-input--input"
          id="cellphone_number"
          label="Portable"
          value={user.cellphoneNumber}
          variant="outlined"
          type="tel"
          onChange={(evt) => {
            dispatch(actionSetCellphoneNumber(evt.target.value));
          }}
        />
        <TextField
          className="group-input--input"
          id="phone_work"
          label="Travail"
          value={user.workPhone}
          variant="outlined"
          onChange={(evt) => {
            dispatch(actionSetWorkPhone(evt.target.value));
          }}
        />
      </div>

      <FormLabel component="legend" className="form-group--label">Nombre d'enfants</FormLabel>
      <TextField
        className="group-input--input"
        value={user.children}
        id="children"
        label="Enfant"
        variant="outlined"
        type="Number"
        onChange={(evt) => {
          dispatch(actionSetChildren(evt.target.value));
        }}
      />


    </form>
  );
}

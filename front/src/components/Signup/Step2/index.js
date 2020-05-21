import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhoneNumber from 'awesome-phonenumber-fork';


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
  actionSetGender,
  actionSetAddress,
  actionSetZipCode,
  actionSetCity,
  actionSetPhoneNumber,
  actionSetCellphoneNumber,
  actionSetWorkPhone,
  actionSetChildren,
  actionSetErrorCellphoneNumber,
  actionSetErrorPhoneNumber,
  actionSetErrorPhoneWork,
  actionSetErrorAddress,
  actionSetErrorZipCode,
  actionSetErrorCity,
} from 'src/actions/signup';

// -------------------------- Export --------------------------

const RadioGroupGender = () => {
  const {
    user,
  } = useSelector((state) => state.signup);
  const [value, setValue] = React.useState(user.gender);
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
  const {
    user,
    error_cellphone_number,
    error_phone_number,
    error_phone_work,
    error_address,
    error_zip_code,
    error_city,
   } = useSelector((state) => state.signup);

   const isValid = (str) =>  {
    if (str !== ""){
      const letters = str.split('')
      const regex = /^[a-eB-Z0-9éèêëàâçîôùûôö'\s.-]$/i

      const error = letters.find(l => !regex.test(l))

      console.log(error, typeof error)
      if(error && error.length > 0 ){
        dispatch(actionSetErrorAddress('Un caractère non authorisé se trouve dans le champs'))
      } else {
        dispatch(actionSetErrorAddress(false))
      }
    }
}

  const isValidZipCode = (code) =>  {
    if (code !== ""){
      const reg = new RegExp(/[0-9]{5}/, 'g');
      if (reg.test(code)) {
          dispatch(actionSetErrorZipCode(false))
      } else {
        dispatch(actionSetErrorZipCode('Le code postal doit contenir uniquement 5 chiffres'))
      }
    }
  }

  const isValidCity = (str) =>  {
    if (str !== ""){
      const letters = str.split('')
      const regex = /^[a-eB-Z0-9éèêëàâçîôùûôö'\s.-]$/i

      const error = letters.find(l => !regex.test(l))

      console.log(error, typeof error)
      if(error && error.length > 0 ){
        dispatch(actionSetErrorCity('Un caractère non authorisé se trouve dans le champs'))
      } else {
        dispatch(actionSetErrorCity(false))
      }
    }
  }


  return (
    <form className="form-group" noValidate autoComplete="off">
      <Alert severity="info" className="form-group--info">Toutes ces informations sont falcutatives. Elles serviront à compléter votre profil. Ces données vous permettront par la suite de simplifier les actions sur la plateforme en ayant accès à du contenu pré rempli. Vous pourrez toujours y accéder plus tard, dirrectement dans votre profil.</Alert>
      <RadioGroupGender />
      <FormLabel component="legend" className="form-group--label">Adresse domicile</FormLabel>
      <TextField
        className="group-input--input"
        id="address"
        label="Adresse"
        value={user.address}
        error={error_address}
        helperText={error_address}
        variant="outlined"
        onChange={(evt) => {
          isValid(evt.target.value)
          dispatch(actionSetAddress(evt.target.value));
        }}
        autoFocus
      />
      <div className="group-input">
        <TextField
          className="group-input--input"
          id="zip_code"
          label="Code Postal"
          value={user.zip_code}
          error={error_zip_code}
          helperText={error_zip_code}
          variant="outlined"
          onChange={(evt) => {
            isValidZipCode(evt.target.value)
            dispatch(actionSetZipCode(evt.target.value));
          }}
        />
        <TextField
          className="group-input--input"
          id="city"
          label="Ville"
          variant="outlined"
          value={user.city}
          error={error_city}
          helperText={error_city}
          onChange={(evt) => {
            isValidCity(evt.target.value)
            dispatch(actionSetCity(evt.target.value));
          }}
        />
      </div>
      <FormLabel component="legend" className="form-group--label">Téléphonne</FormLabel>
      <div className="group-input">
        <TextField
          className="group-input--input"
          id="phone_number"
          value={user.phone_number}
          label="Fix"
          variant="outlined"
          error={error_phone_number}
          helperText={error_phone_number}
          onChange={(evt) => {
            dispatch(actionSetPhoneNumber(evt.target.value));
            if( evt.target.value !== ""){
              const pn = new PhoneNumber(evt.target.value, 'FR' );
              if(!pn.isValid()){
                dispatch(actionSetErrorPhoneNumber('Le numéro de téléphne doit être au format suivant: "0123456789" '))
              } else if(!pn.isFixedLine( ) && evt.target.value[1] != 9) {
                dispatch(actionSetErrorPhoneNumber('Le numéro de téléphne n\'est pas une ligne fixe'))
              } else {
                dispatch(actionSetErrorPhoneNumber(""));
              }
            } else {
              dispatch(actionSetErrorPhoneNumber(""));
            }
          }}
        />
        <TextField
          className="group-input--input"
          id="cellphone_number"
          label="Portable"
          value={user.cellphone_number}
          variant="outlined"
          type="tel"
          error={error_cellphone_number}
          helperText={error_cellphone_number}
          onChange={(evt) => {
            dispatch(actionSetCellphoneNumber(evt.target.value));
            if( evt.target.value !== ""){
              const pn = new PhoneNumber( evt.target.value, 'FR' );
              if(!pn.isValid()){
                  console.log('error')
                  dispatch(actionSetErrorCellphoneNumber('Le numéro de téléphne doit être au format suivant: "0123456789" '))
              } else if(!pn.isMobile( )){
                dispatch(actionSetErrorCellphoneNumber('Le numéro de téléphne n\'est pas un mobile'))
              } else {
                dispatch(actionSetErrorCellphoneNumber(""));
              }
            } else {
              dispatch(actionSetErrorCellphoneNumber(""));
            }
          }}
        />
        <TextField
          className="group-input--input"
          id="phone_work"
          label="Travail"
          value={user.phone_work}
          variant="outlined"
          error={error_phone_work}
          helperText={error_phone_work}
          onChange={(evt) => {
            dispatch(actionSetWorkPhone(evt.target.value));
            if( evt.target.value !== ""){
              const pn = new PhoneNumber( evt.target.value, 'FR' );
              if(!pn.isValid()){
                dispatch(actionSetErrorPhoneWork('Le numéro de téléphne doit être au format suivant: "0123456789" '))
              } else {
                dispatch(actionSetErrorPhoneWork(""));
              }
            } else {
              dispatch(actionSetErrorPhoneWork(""));
            }
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

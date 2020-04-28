import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const RadioGroupGender = () => {
  const [value, setValue] = React.useState('female');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch({type: 'SET_GENDER', gender: event.target.value});
  };

  return (
    <FormControl component="fieldset" className="form-group--gender">
      <FormLabel component="legend" className="form-group--label">Civilité</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={user.gender} onChange={handleChange}>
        <FormControlLabel value="Mme" control={<Radio />} label="Mme" />
        <FormControlLabel value="M." control={<Radio />} label="M." />
      </RadioGroup>
    </FormControl>
  );
}



export default function Step1() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


  return (
    <form className="form-group" noValidate autoComplete="off">
      <RadioGroupGender

      />
      <FormLabel component="legend" className="form-group--label">Adresse domicile</FormLabel>
      <TextField
          className='group-input--input'
          id="address"
          label="Adresse"
          value={user.adress}
          variant="outlined"
          onChange={(evt) => {
            dispatch({type:'SET_ADRESS', adress: evt.target.value});
          }}
          autoFocus
      />
      <div className='group-input'>
      <TextField
          className='group-input--input'
          id="zip_code"
          label="Code Postal"
          value={user.zipCode}
          variant="outlined"
          onChange={(evt) => {
            dispatch({type:'SET_ZIPCODE', zipCode: evt.target.value});
          }}
      />
      <TextField
          className='group-input--input'
          id="city"
          label="Ville"
          variant="outlined"
          value={user.city}
          onChange={(evt) => {
            dispatch({type:'SET_CITY', city: evt.target.value});
          }}
      />
      </div>
        <FormLabel component="legend" className="form-group--label">Téléphonne</FormLabel>
      <div className='group-input'>
        <TextField
            className='group-input--input'
            id="phone_number"
            value={user.fixNumber}
            label="Fix"
            variant="outlined"
            onChange={(evt) => {
              dispatch({type:'SET_FIX_NUMBER', fixNumber: evt.target.value});
            }}
        />
        <TextField
            className='group-input--input'
            id="cellphone_number"
            label="Portable"
            value={user.cellphoneNumber}
            variant="outlined"
            type="tel"
            onChange={(evt) => {
              dispatch({type:'SET_CELLPHONE_NUMBER', cellphoneNumber: evt.target.value});
            }}
        />
        <TextField
            className='group-input--input'
            id="phone_work"
            label="Travail"
            value={user.workPhone}
            variant="outlined"
            onChange={(evt) => {
              dispatch({type:'SET_WORK_PHONE', workPhone: evt.target.value});
            }}
        />
      </div>

      <FormLabel component="legend" className="form-group--label">Nombre d'enfants</FormLabel>
      <TextField
          className='group-input--input'
          value={user.children}
          id="children"
          label="Enfant"
          variant="outlined"
          type="Number"
          onChange={(evt) => {
            dispatch({type:'SET_CHILDREN', children: evt.target.value});
          }}
      />


    </form>
  );
}

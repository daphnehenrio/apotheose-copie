import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == import Material UI

import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

// == import utils
import { handdleVerifEmptyValue } from 'src/utils/checkSpaces';

// -------------------------- Export --------------------------

export default function Step3() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);


  // -------------------------- Return --------------------------

  return (
    <form className="form-group">
      <FormLabel component="legend" className="form-group--label">Informations princiales</FormLabel>
      {user.gender
        ? (
          <FormControl component="fieldset" className="form-group--gender">
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel value="Mme" control={<Radio />} label="Mme" checked={user.gender === 'Mme'} disabled />
              <FormControlLabel value="M." control={<Radio />} label="M." checked={user.gender === 'M.'} disabled />
            </RadioGroup>
          </FormControl>
        )
        : null}
      <div className="group-input">
        <TextField
          id="last_name"
          label="Nom"
          variant="outlined"
          disabled
          autoFocus
          value={user.lastName}
        />
        <TextField
          id="first_name"
          label="Prénom"
          variant="outlined"
          disabled
          value={user.firstName}
        />
      </div>
      <TextField
        id="username"
        label="Nom d'utilisateur"
        variant="outlined"
        fullWidth
        disabled
        value={user.login}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        type="email"
        disabled
        value={user.email}
      />
      {user.adress || user.zipCode || user.city || user.fixNumber || user.cellphoneNumber || user.workPhone || user.children
        ? <FormLabel component="legend" className="form-group--label">Informations secondaires</FormLabel>
        : null}
      {user.adress
        ? (
          <TextField
            className="group-input--input"
            id="address"
            label="Adresse"
            variant="outlined"
            disabled
            autoFocus
            value={user.adress}
          />
        )
        : null}
      <div className="group-input">
        {user.zipCode
          ? (
            <TextField
              className="group-input--input"
              id="zip_code"
              label="Code Postal"
              variant="outlined"
              disabled
              value={user.zipCode}
            />
          )
          : null}
        {user.city
          ? (
            <TextField
              className="group-input--input"
              id="city"
              label="Ville"
              variant="outlined"
              disabled
              value={user.city}
            />
          )
          : null}
      </div>
      <div className="group-input">
        {user.fixNumber
          ? (
            <TextField
              className="group-input--input"
              id="phone_number"
              label="Fix"
              variant="outlined"
              disabled
              value={user.fixNumber}
            />
          )
          : null}
        {user.cellphoneNumber
          ? (
            <TextField
              className="group-input--input"
              id="cellphone_number"
              label="Portable"
              variant="outlined"
              type="tel"
              disabled
              value={user.cellphoneNumber}
            />
          )
          : null}
        {user.workPhone && !handdleVerifEmptyValue(user.workPhone)
          ? (
            <TextField
              className="group-input--input"
              id="phone_work"
              label="Travail"
              variant="outlined"
              disabled
              value={user.workPhone}
            />
          )
          : null}
      </div>
      {user.children
        ? (
          <TextField
            className="group-input--input"
            id="children"
            label="Enfant"
            variant="outlined"
            type="Number"
            disabled
            value={user.children}
          />
        )
        : null}


    </form>
  );
}

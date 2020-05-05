import React from 'react';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';


const Todo = () => (
  <div className="tab-content">
    <Paper className="cards-infos">
      <h4 className="cards-infos-title">TODO</h4>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" column="true">
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
    </Paper>
  </div>
);

export default Todo;

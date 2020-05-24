import React from 'react';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';

import './styles.scss';




const Todo = () => (
  <div className="tab-content">



    <Paper className="cards-infos-list">
      <h4 className="cards-infos-title" style={{backgroundColor: '#78A418'}}>Facture</h4>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" column="true">
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Payer le loyer"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Payer edf"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Payer la cantine"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Payer le gaz"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Payer l'eau"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Payer l'eau"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Payer internet"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Payer l'assurance"
            labelPlacement="end"
          />

        </FormGroup>
      </FormControl>
    </Paper>


    <Paper className="cards-infos-list">
      <h4 className="cards-infos-title" style={{backgroundColor: '#375D81'}}>Papier</h4>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" column="true">
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="AUTOMATISER LES PAIEMENTS !"
            labelPlacement="end"
          />

          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="REMPLIR DÉCLARATION D'IMPOT"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Déposer demande renouvellement CNID"
            labelPlacement="end"
          />

          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Sauvegarder mes nouveaux documents"
            labelPlacement="end"
          />

        </FormGroup>
      </FormControl>
    </Paper>


    <Paper className="cards-infos-list">
      <h4 className="cards-infos-title" style={{backgroundColor: 'lightblue'}}>Loisir</h4>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" column="true">
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Lire 'Le monde s'effondre' de Chinua Achebe"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Reprendre le dessin"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Partir en vacances"
            labelPlacement="end"
          />

        </FormGroup>
      </FormControl>
    </Paper>

    <Paper className="cards-infos-list">
      <h4 className="cards-infos-title" style={{backgroundColor: '#412D2C'}}>Divers</h4>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" column="true">
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Apprendre à coder"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Faire un super site, avec une super équipe"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Ne pas planter le super site à 5mn de la démo ! "
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="En cas d'idée d'amélioration, s'abstenir et attendre la fin de la démo ! "
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Attaquer la V.2"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
    </Paper>
  </div>
);

export default Todo;

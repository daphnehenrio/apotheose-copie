// == Import npm
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';


import Tooltip from '@material-ui/core/Tooltip';

// == Import img
import Folder from 'src/assets/image/documents/folder.png';

// == Import actions
import { actionChangePage } from 'src/actions/routes';

// == Import styles
//import './styles.scss';

import Plus from 'src/assets/image/documents/plus.png';
import { Dialog, DialogTitle, Button, DialogActions, DialogContent } from '@material-ui/core';
import slugify from '@sindresorhus/slugify';


// -------------------------- Export --------------------------

export default function DocumentsCategory() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [openAddFolder, setOpenAddFolder] = useState(false)

  const categoriesFolder = useSelector((state) => state.document.category)
  console.log(useSelector((state) => state.document.category))

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

 const AddFolder = () => {
   return (
    <Dialog open={openAddFolder} onClose={(evt) => {
        setOpenAddFolder(false);
      }} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Créer un nouveau dossier </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
        <select name="select-name" ref={register}>
        <option value="" >Choisir une opition</option>
          <option value="Etat-civil">Etat-civil</option>
          <option value="Facture">Facture</option>
          <option value="Fiche de paie">Fiche de paie</option>
          <option value=" Santé"> Santé</option>
          <option value="Social">Social</option>
        </select>

        ou

        Créez votre dossier
        <input type="text" placeholder="Choisir un nom" name="create-name" ref={register({maxLength: 60})} />

        <input type="submit" />
        </form>
      </DialogContent>
      <DialogActions>
          <Button onClick={(evt) => {
              setOpenAddFolder(false);
          }} color="primary">
              Fermer
          </Button>
      </DialogActions>
  </Dialog>
   )
 }

// ----------------- Return ------------------ //

  return (
    <div className= 'document-page'>
      <h3 className= 'document-page-title'>Mes documents</h3>
      <div className= 'documents-container'>

        { categoriesFolder.map((category) => {
          return (
            <div className= 'single-document-container' key={category.name}>
            <img className='img-folder' src={Folder} onClick={() => {
              dispatch(actionChangePage(`/mes-documents/${slugify(category.name)}`, history))
            }
            }/>
            <p>{category.name}</p>
          </div>
          )
        })
      }

        <div className= 'single-document-container'>
          <Tooltip title="Création d'un nouveau dossier" placement="right-start">
              <img className='plus' src={Plus} onClick={(evt) => {
                setOpenAddFolder(true);
              }} />
          </Tooltip>
        </div>
        <AddFolder />
      </div>
    </div>
  );
}

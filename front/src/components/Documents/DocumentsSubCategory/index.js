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

import Plus from 'src/assets/image/documents/plus.png';
import { Dialog, DialogTitle, Button, DialogActions, DialogContent } from '@material-ui/core';
import slugify from '@sindresorhus/slugify';


// -------------------------- Export --------------------------

export default function DocumentsSubCategory(category) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [openAddFolder, setOpenAddFolder] = useState(false)

  const categoriesFolder = useSelector((state) => state.document.category)
  console.log(useSelector((state) => state.document.category))
  console.log(category)


  const SubFolder = categoriesFolder.map((cat) => {
    console.log(cat.name, category)
    if(cat.name === category.category){
      return (

        cat.sub_category.map((sub_cat) => {

          return (

            <div className= 'single-document-container' key={sub_cat.name}>
              <img className='img-folder' src={Folder} onClick={
                () =>
                dispatch(actionChangePage(`/mes-documents/${slugify(cat.name)}/${slugify(sub_cat.name)}`, history))
              }/>
              <p>{sub_cat.name}</p>
            </div>

          )
        })
      )
      }
    })


  console.log(SubFolder, "sub")
// ----------------- Return ------------------ //

  return (
    <div className= 'document-page'>
      <h3 className= 'document-page-title'></h3>
      <div className= 'documents-container'>

        {[SubFolder]}

        <div className= 'single-document-container'>
          <Tooltip title="Création d'un nouveau dossier" placement="right-start">
              <img className='plus' src={Plus} onClick={(evt) => {
                setOpenAddFolder(true);
              }} />
          </Tooltip>
        </div>

      </div>
    </div>
  );
}

// == Import npm
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import slugify from '@sindresorhus/slugify';


// == Import img
import Folder from 'src/assets/image/documents/folder2.png';



// == Import actions
import { actionChangePage } from 'src/actions/routes';

// == Import styles
import '../styles.scss';




// -------------------------- Export --------------------------

export default function DocumentsCategory() {
  const history = useHistory();
  const dispatch = useDispatch();

  const categoriesFolder = useSelector((state) => state.document.category)



  // ----------------- Return ------------------ //

  return (
    <div className='document-page'>
      
      <div className='documents-container'>

        {categoriesFolder.map((category) => {
          return (
            <div className='single-document-container' key={category.name}>
              <img className='img-folder' src={Folder} onClick={() => {
                dispatch(actionChangePage(`/mes-documents/${slugify(category.name)}`, history))
              }
              } />
              <p>{category.name}</p>
            </div>
          )
        })
        }

      </div>
    </div>
  );
}

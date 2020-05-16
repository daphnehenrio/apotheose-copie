// == Import npm
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// == Import img
import Folder from 'src/assets/image/documents/folder.png';

// == Import actions
import { actionChangePage } from 'src/actions/routes';

import slugify from '@sindresorhus/slugify';
import { actionGetDocuments } from '../../../actions/document';


// -------------------------- Export --------------------------

export default function DocumentsSubCategory(category) {
  const history = useHistory();
  const dispatch = useDispatch();

  const categoriesFolder = useSelector((state) => state.document.category)
  const goodSub_categories =  categoriesFolder.find((cat) => cat.name === category.category);

  const SubFolder = goodSub_categories.sub_category.map((sub_cat) => {

    return (
      <div className= 'single-document-container' key={sub_cat.name}>
        <img
          className='img-folder'
          src={Folder}
          onClick={ () =>
            {
              dispatch(actionGetDocuments(sub_cat.id))
              dispatch(actionChangePage(`/mes-documents/${slugify(goodSub_categories.name)}/${slugify(sub_cat.name)}`, history))
            }
          }
        />
        <p>{sub_cat.name}</p>
      </div>
    )
  });


  console.log(SubFolder, "sub")
// ----------------- Return ------------------ //

  return (
    <div className= 'document-page'>
      <h3 className= 'document-page-title'></h3>
      <div className= 'documents-container'>

        {[SubFolder]}

      </div>
    </div>
  );
}

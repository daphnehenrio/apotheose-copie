// == Import npm
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';


// Import material ui
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';



// == Import img
import Folder from 'src/assets/image/documents/folder2.png';

// == Import actions
import { actionChangePage } from 'src/actions/routes';

import slugify from '@sindresorhus/slugify';
import { actionGetDocuments } from '../../../actions/document';

const SelectDoc = withStyles((theme) => ({
  input: {
    fontSize: '1.4rem',
    color: 'black',
    padding: '0.7rem 1rem',
    '&:hover, &:focus': {
      backgroundColor: 'rgba(128, 128, 128,0.3)',
      borderRadius: '10px',
    }
  },
}))(InputBase);

const StyledSelect = withStyles((theme) => ({
  icon: {
    color: 'black',
  }
}))(Select);




// -------------------------- Export --------------------------

export default function DocumentsSubCategory(category) {
  const history = useHistory();
  const dispatch = useDispatch();

  const categoriesFolder = useSelector((state) => state.document.category)
  const goodSub_categories = categoriesFolder.find((cat) => cat.name === category.category);



  const SubFolder = goodSub_categories.sub_category.map((sub_cat) => {

    return (
      <div className='single-document-container' key={sub_cat.name}>
        <img
          className='img-folder'
          src={Folder}
          onClick={() => {
            console.log(typeof sub_cat.name, 'UB CAT NAME JJJJJJJJJ');
            dispatch(actionGetDocuments(sub_cat.id));
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
    <div className='document-page'>
      <div className='header-document-page'>
        <Breadcrumbs aria-label="breadcrumb" className='breadcrumb'>
          <Link href="#" className='link-document' onClick={(evt) => {
            evt.preventDefault();
            dispatch(actionChangePage('/mes-documents', history));
          }}>
            Documents
                    </Link>

          <StyledSelect
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<SelectDoc />}
            defaultValue={goodSub_categories.name}
            onChange={(evt) => {
              console.log(evt.target);
              dispatch(actionChangePage(`/mes-documents/${slugify(evt.target.value)}`, history))
            }
            }
          >
            {categoriesFolder.map((category) => {
              return (
                <MenuItem value={category.name} >{category.name}</MenuItem>
              )
            })
            }
          </StyledSelect>
        </Breadcrumbs>
        
      </div>
      <div className='documents-container'>

        {[SubFolder]}

      </div>
    </div>
  );
}

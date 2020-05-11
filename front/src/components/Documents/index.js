// == Import npm
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// == Import img
import Folder from 'src/assets/image/documents/folder.png';

// == Import actions
import { actionChangePage } from '../../actions/routes';

// == Import styles
import './styles.scss';


// -------------------------- Export --------------------------

export default function Documents() {
  const history = useHistory();
  const dispatch = useDispatch();
 
// ----------------- Return ------------------ //

  return (
    <div className= 'document-page'>
        <h3 className= 'document-page-title'>Mes documents</h3>  
        <div className= 'documents-container'>
          <div className= 'single-document-container'>
            <img className='img-folder' src={Folder}/>
            <p>Etat Civil</p>
          </div>

          <div className= 'single-document-container'>
            <img className='img-folder' src={Folder} onClick={(evt) => {
                dispatch(actionChangePage('/mes-documents/documents', history));
            }}/>
            <p>Caf</p>
          </div>

          <div className= 'single-document-container'>
            <img className='img-folder' src={Folder}/>
            <p>Pôle-emploi</p>
          </div>
        </div>
    </div>
  );
}

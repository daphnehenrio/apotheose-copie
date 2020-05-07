// == Import npm
import React from 'react';

// Import img
import Folder from 'src/assets/image/documents/folder.png';


// -------------------------- Export --------------------------

export default function Documents() {
 

  return (
    <div>
        <h3>Mes documents</h3>  
        <div>
            <img src={Folder}></img>
        </div>
    </div>
  );
}

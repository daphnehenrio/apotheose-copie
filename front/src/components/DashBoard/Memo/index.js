import React from 'react';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import FolderIcon from '@material-ui/icons/Folder';


const Memo = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className="tab-content">

      <Paper className="cards-infos">
        <h4 className="cards-infos-title">Mes infos</h4>
        <ul>
          <li>Nom</li>
          <li>Prénom</li>
          <li>Adresse</li>
          <li>Tél.</li>
          <li>Email</li>
        </ul>
        <div className="cards-infos-footer">
          <Link href="#" onClick={preventDefault}>
            Plus
          </Link>
          <FolderIcon />
        </div>
      </Paper>
      <Paper className="cards-infos">
        <h4 className="cards-infos-title">Mes infos</h4>
        <ul>
          <li>Nom</li>
          <li>Prénom</li>
          <li>Adresse</li>
          <li>Tél.</li>
          <li>Email</li>
        </ul>
        <div className="cards-infos-footer">
          <Link href="#" onClick={preventDefault}>
            Plus
          </Link>
          <FolderIcon />
        </div>
      </Paper>
      <Paper className="cards-infos">
        <h4 className="cards-infos-title">Mes infos</h4>
        <ul>
          <li>Nom</li>
          <li>Prénom</li>
          <li>Adresse</li>
          <li>Tél.</li>
          <li>Email</li>
        </ul>
        <div className="cards-infos-footer">
          <Link href="#" onClick={preventDefault}>
            Plus
          </Link>
          <FolderIcon />
        </div>
      </Paper>
    </div>
  );
};

export default Memo;

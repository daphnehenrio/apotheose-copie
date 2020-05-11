import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';

import {
  actionChangePage,
} from 'src/actions/routes';

import './styles.scss';

export default function Page404() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actionChangePage('/', history));
  };

  return (
    <section id="not-found">
      <div id="title">404 Error Page</div>
      <div className="circles">
        <p>404<br />
          <small>PAGE INTROUVABLE</small>
        </p>
        <span className="circle big" />
        <span className="circle med" />
        <span className="circle small" />

        <Button
          className="button--go-to-home"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Retour à l'accueil
        </Button>

      </div>
    </section>
  );
}

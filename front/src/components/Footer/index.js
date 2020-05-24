// == Import npm
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

// == import Material UI

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { actionChangePage } from 'src/actions/routes';

import './styles.scss';


// -------------------------- Export --------------------------

export default function Footer() {
  const history = useHistory();
  const dispatch = useDispatch();

  // -------------------------- Fonctions Dispatch --------------------------

  const preventDefault = (event, route) => {
    event.preventDefault();
    dispatch(actionChangePage(route, history));
  };


  return (
    <Box className="footer--styled box" component="div" m={1}>
      <Link className="footer--styled link" href="#" onClick={(event) => preventDefault(event, '/equipe')}>
        L'équipe
      </Link>
      <p>-</p>
      <Link className="footer--styled link" href="/cgu" onClick={(event) => preventDefault(event, '/cgu')}>
        CGU
      </Link>
    </Box>
  );
}

/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

// == import node_modules
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import slugify from '@sindresorhus/slugify';

// == import Material UI
import Link from '@material-ui/core/Link';

// == import actions
import { actionChangePage } from 'src/actions/routes';
import { actionGetServices, actionGetAllServices } from 'src/actions/services';


// == export
export default function ServicesLinks() {
  // -------------------------- Const --------------------------

  const history = useHistory();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.category);

  const [checked, setChecked] = React.useState(false);


  // -------------------------- Fonctions && Dispatch --------------------------

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const preventDefault = (event, category, route) => {
    event.preventDefault();
    dispatch(actionGetServices(category));
    dispatch(actionChangePage(route, history));
  };

  const getAllServices = (event, route) => {
    event.preventDefault();
    dispatch(actionGetAllServices());
    dispatch(actionChangePage(route, history));
  };

  // -------------------------- Components --------------------------

  const Links = menu.map((category) => {
    if (menu.length > 0 ) {
      if(!checked ? category.id < 5 : true) {

        const imageName = `${slugify(category.name)}.png`;

        return (
          <Link
            key={category.name}
            className="menu--sublink"
            href={`services/${slugify(category.name)}`}
            onClick={(event) => preventDefault(event, category.id, `/services/${slugify(category.name)}`)}
          >

            <p className="tree-item-link">
              <img
                className="icon-menu"
                src={`/images/menu-category/${imageName}`}
                alt={category.name}
              />
              <span>
                {category.name}
              </span>
            </p>
          </Link>
        );
      }
    }
  });

  // -------------------------- Return --------------------------

  return (
    <>
      <Link
        className="menu--sublink"
        href="/services/tous-les-services"
        onClick={(event) => getAllServices(event, '/services/tous-les-services')}
      >

        <p className="tree-item-link">
          <img
            className="icon-menu"
            src="/images/menu-category/all.png"
            alt="List"
          />
          <span>
            Tous les services
          </span>
        </p>
      </Link>

      { menu.length > 0 && ([Links]) }


      <div className="tree-item-link toogle-menu" onClick={toggleChecked}>
        <img
          className="icon-menu"
          src={`/images/menu-category/${checked ? 'less' : 'more'}.png`}
          alt={checked ? 'moins' : 'plus'}
        />
        <span className="toogle-menu--more-less">
          Afficher {checked ? 'moins' : 'plus'}
        </span>
      </div>


    </>
  );
}

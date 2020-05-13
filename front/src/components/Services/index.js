import React from 'react';
import { useSelector } from 'react-redux';
import { hexToRgba } from 'hex-and-rgba';

// == import Material UI
import Grid from '@material-ui/core/Grid';
import {
  Avatar, Link, ListItem, ListItemAvatar, ListItemText, List,
} from '@material-ui/core';


// Import styles
import './styles.scss';

// -------------------------- styles composants --------------------------


// -------------------------- Export --------------------------

export default function Services(category) {
  const services = useSelector((state) => state.services.services);
  const allCategory = useSelector((state) => state.menu.category);

  // -------------------------- Components --------------------------


  const itemOfList = (name, logo, link) => (

    <ListItem key={name} className="list--service--item">
      <ListItemAvatar className="list--service--item-avatar">
        <Avatar alt={name} src={`/images/service-icon/${logo}`} />
      </ListItemAvatar>
      <ListItemText className="list--service--item-text">
        <Link href={link} target="_blank">
          {name}
        </Link>
      </ListItemText>
    </ListItem>

  );

  const categoryList = (categoryName, categoryColor) => {
    const servicesByCat = services.filter((service) => {
      if (service.category) {
        const catName = service.category.map((cat) => cat.name);
        console.log(catName);
        if (catName[0] === categoryName) {
          return true;
        }
        return false;
      }
      return false;
    });
    const rgbaColor = hexToRgba(categoryColor);
    const bgcolor = `rgba(${rgbaColor[0]},${rgbaColor[1]}, ${rgbaColor[2]}, 0.5 )`;
    return (
      <div key={categoryName} className="bloc-services-category">
        <div style={{ backgroundColor: categoryColor }}>
          <h4>{categoryName}</h4>
        </div>

        <List className="list--service" style={{ backgroundColor: bgcolor }}>
          {servicesByCat.map((service) => itemOfList(service.name, service.logo, service.link))}
        </List>
      </div>
    );
  };


  // -------------------------- Return --------------------------

  return (

    <div className="home-page--container">
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
        spacing={5}
      >

        <Grid item>
          <h2 className="page-title">Services</h2>
        </Grid>

        <Grid
          item
          container
          spacing={3}
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={3}
        >
          <h3 className="page-content-title">{category.category}</h3>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
            wrap="wrap"
          >
            {
              category.category === 'Tous les services'
                ? (<> {allCategory.map((cat) => categoryList(cat.name, cat.color))} </>)
                : (
                  <List className="list--service">
                    {
                      services.length === 0
                        ? 'Pas de services disponnible pour le moment'
                        : services.map((service) => itemOfList(service.name, service.logo, service.link))
                    }
                  </List>
                )
            }

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

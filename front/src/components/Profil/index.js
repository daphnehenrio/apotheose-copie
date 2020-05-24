import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GroupIcon from '@material-ui/icons/Group';

import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';



// == Import actions

import { actionSetOpenEditProfil, actionGetProfil } from 'src/actions/user_profil';
import {
  actionSetOpenAddInfoSup,
  actionAddInfoSup,
  actionSetInfoSupTitle,
  actionSetInfoSupValue,
  actionClearAddInfoSup,
  actionEditInfoSup,
  actionEditInfosSupContent,
  actionCloseEditInfoSup,

} from 'src/actions/user_info';

// == import utils
import { handdleVerifEmptyValue } from 'src/utils/checkSpaces';


// == Import styles
import './styles.scss';

// == Import components
import EditProfil from 'src/components/Profil/EditProfil';


const Category = withStyles({
  root: {
    padding: '2rem',
    letterSpacing: '0.1rem',
    textAlign: 'left',
  },
})(Tab);


function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    minWidth: '1050px',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


// -------------------------- Export --------------------------

export default function Profil() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.document.loading);
  const [value, setValue] = React.useState(0);
  const {
    login,
    first_name,
    last_name,
    email,
    gender,
    cellphone_number,
    phone_number,
    phone_work,
    zip_code,
    city,
    children,
    address,
    age,
    statut,
  } = useSelector((state) => state.user_profil);

  let childrenSentence = '';
  if(children === 0){
    childrenSentence = `Pas d'enfants`;
  } else if (children === 1) {
    childrenSentence = 'enfant';
  } else {
    childrenSentence = 'enfants';
  }

  const { openAddInfoSup, infosSup, infoSupToAdd } = useSelector((state) => state.user_info);
  const infosSupList = infosSup.map((info) => {
    if (info.edit === false) {
      return (
        <li
          key={info.id}
          className="infos-content"
          onDoubleClick={(evt) => {
            dispatch(actionEditInfoSup(info.id));
          }}
        >{info.title} : {info.value}
        </li>
      );
    }

    return (
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          let title;
          let value;
          if (handdleVerifEmptyValue(infoSupToAdd.title)) {
            title = info.title;
          }
          else {
            title = infoSupToAdd.title;
          }
          if (handdleVerifEmptyValue(infoSupToAdd.value)) {
            value = info.value;
          }
          else {
            value = infoSupToAdd.value;
          }
          const infoToEdit = {
            id: info.id,
            title,
            value,
          };
          dispatch(actionEditInfosSupContent(infoToEdit));
          dispatch(actionClearAddInfoSup());
        }}
        className="add-infos-sup-container"
      >
        <TextField
          id="add-info-sup-title"
          defaultValue={info.title}
          autoFocus
          onChange={(evt) => {
            dispatch(actionSetInfoSupTitle(evt.target.value));
          }}
        />
        <p className="add-infos-sup-separator"> : </p>
        <TextField
          id="standard-basic"
          defaultValue={info.value}
          onChange={(evt) => {
            dispatch(actionSetInfoSupValue(evt.target.value));
          }}
        />
        <IconButton
          aria-label="close"
          onClick={(evt) => {
            dispatch(actionCloseEditInfoSup(info.id));
          }}
        >
          <CloseIcon />
        </IconButton>
        <input className="hidden" type="submit" />
      </form>
    );
  });

  useLayoutEffect(() => {
    if (!login) {
      dispatch(actionGetProfil(history));
    }
  }, []);


  const handleEditProfil = (bool) => {
    dispatch(actionSetOpenEditProfil(bool));
  };

  const handleAddInfoSup = (bool) => {
    dispatch(actionSetOpenAddInfoSup(bool));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // -------------------------- Return --------------------------

  return (
    <div className="profil">
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Category label="Moi" icon={<AccountCircleIcon />} {...a11yProps(0)} />
          <Category label="Infos supplémentaires" icon={<AddIcon />} {...a11yProps(1)} />
          <Category label="Santé" icon={<FavoriteIcon />} {...a11yProps(2)} />
          <Category label="Caf" icon={<GroupIcon />} {...a11yProps(3)} />
        </Tabs>
        {!loading && (
          <TabPanel className="category-content" value={value} index={0}>
            <div className="card-container">
              <div className="card-header">
                <div className="card-header-left">
                  <div className='jade-round'></div>
                  <h3>Moi</h3>
                </div>
                <div className="card-header-right">
                  <IconButton
                    aria-label="settings"
                    onClick={(evt) => {
                      handleEditProfil(true);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </div>
              </div>
              <div className="card-content">
                <ul className="infos-container">
                  <div className='left'>
                    <div className="sub-container">
                      <h5>Nom et prénom :</h5>
                      <div className="sub-container-content">
                        <li className="infos-content">{last_name.toUpperCase()} {first_name}</li>
                      </div>
                    </div>
                    <div className="sub-container">
                      <h5>Age :</h5>
                      <div className="sub-container-content">
                        <li className="infos-content">{age ? age : 'Aucune information'}</li>
                      </div>
                    </div>
                    <div className="sub-container">
                      <h5>Civilité :</h5>
                      <div className="sub-container-content">
                        <li className="infos-content">{gender ? gender : 'Aucune information'}</li>
                      </div>
                    </div>
                    <div className="sub-container">
                      <h5>Status :</h5>
                      <div className="sub-container-content">
                        <li className="infos-content">{statut ? statut : 'Aucune informations'}</li>
                      </div>
                    </div>
                    <div className="sub-container">
                      <h5>Enfants :</h5>
                      <div className="sub-container-content">
                        <li className="infos-content">{children ? `${children} ${childrenSentence}` : 'Aucune information'}</li>
                      </div>
                    </div>
                    <div className="sub-container">
                      <h5>Adresse :</h5>
                      <div className="sub-container-content">
                        <li className="infos-content">{(!adress && !zip_code && !city) ? 'Aucune information' : `${address } ${zip_code} ${city.toUpperCase()}` }</li>
                      </div>
                    </div>
                  </div>
                  <div className='right'>
                    <div className="sub-container ">
                      <h5>Téléphone perso :</h5>
                      <div className="sub-container-content">
                        <li className="infos-content">{cellphone_number ? cellphone_number : 'Aucune information'}</li>
                      </div>
                    </div>
                    <div className="sub-container">
                      <h5>Téléphone travail :</h5>
                      <div className="sub-container-content"> 
                        <li className="infos-content">{phone_work ?phone_work : 'Aucune information'}</li>
                      </div>

                    </div>
                    <div className="sub-container">
                      <h5>Téléphone fixe :</h5>
                      <div className="sub-container-content">
                        <li className="infos-content">{ phone_number ? phone_number : 'Aucune information'}</li>
                      </div>

                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </TabPanel>
        )}
        <TabPanel className="category-content" value={value} index={1}>
          <div className="card-container">
            <div className="card-header">
              <div className="card-header-left">
                <Avatar aria-label="recipe">
                  {login.substring(0, 1).toUpperCase()}
                </Avatar>
                <h3>Informations supplémentaires</h3>
              </div>
              <div className="card-header-right">
                <IconButton
                  aria-label="settings"
                  onClick={(evt) => {
                    handleAddInfoSup(true);
                    document.getElementById('add-info-sup-title').focus();
                  }}
                >
                  <AddIcon />
                </IconButton>
                <IconButton aria-label="settings">
                  <EditIcon />
                </IconButton>
              </div>
            </div>
            <div className="card-content">
              <ul className="infos-container">
                {infosSupList}
                {openAddInfoSup && (
                  <form
                    onSubmit={(evt) => {
                      evt.preventDefault();
                      if (!(handdleVerifEmptyValue(infoSup.title) || handdleVerifEmptyValue(infoSup.value))) {
                        const infos = {
                          id: infosSup.length + 1,
                          title: infoSup.title,
                          value: infoSup.value,
                        };
                        dispatch(actionAddInfoSup(infos));
                        dispatch(actionClearAddInfoSup());
                        document.getElementById('add-info-sup-title').focus();
                      }
                    }}
                    className="add-infos-sup-container"
                  >
                    <TextField
                      id="add-info-sup-title"
                      onChange={(evt) => {
                        dispatch(actionSetInfoSupTitle(evt.target.value));
                      }}
                      value={infoSup.title}
                      autoFocus
                    />
                    <p className="add-infos-sup-separator"> : </p>
                    <TextField
                      id="standard-basic"
                      onChange={(evt) => {
                        dispatch(actionSetInfoSupValue(evt.target.value));
                      }}
                      value={infoSup.value}
                    />
                    <IconButton
                      aria-label="delete"
                      onClick={(evt) => {
                        handleAddInfoSup(false);
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <input className="hidden" type="submit" />
                  </form>
                )}
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="category-content" value={value} index={2} />
        <TabPanel className="category-content" value={value} index={3} />
      </div>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <EditProfil />
    </div>
  );
}

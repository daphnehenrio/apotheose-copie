import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


// == Import actions

import {
    actionSetOpenEditProfil,
    actionAddInfoSup,
    actionSetInfoSupTitle,
    actionSetInfoSupValue,
    actionClearAddInfoSup,
} from '../../actions/profil';


// == Import styles
import './styles.scss';

// == Import components
import EditProfil from 'src/components/Profil/EditProfil';


const Category = withStyles({
    root: {
        padding: '2rem',
        letterSpacing: '0.1rem',
        textAlign: 'left',
    }
})(Tab);




function TabPanel(props) {
    const { children, value, index, ...other } = props;

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
        margin: '0 5rem',
        minWidth: '1050px',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));


// -------------------------- Export --------------------------

export default function Profil() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();
    const infoSup = useSelector((state) => state.profil.infoSupToAdd);
    const infosSup = useSelector((state) => state.profil.infosSup);
    const infosSupList = infosSup.map(info => {
        return (
            <li key={info.title} className='infos-content'>{info.title} : {info.value}</li>
        )
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEditProfil = (bool) => {
        dispatch(actionSetOpenEditProfil(bool));
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // -------------------------- Return --------------------------

    return (
        <div className='profil'>
            <h3 className='profil-title'>Mon Profil</h3>
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Category label="Moi" {...a11yProps(0)} />
                    <Category label="Infos supplémentaires" {...a11yProps(1)} />
                    <Category label="Santé" {...a11yProps(2)} />
                    <Category label="Caf" {...a11yProps(3)} />
                </Tabs>
                <TabPanel className='category-content' value={value} index={0}>
                    <div className='card-container'>
                        <div className='card-header'>
                            <div className='card-header-left'>
                                <Avatar aria-label="recipe">
                                    H
                                </Avatar>
                                <h3>Mes Informations</h3>
                            </div>
                            <div className='card-header-right'>
                                <IconButton aria-label="settings" onClick={(evt) => { handleEditProfil(true) }}>
                                    <EditIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className='card-content'>
                            <ul className='infos-container'>
                                <div className='sub-container'>
                                    <h5>Nom et prénom :</h5>
                                    <div className='sub-container-content'>
                                        <li className='infos-content'>LAURENT Henri</li>
                                    </div>

                                </div>
                                <div className='sub-container'>
                                    <h5>Adresse :</h5>
                                    <div className='sub-container-content'>
                                        <li className='infos-content'>2 allée Louise Michel, 29000 QUIMPER</li>
                                    </div>

                                </div>
                                <div className='sub-container'>
                                    <h5>Téléphones :</h5>
                                    <div className='sub-container-content'>
                                        <div className='sub-container'>
                                            <h5>Travail :</h5>
                                            <li className='infos-content'>0651289512</li>
                                        </div>
                                        <div className='sub-container'>
                                            <h5>Perso :</h5>
                                            <li className='infos-content'>0651289512</li>
                                        </div>
                                        <div className='sub-container'>
                                            <h5>Fix :</h5>
                                            <li className='infos-content'>0651289512</li>
                                        </div>
                                    </div>

                                </div>
                                <div className='sub-container'>
                                    <h5>Autre :</h5>
                                    <div className='sub-container-content'>
                                        <li className='infos-content'>Age : 20</li>
                                        <li className='infos-content'>Civilité : Homme</li>
                                        <li className='infos-content'>Status : EN couple</li>
                                    </div>

                                </div>
                            </ul>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className='category-content' value={value} index={1}>
                    <div className='card-container'>
                        <div className='card-header'>
                            <div className='card-header-left'>
                                <Avatar aria-label="recipe">
                                    H
                                </Avatar>
                                <h3>Informations supplémentaires</h3>
                            </div>
                            <div className='card-header-right'>
                                <IconButton aria-label="settings" onClick={handleClickOpen}>
                                    <AddIcon />
                                </IconButton>
                                <IconButton aria-label="settings">
                                    <EditIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className='card-content'>
                            <ul className='infos-container'>
                                {infosSupList}
                            </ul>
                        </div>
                    </div>
                </TabPanel >
                <TabPanel className='category-content' value={value} index={2}>

                </TabPanel>
                <TabPanel className='category-content' value={value} index={3}>
                    Item Four
                 </TabPanel>
            </div>
            <EditProfil />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Ajouter une info</DialogTitle>
                <DialogContent>
                    <div className='add-infos-sup-container'>
                        <TextField
                            id="standard-basic"
                            onChange={(evt) => {dispatch(actionSetInfoSupTitle(evt.target.value))}}
                        />
                        <p className='add-infos-sup-separator'> : </p>
                        <TextField
                            id="standard-basic"
                            onChange={(evt) => {dispatch(actionSetInfoSupValue(evt.target.value))}}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={(evt) => {                           
                            dispatch(actionAddInfoSup(infoSup));
                            dispatch(actionClearAddInfoSup());
                        }}
                        color="primary">
                        Sauvegarder
                    </Button>
                </DialogActions>
            </Dialog>
        </div>


    );

};
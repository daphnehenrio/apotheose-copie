import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


// == Import styles
import './styles.scss';


const Category = withStyles({
    root: {
        padding: '2rem',
        letterSpacing: '0.1rem',
        textAlign: 'left',
    }
})(Tab);



const InfosCard = withStyles({
    root: {
        minHeight: '30rem',
        marginLeft: '5rem',
        backgroundColor: '#1B4353',
        boxShadow: 'none',
        color: 'white'
    },
})(Card);

const InfosCardHeader = withStyles({
    root: {
        borderBottom: '1px solid lightgrey',
        margin: '0 1rem'
    },
    title: {
        fontSize: '1.5rem',
        marginLeft: '1rem',
    },
    avatar: {
        color: 'white'
    }
})(CardHeader);


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
                    <Typography>{children}</Typography>
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
        height: 'auto',
        maxHeight: '50vh',
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
                    <InfosCard className={classes.rootCard}>
                        <InfosCardHeader
                            avatar={
                                <Avatar aria-label="recipe">
                                    H
                                    </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <EditIcon />
                                </IconButton>
                            }
                            title="Mes infos"
                        />
                        <CardContent>
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
                        </CardContent>

                    </InfosCard>
                </TabPanel>
                <TabPanel className='category-content' value={value} index={1}>
                    <InfosCard className={classes.rootCard}>
                        <InfosCardHeader
                            avatar={
                                <Avatar aria-label="recipe">
                                    H
                                    </Avatar>
                            }
                            action={
                                <div>
                                    <IconButton aria-label="settings">
                                    <AddIcon />
                                    </IconButton>
                                    <IconButton aria-label="settings">
                                        <EditIcon />
                                    </IconButton>
                                </div>
                            }
                            title="Infos supplémentaires"
                        />
                        <CardContent>
                            <ul className='infos-contener'>
                                <li className='infos-content'>Ecole</li>
                                <li className='infos-content'>Nounou</li>
                                <li className='infos-content'>Travail</li>
                            </ul>
                        </CardContent>

                    </InfosCard>
                </TabPanel >
                <TabPanel className='category-content' value={value} index={2}>
                    <div>

                    </div>
                </TabPanel>
                <TabPanel className='category-content' value={value} index={3}>
                    Item Four
                 </TabPanel>
            </div>
        </div>


    );

};
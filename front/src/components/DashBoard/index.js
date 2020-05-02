import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import NoteIcon from '@material-ui/icons/Note';
import MemoryIcon from '@material-ui/icons/Memory';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import FolderIcon from '@material-ui/icons/Folder';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ZoomInIcon from '@material-ui/icons/ZoomIn';


// == Import styles
import './styles.scss'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div className= 'tab-content'>{children}</div>
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
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        margin: '8rem 0',
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
}));

export default function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const preventDefault = (event) => event.preventDefault();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='tab-container'>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example"
                    >
                        <Tab label="Notifications" icon={<NotificationsIcon />} {...a11yProps(0)} />
                        <Tab label="Memos" icon={<MemoryIcon />} {...a11yProps(1)} />
                        <Tab label="Notes" icon={<NoteIcon />} {...a11yProps(2)} />
                        <Tab label="Todo" icon={<FormatListBulletedIcon />} {...a11yProps(3)} />
                        <Tab label="Checklists" icon={<PlaylistAddCheckIcon />} {...a11yProps(4)} />
                        <Tab label="Articles" icon={<BookmarkIcon />} {...a11yProps(5)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    Item One
                 </TabPanel>
                <TabPanel value={value} index={1}>
                    <Paper className='cards-infos' >
                        <h4 className='cards-infos-title'>Mes infos</h4>
                        <ul>
                            <li>Nom</li>
                            <li>Prénom</li>
                            <li>Adresse</li>
                            <li>Tél.</li>
                            <li>Email</li>
                        </ul>
                        <div className='cards-infos-footer'>
                            <Link href="#" onClick={preventDefault}>
                                Plus
                                </Link>
                            <FolderIcon />
                        </div>
                    </Paper>
                    <Paper className='cards-infos'>
                        <h4 className='cards-infos-title'>Mes infos</h4>
                        <ul>
                            <li>Nom</li>
                            <li>Prénom</li>
                            <li>Adresse</li>
                            <li>Tél.</li>
                            <li>Email</li>
                        </ul>
                        <div className='cards-infos-footer'>
                            <Link href="#" onClick={preventDefault}>
                                Plus
                                </Link>
                            <FolderIcon />
                        </div>
                    </Paper>
                    <Paper className='cards-infos'>
                        <h4 className='cards-infos-title'>Mes infos</h4>
                        <ul>
                            <li>Nom</li>
                            <li>Prénom</li>
                            <li>Adresse</li>
                            <li>Tél.</li>
                            <li>Email</li>
                        </ul>
                        <div className='cards-infos-footer'>
                            <Link href="#" onClick={preventDefault}>
                                Plus
                                </Link>
                            <FolderIcon />
                        </div>
                    </Paper>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 1</h4>
                        <p className='note-body'>
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </Paper>
                    <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 2</h4>
                        <p>
                            Lorem Ipsum
                        </p>
                    </Paper>
                    <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 3</h4>
                        <p>
                            Lorep ipsum
                        </p>
                    </Paper>
                    <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 3</h4>
                        <p>
                            Lorep ipsum
                        </p>
                    </Paper>
                    <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 3</h4>
                        <p>
                            Lorep ipsum
                        </p>
                    </Paper>
                    <Paper className='notes-infos'>
                        <h4 className='notes-infos-title'>Note 3</h4>
                        <p>
                            Lorep ipsum
                        </p>
                    </Paper>
                </TabPanel>

                <TabPanel value={value} index={3}>
                    <Paper className='cards-infos'>
                        <h4 className='cards-infos-title'>TODO</h4>
                        <FormControl component="fieldset">
                            <FormGroup aria-label="position" column='true'>
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="End"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="End"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="End"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="End"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                        </FormControl>
                    </Paper>
                </TabPanel>

                <TabPanel value={value} index={4}>
                    <Paper className='cards-infos'>
                        <h4 className='cards-infos-title'>Mes checklists</h4>
                        <FormControl component="fieldset">
                            <FormGroup aria-label="position" column='true'>
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="End"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="End"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="End"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="End"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                        </FormControl>
                    </Paper>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Card className="root-card-article">
                        <CardActionArea>
                            <CardMedia
                                className="card-media"
                                image="https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Titre
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation
                                             </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <div className='card-label'>
                                Service
                                        </div>
                        </CardActions>
                    </Card>
                    <Card className="root-card-article">
                        <CardActionArea>
                            <CardMedia
                                className="card-media"
                                image="https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Titre
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation
                                             </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <div className='card-label'>
                                Service
                                        </div>
                        </CardActions>
                    </Card>
                    <Card className="root-card-article">
                        <CardActionArea>
                            <CardMedia
                                className="card-media"
                                image="https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Titre
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation
                                             </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <div className='card-label'>
                                Service
                                        </div>
                        </CardActions>
                    </Card>
                    <Card className="root-card-article">
                        <CardActionArea>
                            <CardMedia
                                className="card-media"
                                image="https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Titre
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation
                                             </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <div className='card-label'>
                                Service
                                        </div>
                        </CardActions>
                    </Card>
                </TabPanel>

            </div>
        </div>
    );
}
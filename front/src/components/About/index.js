import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import Texty from 'rc-texty';


// == Import material ui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




// Import Motion
import { motion, useViewportScroll, useTransform, useMotionValue } from "framer-motion"


// == Import styles
import './styles.scss'

const useStyles = makeStyles({
    root: {
        width: '15rem',
        marginRight: '5rem',
        marginLeft: '5rem',
    },
    media: {
        height: '20rem',
    },
});


export default function About() {

    const classes = useStyles();

    const { scrollYProgress } = useViewportScroll();
    const x = useMotionValue(0);
    const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
    const checklistItems = ['Fiche de paie', 'Facture EDF', `Carte d'identité`, 'Permis de conduire']

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const ScrollOverPack = ScrollAnim.OverPack;

    /* --------- Return ---------- */
    return (

        <div className='infos-page-container'>
            <div className='infos-header'>
                <Texty className='h1' type='top'  delay={400} duration={200}>{`ALDAHE, c'est quoi ?`}</Texty>
                <p>
                    L'administration, quel affreux mot. Se plonger dans les papiers pendant des heures pour
                    trouver une fiche de paie, une facture EDF ... A moins d'être très bien organisé et un pro dans le domaine,
                    il arrive des fois où l'on ne s'y retrouve plus. <strong>C'est la qu'ALDAHE entre en jeu pour vous aider.</strong>
                    <br />
                    Ici, on vous propose de <em>stocker</em> tous les documents dont vous avez besoin et que vous jugez utiles.
                    Jusque la, rien de neuf, un service tel que google drive pourrai largement faire l'affaire. Mais ALDAHE
                    ne s'arrête pas la, non, on vous met à disposition des checklists. Mais alors qu'est-ce qu'une' checklist ?
                    <br />
                    Il vous est également possible d'utiliser des lettres-type pour envoyer vos emails à destination des services d'administration,
                    de votre assurance, votre banque, etc ...
                    <br />
                    Et pourquoi s'arreter en si bon chemin.. Nous mettons également à votre disposition un système "bloc-note" grâce auquel
                    vous pouvez enregistrer les informations que vous jugez utiles. Cela peut-être par exemple un numéro de téléphone voir un carnet d'adresse
                    entier soyons fou !
                <strong> Bref, nous souhaitons rendre votre vie administrative plus simple</strong>
                </p>

            </div>



            <ScrollOverPack
                className="infos-checklists-container"
                playScale="40vh"
            >
                <TweenOne key="0" className='infos-checklists' style={{ opacity: 0,transform:'translateX(-150px)'}} animation={{ opacity: 1,x:0 }}>
                        <h2>Les Checklists, vos nouvelles meilleures amis</h2>

                        <p>Souvent, lorsque vous devez entreprendre une démarche administrative, il vous plusieurs documents.
                        Et bien évidemment ce ne sont pas toujours les mêmes qu'il faut selon le type de la démarche.
                        Les checklists sont la pour vous permmetre un gain de temps et d'energie.
                        </p>
                    </TweenOne>
                    <TweenOne key="1" style={{ opacity: 0}} animation={{ opacity: 1,delay:450 }}>
                    <List key="1" className='checklist-example'>
                    <h3 className="checklist-title">Ckecklist</h3>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={checklistItems[value]} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="comments">
                                            <InsertDriveFileIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            );
                        })}
                    </List>
                </TweenOne>
            </ScrollOverPack>

            <ScrollOverPack
                className='infos-letter-type-container'

                playScale="40vh">
                    <TweenOne key="2" className='infos-letter-type' style={{ opacity: 0,transform:'translateX(150px)'}} animation={{ opacity: 1,x:0 }}>
                       <h2> Des lettres-types pour aller plus vite</h2>
                        <p key="1">
                            Si ecrire un mail de A à Z vous ennuie terriblement, les lettres-type
                            devraient vous soulager un peu. Il s'agit tout simplement de lettres dont la structure de base
                            est deja définie, nous parlons ici des formules de politesses, du sujet du mail etc ...
                            De votre coté vous n'avez qu'à choisir une lettre-type en fonction de la démarche que vous entrepenez
                            et vous n'aurez pratiquement rien à taper puisque en plus de la structure de base, vos informations
                            personnelles, celles que vous aurez enregistré sur le site (nom, prénom, adresse, etc ...) seront
                            automatiquement ajoutées dans le contenu de la lettre. De quoi vous faire gagner quelques précieuses
                            minutes.
                    </p>
                </TweenOne>

            </ScrollOverPack>

            <ScrollOverPack
                className='infos-checklists-container'

                playScale="40vh">

                <TweenOne key="3" className='infos-checklists' style={{ opacity: 0,transform:'translateX(-150px)'}} animation={{ opacity: 1,x:0 }}>
                    <TweenOne key="10" className='h2' style={{ opacity: 0}} animation={{ opacity: 1 }}>
                        Un Bloc-note ? Pour quoi faire ?
                    </TweenOne>
                    <TweenOne
                        key="9"
                        className='p'
                        style={{ transform:'translateX(-150px)'}}
                        animation={{ x:0, delay:450 }}>

                            Bon, rien de révolutionnaire par ici, mais étant donné notre envie de permettre aux gens une centralisation
                            de leurs informations, il nous paraissait intéressant de mettre à votre disposition un système de notes pour vous
                            laisser la possibilité d'enregistrer des informations annexes qui vous semblent utiles d'avoir à porté de mains.

                    </TweenOne>
                </TweenOne>
                <TweenOne
                        key="4"
                        style={{ opacity:0}}
                        animation={{ opacity:1, delay:450 }}>
                <Paper component="div" className="notes-infos">
                    <div className="note-header">
                        <h4 className="notes-infos-title">Carnet d'adresse</h4>
                        <IconButton
                            aria-label="edit"
                        >
                            <EditIcon />
                        </IconButton>
                    </div>
                    <p
                        className="note-body"
                    >
                        Andréa : 0659421525 <br />
                        Ecole enfants : 0258947515 <br />
                        Marie : 06594213 <br />
                        Marie fix : 0259867845 <br />
                        Hervé : 0458751524 <br />
                        Thomas : 0745268971 <br />
                        Etienne : 0698725614 ...


                    </p>
                </Paper>
               </TweenOne>

            </ScrollOverPack>
            <div className='infos-footer'>
                <ScrollOverPack
                    className='infos-team-container'
                    playScale="30vh">
                    <TweenOne
                        key="5"
                        style={{transform: 'scale(0.7)', opacity: 0 }}
                        animation={[{ x: -200, opacity: 1 }]}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://ca.slack-edge.com/TQJ638B0R-UQPN6AEMP-89c6c1a2ed4d-512"
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </TweenOne>
                    <TweenOne key="6"
                        style={{ transform: 'translateX(-200px)', opacity: 0, transform: 'scale(0.7)' }}
                        animation={[{ x: -400, opacity: 1, delay: 450 }]}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://ca.slack-edge.com/TQJ638B0R-UQPMW68N5-9d290f55c072-512"
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </TweenOne>
                    <TweenOne key="7"
                        style={{ transform: 'translateX(-800px)', opacity: 0, transform: 'scale(0.7)' }}
                        animation={[{ x: -600, opacity: 1, delay: 900 }]}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://ca.slack-edge.com/TQJ638B0R-UR80YS5NZ-841bfe59042d-512"
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </TweenOne>

                    <TweenOne key="8"
                        style={{ transform: 'translateX(-500px)', opacity: 0 }}
                        animation={[{ opacity: 1, delay: 1500 }]}>
                        <div style={{ width: '30rem', fontSize: '1.5rem' }}>
                            <h2 className='h2'>Qui est à l'initiative d'ALDAHE ?</h2>
                            <p className='p'>
                                Nous sommes de jeunes développeur web qui avons décidé de mettre en action nos compétences
                                pour apporter de l'aide aux gens qui ont des difficultés d'organisaton au niveau administratif.

                        </p>
                        </div>
                    </TweenOne>

                </ScrollOverPack>
            </div>
        </div>


    )
}

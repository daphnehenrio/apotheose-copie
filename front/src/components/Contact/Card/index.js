
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}




const PostCard = () => {

  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const description = [
    {
      id: 1,
      name: "Alexandre BESSE",
      description: [

        "Alexandre, 28 ans, actuellement à Jablines (77) Seine-et-Marne en région Île-de-France.",
        "Avant la formation d’O’clock je n’avais aucune expérience dans le milieu du développement, mais au fur et à mesure grâce aux petits projets de la formation, du projet Aldahe, j’ai beaucoup appris.",

        "Ce projet est le challenge le plus imposant de cette formation, avec l’équipe nous avons su avancer ensemble pour trouver les solutions les plus adaptés pour aboutir à ce résultat.",
        "Le site est toujours en évolution et nous sommes désireux de le voir se peaufiner.",

        "Nous avons pu apprendre de chacun pour emmagasiner des connaissances et d’élargir nos compétences.",
        "De pouvoir apprendre, concevoir est pour moi le plus important, j’apprécie particulièrement le domaine du virtuel et de l’informatique c’est pourquoi je me suis dirigé vers cette formation."
      ],
    },
    {
      id: 2,
      name: "Henri LAURENT",
      description: [
        "Passionné par le developpement web depuis quelques années déjà, je suis dabord passé par une année de license à l'université avant de me rendre compte que je souhaitais me spécialiser dans le domaine du web. C'est alors que j'ai décidé de rejoindre la grande aventure Oclock avec déjà quelques bagages en informatique qui m'ont été très utiles durant la formation.",
        "Ce fût pendant ce dernier mois de projet intense que je me suis découvert une véritable passion pour le front, j'ai pu expérimenter et apprendre beaucoup et j'ai eu la chance d'avoir des coéquipiers excellent tant par leur niveau que par leur faculté à travailler en équipe.",
        "Maintenant que l'aventure touche à sa fin j'aimerai trouvé un poste de développeur front en entreprise qui me permettrait de continuer à explorer ce merveilleux domaine qu'est le front.",
      ],
    },
    {
      id: 3,
      name: "Daphné HENRIO",
      description: [
        "Daphné, 29ans, maman de 3 enfants, actuellement à Castres (81) et en quête d'un déménagement sur Rennes.",
        "Sans véritable expérience avant la formation O'clock, je me suis épanouie durant les cours autant au travers du back, que du front. J'aime jongler entre les deux et découvrir plein de nouvelles choses. Apprendre est au final ma plus grande passion.",
        "Ce fut un grand plaisir de travailler sur ce projet, une expérience enrichissante, autant côté front que côté back, pleine de découvertes et de bons moments en compagnie de mes collègues qui ont fournit un excellent travail.",
        "Avec ce projet, il nous aura fallut apprendre à bien s'organiser, étant plutôt ambitieux, il nous aura fallu faire des concessions ce qui ne fut pas évident pour aboutir à une première version en seulement 3semaines.",
        "Nous essaierons de poursuivre une V2 par la suite, afin de continuer dans l'apprentissage et améliorer ce que nous avons déjà produit. Nous serions aussi ravis d'aggrandir l'équipe afin de faire évoluer et vivre ALDAHE.",
        "Actuellement en recherche de stage pour consolider mes acquis, j'aimerais pouvoir continuer de travailler en télétravail, après en avoir fait l'expérience avec O'clock durant ces 6 dermiers mois.",
      ],
    },
  ]

  const DialogDescription = ({ index }) => {
    const goodDescription = description[index]
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {goodDescription.name}
        </DialogTitle>
        <DialogContent>
            {goodDescription.description.map((p) => <DialogContentText key={goodDescription.description.indexOf(p)}>{p}</DialogContentText>)}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    )
  }


  return (

    <div className="postcards">
    <Card className={'MuiPostCard--02'}>
      <CardMedia
        className={'MuiCardMedia-root'}
        image={
          'https://ca.slack-edge.com/TQJ638B0R-UQPN6AEMP-89c6c1a2ed4d-512'}
      />
      <CardContent className={'MuiCardContent-root'}>
      <Button
        className={'MuiButton--readMore'}
        onClick={() => {
          setCurrentIndex(0)
          handleClickOpen()
        }}
      >
        En savoir plus
      </Button>
        <Typography className={'MuiTypography--date'} variant={'overline'}>
          Alexandre BESSE
        </Typography>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          Développeur back-end
        </Typography>
        <Typography className={'MuiTypography--subheading'}>
          Référent back et lead back du projet, Alexandre s'est concentré sur la construction de l'api, et toute la mise en place de la bdd.
          Les principales technos utilisées sont :
          <ul className= 'list-techno'>
            <li>NodeJs</li>
            <li>Postgres</li>
            <li>Express</li>
            <li>Sqitch</li>
            <li>Sequelize</li>
            <li>PgAdmin</li>
          </ul>
        </Typography>
        <div className='group-links'>
          <div className="social-links">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <LinkedInIcon />
            </IconButton>
            <Typography>
              <Link href="https://www.linkedin.com/in/alexandre-besse-a4082517a/" target="_blank">
                LinkedIn
              </Link>
            </Typography>
          </div>
          <div className="social-links">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <GitHubIcon />
            </IconButton>
            <Typography>
              <Link href="https://github.com/AlexBGH" target="_blank">
                Github
              </Link>
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className={'MuiPostCard--02'}>
      <CardMedia
        className={'MuiCardMedia-root'}
        image={
          'https://ca.slack-edge.com/TQJ638B0R-UR80YS5NZ-841bfe59042d-512'
        }
      />
      <CardContent className={'MuiCardContent-root'}>
      <Button
        className={'MuiButton--readMore'}
        onClick={() => {
          setCurrentIndex(1)
          handleClickOpen()
        }}
        >
          En savoir plus
        </Button>
        <Typography className={'MuiTypography--date'} variant={'overline'}>
          Henri LAURENT
        </Typography>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          Développeur front-end
        </Typography>
        <Typography className={'MuiTypography--subheading'}>
          Référent front et lead front du projet, Henri s'est principalement attaqué à la mise en place de chaque composant du site et au design.
          Les principales technos utilisées sont :
          <ul className= 'list-techno'>
            <li>React</li>
            <li>Material-UI</li>
            <li>Redux</li>
            <li>Sass</li>
            <li>Axios</li>
            <li>Framer-motion</li>
          </ul>
        </Typography>
        <div className='group-links'>
          <div className="social-links">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <LinkedInIcon />
            </IconButton>
            <Typography>
              <Link href="https://www.linkedin.com/in/henri-laurent-ab75181a3/" target="_blank">
                LinkedIn
              </Link>
            </Typography>
          </div>
          <div className="social-links">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <GitHubIcon />
            </IconButton>
            <Typography>
              <Link href="https://github.com/HenriLaurent" target="_blank">
                Github
              </Link>
            </Typography>
          </div>
          <div className="social-links">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <TwitterIcon />
            </IconButton>
            <Typography>
              <Link href="https://twitter.com/LaurentHenri5?s=09" target="_blank">
                Twitter
              </Link>
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className={'MuiPostCard--02'}>
      <CardMedia
        className={'MuiCardMedia-root'}
        image={
          'https://ca.slack-edge.com/TQJ638B0R-UQPMW68N5-9d290f55c072-512'
        }
      />
      <CardContent className={'MuiCardContent-root'}>
      <Button
        className={'MuiButton--readMore'}
        onClick={() => {
          setCurrentIndex(2)
          handleClickOpen()
        }}
        >
          En savoir plus
        </Button>
        <Typography className={'MuiTypography--date'} variant={'overline'}>
         Daphné HENRIO
        </Typography>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          Dévelopeur full-stack
        </Typography>
        <Typography className={'MuiTypography--subheading'}>
          Product owner, scrum master et git master du projet, Daphné s'est principalement occupée de faire le lien entre front et back afin de gérer dynamiquement le contenu via les appels api.
          Les principales technos utilisées sont :
          <ul className= 'list-techno'>
            <li>React et Material-UI</li>
            <li>Express et sequelize</li>
            <li>Redux</li>
            <li>Postgres</li>
            <li>Axios</li>
            <li>AWS : RDS et ec2</li>
          </ul>
          </Typography>
        <div className='group-links'>
          <div className="social-links">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <LinkedInIcon />
            </IconButton>
            <Typography>
              <Link href="https://www.linkedin.com/in/daphnehenrio" target="_blank">
                LinkedIn
              </Link>
            </Typography>
          </div>
          <div className="social-links">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <GitHubIcon />
            </IconButton>
            <Typography>
              <Link href="https://github.com/daphnehenrio" target="_blank">
                Github
              </Link>
            </Typography>
          </div>
          <div className="social-links">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <TwitterIcon />
            </IconButton>
            <Typography>
              <Link href="https://twitter.com/Daphne_kaihatsu" target="_blank">
                Twitter
              </Link>
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>

    <DialogDescription index={currentIndex} />

    </div>
  )
};

  export default PostCard;

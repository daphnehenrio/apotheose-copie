import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const Article = () => {
    return (
        <div className= 'tab-content'>
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
        </div>
    );
};

export default Article;
import React from 'react';
import ReactMarkdown from 'react-markdown';

// == import Material UI
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './stlyles.scss'

// -------------------------- Export --------------------------

export default function Article(article) {

// -------------------------- Return --------------------------
  return (

    <div className="home-page--container">
      <Card className="article">

        <Typography weight={'bold'} variant={'h2'} bottomSpace={'medium'}>
          {article.article.title}
        </Typography>
        <Typography className="date" color={'hint'} size={'big'} bottomSpace={'medium'}>
          {article.article.created_at} - {article.article.source_content} {article.article.author}
        </Typography>

      <CardMedia
        className="card-media"
        style={{height:"600px"}}
        image={article.article.image}
        title={article.article.source_image}
      />
      <CardContent style={{height:"auto"}}>
        <ReactMarkdown escapeHtml="true" source={article.article.content}/>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>

    </Card>
    </div>
  );
}

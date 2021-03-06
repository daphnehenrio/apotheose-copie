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
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


import './styles.scss'
import { useDispatch } from 'react-redux';

import {
  actionAddArticleFavorite,
  actionRemoveArticleFavorite
} from 'src/actions/articles';





// -------------------------- Export --------------------------

export default function Article(article) {

  const dispatch = useDispatch();

  const userSession = JSON.parse(window.sessionStorage.getItem('user'));

  let disabled = true
  if(userSession){
    disabled = false;
  }

  const handleClick = (id) => {
    dispatch(actionAddArticleFavorite(id))
  }

  const handleClickDelete = (id) => {
    dispatch(actionRemoveArticleFavorite(id))
  }
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
        <IconButton aria-label="revove to favorites" disabled={disabled} onClick={() => handleClickDelete(article.article.id)}>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="add to favorites" disabled={disabled} onClick={() => handleClick(article.article.id)}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>

    </Card>

    </div>
  );
}

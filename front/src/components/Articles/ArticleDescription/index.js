import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import slugify from '@sindresorhus/slugify';

// == import Material UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// == import actions
import { actionChangePage } from 'src/actions/routes';
import { actionGetOneArticle } from 'src/actions/articles'




// -------------------------- Export --------------------------

export default function ArticleDescription(article) {

  const history = useHistory()
  const dispatch = useDispatch()

  const getArticle = () => {
    dispatch(actionGetOneArticle(article.article.id, `/article/${slugify(article.article.title)}`, history))
    //dispatch(actionChangePage(`/article/${slugify(article.article.title)}`, history))
  }
// -------------------------- Return --------------------------
  return (
    
      <Card className="root-card">
        <CardActionArea
          onClick={() => getArticle()}
        >
          <CardMedia
            className="card-media"
            image={article.article.image}
            title={article.article.source_image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{height:'4rem', display:'flex',alignItems:'center'}}>
              {article.article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.article.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        {article.article.sub_category.map((sub_cat) => {
          return (
            <div className="card-label" key={sub_cat.name} style={{backgroundColor:sub_cat.category.color}}>
              {sub_cat.name}
            </div>
          )
        })}

        </CardActions>
      </Card>
    
  );
}

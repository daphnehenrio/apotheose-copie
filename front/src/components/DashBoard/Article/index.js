import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

import ArticleDescription from '../../Articles/ArticleDescription';

const Article = () => {
  const articles = useSelector(state => state.articles.userArticles);

  return (
    <div className="tab-content">
                {
          articles.length > 0
            ? (articles.map((article) => <Grid item sm={8} lg={4} md={6} key={article.id}> <ArticleDescription key={article.title} article={article} /> </Grid>))
            : "Il n'y a pas encore d'articles disponibles"
        }
    </div>
  )
};

export default Article;

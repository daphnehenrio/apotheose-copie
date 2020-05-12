// == import node modules
import axios from 'axios';

// == import action

// == import local
import { base_url } from 'src/utils/axios';
import {
  GET_ARTICLES,
  GET_LAST_ARTICLES,
  actionSetArticles ,
  actionSetLastArticles,
  GET_ALL_ARTICLES,
  actionSetAllArticles,
  GET_ONE_ARTICLE,
  actionSetOneArticle,
  GET_SEARCH_ARTICLES,
  actionSetSearchArticles
} from '../../actions/articles';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- GET MENU ----------------------------

    case GET_ONE_ARTICLE: {
      axios
        .get(`${base_url}/article/${action.id}`,
          {
            withCredentials: true,
          })
        .then((res) => {
          console.log(res.data)
          store.dispatch(actionSetOneArticle(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }

    case GET_ARTICLES: {
      console.log(action.sub_category)
      axios
        .get(`${base_url}/sub-category/${action.sub_category}/articles`,
          {
            withCredentials: true,
          })
        .then((res) => {
          console.log(res.data)
          store.dispatch(actionSetArticles(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }

    case GET_LAST_ARTICLES: {
      axios
        .get(`${base_url}/articles/last`,
          {
            withCredentials: true,
          })
        .then((res) => {
          console.log(res.data)
          store.dispatch(actionSetLastArticles(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }

    case GET_ALL_ARTICLES: {
      axios
        .get(`${base_url}/articles`,
          {
            withCredentials: true,
          })
        .then((res) => {
          console.log(res.data)
          store.dispatch(actionSetAllArticles(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }

    case GET_SEARCH_ARTICLES: {
      console.log(action.value)
      axios
      .get(`${base_url}/articles/search/${action.value}`,
        {
          withCredentials: true,
        })
      .then((res) => {
        console.log(res.data)
        store.dispatch(actionSetSearchArticles(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    break;
    }


    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};

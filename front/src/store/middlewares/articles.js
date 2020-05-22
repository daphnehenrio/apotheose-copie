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
import { actionLoading } from '../../actions/document';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- GET MENU ----------------------------

    case GET_ONE_ARTICLE: {
      store.dispatch(actionLoading(true));
      axios
        .get(`${base_url}/article/${action.id}`,
          {
            withCredentials: true,
          })
        .then((res) => {
          store.dispatch(actionSetOneArticle(res.data));
          store.dispatch(actionLoading(false));
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    }

    case GET_ARTICLES: {
      store.dispatch(actionLoading(true));
      axios
        .get(`${base_url}/sub-category/${action.sub_category}/articles`,
          {
            withCredentials: true,
          })
        .then((res) => {
          store.dispatch(actionSetArticles(res.data));
          store.dispatch(actionLoading(false));
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    }

    case GET_LAST_ARTICLES: {
      store.dispatch(actionLoading(true));
      axios
        .get(`${base_url}/articles/last`,
          {
            withCredentials: true,
          })
        .then((res) => {
          store.dispatch(actionSetLastArticles(res.data));
          store.dispatch(actionLoading(false));
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    }

    case GET_ALL_ARTICLES: {
      store.dispatch(actionLoading(true));
      axios
        .get(`${base_url}/articles`,
          {
            withCredentials: true,
          })
        .then((res) => {
          store.dispatch(actionSetAllArticles(res.data));
          store.dispatch(actionLoading(false));
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    }

    case GET_SEARCH_ARTICLES: {
      store.dispatch(actionLoading(true));
      axios
      .get(`${base_url}/articles/search/${action.value}`,
        {
          withCredentials: true,
        })
      .then((res) => {
        store.dispatch(actionSetSearchArticles(res.data));
        store.dispatch(actionLoading(false));
      })
      .catch((err) => {
        console.trace(err);
      });
    break;
    }


    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};

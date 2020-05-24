import {
  SET_ARTICLES, SET_LAST_ARTICLES, SET_ARTICLE_USER_FAVORITE
} from 'src/actions/articles';
import { SET_ALL_ARTICLES, SET_ONE_ARTICLE, SET_SEARCH_ARTICLES } from '../actions/articles';

const initialState = {
  articles: [],
  AccueilOk: false,
  allTitles: [],
  allTitleOk: false,
  userArticles: [],
  goodarticle: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ONE_ARTICLE: {
      return {
        ...state,
        goodarticle: [action.article],
        AccueilOk: false,
      };
    }
    case SET_ARTICLES: {
      return {
        ...state,
        articles: action.articles.article,
        AccueilOk: false,
      };
    }
    case SET_LAST_ARTICLES: {
      return {
        ...state,
        articles: action.articles,
        AccueilOk: true,
      };
    }
    case SET_ALL_ARTICLES: {
      const titles = action.articles.map((article) => article.title)
      return {
        ...state,
        allTitles: titles,
        allTitleOk: true
      };
    }
    case SET_SEARCH_ARTICLES: {
      return {
        ...state,
        articles: action.articles,
        AccueilOk: false,
      };
    }

    case SET_ARTICLE_USER_FAVORITE: {
      return{
        ...state,
        userArticles: action.data.articles,
      }
    }

    default: {
      return state;
    }
  }
};

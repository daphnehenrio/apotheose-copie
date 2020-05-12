import {
  SET_ARTICLES, SET_LAST_ARTICLES,
} from 'src/actions/articles';
import { SET_ALL_ARTICLES, SET_ONE_ARTICLE } from '../actions/articles';

const initialState = {
  articles: [],
  AccueilOk: false,
  allTitles: [],
  allTitleOk: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ONE_ARTICLE: {
      return {
        ...state,
        articles: [action.article],
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

    default: {
      return state;
    }
  }
};
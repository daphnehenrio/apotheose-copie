export const GET_ONE_ARTICLE = 'action/GET_ONE_ARTICLE';
export const SET_ONE_ARTICLE = 'action/SET_ONE_ARTICLE';
export const GET_ARTICLES = 'action/GET_ARTICLES';
export const GET_LAST_ARTICLES = 'action/GET_LAST_ARTICLES';
export const SET_ARTICLES = 'action/SET_ARTICLES';
export const SET_LAST_ARTICLES = 'action/SET_LAST_ARTICLES';
export const GET_ALL_ARTICLES = 'action/GET_ALL_ARTICLES';
export const SET_ALL_ARTICLES = 'action/SET_ALL_ARTICLES';
export const GET_SEARCH_ARTICLES = 'action/GET_SEARCH_ARTICLES';
export const SET_SEARCH_ARTICLES = 'action/SET_SEARCH_ARTICLES';

/**
 * action ➔ axios's request for get one article
 * @param {number} id - article's id
 */
export const actionGetOneArticle = (id) => ({
  type: GET_ONE_ARTICLE,
  id
});

/**
 * action ➔ set article in reducer article and toogle accueil : false
 * @param {array} article - array of an object whith article's info
 */
export const actionSetOneArticle = (article) => ({
  type: SET_ONE_ARTICLE,
  article,
});

/**
 * action ➔ axios's request to get multiple articles from the same subcategory
 * @param {number} sub_category - sub_category's id
 */
export const actionGetArticles = (sub_category) => ({
  type: GET_ARTICLES,
  sub_category,
});

/**
 * action ➔ axios's request to get last 8 articles updated
 */
export const actionGetLastArticles = () => ({
  type: GET_LAST_ARTICLES,
});

/**
 * action ➔ set articles in reducer article and toogle accueil : true
 * @param {array} articles - array of objects whith articles's info
 */
export const actionSetArticles = (articles) => ({
  type: SET_ARTICLES,
  articles,
});

/**
 * action ➔ set articles in reducer article
 * @param {array} articles - array of objects whith articles's info
 */
export const actionSetLastArticles = (articles) => ({
  type: SET_LAST_ARTICLES,
  articles,
});

/**
 * action ➔ axios's request to get all articles
 */
export const actionGetAllArticles = () => ({
  type: GET_ALL_ARTICLES,
});

/**
 * action ➔ set all articles's title in reducer article
 * @param {array} articles - array of objects whith articles's info
 */
export const actionSetAllArticles = (articles) => ({
  type: SET_ALL_ARTICLES,
  articles,
});

/**
 * action ➔ axios's request to get all articles with <value> in content
 * @param {string} value - word to search.
 */
export const actionGetSearchArticles = (value) => ({
  type: GET_SEARCH_ARTICLES,
  value,
});

/**
 * action ➔ set articles's result of search in reducer article
 * @param {array} articles array of objects whith articles's info
 */
export const actionSetSearchArticles = (articles) => ({
  type: SET_SEARCH_ARTICLES,
  articles,
});


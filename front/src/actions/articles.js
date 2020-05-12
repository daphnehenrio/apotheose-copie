export const GET_ONE_ARTICLE = 'action/GET_ONE_ARTICLE';
export const SET_ONE_ARTICLE = 'action/SET_ONE_ARTICLE';
export const GET_ARTICLES = 'action/GET_ARTICLES';
export const GET_LAST_ARTICLES = 'action/GET_LAST_ARTICLES';
export const SET_ARTICLES = 'action/SET_ARTICLES';
export const SET_LAST_ARTICLES = 'action/SET_LAST_ARTICLES';
export const GET_ALL_ARTICLES = 'action/GET_ALL_ARTICLES';
export const SET_ALL_ARTICLES = 'action/SET_ALL_ARTICLES';


export const actionGetOneArticle = (id) => ({
  type: GET_ONE_ARTICLE,
  id
});

export const actionSetOneArticle = (article) => ({
  type: SET_ONE_ARTICLE,
  article,
});

export const actionGetArticles = (sub_category) => ({
  type: GET_ARTICLES,
  sub_category,
});

export const actionGetLastArticles = () => ({
  type: GET_LAST_ARTICLES,
});

export const actionSetArticles = (articles) => ({
  type: SET_ARTICLES,
  articles,
});

export const actionSetLastArticles = (articles) => ({
  type: SET_LAST_ARTICLES,
  articles,
});

export const actionGetAllArticles = () => ({
  type: GET_ALL_ARTICLES,
});

export const actionSetAllArticles = (articles) => ({
  type: SET_ALL_ARTICLES,
  articles,
});


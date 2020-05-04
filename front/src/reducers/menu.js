import {
  SET_MENU
} from '../actions/menu';

const initialState = {
  category: [
    {id: 1, name: "Assurance", color: "#1E702C", type_id: 1},
    {id: 2, name: "Banque & Finances", color: "#677E51", type_id: 1},
    {id: 3, name: "Éducation", color: "#05966D", type_id: 1},
    {id: 4, name: "Emploi", color: "#5285C4", type_id: 1},
    {id: 5, name: "Énergie", color: "#78A418", type_id: 1},
    {id: 6, name: "Etat-civil", color: "#375D81", type_id: 1},
    {id: 8, name: "Formation", color: "#2C8B99", type_id: 1},
    {id: 9, name: "Internet & Mobile", color: "#764F8D", type_id: 1},
  ]
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MENU: {
      console.log('plop')
      console.log(action)
      return{
        ...state,
        category: action.data[0],
      }
    }

    default: {
      return state;
    }
  }
};

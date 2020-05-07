import {

    SET_NOTE_CONTENT,
    CHANGE_NOTE_CONTENT,
    SET_OPEN_EDIT_PROFIL,
    SET_OPEN_ADD_INFO_SUP,
    ADD_INFO_SUP,
    SET_INFO_SUP_TITLE,
    SET_INFO_SUP_VALUE,
    CLEAR_INFO_SUP,
    EDIT_INFO_SUP,
    EDIT_INFO_SUP_CONTENT,
    CLOSE_EDIT_INFO_SUP,
    UPDATE_LAST_NAME,
    UPDATE_FIRST_NAME,
    UPDATE_LOGIN,
    UPDATE_EMAIL,
    UPDATE_ADDRESS,
    UPDATE_ZIP_CODE,
    UPDATE_FIX_NUMBER,
    UPDATE_CELLPHONE_NUMBER,
    UPDATE_WORK_PHONE,
    UPDATE_CHILDREN,
    UPDATE_GENDER,
    UPDATE_AGE,
    UPDATE_STATUT,
    UPDATE_CITY,

} from '../actions/profil';


const initialState = {
    noteContent: { id: '',title: '', content: '' },
    notes: [
        { id: 1, title: 'Note 1', content: 'hello, note numéro 1' },
        { id: 2, title: 'Note 2', content: 'Je suis la note numéro 2' },
    ],
    openEditProfil: false,
    openAddInfoSup: false,
    infosSup: [
        {id: 1,title: 'Ecole', value:'Poudlard', edit:false},
        {id: 2,title: 'Nounou', value:'Joséphine', edit:false},
    ],
    infoSupToAdd: {title: '', value: ''},
    user: {
      login: '',
      first_name: '',
      last_name: '',
      password: '',
      confirmPassword: '',
      email: '',
      gender: '',
      cellphone_number: '',
      phone_number: '',
      phone_work: '',
      zip_code: '',
      city: '',
      children: '',
      address: '',
      age: '',
      statut: '',
    },
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_NOTE_CONTENT: {
            return {
                ...state,
                noteContent: {id: action.note.id, title: action.note.title, content: action.note.content},
            }
        }
        case CHANGE_NOTE_CONTENT: {
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === action.note.id) {
                        return {
                            ...note,title: action.note.title, content: action.note.content
                        }
                    } else return {
                        ...note,
                    }
                }
                ),
            }
        }
        case SET_OPEN_EDIT_PROFIL: {
            return{
                ...state,
                openEditProfil: action.bool,
            }
        }
        case SET_OPEN_ADD_INFO_SUP: {
            return {
                ...state,
                openAddInfoSup: action.bool,
            }
        }
        case SET_INFO_SUP_TITLE: {
            return {
                ...state,
                infoSupToAdd: {...state.infoSupToAdd, title: action.title }
            }
        }
        case SET_INFO_SUP_VALUE: {
            return {
                ...state,
                infoSupToAdd: {...state.infoSupToAdd, value: action.value}
            }
        }
        case ADD_INFO_SUP: {
            return{
                ...state,
                infosSup: [
                    ...state.infosSup,
                    {id: action.info.id, title: action.info.title, value: action.info.value, edit: false},
                ],
            }
        }
        case CLEAR_INFO_SUP: {
            return {
                ...state,
                infoSupToAdd:{title: '', value: ''},
            }
        }
        case EDIT_INFO_SUP: {
            return {
                ...state,
                infosSup: state.infosSup.map(info => {
                    if (info.id === action.id) {
                        return {
                            ...info, edit: true,
                        }
                    } else return {
                        ...info,
                    }
                }
                ),
            }
        }
        case EDIT_INFO_SUP_CONTENT: {
            console.log('TEST EDIT', action.info);
            return {
                ...state,
                infosSup: state.infosSup.map(info => {
                    if(info.id === action.info.id){
                        return {
                            ...info, title: action.info.title, value: action.info.value, edit:false,
                        }
                    } else return {
                        ...info,
                    }
                })
            }
        }
        case CLOSE_EDIT_INFO_SUP: {
            return {
                ...state,
                infosSup: state.infosSup.map(info => {
                    if(info.id === action.id){
                        return {
                            ...info, edit: false,
                        }
                    } else return {
                        ...info,
                    }
                })
            }
        }
        case UPDATE_LAST_NAME: {
          return {
            ...state,
            user: {
              ...state.user,
              last_name: action.last_name,
            },
          };
        }
        case UPDATE_FIRST_NAME: {
          return {
            ...state,
            user: {
              ...state.user,
              first_name: action.first_name,
            },
          };
        }
        case UPDATE_LOGIN: {
          return {
            ...state,
            user: {
              ...state.user,
              login: action.login,
            },
          };
        }

        case UPDATE_EMAIL: {
          return {
            ...state,
            user: {
              ...state.user,
              email: action.email,
            },
          };
        }
        case UPDATE_ADDRESS: {
          return {
            ...state,
            user: {
              ...state.user,
              address: action.address,
            },
          };
        }
        case UPDATE_ZIP_CODE: {
          return {
            ...state,
            user: {
              ...state.user,
              zip_code: action.zip_code,
            },
          };
        }
        case UPDATE_CITY: {
          return {
            ...state,
            user: {
              ...state.user,
              city: action.city,
            },
          };
        }
        case UPDATE_FIX_NUMBER: {
          return {
            ...state,
            user: {
              ...state.user,
              phone_number: action.phone_number,
            },
          };
        }
        case UPDATE_CELLPHONE_NUMBER: {
          return {
            ...state,
            user: {
              ...state.user,
              cellphone_number: action.cellphone_number,
            },
          };
        }
        case UPDATE_WORK_PHONE: {
          return {
            ...state,
            user: {
              ...state.user,
              phone_work: action.phone_work,
            },
          };
        }
        case UPDATE_CHILDREN: {
          return {
            ...state,
            user: {
              ...state.user,
              children: action.children,
            },
          };
        }
        case UPDATE_GENDER: {
          return {
            ...state,
            user: {
              ...state.user,
              gender: action.gender,
            },
          };
        }
        case UPDATE_AGE: {
          return {
            ...state,
            user: {
              ...state.user,
              age: action.age,
            },
          };
        }
        case UPDATE_STATUT: {
          return {
            ...state,
            user: {
              ...state.user,
              statut: action.statut,
            },
          };
        }
        default: {
            return state;
        }

    }

};

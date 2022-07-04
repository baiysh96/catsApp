import {createStore,applyMiddleware } from "redux"
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {
    favorites:[]
}
const storeReducer = (state= initialState, action) => {
switch (action.type){
    case 'ADD_TO_FAVORITES':
         return  {...state, favorites:[...state.favorites,action.payload]}
    case 'REMOVE_FROM_FAVORITES':
        let newState = state.favorites.filter((favorite,idx) => {
            return action.payload !== idx;
        });

        return {
            ...state,
            favorites: newState
        };

    default:
         return state
   }
}

export const store = createStore(storeReducer, composeWithDevTools(
        applyMiddleware()
));
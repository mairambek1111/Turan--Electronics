import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import {Reducer} from "./reducer/reducer.js";
import {FavoriteReducer} from "./reducer/favorite.js";
import {BasketReducer} from "./reducer/basket.js";

export const store = createStore(combineReducers({
    main: Reducer,
    favorite: FavoriteReducer,
    basket: BasketReducer
}),composeWithDevTools(applyMiddleware(thunk)))
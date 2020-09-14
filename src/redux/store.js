import {createStore, applyMiddleware} from "redux";

import logger from "redux-logger" /*it's a middleware that receive fuctions and pass them to out root reducer */

import rootReducer from "./root-reducer";

const middlewares = [logger]; 
const store = createStore(rootReducer, applyMiddleware(...middlewares));  /* creating a redux store */


export default store;
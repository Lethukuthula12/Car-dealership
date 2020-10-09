import {createStore, applyMiddleware} from "redux";
import { persistStore} from"redux-persist";

import logger from "redux-logger" /*it's a middleware that receive fuctions and pass them to out root reducer */

import rootReducer from "./root-reducer";

const middlewares = [logger]; 
 export const store = createStore(rootReducer, applyMiddleware(...middlewares));  /* creating a redux store */

export const persistor = persistStore(store);


export default {store, persistor};
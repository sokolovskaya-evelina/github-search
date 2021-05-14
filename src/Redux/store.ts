import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer';


export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>

let rootReducer = combineReducers({
    user: reducer,
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.store = store;

export default store

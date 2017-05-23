import Immutable from 'immutable'
import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import helloReducer, * as fromHelloReducer from '../shared/reducer/hello'

const configureStore = (preloadedState, composeEnhancers = compose) => createStore(
  combineReducers({ hello: helloReducer }),
  { hello: Immutable.fromJS(preloadedState.hello) },
  composeEnhancers(applyMiddleware(thunkMiddleware)),
)

export default configureStore

export const getMessage = state => fromHelloReducer.getMessage(state.hello)
export const getMessageAsync = state => fromHelloReducer.getMessageAsync(state.hello)

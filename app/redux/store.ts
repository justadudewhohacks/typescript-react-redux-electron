import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const store = process.env.NODE_ENV === 'development'
  ? createStore(rootReducer, applyMiddleware(createLogger(), thunk))
  : createStore(rootReducer, applyMiddleware(thunk))

export default store
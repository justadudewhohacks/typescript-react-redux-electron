import { combineReducers } from 'redux'

import helloWorldReducer from './HelloWorld/reducer'
import { State as HelloWorldState } from './HelloWorld/types'

export interface RootState {
  readonly helloWorld: HelloWorldState
}

export default combineReducers<RootState>({
  helloWorld: helloWorldReducer
})
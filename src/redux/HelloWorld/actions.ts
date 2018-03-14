import { Dispatch } from 'redux'
import { ActionTypes, Action } from './types'

export default function(service: any) {

  function sayHello (message: string) {
    return async function(dispatch: Dispatch<Action>) {
      dispatch({
        type: ActionTypes.SAY_HELLO,
        payload: {
          message
        }
      })
    }
  }

  return {
    sayHello
  }
}


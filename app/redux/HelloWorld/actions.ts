import { Dispatch } from 'redux'
import { ActionTypes, Action, IHelloWorldService } from './types'

export default function(service: IHelloWorldService) {

  function sayHello () {
    return async function(dispatch: Dispatch<Action>) {
      dispatch({
        type: ActionTypes.SAY_HELLO,
        payload: {
          message: 'waiting for response'
        }
      })
      const message = await service.sayHelloToMainProcess()

      dispatch({
        type: ActionTypes.RECEIVED_HELLO,
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


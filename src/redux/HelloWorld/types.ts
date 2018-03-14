export enum ActionTypes {
  SAY_HELLO = 'SAY_HELLO'
}

export type Action = {
  readonly type: ActionTypes
  readonly payload: {
    readonly message: string
  }
}

export type State = {
  readonly message: string
}

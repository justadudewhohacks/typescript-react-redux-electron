import makeActions from './actions'
import makeService from './services'

export const actions = makeActions(makeService())
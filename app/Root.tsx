import * as React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { HelloWorld } from './components/HelloWorld'
import { RootState } from './redux/rootReducer'
import { actions as helloWorldActions } from './redux/HelloWorld'

function mapStateToProps(state: RootState) {
  return {
    message: state.helloWorld.message
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    sayHello: () => dispatch(helloWorldActions.sayHello())
  }
}

type RootProps = {
  message: string,
  sayHello: () => void
}

class Root extends React.Component<RootProps> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path={'/'}
            render={
              _ => (
                <HelloWorld
                  message={this.props.message}
                  sayHello={this.props.sayHello}
                />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)

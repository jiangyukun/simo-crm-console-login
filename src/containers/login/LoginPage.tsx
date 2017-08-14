/**
 * Created by jiangyukun on 2017/4/6.
 */
import React, {Component} from 'react'
import {Provider} from 'react-redux'

import Login from './Login'

interface LoginAppProps {
  store: any
}

class LoginPage extends Component<LoginAppProps, any> {
  render() {
    return (
      <Provider store={this.props.store}>
        <Login/>
      </Provider>
    )
  }
}

export default LoginPage

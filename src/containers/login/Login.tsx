/**
 * Created by jiangyukun on 2017/4/6.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'

import './login.scss'
import md5 from '../../core/utils/md5'
import {LOGIN} from './types'
import {login} from './login.action'
import {clearState} from '../../action/app.action'
import {context} from '../../core/env'

class Login extends Component<any> {
  seed: number
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.username, md5(this.state.password))
  }

  componentWillMount() {
    this.seed = Math.floor(Math.random() * 3)
  }

  componentDidUpdate() {
    if (this.props.loginFailure) {
      alert(this.props.errorMessage)
      this.props.clearState(LOGIN)
    }
    if (this.props.loginSuccess) {
      if (location.href.indexOf('inline') != -1) {
        location.href = `${context}/inline/index`
      } else {
        location.href = `${context}/prod/index`
      }
    }
  }

  render() {
    return (
      <div className="login">
        <div className="header">
          <div className="logo">
            <h1>
              <img src={require('../images/simo.png')} style={{marginTop: '-40px'}}/>
            </h1>
          </div>
        </div>
        <div className={classnames('content', 'bg' + this.seed)}>
          <div className="content-layout">
            <div className="login-box-warp">
              <div className="login-box">
                <div className="static-form">
                  <div className="login-title">密码登录</div>
                  <form>
                    <div className="field username-field">
                      <label htmlFor="username">
                        <img src={require('./username.svg')}/>
                      </label>
                      <span className="ph-label"></span>
                      <input id="username" type="text" className="login-text" tabIndex={1}
                             value={this.state.username} onChange={e => this.setState({username: e.target.value})}
                      />
                    </div>
                    <div className="field pwd-field">
                      <label htmlFor="password">
                        <img src={require('./password.svg')}/>
                      </label>
                      <span className="ph-label"></span>
                      <input id="password" type="password" className="login-text" tabIndex={2}
                             value={this.state.password} onChange={e => this.setState({password: e.target.value})}
                      />
                    </div>
                    <div className="submit">
                      <button disabled={!this.state.username || !this.state.password} onClick={this.handleSubmit}>登 录</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.app
  }
}

export default connect(mapStateToProps, {login, clearState})(Login)

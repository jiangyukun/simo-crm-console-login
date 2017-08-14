/**
 * Created by jiangyukun on 2017/6/29.
 */
import 'babel-polyfill'
import 'isomorphic-fetch'

import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'

import './scss/common.scss'
import LoginPage from './containers/login/LoginPage'
import request_3_phase from './middlewares/request_3_phase'
import allReducers from './containers/login/login.reducer'

const store = createStore<any>(allReducers, {}, applyMiddleware(request_3_phase))

if (module.hot) {
  module.hot.accept('./containers/login/login.reducer', () => {
    const nextRootReducer = require('./containers/login/login.reducer').default
    store.replaceReducer(nextRootReducer)
  })
}

render(<LoginPage store={store}/>, document.querySelector('#root'))

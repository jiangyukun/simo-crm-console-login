/**
 * Created by jiangyukun on 2017/6/30.
 */
import {fromJS} from 'immutable'
import {combineReducers} from 'redux'

import {LOGIN} from './types'
import phase from '../../core/constants/phase'

/**
 * 使用immutable，将reducer的state封装为iState，不可变数据
 * @param reducerFun 原reducer函数
 * @return 封装后的reducer函数
 */
const wrapReducerState = reducerFun => (state, action) => {
  const iState = fromJS(state)
  return unwrapReducerState(state, iState, reducerFun(iState, action))
}

function unwrapReducerState(state, iState, nextIState) {
  if (iState === nextIState) {
    return state
  }
  return nextIState.toJS()
}

const initValue = {
  loginSuccess: false,
  loginFailure: false,
  errorMessage: ''
}

export default combineReducers({
  app: wrapReducerState(app)
})

function app(iState = fromJS(initValue), action) {
  let nextIState = iState
  switch (action.type) {
    case LOGIN + phase.SUCCESS:
      nextIState = nextIState.set('loginSuccess', true)
      break

    case LOGIN + phase.FAILURE:
      nextIState = nextIState.set('loginFailure', true).set('errorMessage', action.err)
      break

    case phase.CLEAR + LOGIN:
      nextIState = nextIState.set('loginFailure', false).set('errorMessage', '')
      break
  }
  return nextIState
}

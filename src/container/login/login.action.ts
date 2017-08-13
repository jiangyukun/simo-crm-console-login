/**
 * Created by jiangyukun on 2017/6/30.
 */

import {_get} from '../../core/http'
import {THREE_PHASE} from '../../middlewares/request_3_phase'
import {LOGIN} from './types'

const prefix = '/user'

export function login(username, password) {
  return {
    [THREE_PHASE]: {
      type: LOGIN,
      http: () => _get(prefix + `/v1/login/${username}/${password}`)
    }
  }
}

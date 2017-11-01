import * as types from '../constants/ActionTypes';
import APPCONFIG from 'constants/Config';
import Utils from '../utils';

const Fetch = Utils.Fetch;

export const demo = (params) => {
  return dispatch => {
    dispatch({
      type: types.DEMO_TESTCLICK,
      status: '正在发送请求'
    })

    return Fetch({
      url: APPCONFIG.BASEAPI + '/api-access-path',
      type: 'POST',
      dataType: 'json',
      async: true,
      data: {
        params: params,
        datas: 'ceshi'
      }
    }).then(back => {
      dispatch({
        type: types.GLOBAL_SNACKBAR,
        snackbar: {
          autoHideDuration: 5000,
          message: Math.random(),
          open: true,
        }
      })
      dispatch({
        type: types.DEMO_TESTCLICK,
        status: '数据获取成功',
        data: back
      })
    }).catch(err => {
      console.log(err)
      dispatch({
        type: types.DEMO_TESTCLICK,
        status: '获取数据失败',
        data: err
      })
    })
  }
}

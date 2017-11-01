import {
  DEMO_TESTCLICK
} from '../constants/ActionTypes';

const demos = (state = {status: '初始化'}, action) => {
  console.log(state, action)
  switch (action.type) {
    case DEMO_TESTCLICK:
      console.log({
        ...state,
        status: action.status,
        type: action.type
      })
      return {
        ...state,
        status: action.status,
        type: action.type
      };
    default:
      return state;
  }
};

module.exports = demos;

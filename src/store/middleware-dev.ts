import {createLogger} from 'redux-logger'  // 日志
import * as Immutable from 'immutable';

const configMiddleware: any[] = [];

/**
 *  日志
 */
const stateTransformer = (state: any) => {       // 是将Immutable的转成可读
  const newState = {};
  for (const i of Object.keys(state)) {
    newState[i] = Immutable.isImmutable(state[i]) ? state[i].toJS() : state[i]
  }
  return newState;
};

const loggerMiddleware = createLogger({
  collapsed: true,
  diff: true,
  stateTransformer
});

configMiddleware.push(loggerMiddleware);

export default configMiddleware

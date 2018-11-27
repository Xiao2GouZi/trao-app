import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import { batchStoreEnhancer, batchMiddleware } from './middleware/batch-enhancer';  // 通知发送多个dispatch
import NullMiddleware from './middleware/null-string'

import Config from '../config'


const middlewares = [
  thunkMiddleware,
  batchMiddleware,
  NullMiddleware
];

if (Config.isDev) {
  const configMiddleware = require('./middleware-dev');
  middlewares.concat(configMiddleware)
}


export default function configStore () {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
      batchStoreEnhancer
    )
  )
}

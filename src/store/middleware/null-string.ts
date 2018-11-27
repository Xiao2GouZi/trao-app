import * as TSTypes from '../../type'
import Common from '../../common'


/**
 *  过滤数据中所有的null, undefined
 */
const nullMiddleware = () => {
  return (next: any) => {
    return (action: TSTypes.IReduxAction) => {
      action.payload = Common.Utils.dataNoEmpty(action.payload);
      return next(action);
    }
  }
};

export default nullMiddleware












import {IConfig} from '../type'

const Config: IConfig = {
  host: '',
  requestTimeOut: 10,
  isDev: process.env.NODE_ENV === 'development',
};


export default Config

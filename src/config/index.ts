
const config = {

  projectName: 'myProject',
  date: '2018-4-18',

  //配置符合设计稿
  designWidth: 750,

  // 设置 1px 是否需要被转换
  onePxTransform: true,

  // REM 单位允许的小数位。
  unitPrecision: 5,

  // 允许转换的属性
  propList: ['*'],

  // 黑名单里的选择器将会被忽略
  selectorBlackList: [],

  // 直接替换而不是追加一条进行覆盖
  replace: true,

  // 允许媒体查询里的 px 单位转换
  mediaQuery: false,

  // 设置一个可被转换的最小 px 值
  minPixelValue: 0,


  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        // css modules 功能开关与相关配置
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        },

        autoprefixer: {
          enable: true
        },

        pxtransform: {
          enable: true,
          config: {
            selectorBlackList: ['body']
          }
        }
      }
    }
  },


  weapp: {
    module: {
      postcss: {
        // css modules 功能开关与相关配置
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        },

        pxtransform: {
          enable: true,
          config: {
            selectorBlackList: ['body']
          }
        },

        // 小程序端样式引用本地资源内联
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        }


      }
    }
  },







};
//

export default config














/*
 * @Author: Caven
 * @Date: 2020-03-19 22:36:19
 * @Last Modified by: Caven
 * @Last Modified time: 2020-05-09 09:05:41
 */
import Vue from 'vue'

import 'cesium/Widgets/widgets.css'

const hub = new Vue()
class AppLoader {
  constructor() {
    Vue.config.productionTip = false
    Vue.use({
      install(Vue) {
        Vue.prototype.$hub = hub
      }
    })
  }

  install() {
    global.Vue = Vue
    global.Cesium = require('cesium/Cesium')
    return Promise.all([
      import('@dvgis/cesium-map/build/cesium-map/cesium-map.min'),
      import('@/components')
    ])
  }
}

const appLoader = new AppLoader()
export default appLoader

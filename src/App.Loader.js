/**
 * @Author: Caven
 * @Date: 2020-03-19 22:36:19
 */

import Vue from 'vue'
global.Cesium = require('cesium')
require('@dvgis/cesium-map')
require('@dvgis/cesium-widget')
import 'cesium/Widgets/widgets.css'
import '@dvgis/cesium-widget/dist/cesium.widget.min.css'

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
    global.Hub = hub
    return Promise.all([import('@/components')])
  }
}

const appLoader = new AppLoader()
export default appLoader

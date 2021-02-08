/**
 * @Author: Caven
 * @Date: 2021-02-08 09:25:19
 */

import appLoader from './App.Loader'
;(async () => {
  await appLoader.install()
  Promise.all([
    import('./App.vue'),
    import('./router'),
    import('./store')
  ]).then(([{ default: App }, { default: router }, { default: store }]) => {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  })
})()

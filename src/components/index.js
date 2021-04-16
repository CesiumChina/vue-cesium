/**
 * @Author: Caven
 * @Date: 2020-03-19 22:17:28
 */

const componentsWatcher = scanner => {
  scanner.keys().map(key => {
    let name = scanner(key).default.name
    if (name) {
      Vue.component(name, scanner(key).default)
    }
  })
}
const vueScanner = require.context(
  '@/components',
  true,
  /^\.\/((?!\/)[\s\S])+\/index\.vue$/
)
componentsWatcher(vueScanner)

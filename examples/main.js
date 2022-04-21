import Vue from 'vue'
import App from './App.vue'
import FirUI from '../packages'
Vue.config.productionTip = false
Vue.use(FirUI)
new Vue({
  render: h => h(App)
}).$mount('#app')

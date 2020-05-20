import Vue from 'vue'
import 'spectrum-ui-vue/lib/SpectrumUIVue.css'
import SpectrumUIVue from 'spectrum-ui-vue'
import App from './components/App.vue'

Vue.use(SpectrumUIVue)

new Vue({
  render: h => h(App),
}).$mount('#app')

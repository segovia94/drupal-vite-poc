import 'vite/dynamic-import-polyfill'
import {createApp} from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import SFCInstance from './SFCInstance.vue'
import $ from 'jquery'

// Vue Inline Instance.
const customApp = {
  data() {
    return {
      message: "Rendered!"
    }
  },
  mounted () {
    console.log('mounted')
  },
}
const instanceTags = document.querySelectorAll('.v-instance')
for (const instance of instanceTags) {
  createApp({...customApp}).mount(instance)
}


// Vue Multiple SFC instances
const sfcTags = document.querySelectorAll('.sfc-instance')
for (const instance of sfcTags) {
  createApp(SFCInstance).mount(instance)
}


// Vue Single File Component.
const app = createApp(App)
app.mount('#app')


// Jquery
console.log($('body'))

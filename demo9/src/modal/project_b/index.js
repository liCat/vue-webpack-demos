/**
 * Created by shaoXia on 2016/6/19.
 */
import Vue from "vue"
import vueResource from "vue-resource"
Vue.use(vueResource)

import App from "./components/App"
new Vue({
  el:"body",
  components: {
    app: App
  }
})

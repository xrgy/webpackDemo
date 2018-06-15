import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'


new Vue({
  el: '#app',
  router,
  template: '<App/>',//<App />他就是App.vue，template就是选择vue实例要加载哪个模板
  components:{App}
})

import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//import Main from './src/component/Main'
//import _Vue from 'vue'

App.install = (Vue) => {
  if (!Vue) {
    window.Vue = Vue = _Vue;
  }
  Vue.component(App.name, App);
};
export default App;

// new Vue({
//   el: "#app",
//   render: (h) => h(App),
// });

import Vue from 'vue'
import App from './App.vue'


// 导入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 导入路由

import VueRouter from 'vue-router'
// vue use一下
Vue.use(VueRouter)

// 写组件
import index from './components/index.vue'
// 写规则

const routes = [
  {
    path:'/index',
    component:index
  }
]

// 实例化路由对象

const router = new VueRouter({

  routes

})

// 导入全局样式
import './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

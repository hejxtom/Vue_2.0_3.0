//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

import {hunhe} from './mixin'

Vue.config.productionTip=false
//全局引入
Vue.mixin(hunhe)

new Vue({
    el:'#app',
    render:h=>h(App)
});
import Vue from 'vue'
// 完整导入
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
// 局部引入
// import { Button, message } from 'ant-design-vue';


Vue.config.productionTip = false
Vue.use(Antd);

/* v1.1.3+ 自动注册Button下组件，如Button.Group */
// Vue.use(Button);

// Vue.prototype.$message = message;


new Vue({
  render: h => h(App),
}).$mount('#app')

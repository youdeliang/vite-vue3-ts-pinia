import { createApp } from 'vue';
import './styles/index.scss';
// CSS common style sheet
import App from './App.vue';
import store from './store';
import router from './router';
import ElementPlus from 'element-plus';
// element icons
import * as Icons from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
// element dark(内置暗黑模式)
import 'element-plus/theme-chalk/dark/css-vars.css';
// custom element dark(自定义暗黑模式)
import '@/styles/theme/element-dark.scss';

const app = createApp(App);
// 注册element Icons组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(store).use(router).use(ElementPlus).mount('#app');

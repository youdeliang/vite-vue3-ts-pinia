import { createPinia, defineStore } from 'pinia';
import { DEFAULT_PRIMARY } from '@/config/config';

export const GlobalStore = defineStore({
  id: 'globalState',
  state: () => ({
    themeConfig: {
      // 深色模式
      isDark: false,
      // 默认 primary 主题颜色
      primary: DEFAULT_PRIMARY
    }
  }),
  getters: {},
  actions: {}
});
const store = createPinia();

export default store;

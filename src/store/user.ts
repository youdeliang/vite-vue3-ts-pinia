import { defineStore } from 'pinia';
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: '张三'
  }),
  actions: {
    updateName(name: string) {
      this.name = name;
    }
  }
});

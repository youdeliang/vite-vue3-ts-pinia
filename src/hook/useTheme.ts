import { GlobalStore } from './../store/index';
import { computed, onBeforeMount } from 'vue';
export const useTheme = () => {
  const globalStore = GlobalStore();
  const themeConfig = computed(() => globalStore.themeConfig);
  const switchDark = () => {
    const body = document.documentElement as HTMLElement;
    if (themeConfig.value.isDark) body.setAttribute('class', 'dark');
    else body.setAttribute('class', '');
  };

  onBeforeMount(() => {
    switchDark();
  });
  return { switchDark };
};

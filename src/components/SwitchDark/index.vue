<template>
  <el-switch
    v-model="themeConfig.isDark"
    inline-prompt
    style="--el-switch-on-color: #0a0a0a; --el-switch-off-color: #dcdfe6"
    :active-icon="Sunny"
    :inactive-icon="Moon"
    @change="onAddDarkChange"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { GlobalStore } from '@/store';
import { Sunny, Moon } from '@element-plus/icons-vue';
import { useTheme } from '@/hook/useTheme';

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
const { switchDark } = useTheme();
const onAddDarkChange = () => {
  switchDark();
};
</script>

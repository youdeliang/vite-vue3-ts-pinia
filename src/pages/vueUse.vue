<template>
  <h1>测试 vueUse 的鼠标坐标</h1>
  <h3 class="color">Mouse: {{ x }} x {{ y }}</h3>
  <h4>{{ example }}</h4>
</template>

<script lang="ts" setup>
import { useMouse } from '@vueuse/core';
import { onMounted, ref } from 'vue';
import request from '@/utils/axios';

const { x, y } = useMouse();
const example = ref();
onMounted(async () => {
  const a = await request({
    url: 'http://rap2api.taobao.org/app/mock/307848/example/1668691901861'
  });
  console.log('a :>> ', a);
});
</script>

<style>
.color {
  color: var(--main-theme-color);
  background-color: var(size, red);
}
</style>

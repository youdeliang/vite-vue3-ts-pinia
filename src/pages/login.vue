<template>
  <div class="login_container flx-center">
    <SwitchDark class="dark" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import SwitchDark from '@/components/SwitchDark/index.vue';

const route = useRoute();
console.log('route :>> ', route.meta);
</script>

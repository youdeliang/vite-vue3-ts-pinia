<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('route :>> ', route.meta);
</script>

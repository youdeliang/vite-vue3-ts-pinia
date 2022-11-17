<template>
  <div>
    {{ state.name }}
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user';
const state = useUserStore();
state.updateName('123');
</script>

<template>
  <div class="login-container flx-center">
    <SwitchDark class="dark" />
    <div class="login-box">
      <div class="login-left">
        <img src="@/assets/images/login_left0.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img src="@/assets/images/logo.svg" alt="" class="login-icon" />
          <h2 class="logo-text">Geeker Admin</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import SwitchDark from '@/components/SwitchDark/index.vue';
import LoginForm from './components/LoginForm.vue';

const route = useRoute();
console.log('route :>> ', route.meta);
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>

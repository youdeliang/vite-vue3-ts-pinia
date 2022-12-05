<template>
  <el-form :model="loginForm" ref="loginFormRef" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input placeholder="用户名：admin/user" v-model="loginForm.username">
        <template #prefix>
          <el-icon class="el-input__icon"><user /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" placeholder="密码：123456" show-password autocomplete="new-password">
        <template #prefix>
          <el-icon class="el-input__icon"><lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>

  <div class="login-btn">
    <el-button :loading="loading" round :icon="CircleClose" @click="reset(loginFormRef)">重置</el-button>
    <el-button :loading="loading" round type="primary" :icon="UserFilled" @click="login(loginFormRef)">登陆</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import { Login } from '@/api/interface';
import type { ElForm } from 'element-plus';
import { CircleClose, UserFilled } from '@element-plus/icons-vue';

// 定义 formRef（校验规则）
type formInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<formInstance>();
const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});

const loading = ref(false);
const loginForm = reactive<Login.RepLoginForm>({ username: '', password: '' });

const reset = (formEl: formInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const login = (formEl: formInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async valid => {
    if (valid) return;
    loading.value = true;
    try {
      const { data } = await loginApi({ ...loginForm, password: md5(loginForm.password) });
    } finally {
      loading.value = false;
    }
  });
};

onMounted(() => {
  document.onkeydown = (e: any) => {
    e = window.event || e;
    if (e.code === 'Enter' || e.code === 'enter' || e.code === 'NumpadEnter') {
      if (loading.value) return;
      login(loginFormRef.value);
    }
  };
});
</script>

<style lang="scss" scoped>
@import '../index.scss';
</style>

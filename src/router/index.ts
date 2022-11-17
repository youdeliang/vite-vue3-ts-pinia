import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
      btn: [2132, 32232]
    },
    children: [
      {
        path: '/vueUse',
        name: 'VueIndex',
        meta: {
          title: '登陆',
          KeepAlive: true,
          requireAuth: true
        },
        component: () => import('@/pages/vueUse.vue')
      }
    ],
    component: () => import('@/pages/login.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '登陆',
      KeepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/home.vue')
  },
  {
    path: '/vueUse',
    name: 'VueIndex',
    meta: {
      title: '登陆',
      KeepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/vueUse.vue')
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

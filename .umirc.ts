import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/login', component: '@/pages/login/index' },
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: '@/pages/home/index' },
        // { path: '/exchange', component: '@/pages/login/index' },
        // { path: '/help', component: '@/pages/login/index' },
        { exact: false, path: '*', component: '@/layouts/NotFound' },
      ],
    },
  ],
  dva: {
    immer: true,
    hmr: false,
  },
  proxy: {
    '/api': {
      target: 'https://rfinex.vip',
      changeOrigin: true,
    },
  },
  dynamicImport: {
    loading: '@/layouts/Loading',
  },
  hash: true,
  request: false,
  model: false,
  initialState: false,
});

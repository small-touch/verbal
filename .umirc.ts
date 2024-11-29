import { defineConfig } from '@umijs/max';

export default defineConfig({
  history: {
    type: 'hash',
  },
  publicPath: '/verbal/',
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '话术',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      layout: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      layout: false,
    },
  ],
  npmClient: 'pnpm',
});

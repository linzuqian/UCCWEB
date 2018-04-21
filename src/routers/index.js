
export default [
  // 首页
  {
    path: '/',
    name: 'home.index',
    component: () => import('@/page/home/index.vue')
  },
  // 产品
  {
    path: '/product',
    name: 'product.index',
    component: () => import('@/page/product/index.vue')
  },
  // 技术
  {
    path: '/technology',
    name: 'technology.index',
    component: () => import('@/page/technology/index.vue')
  },
  // 骑行
  {
    path: '/riding',
    name: 'riding.index',
    component: () => import('@/page/riding/index.vue')
  },
  // 了解我们
  {
    path: '/about',
    name: 'about.index',
    component: () => import('@/page/about/index.vue')
  }
]

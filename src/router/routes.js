
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'cart', component: () => import('pages/Cart.vue') },
      { path: 'all-products', component: () => import('pages/AllProducts.vue') },
      { path: 'product/:id', name:'product', component: () => import('pages/Product.vue') },
      { path: 'checkout', name:'checkout', component: () => import('pages/Checkout.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Login.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

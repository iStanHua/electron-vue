import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/components/layout/index.vue'

import homePage from '@/views/index.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      component: adminLayout,
      children: [
        {
          path: '/',
          meta: {
            title: '首页'
          },
          component: homePage
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
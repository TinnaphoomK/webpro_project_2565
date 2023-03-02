import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Signin.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: () => import('../views/Mainpage.vue')
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: () => import('../views/ForPassword.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/History.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/Detail.vue')
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: () => import('../views/Reserve.vue')
    },
    {
      path: '/resrequest',
      name: 'resrequest',
      component: () => import('../views/ReserveRequest.vue')
    },
    {
      path: '/reportrequest',
      name: 'reportrequest',
      component: () => import('../views/ReportRequest.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../views/Report.vue')
    },
    {
      path: '/reporthistory',
      name: 'reporthistory',
      component: () => import('../views/ReportHistory.vue')
    },
  ]
})

export default router

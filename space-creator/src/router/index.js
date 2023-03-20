import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/Signin.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/',
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
    {
      path: '/2ndfloor',
      name: '2ndfloor',
      component: () => import('../views/2ndFloor.vue')
    },
    {
      path: '/3rdfloor',
      name: '3rdfloor',
      component: () => import('../views/3rdFloor.vue')
    },
    {
      path: '/mfloor',
      name: 'mfloor',
      component: () => import('../views/MFloor.vue')
    },
  ]
})

export default router

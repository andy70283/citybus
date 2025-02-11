import { createRouter, createWebHistory } from 'vue-router'
// import AboutView from '../views/AboutView.vue'
import FrontView from '@/layout/FrontView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/TempLate',
      name: 'TempLate',
      component: () => import('@/layout/Template.vue'),
    },

    {
      path: '/',
      component: FrontView,
      children: [
        { path: '/', name: 'home', component: () => import('../views/HomePage.vue') },
        { path: '/lostinfo', name: 'lostinfo', component: () => import('../views/LostInfo.vue') },
        { path: '/stopinfo', name: 'stopinfo', component: () => import('../views/StopInfo.vue') },
        { path: '/contractone', name: 'contractone', component: () => import('../views/Contract.vue') },
        { path: '/contactus', name: 'contactus', component: () => import('../views/ContactUs.vue') },
        { path: '/routesearch', name: 'routesearch', component: () => import('../views/RouteSearch.vue') },
        { path: '/allnews', name: 'allnews', component: () => import('../views/AllNews.vue') },
        { path: '/hire', name: 'hire', component: () => import('../views/HireMan.vue') },
        { path: '/joinus', name: 'joinus', component: () => import('../views/JoinUs.vue') },
        { path: '/rentbus', name: 'rentbus', component: () => import('../views/RentBus.vue') },
        { path: '/checkbus', name: 'checkbus', component: () => import('../views/CheckBus.vue') },
        { path: '/okbus', name: 'okbus', component: () => import('../views/OkBus.vue') },
        { path: '/aboutus', name: 'aboutus', component: () => import('../views/AboutUs.vue') },
      ],
    },

    // {
    //   path: '/TempLate',
    //   name: 'TempLate',
    //   component: () => import('../layout/TempLate.vue'),   -> 請使用 @ 盡量少用 .. 
    // },


    // {
    //   path: '/joinus',
    //   name: 'joinus',
    //   component: () => import('../views/JoinUs.vue'),
    // },
  ],
})

export default router

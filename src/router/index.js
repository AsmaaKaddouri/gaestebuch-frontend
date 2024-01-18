import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PersonsView from '@/views/PersonsView.vue'
import YourExperience from '@/views/YourExperience.vue'
import TestView from '@/views/TestView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/your-experience',
    name: 'Your experience',
    component: YourExperience
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/persons',
    name: 'Persons',
    component: PersonsView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Movies from '../views/Movies.vue'
import Upcoming from '../views/Upcoming.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/tvshows',
    name: 'tvshows',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TvShows.vue')
  },
  {
    path: "/upcoming",
    name: "upcoming",
    component: Upcoming
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

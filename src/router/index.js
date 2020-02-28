import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routeList = ['FormDemo', 'GridDemo', 'DisplayDemo']

function getRoute(name) {
  return {
    path: `/${name}`,
    name,
    component: () =>
      import(
        /* webpackChunkName: "name" */ `../views/componentList/${name}.vue`
      ),
  }
}

const routes = [
  {
    path: '/',
    redirect: `/${routeList[0]}`,
  },
  ...routeList.map(route => getRoute(route)),
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "404" */ '../views/componentList/404.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

import { createRouter, createWebHistory } from '@ionic/vue-router';

import TabsView from '../views/tabs/TabsView.vue'
import HomeView from '../views/tabs/HomeView.vue'
import AccountView from '../views/tabs/AccountView.vue'

import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'

import PathNotFoundView from '../views/PathNotFoundView.vue'

import store from '../store';


const routes = [
  {
    path: '/', redirect: '/tabs/home',
    children: [
      {
        path: '/tabs', name: 'tabs', redirect: '/tabs/home', component: TabsView,
        children: [
          { 
            path: '/tabs/home', 
            name: 'home', 
            component: HomeView 
          },
          {
            path: '/tabs/account',
            name: 'account',
            component: AccountView,
            meta: {
              requiresAuth: true,
            }
          },
        ]
      }
    ],
  },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/signup', name: 'signup', component: SignupView },
  {
    path: '/:pathMatch(.*)*', component: PathNotFoundView
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// })

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const user = JSON.parse(localStorage.getItem('user'))

  if (requiresAuth && !user) {
    next('/login');
  } else if (requiresAuth && user) {
    const accessToken = user?.access;
    if (accessToken) {
      const decodedToken = JSON.parse(atob(accessToken.split('.')[1]));
      const expirationTime = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);

      if (expirationTime < currentTime) {
        localStorage.removeItem('user');
        store.dispatch('setLogged_in', false);
      } else {
        store.dispatch('setLogged_in', true);
        next();
      }
    }
  } else {
    next();
  }
});


export default router

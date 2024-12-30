import { createRouter, createWebHistory } from '@ionic/vue-router';
import store from '../store';


import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import PathNotFoundView from '@/views/PathNotFoundView.vue'

import MenuView from '@/views/menu/MenuView.vue'

import HomePage from '@/views/menu/home/HomePage.vue'

import ToolsView from '@/views/menu/tools/ToolsView.vue'

//###############################//

import ChargeRecetteView from '@/views/menu/tools/chargeRecette/ChargeRecetteView.vue'
import DeptView from '@/views/menu/tools/dept/DeptView.vue'
import LostView from '@/views/menu/tools/lost/LostView.vue'

import OrderView from '@/views/menu/tools/product/OrderView.vue'
import ProductView from '@/views/menu/tools/product/ProductView.vue'
import StockView from '@/views/menu/tools/product/StockView.vue'

import BookingView from '@/views/menu/tools/service/BookingView.vue'
import ServiceView from '@/views/menu/tools/service/ServiceView.vue'

import TangaView from '@/views/menu/tools/tanga/TangaView.vue'

import ChatView from '@/views/menu/chat/ChatView.vue'
//###############################//
//

import SettingsView from '@/views/menu/settings/SettingsView.vue'
//###############################//
//

const routes = [
  {
    path: '/', redirect: '/menu/home',
    children: [
      {
        path: '/menu', name: 'menu', component: MenuView,
        children: [
          { path: 'home', name: 'home', component: HomePage },
          {
            path: 'tools',
            meta: {
              requiresAuth: true,
            },
            children: [
              { path: '', name: 'tools', component: ToolsView },
              { path: 'chargeRecette/ChargeRecette', name: 'ChargeRecette', component: ChargeRecetteView },
              { path: 'dept/dept', name: 'dept', component: DeptView },
              { path: 'lost/lost', name: 'lost', component: LostView },

              { path: 'product/order', name: 'order', component: OrderView },
              { path: 'product/product', name: 'product', component: ProductView },
              { path: 'product/stock', name: 'stock', component: StockView },

              { path: 'service/booking', name: 'booking', component: BookingView },
              { path: 'service/service', name: 'service', component: ServiceView },

              { path: 'tanga/tanga', name: 'tanga', component: TangaView },

            ]
          },
          {
            path: '/menu/chat', name: 'chat', component: ChatView,
            meta: {
              requiresAuth: true,
            },
            // children: [
            //   { path: 'chat', name: 'chat', component: chatView },
            // ]
          },
          {
            path: '/menu/settings', name: 'settings', component: SettingsView,
            meta: {
              requiresAuth: true,
            },
            // children: [
            //   { path: 'chat', name: 'chat', component: chatView },
            // ]
          },
        ]
      }
    ]
  },

  { path: '/signup', name: 'signup', component: SignupPage },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/:pathMatch(.*)*', component: PathNotFoundView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



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



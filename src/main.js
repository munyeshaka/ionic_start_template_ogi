import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import axios from 'axios'
import mixins from '@/mixin/index.js';

import {
  IonApp, IonPage, IonicVue, IonRouterOutlet, IonIcon, IonLabel, IonProgressBar,
  IonInput, IonItem, IonButton, IonButtons, IonCol, IonContent, IonSearchbar,
  IonTabBar, IonTitle, IonToolbar, IonHeader, IonMenuButton, IonFabButton,
  IonList, IonMenu, IonToggle, IonItemDivider, IonPopover, IonBadge,
  IonSelectOption, IonSelect, IonDatetime, toastController, IonRefresher,
  IonSpinner, alertController, IonSegment, IonSegmentButton, IonTabButton,
  IonRippleEffect, IonTextarea, IonNote, IonRefresherContent, IonFooter, IonModal, IonCheckbox, IonToast, IonBackButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
} from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

///// ICON //////
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css'

library.add(fas)

///// ICON //////


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'


document.addEventListener('DOMContentLoaded', () => {
  const csrfTokenInput = document.querySelector('input[name="csrfmiddlewaretoken"]');

  if (csrfTokenInput) {
    axios.defaults.headers.common['X-CSRFToken'] = csrfTokenInput.value;
  }
});


const app = createApp(App)


app.config.globalProperties.axios = axios //

app
  .use(IonicVue)
  .use(store)
  .use(FontAwesomeIcon)
  .use(router)
  .mixin(mixins)

  const components = {
    IonApp, IonPage, IonicVue, IonRouterOutlet, IonIcon, IonLabel, IonProgressBar, IonCheckbox,
    IonInput, IonItem, IonButton, IonButtons, IonCol, IonContent, IonSearchbar,
    IonTabBar, IonTitle, IonToolbar, IonHeader, IonMenuButton, IonFabButton,
    IonList, IonMenu, IonToggle, IonItemDivider, IonPopover, IonBadge,
    IonSelectOption, IonSelect, IonDatetime, toastController, IonRefresher,
    IonSpinner, alertController, IonSegment, IonSegmentButton, IonTabButton,
    IonRippleEffect, IonTextarea, IonNote, IonRefresherContent, IonFooter, IonModal, 
    IonToast, IonBackButton,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
  };
  
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })

app.mount('#app');








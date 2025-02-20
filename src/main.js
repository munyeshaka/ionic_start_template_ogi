import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios'
import store from './store'
import mixins from '@/mixin/index.js';


import { IonicVue } from '@ionic/vue';

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

/* all icons */
import * as allIcons from 'ionicons/icons'

// all countries
// import VueTelInput from 'vue-tel-input';
// import 'vue-tel-input/dist/vue-tel-input.css';
// import './theme/vue-tel-input.css';

/* Theme variables */
import './theme/variables.css';

/* video.js */
// import 'video.js/dist/video-js.css';


import {
  IonApp, IonPage, IonRouterOutlet, IonIcon, IonLabel, IonProgressBar,
  IonInput, IonItem, IonButton, IonButtons, IonCol, IonContent, IonSearchbar,
  IonTabBar, IonTitle, IonToolbar, IonHeader, IonMenuButton, IonFabButton,
  IonList, IonMenu, IonToggle, IonItemDivider, IonPopover, IonBadge,
  IonSelectOption, IonSelect, IonDatetime, IonRefresher,IonThumbnail,
  IonSpinner, IonSegment, IonSegmentButton, IonTabButton,
  IonRippleEffect, IonTextarea, IonNote, IonRefresherContent, IonFooter, 
  IonModal, IonCheckbox, IonToast, IonBackButton, IonImg
} from '@ionic/vue';


const app = createApp(App)

app.config.globalProperties.axios = axios //

// Set up allIcons globally
app.config.globalProperties.$allIcons = allIcons;

app
  .use(IonicVue)
  .use(router)
  .use(store)
  .mixin(mixins)
  // .use(VueTelInput);

const components = {
  IonApp, IonPage, IonRouterOutlet, IonIcon, IonLabel, IonProgressBar, IonCheckbox,
  IonInput, IonItem, IonButton, IonButtons, IonCol, IonContent, IonSearchbar,
  IonTabBar, IonTitle, IonToolbar, IonHeader, IonMenuButton, IonFabButton,
  IonList, IonMenu, IonToggle, IonItemDivider, IonPopover, IonBadge,
  IonSelectOption, IonSelect, IonDatetime, IonRefresher,IonThumbnail,
  IonSpinner, IonSegment, IonSegmentButton, IonTabButton,
  IonRippleEffect, IonTextarea, IonNote, IonRefresherContent, 
  IonFooter, IonModal, IonToast, IonBackButton, IonImg
};

Object.entries(components).forEach(([name, component]) => {
  app.component(name, component)
})

app.mount('#app');




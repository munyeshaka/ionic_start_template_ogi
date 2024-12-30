
<template>
  <ion-page>

    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text="" defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Chat</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <p> message </p>
    </ion-content>
  </ion-page>
</template>

<script >
  import { 
    IonContent, IonPage, IonHeader,
    IonButtons, IonBackButton,
    IonToolbar, IonTitle
  } from '@ionic/vue';

  export default {
    // name: 'SimpleView',
    components: { 
      IonContent, IonPage, IonHeader, IonToolbar,
      IonTitle,
      IonButtons, IonBackButton,
    },

    data() {
      return {
        message: 'This modal example uses the modalController to present and dismiss modals.',
      };
    },
    methods: {
    },
  };
</script>
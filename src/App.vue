<template>
  <router-view />
</template>

<script>


import { defineComponent } from 'vue';

import {
  useBackButton, useIonRouter
} from '@ionic/vue';

import { App } from '@capacitor/app';

export default defineComponent({
  name: 'App',
  components: {
  },
  methods: {
  },
  mounted() {
    this.checkLogged_in()
  },
  setup() {
    const ionRouter = useIonRouter();
    useBackButton(-1, () => {
      if (!ionRouter.canGoBack()) {
        App.exitApp();
      }
    });
  }
}); 
</script>

<style>
:root {
  --red: #9d0208;
  --yellow: #d5a93f;
}
</style>
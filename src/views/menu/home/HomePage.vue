<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      <input type="text" placeholder="Rondera" v-model="rondera" required>
      <ion-card>
        <ion-card-header>
          <ion-card-title>egera Tech</ion-card-title>
          <ion-card-subtitle @click="contact">+25769842175</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Building the future, one line of code at a time.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Hyacinth Art House</ion-card-title>
          <ion-card-subtitle @click="contact">+257 61 337 988</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          “Beautify your spaces by preserving nature"
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          Erekana rero ama products ya company imwe imwe bafyonze kuriyo Link iri hejuru hama ugire na e-commerce yayo kugira bagure product ou service, kugira bagire commande, bagire booking
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      rondera: ''
    };
  },
  methods: {
    contact() {
      let text = "Amahoro neza, nari mfise akabazo muri egeratech"
      let url = `https://wa.me/25769842175?text=${text}`
      window.open(url, '_system');
    }
  },
};
</script>
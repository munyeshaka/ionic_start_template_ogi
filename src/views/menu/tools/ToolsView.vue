<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tools</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="container-card">
        <div class="card" router-link="/menu/tools/tanga/tanga">
          <i class="fas fa-donate"></i>
          <span>Tanga</span>
        </div>
        <router-link to="/menu/tools/chargeRecette/chargeRecette" class="card no-decoration">
          <i class="fas fa-money-check-alt"></i>
          <span>Charge | Recette</span>
        </router-link>
        <!-- <div v-if="$store.state.isPaid" class="container-card"> -->
        <div class="card" router-link="/menu/tools/basic/basic">
          <i class="fas fa-file-invoice-dollar"></i>
          <span>Dette</span>
        </div>
        <div class="card" router-link="/menu/tools/basic/basic">
          <i class="fas fa-file-invoice-dollar"></i>
          <span>Lost</span>
        </div>
        <div class="card" router-link="/menu/tools/basic/basic">
          <i class="fas fa-shopping-cart"></i>
          <span>Products</span>
        </div>
        <div class="card" router-link="/menu/tools/dept/dept">
          <i class="fas fa-briefcase"></i>
          <span>Services</span>
        </div>

        <!-- </div> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
// import OurBasic from '@/components/basic/OurBasic.vue';


export default {
  components: {
    // OurBasic
  },
  data() {
    return {
      // subscriptions: []
    };
  },
  methods: {
  },
  mounted() {
    this.checkLogged_in()
  },
};
</script>

<style></style>

<template>
  <ion-app>
    <router-view v-bind:key="$route.fullPath" />
    <ion-toast ref="toast" swipe-gesture="vertical" :is-open="$store.state.showToast" :message="$store.state.toastMessage" :duration="3000" @ionToastDidClose="handleToastClose">
    </ion-toast>
  </ion-app>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  computed: {
    showToast() {
      return this.$store.state.showToast;
    },
    toastMessage() {
      return this.$store.state.toastMessage;
    }
  },
  methods: {
    handleToastClose() {
      this.$store.commit('HIDE_TOAST');
    }
  },
  mounted() {
    this.$store.state.user = JSON.parse(localStorage.getItem('user'))
  }
}
</script>

<style></style>
<template>
  <ion-page>
    <div class="toolbar">
      <span class="header-title">Ibindanga</span>
    </div>
    <ion-content class="ion-padding">
      <div class="account-card">
        <div class="profile">
          <ion-icon :icon="$allIcons.personOutline"></ion-icon>
          <div class="info">
            <span>{{ this.$store.state.user.full_name }}</span>
            <span class="sub-gray">{{ this.$store.state.user.username }}</span>
            <span class="sub-gray"> {{ this.$store.state.user.email }} </span>
          </div>
        </div>
      </div>
      <div class="account-card">
        <ion-list>
          <ion-item detail='true' @click="$store.state.number = true">
            <div slot="start" class="start">
              <ion-icon class="icon" :icon="$allIcons.personOutline"></ion-icon>
            </div>
            <div class="list-label">
              <span class="list-txt">Guhindura numero</span>
            </div>
          </ion-item>
          <ion-item detail='true' @click="$store.state.email = true">
            <div slot="start" class="start">
              <ion-icon class="icon" :icon="$allIcons.mailOutline"></ion-icon>
            </div>
            <div class="list-label">
              <span class="list-txt">Guhindura Email</span>
            </div>
          </ion-item>
          <ion-item detail='true' @click="$store.state.full_name = true">
            <div slot="start" class="start">
              <ion-icon class="icon" :icon="$allIcons.personOutline"></ion-icon>
            </div>
            <div class="list-label">
              <span class="list-txt">Guhindura izina</span>
            </div>
          </ion-item>
          <ion-item detail='true' @click="$store.state.password = true">
            <div slot="start" class="start">
              <ion-icon class="icon" :icon="$allIcons.lockClosedOutline"></ion-icon>
            </div>
            <div class="list-label">
              <span class="list-txt">Guhindura ijambo kabanga</span>
            </div>
          </ion-item>
          <ion-item detail='true'>
            <div slot="start" class="start">
              <ion-icon class="icon" :icon="$allIcons.listOutline"></ion-icon>
            </div>
            <router-link class="list-label" to="/billing">
              <span class="list-txt">Ingene nagiye ndariha</span>
            </router-link>
          </ion-item>
          <ion-item detail='true' @click="demanderAide()">
            <div slot="start" class="start">
              <ion-icon class="icon" :icon="$allIcons.logoWhatsapp"></ion-icon>
            </div>
            <div class="list-label">
              <span class="list-txt">Ufise ico ubaza</span>
            </div>
          </ion-item>
          <ion-item detail='true' v-if="this.$store.state.user.is_staff">
            <div slot="start" class="start">
              <ion-icon class="icon" :icon="$allIcons.cogOutline"></ion-icon>
            </div>
            <router-link class="list-label" to="/admin">
              <span class="list-txt">Administration</span>
            </router-link>
          </ion-item>

        </ion-list>
      </div>
      <div class="account-card" @click="confirmLogout">
        <div class="logout">
          <ion-icon :icon="$allIcons.logOut"></ion-icon>
          <span>Kwugara</span>
        </div>
      </div>

      <div class="account-card">
        Impinduro 1.0.0
      </div>
      <div class="account-card">
        <span>App yacu. © {{ new Date().getFullYear() }}</span>
        <span class="sub-gray">Uburenganzira bwose buratwegukiye</span>
      </div>
      <!-- <OurNumber v-if="$store.state.number" @close="close">
      </OurNumber>
      <OurEmail v-if="$store.state.email" @close="close">
      </OurEmail>
      <OurFullname v-if="$store.state.full_name" @close="close">
      </OurFullname>
      <OurPassword v-if="$store.state.password" @close="close">
      </OurPassword>
      <OurFooter></OurFooter> -->
    </ion-content>
  </ion-page>
</template>

<script>
import store from '@/store';

// import OurNumber from '@/components/account/OurNumber.vue'
// import OurEmail from '@/components/account/OurEmail.vue'
// import OurPassword from '@/components/account/OurPassword.vue'
// import OurFullname from '@/components/account/OurFullname.vue'
// import OurFooter from '@/components/OurFooter.vue'

export default {
  data() {
    return {
    };
  },
  components: {
    // OurNumber,
    // OurEmail,
    // OurPassword,
    // OurFullname,
    // OurFooter
  },
  methods: {
    mounted() {
    },
  }
}
</script>

<style></style>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Settings</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <div class="profile">
                <span> Profile </span>
                <span>{{ user.username }}</span>
                <span>paid: {{ $store.state.isPaid }}</span>

                <div class="card" router-link="/menu/tools/basic/basic">
            <i class="fas fa-shopping-cart"></i>
            <span>Online shop for verified organisation, 5k/m , pay 25k/ 6m , 50k/ 1year </span>
          </div>
          

                <span class="logout" v-if="logged_in" @click="confirmLogout()">Logout</span>
            </div>
        </ion-content>

    </ion-page>
</template>

<script>
import store from '@/store';

import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default {
    components: { IonContent, IonPage, IonHeader, IonToolbar, IonTitle },
    data() {
        return {
        };
    },
    methods: {
        confirmLogout() {
            if (confirm('Voulez-vous vraiment vous deconnecter?')) {
                this.logout();
            }
        },
        logout() {
            localStorage.removeItem('user');
            store.dispatch('setLogged_in', false);
            this.$store.state.user = '';
            // this.$toast.success("Good bye, you logged out !!", {
            //     position: "bottom",
            //     maxToasts: 1
            // });
            this.$router.push('/')
        },
    },
};
</script>

<style>
.profile {
    display: flex;
    flex-direction: column;
}

.logout {
    cursor: pointer;
    margin: 5px 0;
}
</style>
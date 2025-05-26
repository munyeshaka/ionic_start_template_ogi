<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="signup-container">
        <img @click="goHome()" loading="lazy" src="/static/logo.png">
        <ion-list>
          <form class="form" @submit.prevent="onSignup">
            <ion-item class="custom-item">
              <ion-input label="Andika Nimero" label-placement="floating" placeholder="nimero" v-model="form.username"
                :clear-on-edit="true">
              </ion-input>
            </ion-item>
            <small v-for="err in data_error?.username" :key="err.id">
              {{ err }}
            </small>
            <ion-item class="custom-item">
              <ion-input label="Andika email" label-placement="floating" placeholder="email" v-model="form.email"
                type="email"></ion-input>
            </ion-item>
            <small v-for="err in data_error?.email" :key="err.id">
              {{ err }}
            </small>
            <ion-item class="custom-item">
              <ion-input label="Andika ijambo kabanga" label-placement="floating" placeholder="ijambo kabanga"
                v-model="form.password" type="password"></ion-input>
            </ion-item>
            <small v-for="err in data_error?.password" :key="err.id">
              {{ err }}
            </small>
            <button class="btn-main" type="submit">
              <ion-icon v-if="!loading" :icon="$allIcons.logIn"></ion-icon>
              <span>{{ loading ? "Rindira..." : btn }}</span>
            </button>
            <small>{{ data_error?.detail }}</small>
            <span class="sub-gray">Urafise konti? <span class="login_color" @click="goLogin">Injira</span></span>
          </form>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
      },
      data_error: {},
      loading: false,
      btn: 'Kwiyandikisha'

    };
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goLogin() {
      this.$router.push('/login')
    },
    onSignup() {
      this.loading = true;
      this.axios.post(this.$store.state.baseUrl + '/users/signup/', this.form)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          this.$store.state.user = JSON.parse(localStorage.getItem('user'))
          this.$store.dispatch('setLogged_in', true);
          this.loading = false
          if (this.$store.state.movie_id === '') {
            this.$store.dispatch('triggerToast', 'Kaze, wamaze kwinjira !');
            this.$router.push('/')
          } else {
            this.$router.push(`/movie/${this.$store.state.movie_id}`)
            this.$store.dispatch('triggerToast', 'Kaze, wamaze kwinjira !');
          }
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
          this.data_error = error.response?.data
        });
    }
  }
};
</script>

<style></style>

<template>
  <div class="auth-container">
    <div class="auth-card">
      <img @click="goHome()" src="/static/logo.png">
      <form class="form" @submit.prevent="onSignup">
        <h2>Créer un compte</h2>
        <label>Email</label>
        <input type="Email" placeholder="email" v-model="form.email" required>
        <small class="red_ogi" v-for="err in data_error?.email" :key="err.id">
          {{ err }}
        </small>
        <label>Nom d'utilisateur</label>
        <input type="text" placeholder="Nom d'utilisateur" v-model="form.username" required>
        <small class="red_ogi" v-for="err in data_error?.username" :key="err.id">
          {{ err }}
        </small>
        <label>Mot de Passe</label>
        <input type="password" placeholder="Mot de Passe" v-model="form.password" required>
        <small class="red_ogi" v-for="err in data_error?.password" :key="err.id">
          {{ err }}
        </small>
        <button class="btn" type="submit">{{ loading ? "Chargement..." : btn }}</button>
        <div class="auth-footer">
          <span>Avez-vous un compte ??</span><span class="link" @click="goLogin">Se connecter</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginView",
  data() {
    return {
      login: true,
      signup: false,
      form: {
        email: '',
        username: '',
        password: ''
      },
      data_error: {},
      btn: "S'inscrire",
      loading: false
    };
  },
  components: {
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
      let data = {
        username: this.form.username,
        password: this.form.password,
        email: this.form.email
      };

      this.axios.post(this.$store.state.baseUrl + '/signup/', data)
        .then(() => {
          this.login = true
          this.loading = false;
          this.form.email = ''
          // this.$toast.success('Signup done!', {
          //   position: "bottom",
          //   maxToasts: 1
          // })
        })
        .catch(error => {
          console.log(error);
          this.data_error = error.response?.data
          // this.$toast.error(error, {
          //   position: "bottom",
          //   maxToasts: 1
          // })
          this.loading = false;
        });

    },
  },
  mounted() {
  }
};
</script>


<style>
.auth-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-card img {
  width: 80px;
  height: 80px;
}

/* label {
  color: yellow;
  margin: 8px 0 3px 0;
} */

.auth-footer {
  font-size: 12px;
  display: flex;
  gap: 10px;
}

.link {
  color: var(--primary);
  cursor: pointer;
}
</style>

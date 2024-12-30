<template>
  <div class="auth-container">
    <div class="auth-card">
      <img @click="goHome()" src="/static/logo.png">
      <form class="form" @submit.prevent="onLogin">
        <h2>Se connecter</h2>
        <label>Nom d'utilisateur</label>
        <input type="text" placeholder="Nom d'utilisateur" v-model="form.username" required>
        <small v-for="err in data_error?.username" :key="err.id">
          {{ err }}
        </small>
        <label>Mot de Passe</label>
        <input type="password" placeholder="Mot de Passe" v-model="form.password" required>
        <small v-for="err in data_error?.password" :key="err.id">
          {{ err }}
        </small>
        <button class="btn" type="submit">{{ loading ? "Chargement..." : btn }}</button>
        <small>{{ data_error.detail }}</small>
        <div class="auth-footer">
          <span>Vous n'avez pas de compte ??</span><span class="link" @click="goSignup">Créer un compte</span>
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
      btn: 'Se connecter',
      loading: false
    };
  },
  components: {
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goSignup() {
      this.$router.push('/signup')
    },
    onLogin() {
      this.loading = true
      this.axios
        .post(this.$store.state.baseUrl + '/login/', this.form)
        .then((response) => {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data));
          this.loading = false
          this.form.username = ''
          this.form.password = ''
          this.$router.push('/menu/tools')
        })
        .catch(error => {
          console.log(error);
          this.loading = false
          this.data_error = error.response?.data
        });
    },
  },
  mounted() {
  }
};
</script>


<style>
</style>

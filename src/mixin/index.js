import store from '../store';

export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user'))
        }
    },
    methods: {
        getHeaders() {
            return {
                headers: {
                    'Authorization': 'Bearer ' + this.user.access
                }
            };
        },
        checkLogged_in() {
            if (this.user) {
                const accessToken = this.user.access
                if (accessToken) {
                    const decodedToken = JSON.parse(atob(accessToken.split('.')[1]));
                    const expirationTime = decodedToken.exp;
                    const currentTime = Math.floor(Date.now() / 1000);

                    if (expirationTime < currentTime) {
                        localStorage.removeItem('user');
                        store.dispatch('setLogged_in', false);
                    } else {
                        store.dispatch('setLogged_in', true);
                        this.checkSubscription()
                    }
                }
            } else {
                this.$router.push('/login');
            }
        },
        checkSubscription() {
            this.axios.get(this.$store.state.baseUrl + `/last-subscription/`, this.getHeaders())
                .then(response => {
                    if (response.data.length > 0) {
                        this.$store.state.isPaid = true;
                        console.log('wararishe kweri', this.$store.state.isPaid);
                    } else {
                        // this.$router.push({ name: 'payment', query: { 'event_id': this.event_id } });
                        this.$store.state.isPaid = false;
                        console.log('riha', this.$store.state.isPaid);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
    computed: {
        logged_in() {
            return this.$store.getters.getLogged_in;
        }
    },
    mounted() {
    }
};




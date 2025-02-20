// import axiosMethods from "./axiosMethods"
import store from '../store';

export default {
    // mixins: [axiosMethods],
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            // paymentToken: JSON.parse(localStorage.getItem('paymentToken'))
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

        cutText(text) {
            let maxLength = 25;
            if (text?.length > maxLength) {
                return text.substring(0, maxLength) + '...';
            } else {
                return text;
            }
        },
        // demanderAide() {
        //     let text = "N'amahoro neza, ni gute noriha kugira RABA FILM ??"
        //     let url = `https://wa.me/25769842175?text=${text}`
        //     window.open(url, '_system');
        // },
        // confirmLogout() {
        //     if (confirm('Vyukuri ushaka kwugara?')) {
        //         localStorage.removeItem('user');
        //         this.$store.dispatch('setLogged_in', false);
        //         this.$store.state.user = '';
        //         this.$store.dispatch('triggerToast', 'Sawa bayi !');
        //         this.$router.push('/')
        //     }
        // },
    },
    computed: {
        logged_in() {
            return this.$store.getters.getLogged_in;
        },
    },
    mounted() {
    },
}
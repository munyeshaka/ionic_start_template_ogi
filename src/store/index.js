
import { createStore } from 'vuex'


export default createStore({
    state: {
        // baseUrl: 'https://streaming.amidev.bi/api',
        baseUrl: 'http://127.0.0.1:8000/api',
        
        user: '',
        logged_in: false,
        isPaid: false,

        users: [], /// ALL
        works: [],
        workOgi: [],
        depts: [],
        losts: [],
        shopCategories: [],
        shopProducts: [],
        user_logged: [],

        modal: false
    },
        mutations: {
        logout(state) {
            state.user = null;
            localStorage.removeItem('user');
        },
        SET_LOGGED_IN(state, value) {
            state.logged_in = value;
        },
        SHOW_TOAST(state, message) {
            state.toastMessage = message;
            state.showToast = true;
        },
        HIDE_TOAST(state) {
            state.showToast = false;
            state.toastMessage = '';
        },
    },
    actions: {
        setLogged_in({ commit }, value) {
            commit('SET_LOGGED_IN', value);
        },
        triggerToast({ commit }, message) {
            commit('SHOW_TOAST', message);
            setTimeout(() => {
                commit('HIDE_TOAST');
            }, 3000);
        },
    },
    modules: {
    },
    getters: {
        getLogged_in: state => state.logged_in
    },
    computed: {
    },
    mounted() {
    },
})


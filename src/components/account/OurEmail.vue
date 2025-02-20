<template>
    <div class="container-modal" @click="close">
        <div class="content-modal" @click.stop>
            <ion-list>
                <form class="form" @submit.prevent="save">
                    <ion-item class="custom-item">
                        <ion-input label="Andika email rishasha" label-placement="floating" placeholder="email"
                            v-model="form.email" type="mail"></ion-input>
                    </ion-item>
                    <small v-for="err in data_error?.email" :key="err.id">
                        {{ err }}
                    </small>
                    <button class="btn-main" type="submit">{{ loading ? "Rindira..." : btn }}</button>
                </form>
            </ion-list>
            <small>{{ data_error.detail }}</small>
        </div>
    </div>
</template>

<script>

export default {
    name: "OurModal",
    data() {
        return {
            loading: false,
            btn: 'Hindura',

            form: {
                email: ''
            },
            data_error: ''
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        save() {
            if (confirm("Vyukuri urashaka guhindura email ?")) {
                this.loading = true;
                const data = {
                    email: this.form.email,
                };

                this.axios.put(this.baseUrl + `/user-edit/`, data, this.getHeaders())
                    .then(() => {
                        this.loading = false;
                        this.close();
                        this.$store.dispatch('triggerToast', 'Email yahindutse!');
                    })
                    .catch(error => {
                        console.log(error);
                        this.data_error = error.response?.data
                        this.loading = false;
                    });
            }
        },
    },
    mounted() {
    },
};
</script>

<style>
</style>
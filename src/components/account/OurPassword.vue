<template>
    <div class="container-modal" @click="close">
        <div class="content-modal" @click.stop>
            <ion-list>
                <form class="form" @submit.prevent="save">
                    <ion-item class="custom-item">
                        <ion-input label="Andika ijambo kabanga rishasha" label-placement="floating"
                            placeholder="ijambo kabanga" v-model="form.old_password" type="password"></ion-input>
                    </ion-item>
                    <small v-for="err in data_error?.old_password" :key="err.id">
                        {{ err }}
                    </small>
                    <ion-item class="custom-item">
                        <ion-input label="Andika ijambo kabanga rishasha" label-placement="floating"
                            placeholder="ijambo kabanga" v-model="form.new_password" type="password"></ion-input>
                    </ion-item>
                    <small v-for="err in data_error?.new_password" :key="err.id">
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
                old_password: '',
                new_password: ''
            },
            data_error: ''
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        save() {
            if (confirm("Vyukuri urashaka guhindura ijambo kabanga ?")) {
                this.loading = true;
                const data = {
                    old_password: this.form.old_password,
                    new_password: this.form.new_password,
                };

                this.axios.put(this.baseUrl + `/change-password/`, data, this.getHeaders())
                    .then(() => {
                        this.loading = false;
                        // Reset form fields
                        this.form.old_password = '';
                        this.form.new_password = '';
                        // Close the password modal
                        this.close();
                        this.$store.dispatch('triggerToast', 'Ijambo kabanga ryahindutse!');
                    })
                    .catch(error => {
                        console.log(error);
                        this.data_error = error?.response?.data
                        this.loading = false;
                    });
            }
        },
    },
    mounted() {
    },
};
</script>

<style></style>
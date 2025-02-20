<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="signup-container">
                <img @click="goHome()" loading="lazy" src="/static/logo.png">
                <br>
                <br>
                <span class="result">404 | Not Found.</span>
            </div>
        </ion-content>
    </ion-page>
</template>


<script>

export default {
    methods: {
        goHome() {
            this.$router.push('/')
        },
    }
}
</script>
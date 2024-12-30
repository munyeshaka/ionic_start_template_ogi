<template>
    <div class="notFound">
        <img @click="goHome()" src="/static/logo.png">
        <h2>404 Not Found</h2>
    </div>
</template>

<script>

export default {
    name: "PathNotFoundView",
    data() {
        return {
        };
    },
    methods: {
        goHome() {
            this.$router.push('/')
        },
    }
};
</script>

<style>
.notFound {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.notFound img{
    width: 50px;
    height: 50px;
    text-align: center;
}
</style>

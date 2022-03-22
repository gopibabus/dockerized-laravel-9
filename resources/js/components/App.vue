<template>
<div class="main">
    <h1 class="text-xl text-center">{{ message }}</h1>
</div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Dockerized Laravel Application with Vue.js"
            }
        }
    }
</script>

<style scoped>
.main {
    display: block;
}
</style>

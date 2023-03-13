<script setup>
    import { ref } from 'vue';
    import { useAuthStore } from '../stores/auth';

    const authStore = useAuthStore();

    const formData = ref({
        email: '',
        password: ''
    })

</script>

<template>
    <h1>Login</h1>
    <form @submit.prevent="$event => authStore.handleLogin(formData)"  action="">
        <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email">
        </div>

        <div>
        <label for="password">Password</label>
        <input type="text" id="password" v-model="formData.password">
        </div>

        <button type="submit">Send</button>
    </form>
</template>

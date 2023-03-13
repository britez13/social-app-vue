<script setup>
    import { onMounted } from 'vue';
    import { useAuthStore } from '../stores/auth';

    const authStore = useAuthStore();

    onMounted( async() => {
        await authStore.getUser()
        console.log(authStore.user)
    })

</script>

<template>
    <h1>Home</h1>
    <div v-if="authStore.user">
        <h1>{{ authStore.user.name }}</h1>
        <h1>{{ authStore.user.email }}</h1>
    </div>
    <div v-else>
        <h1>Go login</h1>
    </div>
</template>
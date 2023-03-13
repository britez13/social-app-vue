<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';

    const router = useRouter();

    const formData = ref({
        email: '',
        password: ''
    })

    const handleSubmit = async(formData) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/login', {
                email: formData.email,
                password: formData.password,
            })
            router.push('/')
        } catch (error) {
            alert(error)
        }
    }

</script>

<template>
    <h1>Login</h1>
    <form @submit.prevent="$event => handleSubmit(formData)"  action="">
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

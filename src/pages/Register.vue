<script setup>
    import { reactive, ref } from 'vue';
    import { useAuthStore } from '../stores/auth'; 

    const authStore = useAuthStore();

    const formData = reactive({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        file: ''

    })

    const handleChange = (event) => {
        console.log(event.target.files)
        formData.file = event.target.files[0]
    }


</script>

<template>
    <h1>Register</h1>
    <form @submit.prevent="authStore.handleRegister(formData)" enctype="multipart/form-data">
        <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="formData.name">
        </div>
        <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="formData.email">
        </div>
        <div>
        <label for="password">password</label>
        <input type="text" name="password" id="password" v-model="formData.password">
        </div>
        <div>
        <label for="password_confirmation">Confirm password</label>
        <input type="text" name="password_confirmation" id="password_confirmation" v-model="formData.password_confirmation">
        </div>
        <div>
        <label for="image">Image</label>
        <input type="file" @change='handleChange($event)'  id="image" name="image_profile_path" accept="image/*">
        </div>

        <button type="submit">Send</button>

    </form>
</template>
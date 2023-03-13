import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            authUser: null
        }
    },
    getters: {
        user: (state) => state.authUser
    },
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie')
        },
        async getUser() {
            await this.getToken();
            const data = await axios.get('/api/user');
            this.authUser = data.data;
            console.log(this.authUser)
        },
        async handleLogin(data) {
            await this.getToken();
            try {
                await axios.post('/login', {
                    email: data.email,
                    password: data.password
                })
                this.router.push('/')
            } catch (error) {
                alert(error.message)
            }
        }
    }
}) 
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
  }),
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async getUser() {
      await this.getToken();
      const data = await axios.get("/api/user");
      this.authUser = data.data;
      console.log(this.authUser);
    },
    async handleLogin(data) {
      await this.getToken();
      try {
        await axios.post("/login", {
          email: data.email,
          password: data.password,
        });
        this.router.push("/");
      } catch (error) {
        alert(error.message);
      }
    },

    async handleRegister(data) {

        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('password', data.password)
        formData.append('password_confirmation', data.password_confirmation)
        formData.append('file', data.file)

        console.log(formData)

      await this.getToken();
      try {
        await axios.post("/register", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        this.router.push("/");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
  },
});

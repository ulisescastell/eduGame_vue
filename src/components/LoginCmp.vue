<template>
    <div class="main">
        <NavCmp />
        <main>
            <div class="containerTotal">
                <div class="login-container">
                    <h1>Login</h1>
                    <form @submit.prevent="login" method="POST">
                        <label for="email">Email:</label>
                        <input v-model="email" type="email" name="email" required><br><br>
                        <label for="password">Password:</label>
                        <input v-model="password" type="password" name="password" required><br><br>
                        <button type="submit">Login</button>
                    </form>
                    <p v-if="data"> {{ data }}</p>
                </div>
            </div>
        </main>
        <FooterCmp />
    </div>
</template>

<script setup>
import NavCmp from "@/components/NavCmp.vue";
import FooterCmp from "@/components/FooterCmp.vue";
import axios from 'axios';
</script>

<script>
export default {
    data() {
        return {
            data: null,
            email: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.get('/api/login', {
                    email: this.email,
                    password: this.password
                });
                console.log('Login exitoso:', response.data);
            } catch (error) {
                console.error('Error en login:', error);
            }
        }

    }
};
</script>

<style scoped>
main {
    margin: 10px;
}

.main {
    display: grid;
    min-height: 100dvh;
    grid-template-rows: auto 1fr auto;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    margin: 0;
    padding: 0;
    align-items: center;
}

.containerTotal {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
}

.login-container {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.login-container h1 {
    text-align: center;
    margin-bottom: 20px;
}

.login-container label {
    font-weight: bold;
    margin-top: 10px;
    display: block;
}

.login-container input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.login-container button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.login-container button:hover {
    background-color: #45a049;
}

.forgot-password {
    text-align: center;
    margin-top: 10px;
}

.forgot-password a {
    text-decoration: none;
    color: #007BFF;
}

.forgot-password a:hover {
    text-decoration: underline;
}

/* Color Blind Mode */
.color-blind-mode {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #333;
    color: white;
    cursor: pointer;
    border: none;
    font-size: 1em;
    width: 100%;
}

.color-blind-mode:hover {
    background-color: #555;
}

/* Color Blind Mode aktif olduğunda uygulanacak stiller */
.color-blind-active {
    background-color: #EFEFEF;
    color: #000;
}

.color-blind-active .login-container {
    background-color: #dcdcdc;
}

.color-blind-active .login-container button {
    background-color: #333;
}

.color-blind-active .login-container button:hover {
    background-color: #555;
}
</style>
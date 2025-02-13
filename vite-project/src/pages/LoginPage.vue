<template>
    <main>
        <h1>
            Login Page
        </h1>
        <br>
        <FormComponent 
            :username="username" 
            :password="password" 
            @submit="handleSubmit" 
            @reset="handleReset"
        />
        <small class="login-choice">Pas encore de compte ? <router-link to="/register">Inscrivez-vous</router-link></small>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FormComponent from '../components/FormComponent.vue';

const username = ref('');
const password = ref('');

const handleSubmit = () => {
    console.log('Nom d\'utilisateur :', username.value);
    console.log('Mot de passe :', password.value);
};

const handleReset = () => {
    username.value = '';
    password.value = '';
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 300px;
}
button {
    margin-top: 8px;
}
</style>
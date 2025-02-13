<template>
    <main>
        <h1>Login Page</h1>
        <br>
        <form @submit.prevent="handleSubmit" @reset="handleReset">
            <label for="username">Nom d'utilisateur</label>
            <input type="text" v-model="username" id="username" required>
            <br>

            <label for="password">Mot de passe</label>
            <input type="password" v-model="password" id="password" required>
            <br>

            <button type="submit">Soumettre</button>
            <button type="reset">Réinitialiser</button>
        </form>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const handleSubmit = () => {
    console.log('Nom d\'utilisateur :', username.value);
    console.log('Mot de passe :', password.value);
    // Ajoute ici ta logique d'authentification
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
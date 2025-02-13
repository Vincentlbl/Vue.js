<template>
    <form @submit.prevent="emitSubmit" @reset="emitReset">
      <label for="username">Nom d'utilisateur</label>
      <input type="text" v-model="username" id="username" required />
  
      <label for="password">Mot de passe</label>
      <input type="password" v-model="password" id="password" required />
  
      
    </form>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const username = ref('');
  const password = ref('');
  
  const emit = defineEmits(['submit', 'reset']);
  
  const emitSubmit = () => {
    emit('submit', { username: username.value, password: password.value });
  };
  
  const emitReset = () => {
    username.value = '';
    password.value = '';
    emit('reset');
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  button {
    margin-top: 8px;
  }
  </style>
  
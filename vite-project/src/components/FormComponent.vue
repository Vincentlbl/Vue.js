<template>
    <form class="custom-form" @submit.prevent="emitSubmit" @reset.prevent="emitReset">
        <section class="custom-form_fields-section">
            <FieldComponent v-for="field in $props.data.fields" :key="field.id" :data="field" />
        </section>
        
     
      
    </form>
  </template>
  
  <script setup lang="ts">


  import FieldComponent from './FieldComponent.vue';
  import { ref } from 'vue';
  
  const username = ref('');
  const password = ref('');
  
  const emit = defineEmits(['submit', 'reset']);
  defineProps<FormComponentProperties>();
  
  const emitSubmit = () => {
    emit('submit', { username: username.value, password: password.value });
  };
  
  const emitReset = () => {
    username.value = '';
    password.value = '';
    emit('reset');
  };

interface FormComponentProperties {
    data: {
        fields: Array <{id: string;type?: string;placeholder: string;class?: string;}>;
        buttons: {id: string;type: 'submit' | 'reset' | 'button';textContent: string;class?: string;}[];
    }
  }


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
  
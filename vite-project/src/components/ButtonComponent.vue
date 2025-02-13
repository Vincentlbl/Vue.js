<template>


    <button 
    :id="data.id"
    :type="data.type ? data.type : 'button'"
    :class="'button ' + (data.class ? data.class : '')">
        {{ data.textContent }}
    </button>
</template>

<script setup lang="ts">


interface ButtonComponentProperties {
    data: {
        id: string;
        type?: 'submit' | 'reset' | 'button';
        textContent: string;
        class?: string;
    };
}

defineProps<ButtonComponentProperties>();
</script>
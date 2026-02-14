<script setup>
import { ref } from 'vue'

</script>

<template>
    <header>
        <h1>Password Generator</h1>
    </header>
  
</template>

<style lang="scss">
    @use '/src/scss/variables';
    @use '/src/scss/mixins';
    h1 {
        @include mixins.text-preset-2;
        color: variables.$grey-600;
        text-align: center;
        margin-bottom: variables.$spacing-300;
    }
</style>

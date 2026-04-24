<script setup>
import { ref } from 'vue'

</script>

<template>
    <header>
        <h1>Password Generator</h1>
    </header>
  
</template>

<style lang="scss">
    h1 {
        @include text-preset-2;
        color: $grey-600;
        text-align: center;
        margin-bottom: $spacing-300;
    }

    @media (max-width: 600px) {
        h1 {
            @include text-preset-4;
        }
    }
</style>

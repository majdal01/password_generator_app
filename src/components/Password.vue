<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="password-container">
        <p class="password-display">P4$5W0rD!</p>
        <img id="copy-icon" src="/assets/images/icon-copy.svg" alt="Copy Icon">
    </div>
  
</template>

<style lang="scss">
        @use '/src/scss/variables';
        @use '/src/scss/mixins';
        .password-container {
                background-color: variables.$grey-800;
                padding: variables.$spacing-200 variables.$spacing-300;
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 33.75rem;
                margin: auto;
                margin-bottom: variables.$spacing-300;
        }
        
        .password-display {
                @include mixins.text-preset-1;
                color: variables.$grey-700;
        }

        #copy-icon {
                cursor: pointer;
        }
</style>
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
        .password-container {
                background-color: $grey-800;
                padding: $spacing-200 $spacing-300;
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 33.75rem;
                margin: auto;
                margin-bottom: $spacing-300;
        }
        
        .password-display {
                @include text-preset-1;
                color: $grey-700;
        }

        #copy-icon {
                cursor: pointer;
        }
</style>
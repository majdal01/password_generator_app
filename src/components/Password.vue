<script setup>
import { ref } from 'vue'

defineProps({
    password: String,
    isCopied: Boolean
})

const emit = defineEmits(['copy'])
const showCopyMessage = ref(false)

const handleCopy = () => {
        emit('copy')
}

</script>

<template>
    <div class="password-container">
        <p class="password-display" v-if="password">{{ password }}</p>
        <p v-else class="placeholder">P4$$W0rD!</p>

        <div class="copy-wrapper">
                <span v-if="isCopied" class="copy-feedback">COPIED</span>
                <button class="copy-btn" @click="handleCopy" :disabled="!password" aria-label="Copy Password">
                    <img id="copy-icon" src="/assets/images/icon-copy.svg" alt="Copy Icon">
                </button>
        </div>
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
                width: 100%;
                margin: auto;
                margin-bottom: $spacing-300;
        }
        
        .password-display {
                @include text-preset-1;
                color: $grey-200;
        }

        .placeholder {
                @include text-preset-1;
                color: $grey-700;
                opacity: 0.5;
        }

        .copy-wrapper {
                display: flex;
                align-items: center;
                gap: $spacing-200;
        }

        .copy-feedback {
                @include text-preset-3; 
                color: $green-200;
                text-transform: uppercase;
        }

        .copy-btn {
                background: none;
                border: none;
                padding: 0;
                cursor: pointer;
                transition: opacity 0.2s;

                &:disabled {
                        cursor: not-allowed;
                        opacity: 0.3;
                }
                &:focus-visible {
                        outline: 2px solid $green-200;
                        outline-offset: 2px;
                }
        }
                
        #copy-icon {
                cursor: pointer;
        }


        @media (max-width: 600px) {
                .placeholder {
                        @include text-preset-2;
                        color: $grey-700;
                        opacity: 0.5;
                }

                .copy-feedback {
                        @include text-preset-4; 
                }

                .password-display, .placeholder {
                        @include text-preset-2;
                }
        }
        
</style>
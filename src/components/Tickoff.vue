<script setup>
    import { ref } from 'vue'

    defineProps ({
        includeUppercase: Boolean,
        includeLowercase: Boolean,
        includeNumbers: Boolean,
        includeSymbols: Boolean
    })

    const emit = defineEmits(['update'])

</script>

<template>

    <section class="tickoff-container">
        <label for="uppercase">
            <input type="checkbox" value="uppercase" id="uppercase" :checked="includeUppercase" @change="emit('update', { includeUppercase: $event.target.checked })" /> Include Uppercase Letters
        </label>
        <label for="lowercase">
            <input type="checkbox" value="lowercase" id="lowercase" :checked="includeLowercase" @change="emit('update', { includeLowercase: $event.target.checked })" /> Include Lowercase Letters
        </label>
        <label  for="numbers">
            <input type="checkbox" value="numbers" id="numbers" :checked="includeNumbers" @change="emit('update', { includeNumbers: $event.target.checked })" /> Include Numbers
        </label>
        <label for="symbols">
            <input type="checkbox" value="symbols" id="symbols" :checked="includeSymbols" @change="emit('update', { includeSymbols: $event.target.checked })" /> Include Symbols
        </label>
    </section>
  
</template>

<style lang="scss">

    .tickoff-container {
        display: flex;
        flex-direction: column;
        gap: $spacing-200;
        margin: $spacing-400 0;
        label {
            @include text-preset-3;
            color: $grey-200;
            display: flex;
            align-items: center;
            gap: $spacing-300;
            overflow-wrap: anywhere;
        }
        input[type="checkbox"] {
            appearance: none;
            width: 1.25rem;
            height: 1.25rem;
            border: 2px solid $white;
            background: transparent;
            cursor: pointer;
            position: relative;
        }

        input[type="checkbox"]:checked {
            background: $green-200;
            border-color: $green-200;
        }

        input[type="checkbox"]:checked::after {
            content: '';
            display: block;
            width: 0.3rem;
            height: 0.6rem;
            border: solid $grey-900;
            border-width: 0 0.2rem 0.2rem 0;
            transform: rotate(45deg);
            position: absolute;
            top: 0rem;
            left: 0.25rem;
        }
    }

    @media (max-width: 600px) {
        .tickoff-container {
            label {
                @include text-preset-4;
                gap: $spacing-200;
            }
        }
    }

</style>
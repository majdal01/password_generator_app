<script setup>
    import { ref } from 'vue'

</script>

<template>

    <section class="tickoff-container">
        <label>
        <input type="checkbox" value="uppercase" /> Include Uppercase Letters
        </label>
        <label>
        <input type="checkbox" value="lowercase" /> Include Lowercase Letters
        </label>
        <label>
        <input type="checkbox" value="numbers" /> Include Numbers
        </label>
        <label>
        <input type="checkbox" value="symbols" /> Include Symbols
        </label>
    </section>
        Strength

        Generate
  
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
        }
        input[type="checkbox"] {
            appearance: none;
            width: 1.25rem;
            height: 1.25rem;
            border: 2px solid $green-200;
            background: transparent;
            border-radius: 0.25rem;
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

</style>
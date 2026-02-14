<script setup>
    import { ref } from 'vue'
    const sliderValue = ref(0);
</script>

<template>
    <main>
        <div>
            <div class="sliderlabel-container">
                <h2>Character Length</h2>
                <label>
                    {{ sliderValue }}
                </label>
            </div>
                <input type="range" v-model="sliderValue" min="0" max="20">
        </div>

        Include Uppercase Letters
        Include Lowercase Letters
        Include Numbers
        Include Symbols

        Strength

        Generate

    </main>
  
</template>

<style lang="scss">
    main {
        background-color: $grey-800;
        max-width: 33.75rem;

         .sliderlabel-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: $spacing-200;
            padding: $spacing-200 $spacing-300;
            h2 {
                @include text-preset-3;
                color: $grey-200;
            }
            label{
                @include text-preset-1;
                color: $green-200;
            }
    }
        input[type="range"] {
                width: 100%;
            }
    }
</style>
<script setup>
    import { computed, ref } from 'vue'

    const sliderValue = ref(0)
    const sliderMax = 20
    const activeTrackColor = '#A4FFAF'
    const inactiveTrackColor = '#18171F'

    const sliderBackground = computed(() => {
        const percentage = (sliderValue.value / sliderMax) * 100
        return `linear-gradient(to right, ${activeTrackColor} 0%, ${activeTrackColor} ${percentage}%, ${inactiveTrackColor} ${percentage}%, ${inactiveTrackColor} 100%)`
    })
</script>

<template>

    <div>
        <div class="sliderlabel-container">
            <h2>Character Length</h2>
            <label>
                {{ sliderValue }}
            </label>
        </div>
            <input
                type="range"
                v-model.number="sliderValue"
                min="0"
                :max="sliderMax"
                :style="{
                    background: sliderBackground
                }"
                class="custom-slider"
            >
    </div>
  
</template>

<style lang="scss">

         .sliderlabel-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: $spacing-200;
            h2 {
                @include text-preset-3;
                color: $grey-200;
            }
            label{
                @include text-preset-1;
                color: $green-200;
            }
        }
        .custom-slider {
            width: 100%;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            height: 0.5rem;
            background: $grey-850;
            transition: background 0.3s;
        }
        .custom-slider::-webkit-slider-runnable-track {
            height: 0.5rem;
            border-radius: 0.25rem;
        }
        .custom-slider::-moz-range-track {
            height: 0.5rem;
            border-radius: 0.25rem;
        }
        .custom-slider::-ms-fill-lower,
        .custom-slider::-ms-fill-upper {
            border-radius: 0.25rem;
        }
        .custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            background: $white;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            border: 2px solid $white;
            cursor: pointer;
            margin-top: -0.5rem;
            transition: background 0.2s, border 0.2s;
        }
        .custom-slider:active::-webkit-slider-thumb {
            background: $grey-850;
            border: 2px solid $green-200;
        }
        .custom-slider::-moz-range-thumb {
            background: $white;
            width: 1.75rem;
            height: 1.75rem;
            border-radius: 50%;
            border: 2px solid $white;
            cursor: pointer;
            transition: background 0.2s, border 0.2s;
        }
        .custom-slider:active::-moz-range-thumb {
            background: $grey-850;
            border: 2px solid $green-200;
        }
        .custom-slider::-ms-thumb {
            background: $white;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            border: 2px solid $white;
            cursor: pointer;
            transition: background 0.2s, border 0.2s;
        }
        .custom-slider:active::-ms-thumb {
            background: $grey-850;
            border: 2px solid $green-200;
        }
        .custom-slider:focus {
            outline: none;
        }
        .custom-slider::-moz-focus-outer, .custom-slider::-moz-focus-inner {
            border: 0;
        }
        // For Firefox progress color
        .custom-slider::-moz-range-progress {
            background-color: $green-200;
            height: 0.5rem;
            border-radius: 0.25rem;
        }
        .custom-slider::-moz-range-track {
            background-color: $grey-850;
            height: 0.5rem;
            border-radius: 0.25rem;
        }
        // For IE
        .custom-slider::-ms-fill-lower {
            background: $green-200;
        }
        .custom-slider::-ms-fill-upper {
            background: $grey-850;
        }

</style>
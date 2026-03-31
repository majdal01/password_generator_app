<script setup>
    import { ref } from 'vue'

</script>

<template>
    <div class="strength-container">
        <p id="strengthp">Strength</p>
        <div class="validator-container">
              <p id="mediump">Medium</p>
              <div class="color-container">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar active"></div>
                <div class="bar active"></div>  
              </div>
        </div>
    </div>
    <button id="generate-button">Generate <span><img src="/assets/images/icon-arrow-right.svg" alt="generate"></span></button>
</template>



<style lang="scss">
    .strength-container {
        display: flex;
        justify-content: space-between;
        gap: $spacing-200;
        align-items: center;
        margin-bottom: $spacing-400;
        background-color: $grey-850;
        padding: $spacing-200 $spacing-400;
        #strengthp {
            @include text-preset-3;
            text-transform: uppercase;
            letter-spacing: 5%;
            color: $grey-600;
        }
        #mediump {
            @include text-preset-2;
            text-transform: uppercase;
            letter-spacing: 5%;
            color: $grey-200;
        }
        div {
            display: flex;
            align-items: center;
            p {
                @include text-preset-3;
                color: $grey-200;
            }
        }
        .validator-container {
            display: flex;
            align-items: center;
            gap: $spacing-200;

            .color-container {
                gap: 0.5rem;
                .bar {
                    width: .6rem;
                    height: 1.8rem;
                    border: 2px solid $grey-200;
                }
            }
        }   
    }
    #generate-button {
        @include button;
        margin-bottom: $spacing-400;
    }

    @media (max-width: 600px) {
        .strength-container {
            gap: $spacing-100;
            padding: $spacing-200;

            #mediump {
                @include text-preset-3;
            }

            .validator-container {
                gap: $spacing-100;
            }
        }
    }

</style>
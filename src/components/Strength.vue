<script setup>
    const props = defineProps({
        label: String,
        score: Number
    })

    const emit = defineEmits(['generate'])
</script>

<template>
    <div class="strength-container">
        <p id="strengthp">Strength</p>
        <div class="validator-container">
              <p id="mediump">{{props.label}}</p>
              <div class="color-container">
                <div 
                    v-for="i in 4" 
                    :key="i" 
                    class="bar"
                    :class="{ 
                        'active': i <= score,
                        'too-weak': score === 1 && i <= score,
                        'weak': score === 2 && i <= score,
                        'medium': score === 3 && i <= score,
                        'strong': score === 4 && i <= score
                    }"
                ></div>
            </div>
        </div>
    </div>
    <button @click="emit('generate')" id="generate-button">Generate <span><img src="/assets/images/icon-arrow-right.svg" alt="generate"></span></button>
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
                display: flex;
                gap: 0.5rem;

                .bar {
                    width: .6rem;
                    height: 1.8rem;
                    border: 2px solid $grey-200;
                    
                    &.too-weak { background-color: $red-500; border-color: $red-500; }
                    &.weak { background-color: $orange-400; border-color: $orange-400; }
                    &.medium { background-color: $yellow-300; border-color: $yellow-300; }
                    &.strong { background-color: $green-200; border-color: $green-200; }
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
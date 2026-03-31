<script setup>
  import Header from './components/Header.vue'
  import Password from './components/Password.vue'
  import Slider from './components/Slider.vue'
  import Strength from './components/Strength.vue';
  import Tickoff from './components/Tickoff.vue';
</script>

<template>
    <Header/>
    <Password/>
  <main>
    <Slider/>
    <Tickoff/>    
    <Strength/>
  </main>
</template>

<style lang="scss">
    #app {
      width: min(100%, 33.75rem);
      padding-inline: $spacing-200;
    }

    main {
      background-color: $grey-800;
      width: 100%;
      max-width: 33.75rem;
      margin: 0 auto;
      padding: $spacing-200 $spacing-300;
    }

    @media (max-width: 600px) {
      #app {
        padding-inline: $spacing-100;
      }

      main {
        padding: $spacing-200;
      }
    }
</style>

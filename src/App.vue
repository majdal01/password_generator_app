<script setup>
  import Header from './components/Header.vue'
  import Password from './components/Password.vue'
  import Slider from './components/Slider.vue'
  import Tickoff from './components/Tickoff.vue';
</script>

<template>
    <Header/>
    <Password/>
  <main>
    <Slider/>
    <Tickoff/>      
  </main>
</template>

<style lang="scss">
         main {
            background-color: $grey-800;
            min-width: 33.75rem;
            padding: $spacing-200 $spacing-300;
        }
</style>

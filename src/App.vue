<script setup>
  import Header from './components/Header.vue'
  import Password from './components/Password.vue'
  import Slider from './components/Slider.vue'
  import Strength from './components/Strength.vue';
  import Tickoff from './components/Tickoff.vue';

  import { ref, reactive, provide, computed } from 'vue';

  const password = ref('');
  const settings = reactive({
    characterlength: 10,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false
  })

  provide('passwordState', {
    settings,
    password
  })

  const handleUpdate = (updates) => {
    Object.assign(settings, updates)
  }

  const generatePassword = () => {
    const charSets = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }
  

    const activeSets = [] 
    if (settings.includeUppercase) activeSets.push(charSets.uppercase)
    if (settings.includeLowercase) activeSets.push(charSets.lowercase)
    if (settings.includeNumbers) activeSets.push(charSets.numbers)
    if (settings.includeSymbols) activeSets.push(charSets.symbols)

    if (activeSets.length === 0) {
      password.value = ''
      return
    }

    const requiredChars = activeSets.length;
    if (settings.characterlength < requiredChars) {
      password.value = ''
      return
    }

    const result = []

    activeSets.forEach(set => {
      const randomChar = set[Math.floor(Math.random() * set.length)]
      result.push(randomChar)
    })

    const pool = activeSets.join('')
    for (let i = result.length; i < settings.characterlength; i++) {
      const randomChar = pool[Math.floor(Math.random() * pool.length)]
      result.push(randomChar)
    }

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[result[i], result[j]] = [result[j], result[i]]
    }

    password.value = result.join('')
  }

  const strengthRating = computed(() => {
    if (!password.value) return { label: '', score: 0 };

    let score = 0;
    const activeCategories = [
      settings.includeUppercase,
      settings.includeLowercase,
      settings.includeNumbers,
      settings.includeSymbols
    ].filter(Boolean).length;

    const isValidConfig = settings.characterlength >= activeCategories && activeCategories > 0
    if (!isValidConfig) return { label: '', score: 0 };

    if (settings.characterlength >= 8) score += 1
    if (settings.characterlength >= 10) score += 1
    if (settings.characterlength >= 14) score += 2
    if (activeCategories >= 2) score += 1
    if (activeCategories >= 3) score += 1

    score = Math.min(score, 4)

    const ratings = [
      { label: 'TOO WEAK', score: 1 },
      { label: 'WEAK', score: 2 },
      { label: 'MEDIUM', score: 3 },
      { label: 'STRONG', score: 4 }
    ];

    return ratings[Math.max(0, score - 1)];
  });

  const copySuccess = ref(false)

const copyToClipboard = async () => {
  if (!password.value) return
  
  try {
    await navigator.clipboard.writeText(password.value)
   
    copySuccess.value = true

    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
    
  } catch (err) {
    console.error('Kunne ikke kopiere', err)
  }
}


</script>

<template>
    <Header/>
    <Password 
      :password="password"
      :is-copied="copySuccess"
      @copy="copyToClipboard"
    />
  <main>
    <Slider v-model="settings.characterlength" :slider-max="20" />
    <Tickoff v-bind="settings" @update="handleUpdate"/>    
    <Strength 
      :score="strengthRating.score" 
      :label="strengthRating.label" 
      @generate="generatePassword"/>
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

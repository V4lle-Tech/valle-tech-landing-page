<script setup lang="ts">
import { ref, onMounted } from 'vue'

const accepted = ref(false)

const acceptCookies = () => {
  accepted.value = true
  localStorage.setItem('cookieConsent', 'accepted')
}

const declineCookies = () => {
  accepted.value = true
  localStorage.setItem('cookieConsent', 'declined')
}

onMounted(() => {
  const consent = localStorage.getItem('cookieConsent')
  if (consent) {
    accepted.value = true
  }
})
</script>

<template>
  <div v-if="!accepted" class="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <p class="mb-4 md:mb-0 md:mr-4">
        {{ $t('cookieConsent.message') }}
        <a href="#" class="text-secondary-400 hover:text-secondary-300 underline">
          {{ $t('cookieConsent.learnMore') }}
        </a>
      </p>
      <div class="flex space-x-4">
        <button 
          @click="acceptCookies" 
          class="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
        >
          {{ $t('cookieConsent.accept') }}
        </button>
        <button 
          @click="declineCookies" 
          class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
        >
          {{ $t('cookieConsent.decline') }}
        </button>
      </div>
    </div>
  </div>
</template>
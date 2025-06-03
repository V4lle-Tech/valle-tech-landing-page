<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Clarity from '@microsoft/clarity';

const { locale } = useI18n()
const accepted = ref(false)
const showPreferences = ref(false)

interface CookiePreferences {
  necessary: boolean
  preferences: boolean
  analytics: boolean
}

const cookiePreferences = ref<CookiePreferences>({
  necessary: true, // Siempre true ya que son necesarias
  preferences: false,
  analytics: false
})

let clarityInitialized = false

const initClarity = () => {
  if (!clarityInitialized) {
    Clarity.init('rtufbv20as')
    clarityInitialized = true
  }
}

const acceptAllCookies = () => {
  cookiePreferences.value = {
    necessary: true,
    preferences: true,
    analytics: true
  }
  saveCookiePreferences()
  accepted.value = true
  if (cookiePreferences.value.analytics) {
    initClarity()
  }
}

const acceptSelectedCookies = () => {
  saveCookiePreferences()
  accepted.value = true
  if (cookiePreferences.value.analytics) {
    initClarity()
  }
}

const declineCookies = () => {
  cookiePreferences.value = {
    necessary: true,
    preferences: false,
    analytics: false
  }
  saveCookiePreferences()
  accepted.value = true
}

const saveCookiePreferences = () => {
  localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences.value))
  
  // Si se aceptan las cookies de preferencias, guardar el idioma actual
  if (cookiePreferences.value.preferences) {
    localStorage.setItem('userLanguage', locale.value)
  } else {
    // Si se rechazan las cookies de preferencias, eliminar el idioma guardado
    localStorage.removeItem('userLanguage')
  }
}

const togglePreferences = () => {
  showPreferences.value = !showPreferences.value
}

onMounted(() => {
  const savedPreferences = localStorage.getItem('cookieConsent')
  if (savedPreferences) {
    cookiePreferences.value = JSON.parse(savedPreferences)
    accepted.value = true
    // Inicializar Clarity si ya se había aceptado analítica
    if (cookiePreferences.value.analytics) {
      initClarity()
    }
  }
})
</script>

<template>
  <div v-if="!accepted" class="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
    <div class="container mx-auto">
      <div v-if="!showPreferences">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <p class="mb-4 md:mb-0 md:mr-4">
            {{ $t('cookieConsent.message') }}
            <button 
              @click="togglePreferences" 
              class="text-secondary-400 hover:text-secondary-300 underline"
            >
              {{ $t('cookieConsent.learnMore') }}
            </button>
          </p>
          <div class="flex space-x-4">
            <button 
              @click="acceptAllCookies" 
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
      
      <div v-else class="bg-gray-800 rounded-lg p-6 mt-4">
        <h3 class="text-xl font-semibold mb-4">{{ $t('cookieConsent.preferences.title') }}</h3>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">{{ $t('cookieConsent.preferences.necessary.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cookieConsent.preferences.necessary.desc') }}</p>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                v-model="cookiePreferences.necessary" 
                disabled 
                class="rounded bg-gray-700 border-gray-600 text-secondary-500 focus:ring-secondary-500"
              >
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">{{ $t('cookieConsent.preferences.preferences.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cookieConsent.preferences.preferences.desc') }}</p>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                v-model="cookiePreferences.preferences" 
                class="rounded bg-gray-700 border-gray-600 text-secondary-500 focus:ring-secondary-500"
              >
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">{{ $t('cookieConsent.preferences.analytics.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cookieConsent.preferences.analytics.desc') }}</p>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                v-model="cookiePreferences.analytics" 
                class="rounded bg-gray-700 border-gray-600 text-secondary-500 focus:ring-secondary-500"
              >
            </div>
          </div>
        </div>
        
        <div class="flex justify-end space-x-4 mt-6">
          <button 
            @click="togglePreferences" 
            class="text-gray-400 hover:text-white transition-colors duration-200"
          >
            {{ $t('cookieConsent.preferences.back') }}
          </button>
          <button 
            @click="acceptSelectedCookies" 
            class="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            {{ $t('cookieConsent.preferences.save') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['accept'])

const acceptCookies = () => {
  emit('accept')
}
</script>

<template>
  <div class="fixed bottom-0 inset-x-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4 animate-slide-up">
    <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p class="text-sm text-gray-700">
          We use cookies to enhance your browsing experience and analyze our traffic. 
          By clicking "Accept", you consent to our use of cookies.
        </p>
      </div>
      <div class="flex space-x-4">
        <button 
          @click="acceptCookies"
          class="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
        >
          Accept
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CookieConsent from './components/CookieConsent.vue'
import BackToTop from './components/BackToTop.vue'

const showCookieConsent = ref(true)

const acceptCookies = () => {
  showCookieConsent.value = false
  localStorage.setItem('cookiesAccepted', 'true')
}

onMounted(() => {
  if (localStorage.getItem('cookiesAccepted') === 'true') {
    showCookieConsent.value = false
  }
})
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <BackToTop />
    <CookieConsent v-if="showCookieConsent" @accept="acceptCookies" />
  </div>
</template>
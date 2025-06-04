<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
// import ContactSection from '@/components/sections/ContactSection.vue'
import Footer from '@/components/Footer.vue'

const isLoading = ref(false)

</script>

<template>
  <!-- Loading Screen -->
  <div v-if="isLoading" class="fixed inset-0 bg-white flex items-center justify-center z-50">
    <div class="flex flex-col items-center">
      <div class="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
      <p class="mt-4 text-primary-800 font-medium">Loading V4lle Tech...</p>
    </div>
  </div>

  <!-- Main Content -->
  <div v-else class="min-h-screen">
    <Navbar />
    
    <main>
      <HeroSection id="home" />
      <ServicesSection id="services" />
      <AboutSection id="about" />
      <PortfolioSection id="portfolio" />
      <!-- <ContactSection id="contact" /> -->
    </main>
    
    <Footer />
  </div>
</template>
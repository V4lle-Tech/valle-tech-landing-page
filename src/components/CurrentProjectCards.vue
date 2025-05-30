<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// Domain Types
interface Project {
  id: number
  name: string
  status: 'en revision' | 'en espera' | 'por concluir'
  daysElapsed: number
  duration: number
}

// Constants
const CAROUSEL_CONFIG = {
  RADIUS: 28,
  AUTO_SCROLL_INTERVAL: 3000,
  CARD_MIN_WIDTH: 140,
  CARD_MAX_WIDTH: 140,
  CARD_GAP: 16,
  COLORS: {
    TRACK: 'stroke-gray-200',
    BAR: 'stroke-primary-600',
    TEXT: 'text-primary-800'
  }
} as const

// Composables
const useCarouselState = () => {
  const currentIndex = ref(0)
  const carouselRef = ref<HTMLElement | null>(null)

  return {
    currentIndex,
    carouselRef
  }
}

// Component Setup
const { t } = useI18n()

const projects = [
  { id: 1, name: 'Landing Page', status: 'en revision', daysElapsed: 3, duration: 10 },
  { id: 2, name: 'E-commerce', status: 'en espera', daysElapsed: 2, duration: 7 },
  { id: 3, name: 'App Móvil', status: 'por concluir', daysElapsed: 9, duration: 10 },
  { id: 4, name: 'API REST', status: 'en espera', daysElapsed: 1, duration: 5 },
  { id: 5, name: 'Dashboard', status: 'en revision', daysElapsed: 6, duration: 12 }
]

// State Management
const state = useCarouselState()

const activeIndex = ref(0)

const goToSlide = (index: number) => {
  activeIndex.value = index
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % projects.length
}

const prevSlide = () => {
  activeIndex.value = activeIndex.value === 0 ? projects.length - 1 : activeIndex.value - 1
}
</script>

<template>
  <div class="relative w-full max-w-3xl mx-auto">
    <!-- Contenedor Principal -->
    <div class="relative overflow-hidden">
      <!-- Carrusel -->
      <div 
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="w-full flex-shrink-0 px-4"
        >
          <div class="bg-white p-4 rounded-lg shadow-md text-center">
            <div class="relative w-16 h-16 mx-auto mb-2">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="font-bold text-xs text-primary-800">{{ project.name }}</span>
              </div>
            </div>
            <span class="text-xs text-gray-500">
              {{ t('contact.daysLeft', { days: project.duration - project.daysElapsed }) }}
            </span>
          </div>
        </div>
      </div>

      <!-- Botones de Navegación -->
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-primary-50 transition"
        aria-label="Anterior"
      >
        <svg class="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-primary-50 transition"
        aria-label="Siguiente"
      >
        <svg class="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Indicadores -->
    <div class="flex justify-center gap-2 mt-4">
      <button
        v-for="(_, index) in projects"
        :key="index"
        @click="goToSlide(index)"
        class="w-2 h-2 rounded-full transition-colors"
        :class="activeIndex === index ? 'bg-primary-600' : 'bg-gray-300'"
        :aria-label="`Ir a la diapositiva ${index + 1}`"
      />
    </div>
  </div>
</template>

<style scoped>
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style> 
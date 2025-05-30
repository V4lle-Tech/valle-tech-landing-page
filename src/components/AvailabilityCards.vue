<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

interface ProjectAvailability {
  id: number
  name: string
  status: 'en revision' | 'en espera' | 'por concluir'
  daysElapsed: number
  duration: number
}

const { t } = useI18n()

// Unificar colores: track gris claro, barra azul principal
const TRACK_COLOR = 'stroke-gray-200'
const BAR_COLOR = 'stroke-primary-600'
const TEXT_COLOR = 'text-primary-800'

const projects = ref<ProjectAvailability[]>([
  { id: 1, name: 'Landing Page', status: 'en revision', daysElapsed: 3, duration: 10 },
  { id: 2, name: 'E-commerce', status: 'en espera', daysElapsed: 2, duration: 7 },
  { id: 3, name: 'App Móvil', status: 'por concluir', daysElapsed: 9, duration: 10 },
  { id: 4, name: 'API REST', status: 'en espera', daysElapsed: 1, duration: 5 },
  { id: 5, name: 'Dashboard', status: 'en revision', daysElapsed: 6, duration: 12 }
])

const RADIUS = 28 // Tamaño similar a achievements
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const carouselRef = ref<HTMLDivElement | null>(null)
const autoScrollInterval = ref<number | null>(null)
const isHovered = ref(false)
const currentIndex = ref(0)
const visibleCount = 3 // cuántas fichas se ven a la vez (ajustable)

const maxIndex = computed(() => Math.max(0, projects.value.length - visibleCount))

function scrollToIndex(index: number) {
  const el = carouselRef.value
  if (!el) return
  const scrollAmount = 160 * index // ancho de card + gap
  el.scrollTo({ left: scrollAmount, behavior: 'smooth' })
  currentIndex.value = index
}

function scrollCarousel(direction: 'left' | 'right') {
  let next = currentIndex.value + (direction === 'left' ? -1 : 1)
  if (next < 0) {
    next = maxIndex.value // loop infinito
  } else if (next > maxIndex.value) {
    next = 0 // loop infinito
  }
  scrollToIndex(next)
}

function startAutoScroll() {
  stopAutoScroll()
  autoScrollInterval.value = window.setInterval(() => {
    if (!isHovered.value && carouselRef.value) {
      let next = currentIndex.value + 1
      if (next > maxIndex.value) {
        next = 0
      }
      scrollToIndex(next)
    }
  }, 3000)
}

function stopAutoScroll() {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value)
    autoScrollInterval.value = null
  }
}

function handleScroll() {
  const el = carouselRef.value
  if (!el) return
  const idx = Math.round(el.scrollLeft / 160)
  currentIndex.value = idx
}

onMounted(() => {
  nextTick(() => {
    scrollToIndex(0)
    startAutoScroll()
  })
})

onUnmounted(() => {
  stopAutoScroll()
})
</script>

<template>
  <div class="relative flex flex-col items-center justify-center bg-transparent">
    <button
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-primary-50 transition"
      @click="scrollCarousel('left')"
      aria-label="Anterior"
      style="margin-left: -18px;"
    >
      <svg class="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
    </button>
    <div
      ref="carouselRef"
      class="overflow-x-auto overflow-y-auto pb-2 scroll-smooth flex items-center bg-transparent"
      @mouseenter="isHovered = true; stopAutoScroll()"
      @mouseleave="isHovered = false; startAutoScroll()"
      @scroll="handleScroll"
      style="scrollbar-width: none; -ms-overflow-style: none; max-height: 220px;"
    >
      <div class="flex gap-4 min-w-max transition-all duration-500 items-center">
        <div
          v-for="(project, idx) in projects"
          :key="project.id"
          class="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center min-w-[140px] max-w-[140px] relative group"
        >
          <div class="relative w-16 h-16 mb-2">
            <svg class="w-16 h-16 rotate-[-90deg]" viewBox="0 0 56 56">
              <circle
                :class="TRACK_COLOR"
                cx="28" cy="28" :r="RADIUS" fill="none" stroke-width="7"
              />
              <circle
                :class="BAR_COLOR"
                cx="28" cy="28" :r="RADIUS" fill="none" stroke-width="7"
                :stroke-dasharray="CIRCUMFERENCE"
                :stroke-dashoffset="CIRCUMFERENCE - (project.daysElapsed / project.duration) * CIRCUMFERENCE"
                stroke-linecap="round"
              />
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span :class="'font-bold text-xs ' + TEXT_COLOR">{{ project.name }}</span>
            </div>
          </div>
          <span class="text-xs text-gray-500 text-center">
            {{ t('contact.daysLeft', { days: project.duration - project.daysElapsed }) }}
          </span>
          <!-- Tooltip -->
          <div class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-20">
            {{ project.name }}
          </div>
        </div>
      </div>
    </div>
    <button
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-primary-50 transition"
      @click="scrollCarousel('right')"
      aria-label="Siguiente"
      style="margin-right: -18px;"
    >
      <svg class="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
    </button>
    <!-- Indicadores de posición -->
    <div class="flex justify-center gap-2 mt-3">
      <button
        v-for="i in (maxIndex + 1)"
        :key="i"
        class="w-2.5 h-2.5 rounded-full"
        :class="currentIndex === (i-1) ? 'bg-primary-600' : 'bg-gray-300'"
        @click="scrollToIndex(i-1)"
        aria-label="Ir a la posición {{ i }}"
      ></button>
    </div>
  </div>
</template> 
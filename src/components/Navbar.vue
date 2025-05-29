<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'Services', path: '#services' },
  { name: 'About', path: '#about' },
  { name: 'Portfolio', path: '#portfolio' },
  { name: 'Contact', path: '#contact' }
]

const activeSection = ref('home')

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Determine active section
  const sections = document.querySelectorAll('section[id]')
  const scrollPosition = window.scrollY + 100

  sections.forEach(section => {
    const sectionTop = (section as HTMLElement).offsetTop
    const sectionHeight = section.clientHeight
    const sectionId = section.getAttribute('id') || ''

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      activeSection.value = sectionId
    }
  })
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const navbarClasses = computed(() => {
  return [
    'fixed w-full z-50 transition-all duration-300',
    'bg-white shadow-md',
    isScrolled.value ? 'bg-opacity-80 backdrop-blur-md' : '',
  ]
})

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <header :class="navbarClasses">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" class="flex items-center">
            <span class="text-2xl font-bold text-primary-800">V4lle<span class="text-secondary-600">Tech</span></span>
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.path"
            :class="[
              'text-sm font-medium transition-colors duration-200 relative',
              activeSection === link.path.substring(1) 
                ? 'text-primary-700' 
                : 'text-gray-800 hover:text-primary-700'
            ]"
          >
            {{ link.name }}
            <span 
              v-if="activeSection === link.path.substring(1)"
              class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform transition-transform duration-200"
            ></span>
          </a>
        </nav>
        
        <!-- CTA Button -->
        <div class="hidden md:block">
          <a href="#contact" class="btn-primary">Get in Touch</a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          @click="toggleMobileMenu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg v-if="!mobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <div 
      v-if="mobileMenuOpen"
      class="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
      @click="closeMobileMenu"
    ></div>
    
    <div 
      v-if="mobileMenuOpen"
      class="md:hidden fixed right-0 top-0 bottom-0 w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out"
    >
      <div class="p-5">
        <div class="flex items-center justify-between mb-6">
          <div class="text-xl font-bold text-primary-800">V4lle<span class="text-secondary-600">Tech</span></div>
          <button 
            class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            @click="closeMobileMenu"
          >
            <span class="sr-only">Close main menu</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav class="flex flex-col space-y-4">
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.path"
            :class="[
              'px-3 py-2 text-base font-medium rounded-md',
              activeSection === link.path.substring(1) 
                ? 'bg-primary-50 text-primary-700' 
                : 'text-gray-800 hover:bg-gray-50 hover:text-primary-700'
            ]"
            @click="closeMobileMenu"
          >
            {{ link.name }}
          </a>
        </nav>
        
        <div class="mt-8">
          <a href="#contact" @click="closeMobileMenu" class="w-full btn-primary block text-center">Get in Touch</a>
        </div>
      </div>
    </div>
  </header>
</template>
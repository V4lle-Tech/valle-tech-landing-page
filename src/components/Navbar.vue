<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

// useI18n composition API
const { locale } = useI18n()

// Nuevo estado para el menú de idioma
const languageMenuOpen = ref(false)
const languageOptions = [
  {
    code: 'es-MX',
    label: 'Español',
    short: 'ES',
    img: '/i18n/es-MX.png'
  },
  {
    code: 'en-EU',
    label: 'English',
    short: 'EN',
    img: '/i18n/en-EU.png'
  }
]

function selectLanguage(code: string) {
  locale.value = code
  languageMenuOpen.value = false

  // Obtener el hash actual (ej: #/en-EU#home)
  const fullHash = window.location.hash // ej: #/en-EU#home
  // Extraer idioma y sección
  const hashMatch = fullHash.match(/^#\/(\w{2}-\w{2})(#.*)?$/)
  let sectionHash = '#home'
  if (hashMatch && hashMatch[2]) {
    sectionHash = hashMatch[2]
  }
  // Construir nuevo hash
  const newHash = `#/${code}${sectionHash}`

  // Reemplazar el hash en la URL
  window.location.hash = newHash

  // Guardar el idioma seleccionado si se aceptaron las cookies de preferencias
  const cookieConsent = localStorage.getItem('cookieConsent')
  if (cookieConsent) {
    const preferences = JSON.parse(cookieConsent)
    if (preferences.preferences) {
      localStorage.setItem('userLanguage', code)
    }
  }
}

function currentLanguage() {
  return languageOptions.find(opt => opt.code === locale.value) || languageOptions[0]
}

function handleClickOutside(event: MouseEvent) {
  const menu = document.getElementById('lang-menu')
  const menuMobile = document.getElementById('lang-menu-mobile')
  if (
    (menu && !menu.contains(event.target as Node)) &&
    (menuMobile && !menuMobile.contains(event.target as Node))
  ) {
    languageMenuOpen.value = false
  }
}

const navLinks = [
  { key: 'home', section: 'home' },
  { key: 'services', section: 'services' },
  { key: 'about', section: 'about' },
  { key: 'portfolio', section: 'portfolio' }
  // { key: 'contact', section: 'contact' }
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
  window.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <header :class="navbarClasses">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/#home" class="flex items-center">
            <!-- <span class="text-2xl font-bold text-primary-800">V4lle<span class="text-secondary-600">Tech</span></span> -->
            <img src="/v4lle-tech-light.png" alt="V4lle Tech Logo" class="h-8 w-auto" />
          </router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <router-link 
            v-for="link in navLinks" 
            :key="link.key"
            :to="{ 
              path: `/${locale}`,
              hash: `#${link.section}`
            }"
            :class="[
              'text-sm font-medium transition-colors duration-200 relative cursor-pointer',
              activeSection === link.section 
                ? 'text-primary-700' 
                : 'text-gray-800 hover:text-primary-700'
            ]"
          >
            {{ $t('navbar.' + link.key) }}
            <span 
              v-if="activeSection === link.section"
              class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform transition-transform duration-200"
            ></span>
          </router-link>
        </nav>
        
        <!-- CTA Button -->
        <div class="hidden md:block">
          <!-- <router-link to="/#contact" class="btn-primary">{{ $t('navbar.cta') }}</router-link> -->
        </div>
        
        <!-- Language Switcher Mejorado SOLO EN DESKTOP/TABLET -->
        <div class="ml-4 relative hidden md:block" id="lang-menu">
          <button
            class="flex items-center px-2 py-1 border rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            @click.stop="languageMenuOpen = !languageMenuOpen"
            aria-haspopup="true"
            :aria-expanded="languageMenuOpen"
          >
            <img :src="currentLanguage().img" alt="Language Flag" class="h-5 w-auto rounded-sm" />
            <span class="ml-2 font-semibold">{{ currentLanguage().short }}</span>
            <svg class="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div v-if="languageMenuOpen" class="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg z-50 animate-fade-in">
            <ul>
              <li v-for="opt in languageOptions" :key="opt.code">
                <button
                  class="flex items-center w-full px-3 py-2 hover:bg-primary-50 focus:bg-primary-100 transition-colors"
                  @click="selectLanguage(opt.code)"
                >
                  <img :src="opt.img" alt="Language Flag" class="h-5 w-auto rounded-sm" />
                  <span class="ml-2">{{ opt.label }}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          @click="toggleMobileMenu"
          aria-expanded="false"
        >
          <span class="sr-only">{{ $t('navbar.menu.open') }}</span>
          <svg v-if="!mobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Navigation Menu y Backdrop fuera del header -->
  <!-- Backdrop -->
  <div 
    v-if="mobileMenuOpen"
    class="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
    @click="closeMobileMenu"
  ></div>
  <!-- Sidebar animado -->
  <transition name="sidebar-slide">
    <div 
      v-if="mobileMenuOpen"
      class="md:hidden fixed right-0 top-0 bottom-0 w-64 h-full bg-white z-50 shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out"
      :class="{'translate-x-0': mobileMenuOpen, 'translate-x-full': !mobileMenuOpen}"
    >
      <div class="p-5 h-full bg-white">
        <div class="flex items-center justify-between mb-6">
          <img src="/v4lle-tech-light.png" alt="V4lle Tech Logo" class="h-8 w-auto" />
          <button 
            class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            @click="closeMobileMenu"
          >
            <span class="sr-only">{{ $t('navbar.menu.close') }}</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav class="flex flex-col space-y-4">
          <router-link 
            v-for="link in navLinks" 
            :key="link.key"
            :to="{ 
              path: `/${locale}`,
              hash: `#${link.section}`
            }"
            :class="[
              'px-3 py-2 text-base font-medium rounded-md cursor-pointer',
              activeSection === link.section 
                ? 'bg-primary-50 text-primary-700' 
                : 'text-gray-800 hover:bg-gray-50 hover:text-primary-700'
            ]"
            @click="closeMobileMenu"
          >
            {{ $t('navbar.' + link.key) }}
          </router-link>
        </nav>
        
        <div class="mt-8">
          <!-- <router-link to="/#contact" @click="closeMobileMenu" class="w-full btn-primary block text-center">{{ $t('navbar.cta') }}</router-link> -->
        </div>
        
        <!-- Selector de idioma SOLO EN MOBILE -->
        <div class="mt-8 relative md:hidden" id="lang-menu-mobile">
          <button
            class="flex items-center px-2 py-1 border rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"
            @click.stop="languageMenuOpen = !languageMenuOpen"
            aria-haspopup="true"
            :aria-expanded="languageMenuOpen"
          >
            <img :src="currentLanguage().img" alt="Language Flag" class="h-5 w-auto rounded-sm" />
            <span class="ml-2 font-semibold">{{ currentLanguage().short }}</span>
            <svg class="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div v-if="languageMenuOpen" class="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg z-50 animate-fade-in">
            <ul>
              <li v-for="opt in languageOptions" :key="opt.code">
                <button
                  class="flex items-center w-full px-3 py-2 hover:bg-primary-50 focus:bg-primary-100 transition-colors"
                  @click="selectLanguage(opt.code)"
                >
                  <img :src="opt.img" alt="Language Flag" class="h-5 w-auto rounded-sm" />
                  <span class="ml-2">{{ opt.label }}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.18s ease;
}

/* Sidebar slide animation */
.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition: transform .5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease;
}
.sidebar-slide-enter-from,
.sidebar-slide-leave-to {
  transform: translateX(100%);
  opacity: 0.5;
}
.sidebar-slide-enter-to,
.sidebar-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

/* Añadir estilos para el scroll suave */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Ajusta este valor según el alto de tu navbar */
}
</style>
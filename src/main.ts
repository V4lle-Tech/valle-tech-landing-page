import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import { messages } from './i18n/messages'

// Obtener el idioma guardado o usar el predeterminado
const getSavedLanguage = () => {
  const cookieConsent = localStorage.getItem('cookieConsent')
  if (cookieConsent) {
    const preferences = JSON.parse(cookieConsent)
    if (preferences.preferences) {
      return localStorage.getItem('userLanguage') || 'es-MX'
    }
  }
  return 'es-MX'
}

const i18n = createI18n({
  legacy: false,
  locale: getSavedLanguage(),
  fallbackLocale: 'en-EU',
  messages
})

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: () => `/${getSavedLanguage()}`
    },
    {
      path: '/:lang',
      component: App,
      children: [
        {
          path: '',
          component: Home
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Ajuste para el navbar fijo
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Middleware para manejar el cambio de idioma
router.beforeEach((to, from, next) => {
  const lang = typeof to.params.lang === 'string' ? to.params.lang : null
  if (lang && ['es-MX', 'en-EU'].includes(lang)) {
    i18n.global.locale.value = lang as 'es-MX' | 'en-EU'
    // Guardar el idioma si se aceptaron las cookies de preferencias
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (cookieConsent) {
      const preferences = JSON.parse(cookieConsent)
      if (preferences.preferences) {
        localStorage.setItem('userLanguage', lang)
      }
    }
  }
  next()
})

// Create and mount app
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')

// Initialize AOS animation observer
const initAOS = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate')
      }
    })
  }, {
    threshold: 0.1
  })

  document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element)
  })
}

// Run after DOM is fully loaded
window.addEventListener('load', initAOS)
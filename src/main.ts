import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
// import ComingSoon from './views/ComingSoon.vue'
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
  return null // Cambiamos para distinguir cuando no hay preferencia
}

const savedLang = getSavedLanguage() || 'es-MX'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en-EU',
  messages
})

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: () => {
        // Si no hay preferencia, redirigir a /es-MX
        const cookieConsent = localStorage.getItem('cookieConsent')
        let lang = 'es-MX'
        if (cookieConsent) {
          const preferences = JSON.parse(cookieConsent)
          if (preferences.preferences) {
            lang = localStorage.getItem('userLanguage') || 'es-MX'
          }
        }
        return `/${lang}`
      }
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
  scrollBehavior(to: any, _: any, savedPosition: any) {
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
router.beforeEach((to: any, _: any, next: any) => {
  const lang = typeof to.params.lang === 'string' ? to.params.lang : null
  if (to.path === '/' && !lang) {
    // Ya se maneja la redirección en la definición de rutas
    return next()
  }
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
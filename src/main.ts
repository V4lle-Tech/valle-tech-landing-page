import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import { messages } from './i18n/messages'

const i18n = createI18n({
  legacy: false,
  locale: 'es-MX',
  fallbackLocale: 'en-EU',
  messages
})

// Create router
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: '/', 
      component: Home,
      children: [
        { path: 'home', component: Home },
        { path: 'services', component: Home },
        { path: 'about', component: Home },
        { path: 'portfolio', component: Home },
        { path: 'contact', component: Home }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset para el navbar fijo
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
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
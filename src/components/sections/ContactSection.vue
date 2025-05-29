<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'

defineProps<{
  id: string
}>()

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const errors = reactive<FormErrors>({})
const formSubmitted = ref(false)
const formSubmitting = ref(false)

// Función para guardar el estado del formulario
const saveFormState = () => {
  const cookieConsent = localStorage.getItem('cookieConsent')
  if (cookieConsent) {
    const preferences = JSON.parse(cookieConsent)
    if (preferences.preferences) {
      localStorage.setItem('contactFormData', JSON.stringify(formData))
    }
  }
}

// Función para restaurar el estado del formulario
const restoreFormState = () => {
  const cookieConsent = localStorage.getItem('cookieConsent')
  if (cookieConsent) {
    const preferences = JSON.parse(cookieConsent)
    if (preferences.preferences) {
      const savedData = localStorage.getItem('contactFormData')
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        Object.assign(formData, parsedData)
      }
    }
  }
}

// Observar cambios en el formulario para guardar el estado
watch(formData, () => {
  saveFormState()
}, { deep: true })

onMounted(() => {
  restoreFormState()
})

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validateForm = (): boolean => {
  let isValid = true
  errors.name = ''
  errors.email = ''
  errors.subject = ''
  errors.message = ''

  if (!formData.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required'
    isValid = false
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  } else if (formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters'
    isValid = false
  }

  return isValid
}

const handleSubmit = () => {
  if (validateForm()) {
    formSubmitting.value = true
    
    // Simulate form submission
    setTimeout(() => {
      formSubmitting.value = false
      formSubmitted.value = true
      
      // Reset form after success
      formData.name = ''
      formData.email = ''
      formData.phone = ''
      formData.subject = ''
      formData.message = ''
      
      // Hide success message after some time
      setTimeout(() => {
        formSubmitted.value = false
      }, 5000)
    }, 1500)
  }
}

const contactInfo = [
  {
    key: 'email',
    value: 'info@v4lletech.com',
    icon: 'mail'
  },
  {
    key: 'phone',
    value: '+1 (555) 123-4567',
    icon: 'phone'
  },
  {
    key: 'address',
    value: '123 Tech Boulevard, San Francisco, CA 94107',
    icon: 'location'
  }
]

const getContactIcon = (iconName: string) => {
  switch (iconName) {
    case 'mail':
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>`
    case 'phone':
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>`
    case 'location':
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>`
    default:
      return ''
  }
}

function formatEmailPlaceholder(email: string) {
  return email.replace('[at]', '@')
}
</script>

<template>
  <section :id="id" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="section-title" data-aos="fade-up">
        <h2>{{ $t('contact.title') }}</h2>
        <p>{{ $t('contact.subtitle') }}</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div class="bg-white rounded-xl shadow-lg p-8" data-aos="fade-right">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('contact.sendMessage') }}</h3>
          
          <div v-if="formSubmitted" class="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>{{ $t('contact.success') }}</span>
            </div>
          </div>
          
          <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div class="form-group">
                <label for="name" class="form-label">{{ $t('contact.name') }}</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  class="form-input" 
                  :class="{ 'border-red-500': errors.name }"
                  :placeholder="$t('contact.placeholders.name')"
                >
                <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">{{ $t('contact.email') }}</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  class="form-input" 
                  :class="{ 'border-red-500': errors.email }"
                  :placeholder="formatEmailPlaceholder($t('contact.placeholders.email'))"
                >
                <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div class="form-group">
                <label for="phone" class="form-label">{{ $t('contact.phone') }}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="formData.phone" 
                  class="form-input" 
                  :placeholder="$t('contact.placeholders.phone')"
                >
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">{{ $t('contact.subject') }}</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="formData.subject" 
                  class="form-input" 
                  :class="{ 'border-red-500': errors.subject }"
                  :placeholder="$t('contact.placeholders.subject')"
                >
                <span v-if="errors.subject" class="form-error">{{ errors.subject }}</span>
              </div>
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">{{ $t('contact.message') }}</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                rows="4" 
                class="form-input resize-none" 
                :class="{ 'border-red-500': errors.message }"
                :placeholder="$t('contact.placeholders.message')"
              ></textarea>
              <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
            </div>
            
            <button 
              type="submit" 
              class="btn-primary w-full mt-4 flex items-center justify-center"
              :disabled="formSubmitting"
            >
              <span v-if="formSubmitting">
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ $t('contact.sending') }}
              </span>
              <span v-else>{{ $t('contact.send') }}</span>
            </button>
          </form>
        </div>
        
        <div data-aos="fade-left">
          <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('contact.info.title') }}</h3>
            
            <div class="space-y-6">
              <div 
                v-for="(item, index) in contactInfo" 
                :key="index"
                class="flex items-start"
              >
                <div class="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                  <div v-html="getContactIcon(item.icon)"></div>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">{{ $t('contact.info.' + item.key) }}</h4>
                  <p class="text-gray-600">{{ item.value }}</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h4 class="font-medium text-gray-900 mb-4">{{ $t('contact.followUs') }}</h4>
              <div class="flex space-x-4">
                <a href="#" class="bg-gray-100 p-2 rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="bg-gray-100 p-2 rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" class="bg-gray-100 p-2 rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" class="bg-gray-100 p-2 rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl shadow-lg p-8 h-80">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('contact.location') }}</h3>
            <!-- Placeholder for map - would be replaced with actual map implementation -->
            <div class="h-48 bg-gray-200 rounded-lg overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/2078076/pexels-photo-2078076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Location Map" 
                class="w-full h-full object-cover"
              >
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="bg-primary-600 text-white p-2 rounded-full animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
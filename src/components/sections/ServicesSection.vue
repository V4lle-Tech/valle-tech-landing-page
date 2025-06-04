<script setup lang="ts">
defineProps<{
  id: string
}>()

const services = [
  {
    id: 1,
    key: 'software development',
    icon: 'code',
    color: 'primary'
  },
  {
    id: 2,
    key: 'it consulting',
    icon: 'lightbulb',
    color: 'secondary'
  },
  {
    id: 3,
    key: 'software engineering training',
    icon: 'academic-cap',
    color: 'accent'
  }
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'code':
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>`
    case 'lightbulb':
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>`
    case 'academic-cap':
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>`
    default:
      return ''
  }
}

const getColorClass = (color: string) => {
  switch (color) {
    case 'primary':
      return {
        bg: 'bg-primary-600',
        light: 'bg-primary-50',
        text: 'text-primary-600',
        hover: 'group-hover:bg-primary-700'
      }
    case 'secondary':
      return {
        bg: 'bg-secondary-600',
        light: 'bg-secondary-50',
        text: 'text-secondary-600',
        hover: 'group-hover:bg-secondary-700'
      }
    case 'accent':
      return {
        bg: 'bg-accent-500',
        light: 'bg-accent-50',
        text: 'text-accent-500',
        hover: 'group-hover:bg-accent-600'
      }
    default:
      return {
        bg: 'bg-gray-600',
        light: 'bg-gray-50',
        text: 'text-gray-600',
        hover: 'group-hover:bg-gray-700'
      }
  }
}
</script>

<template>
  <section :id="id" class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="section-title" data-aos="fade-up">
        <h2>{{ $t('services.title') }}</h2>
        <p>{{ $t('services.subtitle') }}</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 flex flex-col h-full"
          data-aos="fade-up"
          :data-aos-delay="service.id * 100"
        >
          <div class="p-6 flex-1 flex flex-col">
            <div :class="['inline-flex p-3 rounded-lg mb-5', getColorClass(service.color).light]">
              <div :class="[getColorClass(service.color).text]" v-html="getIcon(service.icon)"></div>
            </div>
            
            <h3 class="text-xl font-bold mb-3">{{ $t('services.' + service.key + '.title') }}</h3>
            <p class="text-gray-600 mb-6">{{ $t('services.' + service.key + '.desc') }}</p>
            
            <div class="mb-6">
              <h4 class="font-semibold text-gray-800 mb-3">{{ $t('services.benefits') }}</h4>
              <ul class="space-y-2">
                <li 
                  v-for="index in 4" 
                  :key="index"
                  class="flex items-start"
                >
                  <div :class="['mt-1 mr-2', getColorClass(service.color).text]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">{{ $t('services.' + service.key + '.benefits.' + (index - 1)) }}</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div 
            :class="['px-6 py-4 flex justify-center', getColorClass(service.color).bg, getColorClass(service.color).hover]"
          >
            <a href="#contact" class="text-white font-medium">{{ $t('services.learnMore') }}</a>
          </div> -->
        </div>
      </div>
      
      <!-- <div class="mt-16 text-center" data-aos="fade-up">
        <a href="#contact" class="btn-primary">
          {{ $t('services.cta') }}
        </a>
      </div> -->
    </div>
  </section>
</template>
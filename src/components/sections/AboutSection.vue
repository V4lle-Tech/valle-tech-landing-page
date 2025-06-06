<script setup lang="ts">
defineProps<{
  id: string
}>()

const coreValues = [
  {
    key: 'innovation',
    icon: 'lightbulb'
  },
  {
    key: 'excellence',
    icon: 'star'
  },
  {
    key: 'integrity',
    icon: 'shield-check'
  },
  {
    key: 'collaboration',
    icon: 'users'
  }
]

const getValueIcon = (iconName: string) => {
  switch (iconName) {
    case 'lightbulb':
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>`
    case 'star':
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>`
    case 'shield-check':
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>`
    case 'users':
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>`
    default:
      return ''
  }
}

const achievements = [
  { value: '20+', key: 0 },
  { value: '15+', key: 1 },
  { value: '7', key: 2 },
  { value: '15+', key: 3 }
]
</script>

<template>
  <section :id="id" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="section-title" data-aos="fade-up">
        <h2>{{ $t('about.title') }}</h2>
        <p>{{ $t('about.subtitle') }}</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
        <div data-aos="fade-right">
          <div class="relative">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Our Team" 
              class="rounded-xl w-full max-w-lg"
            >
            <div class="absolute inset-0 bg-primary-900 opacity-20 rounded-xl"></div>
            
            <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <p class="text-gray-800 italic">
                "{{ $t('about.quote') }}"
              </p>
              <div class="mt-4 flex items-center">
                <img 
                  src="/public/profile/javm-profile-v2.png" 
                  alt="Photo of CEO & Founder of V4lle Tech" 
                  class="w-10 h-10 rounded-full object-cover"
                >
                <div class="ml-3">
                  <span class="font-medium text-gray-900 block">{{ $t('about.ceo.name') }}</span>
                  <span class="text-sm text-gray-600 block">{{ $t('about.ceo.title') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div data-aos="fade-left">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('about.storyTitle') }}</h3>
          <p class="text-gray-700 mb-6">
            {{ $t('about.story') }}
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('about.missionTitle') }}</h3>
          <p class="text-gray-700 mb-6">
            {{ $t('about.mission') }}
          </p>
          
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div 
              v-for="item in achievements" 
              :key="item.key"
              class="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <div class="text-3xl font-bold text-primary-600 mb-1">{{ item.value }}</div>
              <div class="text-sm text-gray-600">{{ $t('about.achievements.' + item.key) }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-20" data-aos="fade-up">
        <h3 class="text-2xl font-bold text-center text-gray-900 mb-10">{{ $t('about.valuesTitle') }}</h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(value, index) in coreValues" 
            :key="index"
            class="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center text-primary-600 mb-4">
              <div v-html="getValueIcon(value.icon)"></div>
            </div>
            
            <h4 class="text-xl font-semibold mb-2">{{ $t('about.values.' + value.key + '.title') }}</h4>
            <p class="text-gray-600">{{ $t('about.values.' + value.key + '.desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps<{
  id: string
}>()

interface Project {
  id: number
  key: string
  client: string
  technologies: string[]
  image: string
}

const projects = ref<Project[]>([
  {
    id: 1,
    key: 'accyon-landing-page',
    client: 'ACCYON',
    technologies: ['Vue.js', 'Firebase'],
    image: './public/portfolio/accyon-landing-page.png'
  },
  {
    id: 2,
    key: 'petreos-y-derivados-pos',
    client: 'Petreos y Derivados de Nayar',
    technologies: ['Laravel', 'Livewire', 'PostgreSQL', 'Digital Ocean'],
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
])

const selectedProject = ref<Project | null>(null)
const showProjectDetails = ref(false)

const openProjectDetails = (project: Project) => {
  selectedProject.value = project
  showProjectDetails.value = true
}

const closeProjectDetails = () => {
  showProjectDetails.value = false
  setTimeout(() => {
    selectedProject.value = null
  }, 300)
}

const { locale, messages } = useI18n()

const selectedProjectOutcomes = computed(() => {
  if (!selectedProject.value) return []
  const lang = locale.value
  const key = selectedProject.value.key
  return ((messages.value[lang]?.portfolio as any)?.projects?.[key]?.outcomes) || []
})
</script>

<template>
  <section :id="id" class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="section-title" data-aos="fade-up">
        <h2>{{ $t('portfolio.title') }}</h2>
        <p>{{ $t('portfolio.subtitle') }}</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
          @click="openProjectDetails(project)"
          data-aos="fade-up"
          :data-aos-delay="project.id * 100"
        >
          <div class="relative overflow-hidden h-64">
            <img 
              :src="project.image" 
              :alt="$t('portfolio.projects.' + project.key + '.title')"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            >
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span class="text-xs font-medium bg-primary-600 text-white py-1 px-2 rounded">{{ $t('portfolio.projects.' + project.key + '.category') }}</span>
              <h3 class="text-white text-xl font-bold mt-2">{{ $t('portfolio.projects.' + project.key + '.title') }}</h3>
              <p class="text-gray-200 text-sm">{{ project.client }}</p>
            </div>
          </div>
          
          <div class="p-6">
            <p class="text-gray-600 mb-4 line-clamp-3">{{ $t('portfolio.projects.' + project.key + '.description') }}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="(tech, index) in project.technologies" 
                :key="index"
                class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded"
              >
                {{ tech }}
              </span>
            </div>
            
            <button 
              class="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors duration-200"
            >
              {{ $t('portfolio.viewDetails') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- <div class="mt-12 text-center" data-aos="fade-up">
        <a href="#contact" class="btn-primary">
          {{ $t('portfolio.cta') }}
        </a>
      </div> -->
    </div>
    
    <!-- Project Details Modal -->
    <div 
      v-if="selectedProject"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      :class="{ 'opacity-100': showProjectDetails, 'opacity-0': !showProjectDetails }"
      @click="closeProjectDetails"
    >
      <div 
        class="bg-white rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-lg relative"
        @click.stop
      >
        <!-- Imagen destacada -->
        <div class="relative h-56 w-full">
          <img 
            :src="selectedProject.image" 
            :alt="$t('portfolio.projects.' + selectedProject.key + '.title')"
            class="w-full h-full object-cover rounded-t-xl"
          >
          <button 
            class="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
            @click="closeProjectDetails"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- Contenido -->
        <div class="p-6 flex flex-col space-y-4">
          <div>
            <span class="inline-block bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded mb-1">
              {{ $t('portfolio.projects.' + selectedProject.key + '.category') }}
            </span>
            <h3 class="text-2xl font-bold mt-1">{{ $t('portfolio.projects.' + selectedProject.key + '.title') }}</h3>
            <p class="text-gray-600">{{ selectedProject.client }}</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('portfolio.projectOverview') }}</h4>
            <p class="text-gray-700">{{ $t('portfolio.projects.' + selectedProject.key + '.description') }}</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('portfolio.technologies') }}</h4>
            <div class="flex flex-wrap gap-2 overflow-x-auto">
              <span 
                v-for="(tech, index) in selectedProject.technologies" 
                :key="index"
                class="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('portfolio.outcomes') }}</h4>
            <ul class="space-y-2">
              <li 
                v-for="(outcome, index) in selectedProjectOutcomes" 
                :key="index"
                class="flex items-start"
              >
                <div class="mt-1 mr-2 text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">{{ outcome }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
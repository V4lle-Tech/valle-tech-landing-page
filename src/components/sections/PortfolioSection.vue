<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  id: string
}>()

interface Project {
  id: number
  title: string
  client: string
  category: string
  description: string
  technologies: string[]
  outcomes: string[]
  image: string
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'E-Commerce Platform Redesign',
    client: 'GlobalShop Inc.',
    category: 'Web Development',
    description: 'Complete overhaul of an existing e-commerce platform to improve user experience, mobile responsiveness, and increase conversion rates.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    outcomes: [
      'Increased conversion rate by 24%',
      'Reduced page load time by 40%',
      'Improved mobile experience leading to 35% higher mobile sales'
    ],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    client: 'MediCare Solutions',
    category: 'Custom Software',
    description: 'Development of a comprehensive healthcare management system for tracking patient records, scheduling, and billing operations.',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Express.js'],
    outcomes: [
      'Reduced administrative workload by 35%',
      'Improved appointment scheduling efficiency by 50%',
      'Seamless integration with existing hospital systems'
    ],
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'FinTech Mobile Application',
    client: 'NexusPay',
    category: 'Mobile Development',
    description: 'Created a secure, user-friendly mobile application for digital payments, money transfers, and financial management.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    outcomes: [
      'Over 100,000 downloads in the first quarter',
      'Average user rating of 4.8/5 stars',
      'Successfully processed over $10M in transactions'
    ],
    image: 'https://images.pexels.com/photos/6347719/pexels-photo-6347719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Smart Inventory Management',
    client: 'LogiTech Industries',
    category: 'Enterprise Software',
    description: 'Built a cloud-based inventory management system with AI-powered forecasting capabilities for a manufacturing company.',
    technologies: ['Vue.js', '.NET Core', 'SQL Server', 'TensorFlow'],
    outcomes: [
      'Reduced inventory costs by 15%',
      'Improved accuracy of demand forecasting to 92%',
      'Eliminated manual inventory counts through automation'
    ],
    image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
</script>

<template>
  <section :id="id" class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="section-title" data-aos="fade-up">
        <h2>Our Portfolio</h2>
        <p>Explore our recent projects and success stories</p>
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
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            >
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span class="text-xs font-medium bg-primary-600 text-white py-1 px-2 rounded">{{ project.category }}</span>
              <h3 class="text-white text-xl font-bold mt-2">{{ project.title }}</h3>
              <p class="text-gray-200 text-sm">{{ project.client }}</p>
            </div>
          </div>
          
          <div class="p-6">
            <p class="text-gray-600 mb-4 line-clamp-3">{{ project.description }}</p>
            
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
              View Project Details
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center" data-aos="fade-up">
        <a href="#contact" class="btn-primary">
          Start Your Project
        </a>
      </div>
    </div>
    
    <!-- Project Details Modal -->
    <div 
      v-if="selectedProject"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      :class="{ 'opacity-100': showProjectDetails, 'opacity-0': !showProjectDetails }"
      @click="closeProjectDetails"
    >
      <div 
        class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-transform duration-300"
        :class="{ 'scale-100': showProjectDetails, 'scale-95': !showProjectDetails }"
        @click.stop
      >
        <div class="relative">
          <img 
            :src="selectedProject.image" 
            :alt="selectedProject.title"
            class="w-full h-64 object-cover"
          >
          <button 
            @click="closeProjectDetails"
            class="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-gray-600 focus:outline-none"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-sm font-medium bg-primary-600 text-white py-1 px-2 rounded">{{ selectedProject.category }}</span>
              <h3 class="text-gray-900 text-2xl font-bold mt-2">{{ selectedProject.title }}</h3>
              <p class="text-gray-600">{{ selectedProject.client }}</p>
            </div>
          </div>
          
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Project Overview</h4>
            <p class="text-gray-700">{{ selectedProject.description }}</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h4>
              <div class="flex flex-wrap gap-2">
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
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Key Outcomes</h4>
              <ul class="space-y-2">
                <li 
                  v-for="(outcome, index) in selectedProject.outcomes" 
                  :key="index"
                  class="flex items-start"
                >
                  <div class="mt-1 mr-2 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">{{ outcome }}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="mt-8 flex justify-end">
            <button 
              @click="closeProjectDetails"
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
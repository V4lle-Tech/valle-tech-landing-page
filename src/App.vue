<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-800">
    <!-- Header -->
    <header class="bg-white shadow-md fixed w-full z-50 transition-all duration-300" :class="{ 'bg-opacity-90 backdrop-blur-sm': isScrolled }">
      <div class="container mx-auto flex items-center justify-between py-4 px-6">
        <!-- Logo -->
        <a href="#" class="flex items-center">
          <!-- Placeholder SVG Logo -->
          <svg class="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span class="ml-2 font-bold text-xl">V4lle Tech</span>
        </a>
        <!-- Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a href="#servicios" class="hover:text-blue-600">Servicios</a>
          <a href="#proyectos" class="hover:text-blue-600">Proyectos</a>
          <a href="#acerca" class="hover:text-blue-600">Acerca</a>
          <a href="#contacto" class="hover:text-blue-600">Contacto</a>
        </nav>
        <!-- Call-to-Action Button -->
        <div class="hidden md:block">
          <a href="#contacto" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Contáctanos</a>
        </div>
        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden focus:outline-none">
          <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white">
        <nav class="flex flex-col space-y-2 px-6 py-4">
          <a href="#servicios" class="hover:text-blue-600">Servicios</a>
          <a href="#proyectos" class="hover:text-blue-600">Proyectos</a>
          <a href="#acerca" class="hover:text-blue-600">Acerca</a>
          <a href="#contacto" class="hover:text-blue-600">Contacto</a>
          <a href="#contacto" class="mt-2 bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700 transition">Contáctanos</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 animate-fade-in-up">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Transformando Ideas en <span class="text-blue-600">Realidad Digital</span>
            </h1>
            <p class="text-lg text-gray-600 mb-8">
              Desarrollamos soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.
            </p>
            <div class="flex space-x-4">
              <a href="#contacto" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Comienza tu Proyecto
              </a>
              <a href="#servicios" class="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
                Nuestros Servicios
              </a>
            </div>
          </div>
          <div class="md:w-1/2 mt-12 md:mt-0 animate-fade-in-up animation-delay-200">
            <div class="w-full max-w-lg mx-auto">
              <svg class="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="#E5E7EB"/>
                <path d="M200 100C233.137 100 260 127.863 260 161C260 194.137 233.137 222 200 222C166.863 222 140 194.137 140 161C140 127.863 166.863 100 200 100Z" fill="#3B82F6"/>
                <path d="M200 140C211.046 140 220 148.954 220 160C220 171.046 211.046 180 200 180C188.954 180 180 171.046 180 160C180 148.954 188.954 140 200 140Z" fill="white"/>
                <path d="M160 200C160 200 180 220 200 220C220 220 240 200 240 200" stroke="#3B82F6" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Section -->
    <section id="servicios" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Desarrollo Web</h3>
            <p class="text-gray-600">Creamos sitios web modernos y responsivos que destacan tu marca en el mundo digital.</p>
          </div>
          <div class="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Aplicaciones Móviles</h3>
            <p class="text-gray-600">Desarrollamos apps nativas y multiplataforma que conectan con tus usuarios.</p>
          </div>
          <div class="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Consultoría Técnica</h3>
            <p class="text-gray-600">Asesoramiento experto para optimizar tu infraestructura tecnológica.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Proyectos Section -->
    <section id="proyectos" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Proyectos Destacados</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="https://placehold.co/600x400/3B82F6/FFFFFF/png?text=E-commerce+Platform" 
              alt="Proyecto 1" 
              class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300">
              <div class="absolute bottom-0 p-6 text-white">
                <h3 class="text-xl font-semibold mb-2">E-commerce Platform</h3>
                <p class="text-sm">Plataforma de comercio electrónico con más de 10,000 productos</p>
              </div>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="https://placehold.co/600x400/1E40AF/FFFFFF/png?text=App+de+Gestión" 
              alt="Proyecto 2" 
              class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300">
              <div class="absolute bottom-0 p-6 text-white">
                <h3 class="text-xl font-semibold mb-2">App de Gestión</h3>
                <p class="text-sm">Sistema integral de gestión empresarial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonios Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Lo que dicen nuestros clientes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">JD</div>
              <div class="ml-4">
                <h4 class="font-semibold">Juan Díaz</h4>
                <p class="text-sm text-gray-600">CEO, TechCorp</p>
              </div>
            </div>
            <p class="text-gray-600">"V4lle Tech transformó completamente nuestra presencia digital. El equipo es profesional y entregó más de lo que esperábamos."</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">MR</div>
              <div class="ml-4">
                <h4 class="font-semibold">María Rodríguez</h4>
                <p class="text-sm text-gray-600">Directora de Marketing</p>
              </div>
            </div>
            <p class="text-gray-600">"La aplicación móvil que desarrollaron superó todas nuestras expectativas. Increíble atención al detalle."</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">CP</div>
              <div class="ml-4">
                <h4 class="font-semibold">Carlos Pérez</h4>
                <p class="text-sm text-gray-600">Fundador, StartupX</p>
              </div>
            </div>
            <p class="text-gray-600">"Su enfoque en la experiencia de usuario y la calidad del código es excepcional. Un verdadero partner tecnológico."</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final Call-to-Action Section -->
    <section id="contacto" class="bg-blue-600 text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
      <div class="container mx-auto text-center px-6 md:px-0 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">¿Listo para llevar tu proyecto al siguiente nivel?</h2>
        <p class="mb-8 text-lg md:text-xl animate-fade-in-up animation-delay-200">En V4lle Tech transformamos tus ideas en soluciones tecnológicas de alto impacto.</p>
        <a href="mailto:contacto@v4lletech.com" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
          ¡Contáctanos Ahora!
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-8">
      <div class="container mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Links -->
        <div>
          <h3 class="font-semibold mb-4">Enlaces</h3>
          <ul class="space-y-2">
            <li><a href="#servicios" class="hover:text-white">Servicios</a></li>
            <li><a href="#proyectos" class="hover:text-white">Proyectos</a></li>
            <li><a href="#acerca" class="hover:text-white">Acerca</a></li>
            <li><a href="#contacto" class="hover:text-white">Contacto</a></li>
          </ul>
        </div>
        <!-- Contact Info -->
        <div>
          <h3 class="font-semibold mb-4">Contacto</h3>
          <p>contacto@v4lletech.com</p>
          <p>+52 123 456 7890</p>
        </div>
        <!-- Social Media -->
        <div>
          <h3 class="font-semibold mb-4">Síguenos</h3>
          <div class="flex space-x-4">
            <a href="#" aria-label="LinkedIn" class="hover:text-white">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h4v16H4V4zm2-2a2 2 0 11.001 3.999A2 2 0 016 2zm4 6h4v2h.1c.6-1.1 2.1-2.1 4.4-2.1 4.7 0 5.6 3.1 5.6 7.1V20h-4v-6.7c0-1.6-.1-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V20h-4V8z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" class="hover:text-white">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" class="hover:text-white">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.15 12.15 0 013 4.89a4.28 4.28 0 001.32 5.72 4.27 4.27 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.56A8.7 8.7 0 0022.46 6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center text-sm mt-8">&copy; 2025 V4lle Tech. Todos los derechos reservados.</div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

/* Transiciones suaves para elementos interactivos */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Efecto de hover para tarjetas */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Efecto de glassmorphism para el header */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>

<!-- Tailwind CSS se gestiona globalmente; no es necesario CSS adicional aquí -->

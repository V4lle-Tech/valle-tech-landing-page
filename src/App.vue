<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-800">
    <!-- Header -->
    <header class="bg-white shadow-md">
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

    <!-- Main Content Placeholder -->
    <main class="flex-grow">
      <!-- Puedes agregar tu contenido principal aquí -->
    </main>

    <!-- Final Call-to-Action Section -->
    <section id="contacto" class="bg-blue-600 text-white py-20">
      <div class="container mx-auto text-center px-6 md:px-0">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">¿Listo para llevar tu proyecto al siguiente nivel?</h2>
        <p class="mb-8 text-lg md:text-xl">En V4lle Tech transformamos tus ideas en soluciones tecnológicas de alto impacto.</p>
        <a href="mailto:contacto@v4lletech.com" class="bg-white text-blue-600 px-6 py-3 rounded text-lg font-semibold hover:bg-gray-100 transition">¡Contáctanos Ahora!</a>
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
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
</script>

<!-- Tailwind CSS se gestiona globalmente; no es necesario CSS adicional aquí -->

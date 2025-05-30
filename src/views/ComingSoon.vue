<script setup lang="ts">
// No se requiere lógica compleja para la página Coming Soon
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between bg-gradient-to-br from-primary-900 to-primary-700 text-white">
    <header class="w-full flex justify-center py-10">
      <img src="/v4lle-tech-dark.png" alt="V4lle Tech Logo" class="h-12 md:h-16" />
    </header>
    <main class="flex-1 flex flex-col items-center justify-center text-center px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Espéranos Pronto</h1>
      <p class="text-lg md:text-2xl text-white/80 mb-8 max-w-xl">Estamos trabajando para traerte una nueva experiencia digital. Muy pronto podrás conocer nuestros servicios y proyectos.</p>
      <div class="flex items-center justify-center mt-8">
        <svg class="animate-spin h-8 w-8 text-secondary-400 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="text-white/70 text-lg">Sitio en construcción</span>
      </div>
    </main>
    <footer class="w-full text-center py-6 text-white/60 text-sm">
      &copy; {{ currentYear }} V4lle Tech. Todos los derechos reservados.
    </footer>
  </div>
</template> 
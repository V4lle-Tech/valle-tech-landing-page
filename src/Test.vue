<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import PortfolioSection from './components/sections/PortfolioSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <div class="app">
        <Navbar />
        <main>
            <HeroSection id="home" />
            <ServicesSection id="services" />
            <AboutSection id="about" />
            <PortfolioSection id="portfolio" />
            <ContactSection id="contact" />
            <Footer />
        </main>
    </div>
</template>
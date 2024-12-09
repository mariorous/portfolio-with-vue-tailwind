<script setup>
import { ref } from 'vue';
import DarkModeIcon from './icons/DarkModeIcon.vue'
import GitHubIcon from './icons/GitHubIcon.vue'
import LogoIcon from './icons/LogoIcon.vue'

const isMenuOpen = ref(false); // Estado para controlar si el menú está abierto o cerrado
</script>

<template>
    <header class="flex flex-start justify-between p-2 md:flex md:p-2 md:justify-center">
        <nav class="flex justify-center gap-8 mt-2">
            <div class="flex md:flex items-center">
                <LogoIcon class="mx-1 pb-1" />
                <h1 class="text-xl font-bold font-mplus pb-1">Mario López</h1>
            </div>
            <div class="hidden justify-between items-center gap-6 md:flex">
                <a class="relative group" href="">
                    <span class="hover:text-[#fad28c] transition-colors duration-300">Works</span>
                    <span class="absolute bottom-0 left-1/2 h-[4px] w-0 bg-[#fad28c] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
                <a class="relative group" href="">
                    <span class="hover:text-[#fad28c] transition-colors duration-300">Studies</span>
                    <span class="absolute bottom-0 left-1/2 h-[4px] w-0 bg-[#fad28c] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
                <a class="relative group" href="">
                    <span class="hover:text-[#fad28c] transition-colors duration-300">Wallpapers</span>
                    <span class="absolute bottom-0 left-1/2 h-[4px] w-0 bg-[#fad28c] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
                <a class="relative group flex items-center gap-1" href="https://github.com/mariorous/portfolio-with-vue-tailwind" target="_blank">
                    <span class="flex items-center hover:text-[#fad28c] transition-colors duration-300">
                        <GitHubIcon class="mr-1" />
                        Source
                    </span>
                    <span class="absolute bottom-0 left-1/2 h-[4px] w-0 bg-[#fad28c] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
            </div>

            <div class="hidden ml-20 items-center md:flex">
                <DarkModeIcon />
            </div>
        </nav>

        <div class="relative">
            <!-- Ícono del menú -->
            <button
            @click="isMenuOpen = !isMenuOpen"
            id="menu-button"
            class="md:hidden flex items-center justify-center w-10 h-10 rounded-md"
            >
            <!-- Icono del menú -->
            <svg
                class="w-8 h-8 text-white transform transition-transform duration-300 ease-in-out"
                :class="{ 'rotate-0 opacity-100': !isMenuOpen, 'rotate-45 opacity-0': isMenuOpen }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icono de cerrar (X) -->
            <svg
                class="w-8 h-8 text-white absolute transform transition-transform duration-300 ease-in-out"
                :class="{ 'rotate-0 opacity-0': !isMenuOpen, 'rotate-90 opacity-100': isMenuOpen }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>

    </header>
    <!-- Menú desplegable -->
    <div
      class="flex flex-col gap-4 items-center w-full p-4 rounded-md shadow-lg transition-transform duration-300 ease-in-out origin-top"
      :class="isMenuOpen ? 'scale-y-100' : 'scale-y-0'"
    >
        <a href="#" class="text-white hover:text-gray-500">Works</a>
        <a href="#" class="text-white hover:text-gray-500">Studies</a>
        <a href="#" class="text-white hover:text-gray-500">Wallpapers</a>
        <a href="#" class="text-white hover:text-gray-500">Source</a>
    </div>
</template>

<style scoped>
    
</style>
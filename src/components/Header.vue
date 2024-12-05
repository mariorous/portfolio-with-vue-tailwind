<script setup>
import DarkModeIcon from './icons/DarkModeIcon.vue'
import GitHubIcon from './icons/GitHubIcon.vue'
import LogoIcon from './icons/LogoIcon.vue'
</script>

<template>
    <header class="flex p-2 justify-center">
        <nav class="flex justify-center gap-8 mt-2">
            <div class="flex items-center">
                <LogoIcon class="mx-1 pb-1" />
                <h1 class="text-xl font-bold font-mplus pb-1">Mario López</h1>
            </div>
            <div class="flex justify-between items-center gap-6">
                <a href="">Works</a>
                <a href="">Studies</a>
                <a href="">Wallpapers</a>
                <a href="https://github.com/mariorous/portfolio-with-vue-tailwind" target="_blank" class="flex items-center gap-1"><GitHubIcon/>Source</a>
            </div>
            <div class="flex ml-20 items-center">
                <DarkModeIcon />
            </div>
        </nav>
    </header>
</template>

<style scoped>
    
</style>
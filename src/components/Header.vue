<script setup>
import DarkModeIcon from './icons/DarkModeIcon.vue'
import GitHubIcon from './icons/GitHubIcon.vue'
</script>

<template>
    <header class="flex p-2 justify-center">
        <nav class="flex justify-center">
            <div class="flex items-center">
                <h1 class="text-2xl font-bold font-mplus">Mario López</h1>
            </div>
            <div class="flex justify-between items-center gap-8">
                <a href="">Works</a>
                <a href="">Studies</a>
                <a href="">Wallpapers</a>
                <a href="" class="flex items-center"><GitHubIcon/>Source</a>
            </div>
            <div>
                <DarkModeIcon />
            </div>
        </nav>
    </header>
</template>

<style lang="">
    
</style>
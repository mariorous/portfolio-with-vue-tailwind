<script setup>
import WorkSection from './WorkSection.vue';
</script>

<template>
  <div class="flex flex-col gap-8 md:gap-4 w-full p-8 md:p-0 md:w-[468px] md:m-auto">
    <div class="flex justify-center mt-0">
      <img class="w-80" src="../assets/polar-bear.png">
    </div>
    <div class="bg-[#303033] sm:px-4 sm:py-4 px-4 py-4 text-center md:px-10 md:py-4 rounded-lg">
      <span>Hello, I'm an full stack developer based in Spain!</span>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <h2 class="text-2xl md:text-4xl font-bold font-mplus pb-1">Mario López</h2>
        <p>Junior Full Stack Developer / Designer</p>
      </div>
      <div>
        <img class="w-[72px] h-16 md:w-24 md:h-24 bg-cover rounded-full object-cover object-center" src="../assets/profile_picture.jpg" alt="">
      </div>
    </div>
    <div class="flex items-center justify-center">
      <a href="/src/assets/mario-lopez-resume.pdf" download="mario-lopez-resume.pdf" class="rounded-lg px-5 py-2.5 overflow-hidden group bg-[#fad28c] relative hover:bg-gradient-to-r hover:from-[#fad28c] hover:to-[#fac66d] text-[#303033] font-bold hover:ring-2 hover:ring-offset-2 hover:ring-[#fac66d] transition-all ease-out duration-300">
        <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span class="relative">Download my resume</span>
      </a>
    </div>
    <div class="flex flex-col gap-2">
      <h3 class="text-xl font-bold font-mplus border-b-[6px] border-[#525252] w-12">Work</h3>
      <WorkSection />
    </div>
    <div class="flex flex-col gap-2">
      <h3 class="text-xl font-bold font-mplus border-b-[6px] border-[#525252] w-8">Bio</h3>
      <div class="flex flex-col gap-4">
        <!-- Item 1 -->
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center gap-1">
            <p class="flex items-center justify-center text-white text-xs">Present</p>
            <hr class="w-12 h-0.5 bg-[#4c4e4f] border-none">
            <p class="flex items-center justify-center text-white text-xs">2024</p>
          </div>
          <p>
            I started working at <b>Mira Telecomunicacions</b> as a Junior Full Stack Developer.
          </p>
        </div>

        <!-- Item 2 -->
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center gap-1">
            <p class="flex items-center justify-center text-white text-xs">2025</p>
            <hr class="w-12 h-0.5 bg-[#4c4e4f] border-none">
            <p class="flex items-center justify-center text-white text-xs">2023</p>
          </div>
          <p>
            I started studying <b>Web Application Development</b> at Institut l'Estatut.
          </p>
        </div>

        <!-- Item 3 -->
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center gap-1">
            <p class="flex items-center justify-center text-white text-xs">2023</p>
            <hr class="w-12 h-0.5 bg-[#4c4e4f] border-none">
            <p class="flex items-center justify-center text-white text-xs">2022</p>
          </div>
          <p>
            I started learning <b>programming</b> on my own while working as an electronics technician.  
          </p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped>

</style>

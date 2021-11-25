<template>
  <red-background/>
  <!-- <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: '#790F19',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            random: false,
            speed: 0.5,
            straight: false,
            out_mode:'out'
          },
          number: {
            value: 80,
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }"
    /> -->
</template>
<script>
import RedBackground from './components/RedBackground.vue'
import WhiteBackground from './components/WhiteBackground.vue'
export default {
  components: {
    RedBackground, WhiteBackground
  },
}
</script>
<style>
.slide-up-enter-active,
.slide-up-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 2.5s ease 2s }
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10%) }
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-10%) }
.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(10%) }
</style>
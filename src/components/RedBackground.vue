<template>
  <div class="w-screen h-screen fixed bg-primary items-center red-background bg-cover">
  <!-- <div class="w-screen h-screen fixed bg-primary items-center red-background bg-cover" style="background: url('img/particle-bg.png') #790F19 right bottom no-repeat"> -->
    <Particles
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
    />
    <transition name="slide-left" appear>
      <router-link to='/' v-if="$router.currentRoute.value.path != '/'" class="back-button sticky top-px25 left-px25 z-50 text-white text-xs">
        <!-- <button type="button" class="back-button sticky top-px25 left-px25 z-50 text-white text-xs">&lt; Back to Welcome</button> -->
        <span class="text-lg font-medium">&lt;</span> Back to Welcome
      </router-link>
    </transition>
    <div class="mx-auto min-w-min relative h-screen flex flex-nowrap flex-col items-center justify-center">
      <transition name="slide-up" appear>
        <router-view/>
      </transition>
    </div>
		<footer class="absolute mx-auto py-4 w-full bottom-0 text-white text-center text-sm">
      <transition-group name="slide-up" appear>
        <a href="/">PT. Jumpa Daring Indonesia</a><br>
        <span>V1.0.0</span>
      </transition-group>
		</footer>
  </div>
</template>

<script>
export default {
  name: 'RedBackground',
  data(){
    return{
      buttonVisible: true
    }
  },
  mounted(){
    console.log(this.$router.currentRoute.value.path)
  }
}
</script>
<style scoped>
.back-button {
  transition: ease 1.5 all;
}
.back-button:hover {
  background-color: white;
  color: #790F19;
  border-radius: 1rem;
  font-weight: 700;
  padding: .125rem .5rem;
}
</style>
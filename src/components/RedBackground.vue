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
      <button type="button" @click="$router.go(-1)" class="back-button sticky top-px25 left-px25 z-50 text-white text-xs">&lt; Back</button>
    </transition>
    <div class="mx-auto min-w-min relative h-screen flex flex-nowrap flex-col items-center justify-center">
      <transition name="slide-up" appear>
        <router-view/>
      </transition>
    </div>
		<footer class="absolute mx-auto py-4 w-full bottom-0 text-white text-center text-xs">
      <transition name="slide-up" appear>
        <a href="/">PT. Jumpa Daring Indonesia</a>
      </transition>
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
    console.log(this.$router.history)
  }
}
</script>
<style>
/* .back-button::before {
  content: '<';
  position: absolute;
  top: -1.25px;
  font-size: 1.25rem;
  margin-left: -20px;
} */
</style>
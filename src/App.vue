<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <div>
    <Gray v-show="isLogin == true"/>
    <Red v-show="isLogin == false"/>
  </div> -->
  <Gray />
</template>
<script>
import Gray from '@/views/background/Gray.vue'
import Red from '@/views/background/Red.vue'
export default {
  components: {
    Red, Gray
  },
  data(){
    return{
      isLogin: false
    }
  }
}
</script>

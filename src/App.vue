<template>
  <div id="app" :style="`direction: ${(lang == 'en' )? 'rtl': 'ltr' }`">
     <home-view />
    <router-view/>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'


export default {
  components: {HomeView },
  name: 'App',
  
  computed :{
    lang() {
      return localStorage.getItem("lang") || "en";

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
#app {
   font-family:cairo;
   
}  body { padding: 0; margin: 0; }

</style>

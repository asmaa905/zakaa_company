<template>
  <div id="app">
     <home-view />
    <router-view/>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'


export default {
  components: {HomeView },
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
#app {
  font-family:cairo;

}  body { padding: 0; margin: 0; }

</style>

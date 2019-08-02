<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <secondcomponent></secondcomponent> -->
    <firstcomponent></firstcomponent>
    <router-link to="/first">第一个链接</router-link>
    <router-link to="/second">第二个链接</router-link>
    <router-view/>
  </div>
</template>

<script>
import firstcomponent from './components/firstcomponent.vue'
// import secondcomponent from './components/secondcomponent.vue'

export default {
  name: 'App',
  components: { firstcomponent }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

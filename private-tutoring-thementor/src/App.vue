<template>
  <Navbar class="navbar" />
  <div class="content">
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/layouts/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.navbar {
  max-width: 90vw;
  margin: 0 auto;
  padding: 0;
}
.content {
  margin: 0 auto;
  max-width: 75vw;
  padding: 0;
}
</style>

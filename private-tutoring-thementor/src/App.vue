<template>
  <Navbar class="navbar" />
  <div class="content">
    <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeInUp">
      <router-view />
    </transition>
  </div>
  <Footer class="footer" />
</template>

<script>
import Navbar from './components/layouts/Navbar.vue'
import Footer from './components/layouts/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.navbar {
  max-width: 90vw;
  margin: 0vh auto 5vh;
  padding: 0;
}
.content {
  margin: 0 auto;
  width: 100%;
  padding: 0;
}
.footer {
  max-width: 100%;
  padding: 0;
  margin-top: 5em;
}
</style>

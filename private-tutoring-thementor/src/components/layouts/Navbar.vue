<template>
  <div class="main-header">
   <div class="nav">
    <nav>
     <main-button link to="/courses" mode="btn black">Courses ✍</main-button>
     <main-button link to="/tutors" mode="btn black">Tutors 🧔</main-button>
     <main-button link to="/register" mode="btn black">Be a Tutor 📝</main-button>
    </nav>
   </div>
   <div class="logo animate__animated animate__swing animate__delay-3s">
    <router-link to="/">
      <img src="../../assets/logo/TheMentor-logo-svg-nobackground.svg">
    </router-link>
   </div>
   <div class="social-icons">
     <main-button mode="btn black">🤨</main-button>
     <main-button mode="btn black">😋</main-button>
     <main-button mode="btn black">🤔</main-button>
   </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.main-header {
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 justify-content: space-between;
 align-items: center;
 border-bottom: 2.5px solid var(--black);
 padding: 1em 0;
}
.btn:nth-last-child(3), .btn:nth-last-child(2), .router:nth-last-child(3), .router:nth-last-child(2) {
 margin-right: 0.5em;
}
.logo img {
 width: 5vw;
}
.logo {
 text-align: center;
}
.social-icons {
 text-align: right;
}
</style>
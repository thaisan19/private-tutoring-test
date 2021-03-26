<template>
  <div class="main-header">
   <div class="nav">
    <nav>
     <main-button mode="btn blue">Courses ✍</main-button>
     <main-button mode="btn blue">Tutors 🧔</main-button>
     <main-button mode="btn blue">Be a Tutor 📝</main-button>
    </nav>
   </div>
   <div class="logo animate__animated animate__swing animate__delay-3s">
    <img src="../../assets/logo/TheMentor-logo-svg-nobackground.svg">
   </div>
   <div class="social-icons">
     <main-button mode="btn blue">🤨</main-button>
     <main-button mode="btn blue">😋</main-button>
     <main-button mode="btn blue">🤔</main-button>
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
.btn:nth-last-child(3), .btn:nth-last-child(2) {
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
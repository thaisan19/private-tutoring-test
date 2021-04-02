<template>
  <div class="footer">
   <div class="top">
    <h1>Contact Us For More Information</h1>
    <br>
    <h1>🤗 🙂 😙 🤔</h1>
    <br>
   </div>
   <div class="middle">
    <div class="menu courses">
     <router-link to="/courses">
      <p>Courses ✍</p>
     </router-link>
    </div>
    <div class="menu tutors">
     <router-link to="/tutors">
      <p>Tutors 🧔</p>
     </router-link>
    </div>
    <div class="menu be-a-tutor">
     <router-link to="/register">
      <p>Be a Tutor 📝</p>
     </router-link>
    </div>
   </div>
   <div class="bottom">
    <p>© 2021 - TheMentor ®<br>
    🌍 Offical Website - www.thementor.me 🌏<br>
    🌄 Kirirom National Park Kampong Spue, Cambodia 🌅</p>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
 width: 100%;
 text-align: center;
}
.middle {
 width: 100%;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
}
.courses,
.be-a-tutor {
 border-top: 5px solid var(--black);
 border-bottom: 5px solid var(--black);
}
.tutors {
 border: 5px solid var(--black);
}
.menu {
 padding: 1em 0;
 transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
 overflow: hidden;
}
.menu:hover {
 background: var(--blue);
}
.menu p {
 transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.menu p:hover {
 transform: scale(1.1) rotateZ(-2deg);
 color: #fff;
}
.middle p {
 font-size: 1.5em;
 color: var(--black);
}
.bottom {
 padding: 3em 0;
 background: #fff;
 border-bottom: 30px solid var(--blue);
 background: url('../../assets/background-pattern-bottom-right-to-top-left.png');
 background-repeat: no-repeat;
 background-size: cover;
}
.bottom p {
 line-height: 1.5em;
 font-size: 1.3em;
}
</style>
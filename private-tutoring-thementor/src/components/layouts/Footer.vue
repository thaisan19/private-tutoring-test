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
     <p>Courses ✍</p>
    </div>
    <div class="menu tutors">
     <p>Tutors 🧔</p>
    </div>
    <div class="menu be-a-tutor">
     <p>Be a Tutor 📝</p>
    </div>
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
.courses {
 border-top: 5px solid var(--black);
 border-bottom: 5px solid var(--black);
}
.tutors {
 border: 5px solid var(--black);
}
.menu {
 padding: 1em 0;
}
.middle p {
 font-size: 1.5em;
}
</style>
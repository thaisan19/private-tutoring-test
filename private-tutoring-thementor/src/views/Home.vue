<template>
  <section>
    <div class="wrapper">
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
    </div>
    <div class="main-section">
      <h1 class="animate__animated animate__jello animate__delay-1s">Private<br>Tutoring</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
.animate__animated.animate__jello {
  --animate-duration: 2.5s;
}
.main-section {
  text-align: center;
  font-size: 10em;
  font-weight: 900;
  margin-top: 12vh;
  line-height: 115%;
  /* mix-blend-mode: luminosity; */
  color: black;
  -webkit-text-fill-color: var(--blue);
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: var(--black);
  /* text-decoration: underline; */
  /* text-shadow: 0px 20px 5px rgba(0,0,0,0.2); */
  position: absolute;
}
.wrapper {
  height: 80%;
  width: 100%;
  background: transparent;
  position: absolute;
  z-index: 0;
  left: 0;
  margin-top: 0;
}
.wrapper div {
  height: 60px;
  width: 60px;
  border: 2px solid var(--black);
  border-radius: 50px;
  position: absolute;
  top: 10%;
  left: 10%;
  animation: animate 4s linear infinite;
}
div .dot {
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: var(--black);
  position: absolute;
  top: 20%;
  right: 20%;
}
.wrapper div:nth-child(1) {
  top: 20%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(2) {
  top: 60%;
  left: 80%;
  animation: animate 10s linear infinite;
}
.wrapper div:nth-child(3) {
  top: 40%;
  left: 40%;
  animation: animate 5s linear infinite;
}
.wrapper div:nth-child(4) {
  top: 66%;
  left: 60%;
  animation: animate 7s linear infinite;
}
.wrapper div:nth-child(5) {
  top: 90%;
  left: 10%;
  animation: animate 9s linear infinite;
}
.wrapper div:nth-child(6) {
  top: 30%;
  left: 90%;
  animation: animate 5s linear infinite;
}
.wrapper div:nth-child(7) {
  top: 70%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(8) {
  top: 75%;
  left: 60%;
  animation: animate 10s linear infinite;
}
.wrapper div:nth-child(9) {
  top: 50%;
  left: 50%;
  animation: animate 6s linear infinite;
}
.wrapper div:nth-child(10) {
  top: 5%;
  left: 50%;
  animation: animate 7s linear infinite;
}
.wrapper div:nth-child(11) {
  top: 10%;
  left: 90%;
  animation: animate 9s linear infinite;
}
.wrapper div:nth-child(12) {
  top: 20%;
  left: 70%;
  animation: animate 7s linear infinite;
}
.wrapper div:nth-child(13) {
  top: 20%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(14) {
  top: 60%;
  left: 5%;
  animation: animate 6s linear infinite;
}
.wrapper div:nth-child(15) {
  top: 90%;
  left: 80%;
  animation: animate 9s linear infinite;
}

@keyframes animate {
  0% {
    transform: scale(0) translateY(0) rotate(70deg);
  }
  100% {
    transform: scale(1.3) translateY(-100px) rotate(360deg)
  }
}
</style>

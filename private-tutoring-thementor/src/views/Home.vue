<template>
  <section class="section-one">
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
      <h1 class="animate__animated animate__jello">Private<br>Tutoring</h1>
    </div>
    <div class="global-search">
      <input type="text" placeholder="Search for Course or Tutor...🔎📚">
    </div>
  </section>
  <section class="section-two">
    <div class="first-body">
      <div class="first-body-left">
        <h1>We Will Provide <br>FOR YOU...</h1>
        <br>
        <br>
        <p>Online tutoring platform that consists of best qualified tutors. We are assured that our service will provide you <strong>KNOWLEDGE</strong> <br>and <strong>BENEFITS</strong>.</p>
        <br><br>
        <h2>💡📌🧷</h2>
      </div>
      <div class="first-body-right">
        <div class="first-body-right-ele first-body-right-top">
          <div>
            <h1>👩‍🏫</h1>
            <h2>Tutors' Benefits</h2>
          </div>
          <br>
          <p>
            Our Tutor is a high-achieving student or teacher who is well-behaved and able to help a student achieve his or her goal. Tutors will get the income based on the performance.
          </p>
        </div>
        <div class="first-body-right-ele first-body-right-middle">
          <br>
          <div>
            <h1>👨‍🎓</h1>
            <h2>Students' Benefits</h2>
          </div>
          <br>
          <p>
            Students who join our tutoring  are assured that our service will provide you with knowledge and extra  benefits such mentoring , certificates and more.
          </p>
        </div>
        <div class="first-body-right-ele first-body-right-bottom">
          <br>
          <div>
            <h1>🤝</h1>
            <h2>Matching Service</h2>
          </div>
          <br>
          <p>
            We will match the tutor and student based on the subject requirement, and then both tutor and student will be invited to the chat party.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section-three">
    <div class="second-body">
      <div class="second-body-title">
        <h1>🏳</h1>
        <h2>Be Our Official Tutor <br>With 4 Steps...</h2>
      </div>
      <div class="steps">
        <div class="step step-one">
          <div class="sticks">
            <div class="stick stick--active"></div>
            <div class="stick"></div>
            <div class="stick"></div>
            <div class="stick"></div>
          </div>
          <h2>Register With Our Platform</h2>
          <p>In order to register, the Coordinate will fill in some details about their background and profession.
</p>
        </div>
        <div class="step step-two">
          <div class="sticks">
            <div class="stick stick--active"></div>
            <div class="stick stick--active"></div>
            <div class="stick"></div>
            <div class="stick"></div>
          </div>
          <h2>Interview</h2>
          <p>After you pass our check your profession, we will invite you to the interview.</p>
        </div>
        <div class="step step-three">
          <div class="sticks">
            <div class="stick stick--active"></div>
            <div class="stick stick--active"></div>
            <div class="stick stick--active"></div>
            <div class="stick"></div>
          </div>
          <h2>Waiting For Result</h2>
          <p>You will receive the message through any possible platform within a week.</p>
        </div>
        <div class="step step-four">
          <div class="sticks">
            <div class="stick stick--active"></div>
            <div class="stick stick--active"></div>
            <div class="stick stick--active"></div>
            <div class="stick stick--active"></div>
          </div>
          <h2>Congratulations</h2>
          <p>If you pass our interview, we will promote you as a tutor on our site and be ready for tutoring.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section-four">
    <div class="register-marquee">
      <p>Register As a Tutor With Us Now 🤝👨‍⚖️😃</p>
    </div>
  </section>
  <section class="section-five">
    <h1>Five</h1>
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
.register-marquee {
  height: 20vh;
  overflow: hidden;
  position: relative;
  color: var(--black);
  padding-top: 3em;
  border-bottom: 5px solid var(--black);
  border-top: 5px solid var(--black);
  background: #fff;
  cursor: pointer;
}        
.register-marquee p {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto auto;
  font-weight: 700;
  text-align: center;
  font-size: 4em;
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  -moz-animation: scroll-left 2s linear infinite;
  -webkit-animation: scroll-left 2s linear infinite;
  animation: scroll-left 15s linear infinite;
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.register-marquee p:hover {
  letter-spacing: .03em;
  color: var(--blue);
}
        
@-moz-keyframes scroll-left {
  0% {
    -moz-transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}      
@-webkit-keyframes scroll-left {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}
        
@keyframes scroll-left {
  0% {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
}
  100% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
.section-one {
  width: 70vw;
  margin: 0 auto;
  overflow: hidden;
}
.global-search input {
  width: 40%;
  border: 2.5px solid var(--black);
  margin-bottom: 15vh;
  border-radius: 20px;
}
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
  height: 70vh;
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
.global-search {
  text-align: center;
}
.first-body {
  width: 70%;
  height: 80%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  gap: 10em;
  color: var(--black);
  padding-bottom: 10em;
  padding-top: 2em;
}
.first-body h1 {
  font-size: 3.5em;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.first-body h1:hover {
  transform: scale(1.1) rotateZ(-2deg);
  color: var(--blue);
  margin-left: .4em;
}
/* .first-body-left h1:after {
	content: '';
  left: 0;
  display: inline-block;
  height: 1em;
  width: 20%;
  border-bottom: 10px solid;
  margin-top: 10px;
  opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
} */

/* .first-body-left h1:hover:after {
  opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
} */

.first-body-left h2 {
  font-size: 4em;
}
.first-body-left p {
 font-size: 1.8em;
 line-height: 1.4em;
}
.first-body-left strong {
  cursor: pointer;
}
.first-body-right {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}
.first-body-right h2 {
  font-size: 2em;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}
.first-body-right-ele div{
  display: flex;
  align-items: center;
}
.first-body-right-ele div h1 {
  padding-right: .5em;
  width: 1.5em;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.first-body-right-ele div h1:hover {
  transform: scale(1.3) rotateZ(10deg);
}
.first-body-right-ele div h2:hover {
  letter-spacing: .07em;
  transform: scale(1.1) translateZ(5);
  color: var(--blue);
}
.first-body-right-ele p {
  padding-left: 6em;
  font-size: 1.2em;
  line-height: 1.5em;
}
.section-three {
  background: var(--blue);
  overflow: hidden;
  display: block;
  position: relative;
}
.second-body{
  width: 70vw;
  margin: 0 auto;
  height: 80vh;
  padding: 7em 0;
}
.section-three::after {
  content: "";
  background-image: url('../assets/test-background-03.png');
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: 0;
}
.second-body-title h1 {
  font-size: 7em;
  color: #fff;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-right: .2em;
  cursor: pointer;
  z-index: 1;
}
.second-body-title h1:hover {
  transform: scale(1.1) rotateZ(-2deg);
}
.second-body-title h2:hover {
  letter-spacing: .07em;
  transform: scale(1.1) translateZ(5);
  color: var(--white);
}
.second-body-title h2 {
  font-size: 4em;
  line-height: 1em;
  color: #fff;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  z-index: 1;
}
.second-body-title {
  display: flex;
  align-items: center;
}
.steps {
  padding: 5em 0;
  padding-right: 5em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10em;
  grid-row-gap: 3em;
  color: #fff;
}
.step {
  z-index: 1;
}
.step h2 {
  font-size: 1.5em;
  font-weight: 500;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}
.step h2:hover {
  transform: scale(1.2) rotateZ(-1deg);
  padding-left: 1.5em;
  color: var(--yellow);
}
.step p {
  padding: 1em 0;
  line-height: 1.5em;
  font-size: 1.1em;
}
.sticks {
  padding: 1em 0;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  width: 30%;
  padding-left: .5em;
}
.stick {
  width: .8em;
  height: 1em;
  background: #fff;
  transform: skew(-40deg);
}
.stick--active {
  background: var(--yellow);
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}
.stick--active:hover {
  transform: skew(-40deg) scale(1.1);
  height: 1.4em;
  width: 1em;
}
.section-five {
  width: 70%;
  height: 100vh;
  margin: 0 auto;
  padding: 10em 0;
}
</style>

<template>
  <div class="tutor-detail-display">
   <div class="detail-header">
    <div class="tutor-image">
     <img src="https://cdn.dribbble.com/users/2364329/screenshots/10481283/media/f013d5235bfcf1753d56cad154f11a67.jpg?compress=1&resize=400x300">
     <div class="tutor-name-expertise">
      <h1>{{ tutor.userName }}</h1>
      <ul>
            <li v-for="expertise in tutor.expertises" :key="expertise">
              {{ expertise }}
            </li>
      </ul>
      <h2>${{ tutor.monthlyRate }}/month</h2>
     </div>
    </div>
    <div class="tutor-action">
     <main-button mode="btn black">
      Request Tutoring 🙌🤗
     </main-button>
    </div>
   </div>
   <div class="detail-body">
    <div class="about-me">
     <h2>😎 About Me:</h2>
     <p>{{ tutor.aboutMe }}</p>
    </div>
    <br>
    <h2>👨‍🎓 Education Background:</h2>
    <p>This is education background.</p>
    <br>
    <h2>🎉 Achievement:</h2>
    <p>{{ tutor.achievement }}</p>
    <br>
    <h2>📚 Tutoring Days:</h2>
    <ul>
            <li v-for="day in tutor.teachingDays" :key="day">
              {{ day }}
            </li>
     </ul>
     <br>
     <h2>⏰Tutoring Hours:</h2>
     <ul>
            <li v-for="hour in tutor.teachingHours" :key="hour">
              {{ hour }}
            </li>
     </ul>
   </div>
   <div class="detail-footer">
    <div class="tutor-action">
     <main-button mode="btn black">
      Request Tutoring 🙌🤗
     </main-button>
    </div>
   </div>
  </div>
</template>

<script>
export default {
 setup(props, {emit}) {
  const tutor = props.tutor;
 },
 props: {
  tutor: {
   type: Object,
   required: true
  }
 }
}
</script>

<style scoped>
 .tutor-name-expertise > ul, .detail-body > ul {
  padding-top: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
 }
 .tutor-name-expertise> ul > li, .detail-body > ul > li {
  margin-right: .5em;
  padding: .5em;
  background: var(--white);
  box-shadow: inset 0px 5px 5px rgba(0,0,0,.1);
  /* border: 2px solid var(--black); */
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
 }
 .tutor-name-expertise h2 {
  margin-top: .5em;
 }
 .tutor-image {
  display: flex;
 }
 .tutor-image img {
  margin-right: 1.5em;
  width: 12em;
  height: 10em;
	 object-fit: cover;
	 object-position: 50% 50%;
  border-radius: 10px;
  border: 3.5px solid var(--black);
  box-shadow: 0px 7px 0px rgba(0,0,0,.1);
 }
 .detail-header {
  display: flex;
  justify-content: space-between;
  padding: 2em;
  background: url('../../assets/background-pattern-bottom-right-to-top-left.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 1.5em;
 }
 .detail-body {
  width: 70%;
  padding: .5em 3em;
  padding-bottom: 2em;
 }
 .detail-body > p, .about-me > p {
  margin-top: 1em;
  padding-left: 2em;
 }
 .detail-footer {
  text-align: center;
  padding-bottom: 3em;
 }
</style>
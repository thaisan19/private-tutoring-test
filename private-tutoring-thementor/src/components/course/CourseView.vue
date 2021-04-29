<template>
  <div class="course-detail-view">
   <div class="course-detail-header">
    <div class="course-request">
      <h3>Course Name:</h3>
      <main-button mode="btn black">Request Course</main-button>
    </div>
    <h1>📚 {{ course.name }}</h1>
    <br>
    <div class="course-info">
     <div class="created-by">
      <h3>Tutoring by:</h3>
      <h2>{{ course.createBy }}</h2>
     </div>
     <h2>🌿</h2>
     <div class="created-at">
      <h3>Created at:</h3>
      <h2>{{ format(new Date(course.createAt), 'MMM do yyyy') }}</h2>
     </div>
     <h2>🍁</h2>
     <div class="course-length">
      <h3>Course length:</h3>
      <h2>{{ course.courseLength }}</h2>
     </div>
     <h2>🌻</h2>
     <div class="course-price">
      <h3>Course Price:</h3>
      <h2>${{ course.price }}</h2>
     </div>
    </div>
    <div class="course-desc">
      <div class="course-req">
        <h2>1️⃣ Before starting the course, you have to know:</h2>
        <h3>
          {{ course.courseRequirement }}
        </h3>
      </div>
      <div class="course-detail">
        <h2>2️⃣ In this course you will learn:</h2>
        <h3>
          {{ course.courseDesc }}
        </h3>
      </div>
      <div class="course-avail">
        <div class="avail-days">
          <h2>3️⃣ Tutoring Days:</h2>
          <ul>
            <li v-for="day in course.tutoringDays" :key="day">
              <h3>◾ {{ day }}</h3>
            </li>
          </ul>
        </div>
        <div class="avail-hours">
          <h2>4️⃣ Tutoring Hours:</h2>
          <ul>
            <li v-for="hour in course.tutoringHours" :key="hour">
              <h3>◾ {{ hour }}</h3>
            </li>
          </ul>
        </div>
      </div>
      <div class="course-expextation">
        <h2>5️⃣ What to expect after finished this course?</h2>
        <h3>
          {{ course.courseExpectation }}
        </h3>
      </div>
    </div>
   </div>
   <div class="course-detail-footer">
     <main-button mode="btn black">Request Course</main-button>
   </div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
 setup(props, {emit}) {
  const course = props.course;

  return { format }
 },
 props: {
  course: {
   type: Object,
   required: true
  }
 }
}
</script>

<style scoped>
.course-detail-view {
  overflow: hidden;
  position: relative;
  display: block;
}
.course-detail-view::after {
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  background: url('../../assets/background-pattern-vertical.png');
	background-repeat: no-repeat;
  background-size: cover;
	opacity: 0.5;
}
.course-detail-header {
  padding: 1em;
}
.course-detail-header h1 {
  text-align: center;
  padding: .5em 0;
}
.course-detail-header h3 {
  font-weight: 500;
}
.course-request {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.course-info {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
}
.created-by h2, .created-at h2, .course-length h2, .course-price h2{
  padding: .2em 0;
}
.course-desc {
  margin-top: 2em;
  padding: 1em 3em;
}
.course-desc h2 {
  padding-bottom: .5em;
}
.course-desc h3 {
  padding-bottom: 1.5em;
}
.course-avail {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 1rem;
}
.avail-days > ul, .avail-hours > ul {
  padding-top: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
}
.avail-days > ul > li, .avail-hours > ul > li {
  margin-right: 1em;
}
.course-detail-footer {
  text-align: center;
  padding-bottom: 2em;
}
</style>
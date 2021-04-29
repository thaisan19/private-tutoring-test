<template>
	<div class="toggle-search">
		<button @click="searchOn = !searchOn"><h1>🔎</h1></button>
	</div>
	<transition mode="out-in"
	enter-active-class="animate__animated animate__zoomIn animate__faster"
	leave-active-class="animate__animated animate__zoomOut animate__faster">
  	<div class="search-lable" v-if="searchOn">
    	<input type="text" name="search-lable" v-model="search" placeholder="Search by: Courses' Name | Courses' Price | Tutors' Name">
  </div>
	</transition>
  <div class="courses-list" v-if="filteredCourses.length > 0">
   <ul>
    <li class="course-list" v-for="course in filteredCourses" :key="course.id">
			<div class="course-list-header">
				<div class="course-tutor-profile">
					<img src="https://lh3.googleusercontent.com/proxy/eomMzqUHzCHOTMff5FUC-f0Mac9iFu6U7jrpyHtrjUKwhc_mKeWhx000sZtr3y_2jEfB4s2vtnbM7CA-w9zqMln5IKz-qb9Nnx-NRtsJtXQH430JdbHL">
					<h3>{{ course.createBy }}</h3>
				</div>
				<div class="course-price">
					<h3>${{ course.price }}&nbsp;</h3>
					<p>/ {{ course.courseLength }}</p>
				</div>
			</div>
			<div class="course-list-body">
				<h2>{{ course.name }}</h2>
				<div class="tutoring-day">
					<h3>📆 Tutoring Days:</h3>
					<ul>
						<li v-for="day in course.tutoringDays" :key="day" class="display-days">
							<p>◾ {{ day }}</p>
						</li>
					</ul>
				</div>
				<div class="tutoring-hour">
					<h3>⏰ Tutoring Hours:</h3>
					<ul>
						<li v-for="hour in course.tutoringHours" :key="hour" class="display-hours">
							<p>◾ {{ hour }}</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="course-list-footer">
				<main-button mode="btn black" @click="openCourse(course)" class="course-btn">Details</main-button>
				<main-button mode="btn black" class="course-btn">Request</main-button>
			</div>
    </li>
   </ul>
  </div>
	<div v-else>
		<h1>No course found, please try another title...🙌🍁</h1>
	</div>
	<ModalView 
    v-if="openedCourse"
    @closeModal="openedCourse = null">
    <CourseView :course="openedCourse" @changeCourse="changeCourse" />
  </ModalView>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import ModalView from '../main-components/ModalView.vue'
import CourseView from './CourseView.vue'

export default {
  components: {
    ModalView,
    CourseView
  },
  data() {
    return {
      search: '',
			searchOn: false
    }
  },
  async setup() {
    let res = await axios.get('http://localhost:3000/courses')
    let courses = ref(res.data);
    console.log(courses)

    return {
      courses: ref(courses),
      openedCourse: ref(null)
    }
  },
  
  methods: {
    openCourse(course) {
      this.openedCourse = course;

      if(course) {
        course.view = true
        this.updateCourse(course)
      }
    },
    changeCourse({closeModal}) {
      let course = this.openedCourse
      if(closeModal) {
        this.openedCourse = null
      }
    },
    updateCourse(course) {
      axios.put(`http://localhost:3000/courses/${course.id}`, course)
    }
  },
  computed: {
    filteredCourses() {
      return this.courses.filter((course) => {
        
        return course.name.toLowerCase().includes(this.search.toLowerCase().trim()) || course.price.includes(this.search.toLowerCase().trim()) || course.createBy.toLowerCase().includes(this.search.toLowerCase().trim())

      })
    } 
  }
}
</script>

<style scoped>
.course-btn {
	box-shadow: -5px 5px 0px rgba(0,0,0,.1);
}
.courses-list > ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 3rem;
  list-style: none;
  }
.courses-list > ul > li {
  background: #fff;
  box-shadow: -10px 10px 0px rgba(0,0,0,.1);
  overflow: hidden;
  border: 3px solid var(--black);
	position: relative;
	display: block;
	padding: 1.5em;
}
.courses-list > ul > li::after {
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 0;
  overflow: hidden;
}
.courses-list > ul > li:nth-child(even)::after {
	background: url('../../assets/test-background-03.png');
	background-repeat: no-repeat;
  background-size: cover;
	opacity: 0.6;
}
.courses-list > ul > li:nth-child(odd)::after {
	background: url('../../assets/background-pattern-bottom-right-to-top-left.png');
	background-repeat: no-repeat;
  background-size: cover;
	opacity: 0.6;
}
.course-tutor-profile > img {
	width: 3em;
	border-radius: 50%;
	object-fit: cover;
	object-position: 50% 50%;
	margin-right: .5em;
}
.course-list-footer, .course-list-header, .course-list-body {
	z-index: 10;
	position: relative;
}
.course-list-header, .course-tutor-profile, .course-price {
	display: flex;
	align-items: center;
}
.course-list-header {
	justify-content: space-between;
}
.course-list-body h2 {
	padding: .5em 0;
	text-align: center;
}
.tutoring-day > ul, .tutoring-hour > ul {
	display: flex;
	flex-wrap: wrap;
	padding: .5em 0;
}
.tutoring-day > ul > li, .tutoring-hour > ul > li {
	padding-right: .5em;
	font-weight: 600;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
}
.course-list-footer {
	padding-top: 1em;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 80%;
	margin: 0 auto;
}
</style>
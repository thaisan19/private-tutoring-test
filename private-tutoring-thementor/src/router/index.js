import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TutorsList from '../views/tutors/TutorsList.vue'
import CoursesList from '../views/courses/CoursesList.vue'
import AddCourse from '../views/courses/AddCourse.vue'
import MyCourse from '../views/courses/MyCourse.vue'
import NotFound from '../views/NotFound.vue'
import TutorRegister from '../views/register/TutorRegister.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tutors',
      name: 'TutorsList',
      component: TutorsList
    },
    {
      path: '/courses',
      name: 'CoursesList',
      component: CoursesList
    },
    {
      path: '/courses/user',
      name: 'MyCourse',
      component: MyCourse
    },
    {
      path: '/courses/create',
      name: 'AddCourse',
      component: AddCourse
    },
    {
      path: '/register',
      name: 'TutorRegister',
      component: TutorRegister
    },
    {
      path: '/:notFound(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router

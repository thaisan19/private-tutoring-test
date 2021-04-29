<template>
  <div class="courses-list">
    <Suspense>
      <template #default>
        <CoursesListComp />
      </template>
      <template #fallback>
        <h1>Loading Tutors Data...🙌🙏🤗</h1>
      </template>
    </Suspense>
  </div>
</template>

<script>
import CoursesListComp from '@/components/course/CoursesListComp.vue'

export default {
  components: {
    CoursesListComp
  }
}
</script>

<style scoped>
.courses-list {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
</style>
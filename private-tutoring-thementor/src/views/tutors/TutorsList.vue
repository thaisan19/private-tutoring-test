<template>
  <div class="tutors-list">
    <Suspense>
      <template #default>
        <TutorsListComp />
      </template>
      <template #fallback>
        <h1>Loading Tutors Data...🙌🙏🤗</h1>
      </template>
    </Suspense>
  </div>
</template>

<script>
import TutorsListComp from '@/components/tutor/TutorsListComp.vue'

export default {
  components: {
    TutorsListComp
  }
}
</script>

<style scoped>
.tutors-list {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
</style>
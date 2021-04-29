<template>
  <div class="modal">
    <div class="overlay" @click="emit('closeModal')"></div>
      <div class="modal-card">
        <slot />
      </div>
  </div>
</template>

<script>
export default {
  setup(props, {emit}) {
    return {
      emit
    }
  }
}
</script>

<style>
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  background-color: black;
  height: 100vh;
  z-index: 1;
}
.modal-card {
  position: fixed;
  width: 55%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  max-height: 80vh;
  overflow: auto;
  z-index: 1000;
  opacity: 1;
  border-radius: 5px;
}

/* Email Modal */

.email-display {
  text-align: left;
}
</style>
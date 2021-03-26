<template>
  <button v-if="!link" :class="mode">
   <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
   <slot></slot>
  </router-link>
</template>

<script>
export default {
 props: {
  mode: {
   type: String,
   required: false,
   default: null
  },
  link: {
   type: Boolean,
   required: false,
   default: false
  },
  to: {
   type: String,
   required: false,
   default: '/'
  }
 }
}
</script>

<style scoped>
.btn {
 padding: 1vh 1vw;
 font-size: 1em;
 background: none;
 border: 1.5px solid var(--black);
 cursor: pointer;
 transition: 0.5s;
 position: relative;
 overflow: hidden;
 border-radius: 20px;
}
.btn::before {
 content: "";
 position: absolute;
 left: 0;
 width: 100%;
 height: 0%;
 background: var(--black);
 z-index: -1;
 transition: 0.5s;
}
.blue {
 color: var(--black);
}
.blue:hover {
 color:var(--white);
 z-index: 1000;
;
}
.blue::before {
 bottom: 0;
 border-radius: 50% 50% 0 0;
}
.blue:hover::before {
 height: 180%;
}
</style>
<template>
  <Nav />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from './components/Nav.vue'

export default defineComponent({
  components: {
    Nav,
 
  },
});
</script>

<style>

:root {
  --green: #3d9896;
}
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  margin: 0;
  background-color: #050708;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #fff;
}

.container {
    padding: 15px 30px;
    max-width: 1600px;
    margin: auto;
  }

.color-green {
  color: var(--green);
}
</style>

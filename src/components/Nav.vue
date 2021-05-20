<template>
  <div class="nav ">
    <div class="container flex">
      <h1 class="title color-green"><b>M</b>ovie Trailers</h1>
      <div class="links">
        <router-link class="link" to="/">Movies</router-link>
        <router-link class="link" to="/tvshows">Tv Shows</router-link>
        <router-link class="link" to="/upcoming"> Upcoming</router-link>
      </div>
      <div class="search">
        <SearchBar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "./SearchBar.vue";
export default defineComponent({
  name: "nav",
  components: {
    SearchBar,
  },
});
</script>

<style scoped>
.nav {
  height: 110px;
  border-bottom: solid 1px rgba(80, 80, 80, 0.74);
}
.link {
  padding: 0 30px;
  color: #c9c9c9;
  text-decoration: none;
  letter-spacing: 1px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.search {
  height: 100%;
  position: relative;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

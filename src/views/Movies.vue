<template>
  <div class="movies"></div>
</template>

<script lang="ts">
import { TopRatedResults } from "@/interfaces/apiTypes/topRated";
import { defineComponent } from "vue";
import { fetchTopMovies } from "../api/movieDatabase";

export default defineComponent({
  name: "movies",
  components: {},
  data() {
    return {
      topRatedPage: 1 as number,
      topRatedMovies: [] as TopRatedResults[],
    };
  },

  mounted() {
    // this.fetchTopRated();
  },

  methods: {
    async fetchTopRated() {
      const data = await fetchTopMovies(this.topRatedPage);
      this.topRatedMovies = data.results;
    },
  },
});
</script>

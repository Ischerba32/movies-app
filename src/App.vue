<template>
  <div id="app">
    <PosterBg :poster="posterBg"></PosterBg>
    <MoviesList :list="moviesList" @changePoster="onChangePoster"></MoviesList>
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
      ></MoviesPagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MoviesList from "./components/MoviesList.vue";
import PosterBg from "./components/PosterBg.vue";
import MoviesPagination from "./components/MoviesPagination.vue";

export default {
  name: "App",
  components: {
   MoviesList,
   PosterBg,
   MoviesPagination,
  },
  data: () => ({
    posterBg: "",
  }),
  computed: {
    ...mapGetters('movies', ["moviesList", "currentPage", "moviesPerPage", "moviesLength"]),
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true
    }
  },
  methods: {
    ...mapActions('movies', ["changeCurrentPage"]),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageQueryChange({page = 1}) {
      this.changeCurrentPage(Number(page));
    },
    onPageChanged(page) {
      // console.log(this.$router);
      this.$router.push({query: {page}})
    }
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica,;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>

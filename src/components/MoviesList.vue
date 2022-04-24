<template>
  <div class="movies-list">
    <b-container>
      <h3 class="list-title">{{ listTitle }}</h3>
      <b-row>
        <template v-if="isExist">
          <b-col cols="12" sm="12" md="6" lg="3" xl="3" v-for="(movie, key) in list" :key="key">
            <MovieItem
              :movie="movie"
              @mouseover.native="onMouseOver(movie.Poster)"
              @removeItem="onRemoveItem"
              @showModal="onShowMovieInfo"
            ></MovieItem>
          </b-col>
        </template>
        <template v-else>
          <div class="">Empty list</div>
        </template>
      </b-row>
      <b-modal
        body-class="movie-modal-body"
        :id="movieInfoModalID"
        size="xl"
        hide-footer
        hide-header
      >
        <MovieInfoModalContent
          :movie="selectedMovie"
          @closeModal="onCloseModal"
        ></MovieInfoModalContent>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieItem from "./MovieItem.vue";
import MovieInfoModalContent from "./MovieInfoModalContent.vue";
export default {
  name: "MoviesList",
  components: {
    MovieItem,
    MovieInfoModalContent,
  },
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    movieInfoModalID: "movie-info",
    selectedMovieID: "",
  }),
  computed: {
    ...mapGetters("movies", ["isSearch"]),
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    listTitle() {
      return this.isSearch ? "Search result" : "IMDb Top 250";
    },
    selectedMovie() {
      return this.selectedMovieID ? this.list[this.selectedMovieID] : null;
    },
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    ...mapActions(["showNotify"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure to remove ${title}?`
      );
      if (isConfirmed) {
        this.removeMovie(id);
        this.showNotify({
          msg: "Movie deleted successful",
          title: "Success",
          variant: "success",
        });
      }
    },
    onShowMovieInfo(id) {
      // console.log(id);
      this.selectedMovieID = id;
      this.$bvModal.show(this.movieInfoModalID);
    },
    onCloseModal() {
      // this.selectedMovieID = "";
      this.$bvModal.hide(this.movieInfoModalID);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
.movies-list {
  margin-bottom: 15px;
}
</style>

<style>
.movie-modal-body {
  padding: 0 !important;
}
.modal::-webkit-scrollbar {
  width: 0;
}
</style>

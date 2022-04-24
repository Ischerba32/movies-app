<template>
  <div class="poster-page-bg" :style="posterStyle"></div>
</template>

<script>
export default {
  name: "PosterBg",
  props: {
    poster: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    defaultPosterBg:
      "linear-gradient(45deg, rgb(0,3,38) 0%, rgb(82,15,117) 100%);",
      // "linear-gradient(rgb(61, 52, 129), rgb(93, 71, 141), rgb(123, 91, 153), rgb(151, 111, 164), rgb(180, 133, 176));",
  }),
  computed: {
    posterStyle() {
      return {
        "background-image": this.posterBg,
      };
    },
    posterBg() {
      return this.poster ? `url(${this.poster})` : this.defaultPosterBg;
    },
  },
};
</script>

<style scoped>
.poster-page-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
}
.poster-page-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.7;
  background-image: linear-gradient(
    45deg,
    rgb(0, 3, 38) 0%,
    rgb(82, 15, 117) 100%
  );
  /* background: linear-gradient(
    rgb(160, 182, 216),
    rgb(170, 147, 170),
    rgb(171, 113, 126),
    rgb(166, 76, 85),
    rgb(155, 32, 46)
  ); */
  /* background: linear-gradient(
    rgb(208, 107, 251),
    rgb(163, 83, 212),
    rgb(120, 59, 174),
    rgb(77, 38, 137),
    rgb(33, 18, 102)
  ); */
  /* background: linear-gradient(
    rgb(61, 52, 129),
    rgb(93, 71, 141),
    rgb(123, 91, 153),
    rgb(151, 111, 164),
    rgb(180, 133, 176)
  ); */
}
</style>

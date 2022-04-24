<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Notification",
  computed: {
    ...mapGetters(["messagePool"]),
  },
  watch: {
    messagePool: "showNotification",
  },
  methods: {
    showNotification({ variant, msg, title }) {
      this.$root.$bvToast.toast(msg, {
        title,
        variant,
        solid: true,
      });
      console.log(title, msg, variant);
    },
  },
};
</script>

<style scoped></style>

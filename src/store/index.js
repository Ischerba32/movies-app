import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";
import loader from "./modules/loader";
import notification from "./modules/notification";
import { ToastPlugin } from "bootstrap-vue";
Vue.use(Vuex);
Vue.use(ToastPlugin);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
    notification,
  },
});

export default store;

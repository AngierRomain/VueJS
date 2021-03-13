import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";

import movies from "./components/movies.vue";
import movie from "./components/movie";
import editMovie from "./components/editMovie.vue";
import addMovie from "./components/addMovie.vue";
import movieData from './movies.js'

const routes = [
    { path: "/", component: movies },
    { path: "/movie/:idMovie", name: "movie", component: movie},
    { path: "/movie/:idMovie/edit", name: "edit", component: editMovie },
    { path: "/add", name: "add", component: addMovie },
    { path: '*', redirect: '/' }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

Vue.use(VueRouter);
Vue.config.productionTip = false;

//variable partagées
window.shared_data = {
    movies: movieData,
    aMovie: null,
};

const vm = new Vue({
    router: router,
    render: (h) => h(App),
}).$mount("#app");

console.log(vm);

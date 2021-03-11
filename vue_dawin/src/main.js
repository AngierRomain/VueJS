import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";

import movies from "./components/movies.vue";
import editMovie from "./components/editMovie.vue";
import addMovie from "./components/addMovie.vue";

const routes = [
    { path: "/", component: movies },
    { path: "/edit/:idMovie", name: "edit", component: editMovie },
    { path: "/add", name: "add", component: addMovie },
];

const router = new VueRouter({
    routes,
});

Vue.use(VueRouter);
Vue.config.productionTip = false;

//variable partagées
window.shared_data = {
    movies: [
        {
            title: "Interstellar",
            releaseDate: 2014,
            director: "Christopher Nolan",
            synopsis: "Un film qui parle de physique et d'amour",
            displaySynopsis: false,
            displayMovie: true,
        },
        {
            title: "Tenet",
            releaseDate: 2020,
            director: "Christopher Nolan",
            synopsis: "Un film qui parle de temps",
            displaySynopsis: false,
            displayMovie: true,
        },
    ],
    aMovie: null,
};

const vm = new Vue({
    router: router,
    render: (h) => h(App),
}).$mount("#app");

console.log(vm);

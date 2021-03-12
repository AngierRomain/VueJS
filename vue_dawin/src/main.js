import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";

import movies from "./components/movies.vue";
import movie from "./components/movie";
import editMovie from "./components/editMovie.vue";
import addMovie from "./components/addMovie.vue";

const routes = [
    { path: "/", component: movies },
    { path: "/movie/:idMovie", name: "movie", component: movie},
    { path: "/movie/:idMovie/edit", name: "edit", component: editMovie },
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
            language: "FR",
            director: {lastname: "Nolan", firstname: "Christopher", nationality: "ENG", birthdate: "08/07/1965"},
            gender: "SF",
            synopsis: "Un film qui parle de physique et d'amour",
            poster: "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
            displaySynopsis: false,
            displayMovie: true,
        },
        {
            title: "Tenet",
            releaseDate: 2020,
            language: "FR",
            director: {lastname: "Nolan", firstname: "Christopher", nationality: "ENG", birthdate: "08/07/1965"},
            gender: "SF",
            synopsis: "Un film qui parle de temps",
            poster: "https://fr.web.img2.acsta.net/pictures/20/08/03/12/15/2118693.jpg",
            displaySynopsis: true,
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

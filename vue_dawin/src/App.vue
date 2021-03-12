<template>
    <div id="app">
        <router-view></router-view>
        <router-link to="/"
            ><img alt="Vue logo" src="./assets/logo.png"
        /></router-link>

        <div>
            <div>
                <input v-model="rechercheValue" />
                <button v-on:click="recherche">Rechercher</button>
                <button v-on:click="reinitRecherche">Reinitialiser</button>
            </div>

            <div>
                <button v-on:click="displayAdd">Ajouter un film</button>
            </div>
        </div>
    </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import movies from "./components/movies.vue";

export default {
    name: "App",
    components: {
        //movies,
    },
    data: function() {
        return {
            dataTitle: "",
            dataReleaseDate: "",
            dataDirector: "",
            dataSynopsis: "",
            displayResume: false,
            displayMovie: true,
            action: "",
            cacheMovie: null,
            rechercheValue: "",
            shared_data: window.shared_data,
        };
    },
    methods: {
        doDisplaySynopsis: function(aMovie) {
            aMovie.displaySynopsis = aMovie.displaySynopsis !== true;
        },
        displayAdd: function() {
            this.$router.push({ name: "add" });
        },
        recherche: function() {
            let value = this.rechercheValue;
            let moviesSearched = this.shared_data.movies;
            let good;
            moviesSearched.forEach((movie) => {

                good = movie.title === value ||
                    movie.releaseDate === value ||
                    movie.director === value;
                if (good === false) {
                    movie.displayMovie = false;
                }
            });
        },
        reinitRecherche: function() {
            let moviesSearched = this.shared_data.movies;
            moviesSearched.forEach((movie) => {
                movie.displayMovie = true;
            });
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
li {
    list-style: none;
}
ul {
    padding: 10px 0;
}
</style>

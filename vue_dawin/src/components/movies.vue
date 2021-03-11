<template>
    <div>
        <p>{{ nbMovie }} films</p>
        <ul>
            <li
                class="movie"
                v-for="(movie, i) in shared_data.movies"
                v-bind:key="i"
                v-bind:title="movie.title"
            >
                <div v-if="movie.displayMovie">
                    <div
                        v-on:click="doDisplaySynopsisChild(movie)"
                        class="movie__data"
                    >
                        <span>{{ movie.title }} ({{ movie.releaseDate }})</span>
                        <p v-if="movie.displaySynopsis">
                            Réalisateur : {{ movie.director }}.
                            {{ movie.synopsis }}.
                        </p>
                    </div>
                    <div class="movie__action">
                        <button
                            style="color: red"
                            v-on:click="doDeleteMovie(movie)"
                        >
                            Supprimer
                        </button>
                        <button
                            style="color: green"
                            v-on:click="goEditMovie(i)"
                        >
                            Modifier
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "movies",
    props: ["movies"],
    methods: {
        doDisplaySynopsisChild: function(aMovie) {
            this.$emit("calldodisplaysynopsis", aMovie);
        },
        doDeleteMovie: function(aMovie) {
            this.$emit("calldelete", aMovie);
        },
        goEditMovie: function(idMovie) {
            this.$router.push({ name: "edit", params: { idMovie: idMovie } });
            //this.$emit("calledit", aMovie);
        },
    },
    data: function() {
        return {
            shared_data: window.shared_data,
        };
    },
    computed: {
        nbMovie: function() {
            console.log(this.shared_data.movies.length);
            return this.shared_data.movies.length;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

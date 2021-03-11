<template>
    <div>
        <h3>Ajouter un film</h3>
        <input v-model="movie.title" />
        <input v-model="movie.releaseDate" />
        <input v-model="movie.synopsis" />
        <input v-model="movie.director" />
        <button v-on:click="addMovie">Sauvegarder le film</button>

        <p>
            {{ movie.title }} ({{ movie.releaseDate }}): {{ movie.synopsis }},
            {{ movie.director }}
        </p>
    </div>
</template>

<script>
export default {
    name: "editMovie",
    //props: ["idMovie"],
    methods: {
        addMovie: function() {
            this.shared_data.movies.push(this.movie);
            this.$router.push({ path: "/" });
        },
    },
    data: function() {
        return {
            shared_data: window.shared_data,
            movie: {
                title: "",
                releaseDate: "",
                synopsis: "",
                director: "",
                displaySynopsis: false,
                displayMovie: true,
            },
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

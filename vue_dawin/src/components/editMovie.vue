<template>
    <div>
        <h3>Modifier un film</h3>
        <input v-model="movie.title" />
        <input v-model="movie.releaseDate" />
        <input v-model="movie.synopsis" />
        <input v-model="movie.director" />
        <button v-on:click="editMovie">Sauvegarder le film</button>

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
        editMovie: function() {
            this.$router.push({ path: "/" });
        },
    },
    data: function() {
        return {
            shared_data: window.shared_data,
            idMovie: parseInt(this.$route.params.idMovie),
            movie:
                window.shared_data.movies[parseInt(this.$route.params.idMovie)],
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

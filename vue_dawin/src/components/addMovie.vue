<template>
    <div>
        <h3>Ajouter un film</h3>
      <input v-model="movie.title" placeholder="Title" required />
      <input v-model="movie.releaseDate" placeholder="Release Date" required />
      <input v-model="movie.language" placeholder="Language" required />
      <input v-model="movie.director.lastname" placeholder="Last Name" required />
      <input v-model="movie.director.firstname" placeholder="First Name" required />
      <input v-model="movie.director.nationality" placeholder="Nationality" required />
      <input v-model="movie.director.birthdate" placeholder="Birth Date" required />
      <input v-model="movie.gender" placeholder="Gender" required />
      <input v-model="movie.synopsis" placeholder="Synopsis" required />
      <input v-model="movie.poster" placeholder="Lien du poster" required />

      <button v-on:click="addMovie">Sauvegarder le film</button>

      <p> Preview:
        {{ movie.title }} {{ movie.releaseDate }} {{ movie.language }} {{ movie.director.firstname }}
        {{ movie.director.lastname }} {{ movie.director.nationality }} {{ movie.director.birthdate }}
        {{ movie.gender }} {{ movie.synopsis }} {{ movie.poster}}
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
                language: "",
                director: {lastname: "", firstname: "", nationality: "", birthdate: ""},
                gender: "",
                synopsis: "",
                poster: "",
                displaySynopsis: true,
                displayMovie: true,
            },
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

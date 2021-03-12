<template>
  <div>
    <h3>Aperçu du film</h3>
    <p> {{movie.title}} </p>
    <img :src="movie.poster" :alt="movie.title" />
    <p> {{movie.releaseDate}} </p>
    <p> {{movie.language}} </p>
    <p> {{movie.director.lastname}} </p>
    <p> {{movie.director.firstname}} </p>
    <p> {{movie.director.nationality}} </p>
    <p> {{movie.director.birthdate}} </p>
    <p> {{movie.gender}} </p>
    <p> {{movie.synopsis}} </p>
  </div>
</template>

<script>
export default {
  name: "movie",
  //props: ["idMovie"],
  methods: {

  },
  data: function () {
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

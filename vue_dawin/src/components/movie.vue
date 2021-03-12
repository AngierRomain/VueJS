<template>
  <div>
    <h3>Aperçu du film</h3>
    <p> {{movie.title}} </p>
    <img :src="movie.poster" :alt="movie.title" />
    <star-rating v-model="rating"></star-rating>
    <div><a href="#" @click.prevent="rating = 0">Reset Rating</a></div>

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
import {StarRating} from 'vue-rate-it';

export default {
  components: {
    StarRating
  },
  name: "movie",
  data: function () {
    return {
      rating: 3,
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

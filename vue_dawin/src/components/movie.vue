<template>
  <div>
    <h3>Aperçu du film</h3>
    <p> {{movie.title}} </p>
    <img :src="movie.poster" :alt="movie.title" />
    <star-rating v-model="rating"></star-rating>
    <div><a href="#" @click.prevent="rating = 0">Reset Rating</a></div>

    <div> {{movie.releaseDate}} </div>
    <div> {{movie.language}} </div>
    <div> {{movie.director.lastname}} </div>
    <div> {{movie.director.firstname}} </div>
    <div> {{movie.director.nationality}} </div>
    <div> {{movie.director.birthdate}} </div>
    <div> {{movie.gender}} </div>
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

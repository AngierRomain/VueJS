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
            <span v-on:click="displayMovie(i)">{{ movie.title }} ({{ movie.releaseDate }})</span>
            <img :src="movie.poster" :alt="movie.title"/>
            <star-rating v-model="rating"></star-rating>
            <div><a href="#" @click.prevent="rating = 0">Reset Rating</a></div>
            <p v-if="movie.displaySynopsis">
              Réalisateur : {{ movie.director.firstname }} {{ movie.director.lastname }}
              {{ movie.director.nationality }} {{ movie.director.birthdate }}
              <br/>
              Genre: {{ movie.gender }}
              <br/>
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
import {StarRating} from "vue-rate-it";

export default {
  components: {
    StarRating
  },
  name: "movies",
  props: ["movies"],
  data: function () {
    return {
      rating: 3,
      shared_data: window.shared_data,
    };
  },
  methods: {
    doDisplaySynopsisChild: function (aMovie) {
      this.$emit("calldodisplaysynopsis", aMovie);
    },
    doDeleteMovie: function (aMovie) {
      let movies = window.shared_data.movies;
      movies.forEach((movie, i) => {
        if (movie.name === aMovie.name) {
          movies.splice(i, 1);
        }
      });
    },
    goEditMovie: function (idMovie) {
      this.$router.push({name: "edit", params: {idMovie: idMovie}});
    },
    displayMovie: function (idMovie) {
      this.$router.push({name: "movie", params: {idMovie: idMovie}});
    },
  },

  computed: {
    nbMovie: function () {
      return this.shared_data.movies.length;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

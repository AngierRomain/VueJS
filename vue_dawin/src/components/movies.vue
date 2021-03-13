<template>
  <div>
    <p>{{ nbMovie }} films</p>
    <ul>
      <li
          class="movie"
          v-for="(movie, i) in shared_data.movies"
          v-bind:key="i"
          v-bind:title="movie.title">
        <div v-if="movie.displayMovie">
          <div
              v-on:click="doDisplaySynopsisChild(movie)"
              class="movie__data">
            <div v-on:click="displayMovie(i)" class="movieTitle">{{ movie.title }} ({{ movie.releaseDate }})</div>
            <img :src="movie.poster" :alt="movie.title" class="poster"/>

            <div class="rating">
              <star-rating v-model="movie.rating"></star-rating>
            </div>

            <div v-if="movie.displaySynopsis">
              Réalisateur : {{ movie.director.firstname }} {{ movie.director.lastname }}
              {{ movie.director.nationality }} {{ movie.director.birthdate }}
              <br/>
              Genre: {{ movie.gender }}
              <br/>
              {{ movie.synopsis }}.
            </p>
          </div>
          <div class="movie__action">
            <button type="button" class="btn btn-danger"  v-on:click="doDeleteMovie(movie)">Supprimer</button>
            <button type="button" class="btn btn-warning" v-on:click="goEditMovie(i)">
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

<style>
.poster{
  width: 250px;
  height: 400px;
  background-size: cover;
}

.movieTitle{
  font-weight: bold;
  font-size: 2.25rem;
}

.rating{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  pointer-events: none;
  transform: scale(0.6);
}

.synopsis{
  width:100%;
  max-width: 100%;
  max-height: 120px;
  overflow-y: scroll;
  overflow-x: hidden;
}

ul{
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
}

li{
  margin-right: 2rem;
  margin-left: 2rem;
}
.btn{
  margin-left:5px;
  margin-right: 5px;
}
</style>

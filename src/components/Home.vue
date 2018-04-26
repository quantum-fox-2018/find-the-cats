<template lang="html">
  <div id="home">
    <h1>Home</h1>
    <md-card v-for="cat in latestCats" :key="cat['.key']">
      <md-card-media>
        <img :src="cat.url" :alt="cat.comment" height="100px" width="100px">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ cat.comment }}</div>
        <div>{{ cat.detail }}</div>
      </md-card-header>

      <md-card-actions>
        <!-- <router-link :to="'/detail/'+cat['.key']"> -->
        <router-link :to="{ path: '/detail/'+cat['.key'], params: { id: cat['.key'] } }">
          <md-button>Details</md-button>
        </router-link>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import {db} from '../firebase'

const catsRef = db.ref('cats')

export default {
  firebase: {
    cats: catsRef
  },
  computed: {
    latestCats: function () {
      console.log('cats---', this.cats)
      return this.cats.reverse()
    }
  }
}
</script>

<style lang="css">
.md-card {
  margin-bottom: 16px;
}
</style>

<template>
  <div class="container wiki">
    <div class="row">
      <div class="col s12 m6 lg6" v-for="(wiki, i) in wikiArray" :key="i">
        <div class="card hoverable">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator img" :src="wiki.url || wiki.backup" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              {{ wiki.name }}
              <i class="material-icons right">expand_less</i>
            </span>

            <p>
              <a :href="wiki.link" target="_blank" class="teal-text">Go to wiki</a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              {{ wiki.fullName }}
              <i class="material-icons right">expand_more</i>
            </span>
            <p>{{ wiki.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import { setTimeout } from "timers";

export default {
  mounted() {
   
    
  },
   destroyed() {
   this.$store.state.wikiArray = [];
  },
  data() {
    return {
      title: ""
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["wikiArray"])
  },
  watch: {
   
    
  }
};
</script>

<style scoped>
.wiki {
  width: 100%;
}

.card {
  color: #333;
}
img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}
@media (max-width: 800px) {
  img {
    height: 200px;
  }
}
</style>

<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="input-field col s12">
          <input v-model="searching" id="search" type="text" />
          <label autocomplete="off" for="search">Search Information</label>

          <button @click="getInput" class="btns">Search</button>
        </div>

        <div class="col s12">
          <h2 class="mb4 center-align">{{ title }}</h2>
          <blockquote>Click image to show more Information</blockquote>
          <search />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "../components/Search";
import store from "../store";
import axios from "axios";
export default {
  components: {
    search
  },
  mounted() {},
  data() {
    return {
      searching: "",
      title: "",
      nameArray: [],
      fullArray: [],
      imageArray: []
    };
   
  },
  methods: {
    getInput() {
      this.nameArray = [];
      this.imageArray = [];
      this.fullArray = [];
      this.merged = [];
      this.getTitle();
      
      this.getWiki();
      
    },
    getTitle() {
      this.title = this.searching[0].toUpperCase() + this.searching.slice(1);
    },
    getImage() {
      let url =
        "https://api.unsplash.com/search/photos?page=1&per_page=1&query=";
      let key =
        "&client_id=08c04aa141478d0a384fd4d24002641b73430c41565f3af92e5d64b96c0f20f3";

      for (let i = 0; i < 10; i++) {
        axios
          .get(url + this.nameArray[i] + key)
          .then(response => {
            let picUrl = response.data.results[0].urls.small;
            let picDesc = response.data.results[0].alt_description;
            this.imageArray.push({
              url: picUrl,
              desc: picDesc
            });
            this.merged.push({ ...this.fullArray[i], ...this.imageArray[i] });
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      
      store.commit("getArray", this.merged);
      this.searching = ''
    },

    getWiki() {
      let url = "http://en.wikipedia.org/w/api.php?action=opensearch&search=";
      axios
        .get(url + this.searching + "&origin=*")
        .then(response => {
          response.data[1].forEach(x => this.nameArray.push(x));

          for (let i = 0; i < 10; i++) {
            this.fullArray.push({
              name: response.data[1][i],
              info: response.data[2][i],
              link: response.data[3][i],
              default: 'no-image.png'
            });
          }
          this.getImage();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  computed: {}
};
</script>

<style scoped>
.main {
  min-height: 92vh;
  padding-top: 20px;
}
#search {
  color: white;
}
.input-field {
  margin-top: 10px;
}
.input-field input[type="text"]:focus + label {
  color: #fff;
}
#search:focus {
  border-bottom: solid white 1px;
  box-shadow: 0 1px 0 0 #fff;
}
</style>

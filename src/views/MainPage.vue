<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <form @submit.prevent="getInput" class="input-field col s12">
          <input v-model="searching" id="search" type="text" />
          <label autocomplete="off" for="search">Search Information</label>

          <button class="btns">Search</button>
        </form>

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
      getUrls: [],
      backup: [],
      nameArray: [],
      fullArray: [],
      imagesArray: [],
      merged: []
    };
  },
  methods: {
    getInput() {
      this.nameArray = [];
      this.fullArray = [];
      this.merged = [];

      this.getTitle();
      this.backupImages();
    },
    getTitle() {
      this.title = this.searching[0].toUpperCase() + this.searching.slice(1);
    },
    getImage() {
      for (let i = 0; i < 10; i++) {
        axios({
          method: "get",
          url:
            "https://api.imgur.com/3/gallery/search/top?q=" + this.nameArray[i],

          headers: {
            Authorization: "Client-ID 51bba8fc11cf83f"
          }
        })
          .then(response => {
            this.imagesArray = [];
            this.images = [];

            let images = response.data.data;

            let removeVids = images.filter(x => x.type != "video/mp4");
            removeVids.forEach(x => {
              let url = "";
              let reg = new RegExp(/.png$|.jpg$|.gif$/);

              let linkCheck = reg.test(x.link);
              if (linkCheck) {
                url = x.link;
              } else {
                url = "error";
              }

              this.imagesArray.push({
                title: x.title,
                url: url
              });
            });

            let removeError = this.imagesArray.filter(x => x.url !== "error");
            let pic = removeError[0];

            this.merged.push({ ...this.fullArray[i], ...pic });
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      store.commit("getArray", this.merged);
      this.searching = "";
    },
    backupImages() {
      this.backup = [];
      this.getUrls = [];
      axios({
        method: "get",
        url: "https://api.imgur.com/3/gallery/search/top?q=" + this.searching,
        headers: {
          Authorization: "Client-ID 51bba8fc11cf83f"
        }
      })
        .then(response => {
          let images = response.data.data;
          let removeVids = images.filter(x => x.type != "video/mp4");
          removeVids.forEach(x => {
            let url = "";
            let reg = new RegExp(/.png$|.jpg$|.gif$/);
            let linkCheck = reg.test(x.link);
            if (linkCheck) {
              url = x.link;
            } else {
              url = x.images[0].link;
            }
            this.getUrls.push(url);
          });
          for (let i = 0; i < 10; i++) {
            let rand = this.getUrls[
              Math.floor(Math.random() * this.getUrls.length)
            ];

            this.backup.push(rand);
          }
          this.getWiki();
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    getWiki() {
      let url = "http://en.wikipedia.org/w/api.php?action=opensearch&search=";
      axios
        .get(url + this.searching + "&origin=*")
        .then(response => {
          response.data[1].forEach(x => {
            let rem = x.replace(/[:,/-]/g, " ");

            this.nameArray.push(rem);
          });

          for (let i = 0; i < 10; i++) {
            this.fullArray.push({
              name: response.data[1][i],
              info: response.data[2][i],
              link: response.data[3][i],
              backup: this.backup[i]
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

<template>
  <div class="main">
    <div class="container top">
      <div class="row">
        <div class="col s12 m12">
          <div class="img-wrap">
            <img src="earth.png" />
          </div>
          <h3 class="glow">Search</h3>
          <h6>
            For best results search for one or two words.
            <br />Examples: bob, france, superman...
          </h6>
        </div>
      </div>
    </div>
    <div class="container search">
      <div class="row">
        <div class="grey-top">
          <h5 class="mb4 center-align">{{ title }}</h5>
        </div>
        <form @submit.prevent="getInput" class="input-field col s12">
          <input v-model="searching" id="search" type="text" />
          <label autocomplete="off" for="search">Search Information</label>

          <button class="btns">Search</button>
        </form>

        <div class="col s12">
          
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
.top {
  padding: 100px 0;
}
.grey-top {
  background: rgb(241, 241, 241);
  width: 100%;
  height: 60px;
  display:flex;
  justify-content: center;
  align-items: center;
   
}
.img-wrap {
  width: 100px;
  margin:auto;
}
.img-wrap img {
  width: 100%;
}
.search {
  background: rgba(255, 255, 255, 0.774);
  
}
blockquote {
  color: #333;
  text-align:left;
}
#search {
  color: #333;
}
.col {
  text-align: center;
  font-weight: 300;
  letter-spacing: 1px;
}
h3 {
  padding: 30px 0;
}
h6 {
  color: rgb(194, 194, 194);
}
h5 {
  color: #999;
  font-weight: 400;
   margin:0;
   padding:0;
}
h2 {
  color: #333;
  
}
.input-field {
  margin-top: 10px;
}
.input-field input[type="text"]:focus + label {
  color: rgb(165, 165, 165);
}
#search:focus {
  border-bottom: solid rgb(165, 165, 165) 1px;
  box-shadow: 0 1px 0 0 rgb(165, 165, 165);
}
</style>

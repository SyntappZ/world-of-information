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
          <searchResults />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchResults from "../components/SearchResults";
import store from "../store";
import axios from "axios";
export default {
  components: {
    searchResults
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
      merged: [],
      loop: 10
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
          for (let i = 0; i < this.loop; i++) {
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
      let url =
        "http://en.wikipedia.org/w/api.php?action=opensearch&limit=10&search=";
      axios
        .get(url + this.searching + "&origin=*")
        .then(response => {
          response.data[1].forEach(x => {
            this.nameArray.push(x);
          });

          for (let i = 0; i < this.loop; i++) {
            let name = "";
            let cut = response.data[1][i].split(" ");
            cut.length = 3;
            cut = cut.join(" ") + "...";
            if (response.data[1][i].split(" ").length < 4) {
              name = response.data[1][i];
            } else {
              name = cut;
            }

            this.fullArray.push({
              name: name,
              info: response.data[2][i],
              link: response.data[3][i],
              backup: this.backup[i],
              fullName: response.data[1][i]
            });
          }

          this.getImage();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async getImage() {
      for (let i = 0; i < this.nameArray.length; i++) {
        await axios({
          method: "get",
          url: "http://en.wikipedia.org/w/api.php",
          params: {
            action: "query",
            titles: this.nameArray[i],
            format: "json",
            prop: "images",
            iiprop: "url",
            origin: "*"
          }
        })
          .then(response => {
            let id = Object.keys(response.data.query.pages);

            let images = response.data.query.pages[id].images.map(x =>
              x.title.replace("File:", "").replace(/ /g, "_")
            );

            let check = (images = images.filter(x => x.match(/.jpg$|.png$/i)));

            if (check.length == 0) {
              images = ["empty"];
            }

            this.convertUrl(images[0], i);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    convertUrl(image, i) {
      axios({
        method: "get",
        url: "http://en.wikipedia.org/w/api.php",
        params: {
          action: "query",
          titles: "Image:" + image,
          format: "json",
          prop: "imageinfo",
          iiprop: "url",
          origin: "*"
        }
      }).then(response => {
        let page = response.data.query.pages;
        let id = Object.keys(page);
        let title = page[id].title;
        let url = "";

        if (title != "File:Empty") {
          url = page[id].imageinfo[0].url;
        }

        this.merged.push({ ...this.fullArray[i], ...{ url: url } });

        store.commit("getArray", this.merged);
      }).catch = error => console.log(error);
      this.searching = "";
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
  background: rgb(255, 255, 255);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.btns:hover {
  background-color: rgb(224, 224, 224);
}
.img-wrap {
  width: 100px;
  margin: auto;
}
.img-wrap img {
  width: 100%;
}
.search {
  background: rgba(48, 48, 48, 0.247);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
blockquote {
  color: #fff;
  text-align: left;
}
#search {
  color: #fff;
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
  margin: 0;
  padding: 0;
}
h2 {
  color: #333;
}
.input-field {
  margin-top: 30px;
}
.input-field input[type="text"]:focus + label {
  color: #fff;
}
#search:focus {
  border-bottom: solid #fff 1px;
  box-shadow: 0 1px 0 0 #fff;
}
@media (max-width: 600px) {
  blockquote {
    font-size: 11px;
  }
  .search {
    background: rgba(48, 48, 48, 0.247);
    width: 100%;
  }
  .top {
    padding: 50px 0;
  }
  br {
    display: none;
  }
  h6 {
    line-height: 20px;
  }
  .grey-top {
    border-radius: 0;
  }
}
</style>

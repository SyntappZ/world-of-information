<template>
  <div class="images">
    <h1>Search Images</h1>
    <input type="text" v-model="search">
    <div class="img-wrap">
      <div v-for="image in imageData" :key="image.id">
        <img
          class="img"
          :src="image.urls.regular"
          :title="image.description || image.alt_description"
        />
      </div>
    </div>
  <a class="waves-effect waves-light btn" @click="getImage">get image</a>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {},
  mounted() {},
   
  data() {
    return {
      imageData: [],
      search: ''
    };
  },

  methods: {
    getImage() {
      if(this.search.length > 2) {
        let url = "https://api.unsplash.com/search/photos?page=1&per_page=5&query="
      let key = "&client_id=08c04aa141478d0a384fd4d24002641b73430c41565f3af92e5d64b96c0f20f3"
     axios
      .get(url + this.search + key)
      .then(response => {
        this.imageData = []
         console.log(response.data.results);

         response.data.results.forEach(image => {
           this.imageData.push(image)
         })
         this.search = ''
      })
      .catch(function(error) {
        console.log(error);
      });
      }
      
  },
  }
};
</script>

<style scoped>

.img-wrap {
  width: 100%;
  height: auto;
  display: flex;
  margin:auto;
 display:flex;
 justify-content: space-between;
}
.img {
  width: auto;
  height: 100px;
}
</style>

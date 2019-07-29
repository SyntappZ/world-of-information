<template>
  <div class="home-pics">
    <div class="wrap">
      <div class="row">
        <div class="marg col s12 m12 l6">
          <div class="left-box">
            <div class="pics" v-for="img in images" :key="img.name">
              <img @click="searchImage(img.name)" :src="img.img" :alt="img.name" />
              <h5 class="img-text">{{ img.name }}</h5>
            </div>
          </div>
        </div>
        <div class="right-wrap col s12 m12 l6">
          <div class="right-box">
            <h3>Where will you explore?</h3>

            <p class="pic-text">
              get information on any country or city
              <br />around the world.
            </p>
            <button class="btns">
              <router-link class="link white-text" to="/Search">Explore</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  created() {
    for (let i = 0; i < this.img.length; i++) {
      this.images.push({
        img: this.img[i],
        name: this.names[i]
      });
    }
  },
  data() {
    return {
      images: [],
      img: [
        "capeTown.jpg",
        "london.jpg",
        "louvre.jpg",
        "newYork.jpg",
        "scotland.jpg",
        "sydney.jpg"
      ],
      names: ["capetown", "london", "louvre", "new york", "scotland", "sydney"]
    };
  },
  methods: {
    searchImage(name) {
      store.commit("imageSearch", name);
    }
  }
};
</script>


<style scoped>
.home-pics {
  background-color: #fff;
  color: rgb(15, 15, 15);
}
.wrap {
  width: 100%;
}
.pic-text {
  font-weight: 300;
  letter-spacing: 1px;
  color: rgb(160, 160, 160);
}

.left-box,
.right-wrap {
  display: flex;
  flex-wrap: wrap;
}

.img-text {
  position: absolute;
  bottom: 0;
  margin: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.514);
  width: 100%;
  padding: 10px 0 10px 10px;
}

.right-wrap {
  justify-content: center;
  align-items: center;
  padding-top: 200px;
}
.right-box {
  width: 500px;
  height: 200px;

  text-align: center;
}

.btns {
  background-color: rgb(54, 117, 235);
  color: white;
}
.btns:hover {
  background-color: rgb(87, 140, 238);
}

.marg {
  margin: 0;
  padding: 0;
}
.pics {
  position: relative;
  width: 50%;
  height: 200px;
}
img {
  object-fit: cover;
  width: 100%;
  height: 200px;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .right-wrap {
    height: 400px;
    padding: 0;
  }
}

@media (max-width: 600px) {
  .pics {
    width: 100%;
    height: 300px;
  }
  img {
    height: 300px;
  }
}
</style>
    

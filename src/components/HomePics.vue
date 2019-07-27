<template>
  <div class="home-pics">
    <div class="wrap">
      <div class="row">
        <div class="marg col s12 m12 l6">
          <div class="left-box">
            <div class="pics capeTown">
              <img src="capeTown.jpg" alt="capeTown" />
            </div>
            <div class="pics london">
              <img src="london.jpg" alt="london" />
            </div>
            <div class="pics newYork">
              <img src="newYork.jpg" alt="newYork" />
            </div>

            <div class="pics sydney">
              <img src="sydney.jpg" alt="sydney" />
            </div>
            <div class="pics louvre">
              <img src="louvre.jpg" alt="louvre" />
            </div>
            <div class="pics scotland">
              <img src="scotland.jpg" alt="scotland" />
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
export default {};
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
  width: 50%;
  height: 200px;
}
img {
  object-fit: cover;
  width: 100%;
  height: 200px;
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
    

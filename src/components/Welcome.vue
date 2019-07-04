<template>
  <div class="page-wrap">
    <div class="page-top container">
      <div class="row">
        <div class="col s12 m6">
          <div class="left-welcome text-left">
            <div class="section">
              <h3 class="glow">Welcome To</h3>
              <h3 class="glow">World Of Information</h3>

              <p class="arial">
                WOI is a site to out places on
                earth and get information about that area.
                You can use the map to search or use the search bar for
                specific locations.
              </p>
              <button class="btns waves-effect waves-light">go to maps</button>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="right-welcome">
            <!-- Image by Ricardo_Duque from Pixabay   -->
            <img src="earth.png" alt="earth" />
          </div>
        </div>
      </div>
    </div>

    <div class="center-align page-break">
      <h4>{{ places }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  data() {
    return {
      places: "Places All Over The World!"
    };
  }
};
</script>


<style scoped>
.page-break {
  background: rgba(51, 51, 51, 0.438);
}
.page-break h4 {
  margin: 0;
  line-height: 100px;
}

.right-welcome img {
  width: 100%;
}
</style>

<style>
.page-top {
  min-height: 92vh;
}
.left-welcome,
.right-welcome {
  height: 400px;
  margin: 20vh 0;
}

@media (max-width: 600px) {
  .left-welcome,
  .right-welcome {
    margin: 5vh 0;
  }
  .left-welcome h3 {
    font-size: 30px;
  }
  .page-break h4 {
    font-size: 20px;
  }
}
</style>

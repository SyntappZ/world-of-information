<template>
  <div class="page-wrap">
    <div class="page-top container">
      <div class="row">
        <div class="col s12 m6">
          <div class="left-welcome text-left">
            <div class="section">
              <h3 class="glow">Welcome To</h3>
              <h3 class="glow">World Of Information</h3>

              <p class="welcome-text">
                WOI is a site to you can search for anything
                and it brings back 10 results, for best results search
                one word.
              </p>
              <button class="btns waves-effect waves-light">
                 <router-link class="link" to="/Search">Search</router-link>
              </button>
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

    <div class=" center-align page-break">
      <h4 class="place">{{ places }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  data() {
    return {
      places: "Why Not Search Places Around World!"
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
.welcome-text {
  font-weight: 300;
  letter-spacing: 1px;
  color: rgb(211, 211, 211);
}

.right-welcome img {
  width: 100%;
}
.link{
  color: rgb(54, 117, 235);
}


.page-top {
  min-height: 92vh;
}
.left-welcome,
.right-welcome {
  height: 400px;
  margin: 20vh 0;
}

@media (max-width: 1024px) {
  .page-top {
  min-height: 0;
}
 .left-welcome,
  .right-welcome {
    margin: 15vh 0;
    height:auto;
  }
}
@media (max-width: 600px) {
  .left-welcome,
  .right-welcome {
    margin: 5vh 0;
    height:auto;
  }
  
  .left-welcome h3 {
    font-size: 30px;
  }
  .page-break h4 {
    font-size: 14px;
  }
  
}
</style>

<template>
  <div class="home-pics">
    <div class="wrap">
      <div class="row">
        <div class="marg col s12 m6">
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
        <div class="marg col s12 m6">
          <div class="right-box">
              <h3>Where will you explore?</h3>

              <p class="arial">Use map search and explore if you can decide.</p>
              <button class="btns purple white-text darken-4 waves-effect waves-light">explore</button>
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
  min-height: 100vh;
}
.left-box,
.right-box {
  min-height: 100vh;
}
.left-box {
  left: 0;
  position: relative;
}
.right-box {
    text-align: center;
    padding:40vh 0;
    
}
.marg {
  margin: 0;
  padding: 0;
}
.pics {
  position: absolute;
  opacity: 0.7;
}
.pics img {
  width: 100%;
  margin: 0;
}
.capeTown {
  width: 50%;
  left: 0;
  top: 0;
}
.london {
  width: 50%;
  left: 500px;
  bottom: 40px;
}
.newYork {
  width: 30%;
  left: 550px;
  top: 90px;
}
.scotland {
  width: 80%;
  left: 100px;
  top: 180px;
  opacity: 1;
}
.sydney {
  width: 40%;
  left: 5px;
  top: 240px;
}
.louvre {
  width: 60%;
  left: 40px;
  bottom: 0;
}
@media (max-width: 800px) {
    .pics {
        width:100%;
        position: static;
        opacity: 1;
    }
    .left-box,
.right-box {
  min-height: 0;
}
}
</style>
    

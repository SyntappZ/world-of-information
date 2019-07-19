<template>
  <div id="app">
    

    <div id="nav">
      <div class="nav container">
        <div class="title-box left">
          <p class="small-title">
            <span class="glow title">world</span> of information
          </p>
        </div>
        <div class="right">
          <div class="link-box">
            <router-link class="link" to="/">Home</router-link>
          </div>

          <div class="link-box">
            <router-link class="link" to="/MainPage">Search</router-link>
          </div>

          <div class="link-box">
            <router-link class="link" to="/Contact">Contact</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <pageFooter />
  </div>
</template>

<script>
import pageFooter from './components/pageFooter'
export default {
  components: {
    pageFooter
  }
}
</script>


<style>
#app {
  font-family: "Raleway", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #fff;
  background: linear-gradient(90deg, rgb(136, 2, 219), #00c0c2);
}
#nav {
  border-bottom: 1px solid rgba(207, 207, 207, 0.356);
  min-height: 8vh;
  
}
.arial {
  font-family: arial, Helvetica, sans-serif;
  font-weight: 500;
  line-height: 30px;
  font-size: 17px;
}
h1,h2,h3,h4,h5,h6 {
  margin: 5px 0;
  padding: 0;
}
.btns {
  padding:12px 17px;
  border:none;
  border-radius: 5px 10px;
  cursor: pointer;
  color: rgb(136, 2, 219);
  font-weight: 600;
  background-color: rgb(255, 255, 255);
  margin:10px 0;
}

.btns:hover {
  background-color: rgb(224, 224, 224);
}
.btns:focus{
  background-color: rgb(255, 255, 255);
}

.link {
 padding: 15px 0;
}

#nav a {
  font-weight: bold;
  color: #fff;
  text-align: right;
}

#nav a.router-link-exact-active {
  color: rgb(61, 252, 255);
}
.title {
  font-family: "Audiowide", cursive;
  margin: 0;
}
.small-title {
  font-weight: 400;
  font-size: 20px;
  margin: 0;
  font-family: "Raleway", arial, sans-serif;
}
.link-box {
  line-height: 8vh;
  position: relative;
  top: 0;
  display: inline-block;
  width: auto;
  height: 8vh;
  margin-left: 0;
  padding-right: 8px;
  padding-left: 8px;
  color: #fff;
  border-bottom: 2px solid transparent;
}

.title-box {
  line-height: 8vh;
  position: relative;
  top: 0;
  display: inline-block;
  width: auto;
  height: 8vh;
  color: #fff;
}
.glow {
   text-shadow: 0 0 20px #fff;
}
.link-box:hover {
  border-bottom: solid 2px #fff;
  text-shadow: 0 0 20px #fff;
}
.row {
  margin: 0;
}


@media (max-width: 800px) {
  #app {
    text-align: center;
  }
}
</style>

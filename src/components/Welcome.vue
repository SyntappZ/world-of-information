<template>
  <div class="page-wrap">
    <div class="page-top container">
      <div class="row">
        <div class="col s12 m6">
          <div class="left-welcome text-left">
           
          </div>
          
        </div>
        <div class="col s12 m6">
          <div class="right-welcome">
            <div class="img">
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="break">
      <h3> {{ places }} </h3>
    </div>

    <div class="page-middle container">
      <div class=""></div>
      <div class="row">
        <div class="col s12 m6 l3">
         <div class="pic-box"></div> 
        </div>
        <div class="col s12 m6 l3">
        <div class="pic-box"></div>
        </div>
        <div class="col s12 m6 l3">
        <div class="pic-box"></div>
        </div>
        <div class="col s12 m6 l3">
        <div class="pic-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  data() {
    return {
      places: "Places All Over The World!"
    }
  }
};
</script>


<style scoped>
.page-top {
  width: 100%;
  min-height: 92vh;
  height: auto;
  
}
.left-welcome, .right-welcome {
 border: solid 1px #fff;
 height: 400px;
 margin: 20vh 0;
}

.pic-box {
  border: solid 1px #fff;
  height: 200px;
  margin: 50px 0;
}
.page-middle {
  width: 100%;
  height: auto;
}
.break {
  height: 100px;
  line-height: 100px;
  background: rgba(51, 51, 51, 0.438);
}
.break h3 {
  margin:0;
}
.img img {
 width:400px;
}
</style>

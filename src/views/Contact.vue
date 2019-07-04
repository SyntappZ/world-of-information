<template>
  <div class="contact">
    
      

      <div v-show="show" class="page-middle container">
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
  created() {
  
  },
  destroyed() {
   
  },
  data() {
    return {
      show: false
    };
  },
  methods: {}
};
</script>

<style scoped>
.contact {
  min-height: 92vh;
}

.page-middle {
  width: 100%;
  height: auto;
  
}
.pic-box {
  border: solid 1px #fff;
  height: 200px;
  margin: 50px 0;
}

</style>

<template>
  <div class="container wiki">
    <div class="row">
      <div class="col s12">
        <h2>{{ search }}</h2>
      </div>
      <div class="img-wrap col s12 m6 lg6">
        <img class="img" :src="img" :title="desc" />
      </div>
      <div class="col s12 m6 lg6">information</div>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      
     
    };
  },
  methods: {
     
  },
 computed: mapGetters(["search", "img", "desc"])
  
};
</script>

<style scoped>
.wiki {
  background-color: rgba(0, 0, 0, 0.247);
  width: 100%;
}
.col {
  border: solid 1px #fff;
  text-align: center; 
}
img {
  width:100%;
  
}

</style>

<template>
  <div class="pageFooter">
    <button class="btns" @click="checkLimit">limit check</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "pageFooter",

  data() {
    return {

    }
  },
  methods: {
    checkLimit() {
       axios({
          method: "get",
          url:
            "https://api.imgur.com/3/credits",

          headers: {
            Authorization: "Client-ID 51bba8fc11cf83f"
          }
        })
          .then(response => {
          console.log(response)
          })
          .catch(function(error) {
            console.log(error);
          });
    }
  }
};
</script>


<style scoped>
    .pageFooter{
        width: 100%;
        min-height: 30vh;
        height: auto;
        background-color: #333;
    }
</style>
<template>
  <div class="pageFooter">
    
      <div class="row">
      <div class="col s12">
       
        <div class="icon-wrap">
         <div class="icon">
         <a href="https://github.com/SyntappZ" target="_blank">  <i class="fab fa-github"></i></a>
         </div>
         <div class="icon">
          <a href="https://github.com/SyntappZ/world-of-information" target="_blank"> <i class="fas fa-code"></i></a>
         </div>
         <div class="icon">
         <a href="https://www.codewars.com/users/SyntappZ" target="_blank"> <i class="fab fa-node-js"></i></a>
         </div>
         <div class="icon">
         <a href="mailto:syntappz@gmail.com" target="_blank"> <i class="fas fa-at"></i></a>
         </div>
        </div>
 
      </div>
      <div class="col s12">
          <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/mainPage">Search</router-link>
          <router-link class="link" to="/Contact">Contact</router-link>
      </div>
     
    </div>

    <div class="auth">
      <p>Created By: SyntappZ</p>
    </div>
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
  }
};
</script>


<style scoped>
    .pageFooter{
        width: 100%;
        min-height: 30vh;
        height: auto;
        background-color: #333;
        position: relative;
    }
    .auth {
      position: absolute;
      bottom:0;
      width: 100%;
      text-align:center;
      background: rgb(54, 117, 235);

    }
    .icon-wrap {
      padding-top:20px;
      display: flex;
      width:300px;
      justify-content: space-around;
    
    }
    .icon {
      width:50px;
      height:50px;
      border-radius:50%;
      background-color: rgb(54, 117, 235);
      font-size:25px;
      display: flex;
      justify-content: center;
      align-items: center;
      color:#000;
    
    }
    .icon a {
      color:black;
    }
    
    .link {
      padding: 0 50px;
      color:white;

    }
    
    .col {
      display:flex;
      justify-content: center;
      align-items: center;
      margin: 15px 0;
    }
    @media (max-width: 600px) {
       .icon-wrap {
      display: flex;
      width:100%;
      justify-content: space-around;
    }
    .link {
      padding: 0 20px;
     

    }
    
    }
</style>
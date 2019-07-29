<template>
  <div class="home">
    <Welcome />
    <HomePics />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import HomePics from "@/components/HomePics.vue";

export default {
  name: "home",
  components: {
    Welcome,
    HomePics
  }
};
</script>

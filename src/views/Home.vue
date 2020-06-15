<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import MainTabBar from "@/components/contents/maintabbar/MainTabBar.vue";
export default {
  name: "Home",
  components: {
    MainTabBar
  }
};
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/contents/maintabbar/MainTabBar.vue";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
/*css 引入方式*/
@import "assets/css/base.css";
</style>

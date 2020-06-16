<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <h2>首页</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/commons/navbar/NavBar.vue";
export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>
<style lang="scss" src="">
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>

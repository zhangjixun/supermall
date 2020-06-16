<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/images/tabbar/home_active.svg"
        alt=""
      />

      <template #item-text> <div>首页</div> </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/images/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">品类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/images/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/me">
      <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/images/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from "@/components/commons/tabbar/TabBar.vue";
import tabBarItem from "@/components/commons/tabbar/TabBarItem.vue";

export default {
  name: "MaintabBar",
  components: {
    tabBar,
    tabBarItem
  }
};
</script>

<style scoped></style>

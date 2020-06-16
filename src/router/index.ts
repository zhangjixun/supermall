import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const Home = () => import("../views/home/Home.vue");
const Profile = () => import("../views/profile/Profile.vue");
const Category = () => import("../views/category/Category.vue");
const Cart = () => import("../views/cart/Cart.vue");
const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/",
    redirect: "/home",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import ConceptView from "../views/concept/ConceptView.vue";
import ProductsView from "../views/products/ProductsView.vue";
import ShopView from "../views/shop/ShopView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/concept",
    name: "concept",
    component: ConceptView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
      };
    }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

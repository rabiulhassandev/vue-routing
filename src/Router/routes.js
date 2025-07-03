import ContactUs from "@/components/Home/ContactUs.vue";
import HomePage from "@/components/Home/HomePage.vue";
import Products from "@/components/Products/Products.vue";
import ProductDetails from "@/components/Products/ProductDetails.vue";
import NotFoundPage from "@/components/Layout/404.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      { path: '/', component: HomePage, name: 'home' },
      { path: '/contact-us', component: ContactUs, name: 'contact-us' },
      { path: '/products', component: Products, name: 'products' },
      { path: '/product-details/:productId', component: ProductDetails, name: 'product-details' },
      { path: '/product-details', component: ProductDetails, name: 'product-details-default' },

      // Redirects
      { path: 'redirect-me', redirect: { name: 'home' } },

      // 404 Not Found
      { path: '/:catchAll(.*)', component: NotFoundPage }
    ]
});


export default routes;
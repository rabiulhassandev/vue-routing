import ContactUs from "@/components/Home/ContactUs.vue";
import HomePage from "@/components/Home/HomePage.vue";
import Products from "@/components/Products/Products.vue";
import ProductDetails from "@/components/Products/ProductDetails.vue";
import NotFoundPage from "@/components/Layout/404.vue";
import NoAccess from "@/components/Layout/403.vue";
import Login from "@/components/Home/Login.vue";

import { createRouter, createWebHistory } from "vue-router";



// isAuthenticated function
function isAuthenticated() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    console.warn('Access denied: User is not authenticated.');
    return false;
  }
  
  return true;
}

// isAdmin function
function isAdmin() {
  const isAdmin = true;
  if (!isAdmin) {
    console.warn('Access denied: User is not an admin.');
    return { name: 'noaccess' }; // Redirect to 403 page
  }
  
  return {name: 'noaccess'};
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/contact-us', component: ContactUs, name: 'contact-us', 
      beforeEnter: [isAuthenticated, isAdmin]
    },
    { path: '/login', component: Login, name: 'login' },
    { path: '/products', component: Products, name: 'products' },
    { path: '/product-details/:productId', component: ProductDetails, name: 'product-details' },
    { path: '/product-details', component: ProductDetails, name: 'product-details-default' },

    // Redirects
    { path: '/redirect-me', redirect: { name: 'home' } },

    // 404 Not Found
    { path: '/:catchAll(.*)', component: NotFoundPage, name: 'not-found' },

    // 403 Forbidden
    { path: '/403', component: NoAccess, name: 'noaccess' }
  ],
  linkActiveClass: 'active px-2 bg-primary text-white rounded',
});

// Global Navigation Guards
router.beforeEach((to, from) => {
  console.log(`Navigating to ${to.path} from ${from.path}`);

  if (!isAuthenticated() && to.name !== 'login') return { name: 'login' };
  if (isAuthenticated() && to.name === 'login') return { name: 'home' };

  return true;
});



export default router;
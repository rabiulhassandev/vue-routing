

<template>
  <!-- header -->
  <Header></Header>
  
  <!-- contents -->
  <div class="container" style="min-height: 80vh;">
    <router-view></router-view>
  </div>

  <!-- footer -->
  <Footer></Footer>

</template>



<script setup>
  import Header from './components/Layout/Header.vue';
  import Footer from './components/Layout/Footer.vue';

</script>
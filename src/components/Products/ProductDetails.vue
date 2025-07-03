<template>

    <div>
        <h1>product details page</h1>

        <div v-if="productDetails.productId">
            <p>Product ID: {{ productDetails.productId }}</p>
        </div>
        <div v-else>
            <p class="text-danger">No product details available.</p>
        </div>
    </div>

</template>


<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const productDetails = route.params;
</script>
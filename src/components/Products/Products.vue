<template>

    <div>
        <h1>products page</h1>

        <ul>
            <li v-for="(product, index) in products" :key="index"><router-link :to="{name: 'product-details', 'params': {productId: 1}}">{{ product.name }}</router-link></li>
        </ul>
    </div>

</template>


<script setup>


    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' },
        { id: 6, name: 'Product 6' },
        { id: 7, name: 'Product 7' },
        { id: 8, name: 'Product 8' },
        { id: 9, name: 'Product 9' },
        { id: 10, name: 'Product 10' }
    ];

</script>
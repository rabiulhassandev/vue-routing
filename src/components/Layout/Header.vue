<template>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" class="nav-link active" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'products'}" class="nav-link">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'contact-us'}" class="nav-link">Contact Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>
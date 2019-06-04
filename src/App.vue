<template>
    <v-app>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
 require('@/assets/style.css') 
 require('@/assets/responsive.css') 
export default {
    name: 'App'
};
</script>

<style>


</style>
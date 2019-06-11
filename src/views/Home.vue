<template>
    <div>
         <div class="main_top_content">
        <navigation></navigation>
         </div>
        <Carousel></Carousel>
        <HomeSection class="mobile_tab"></HomeSection>
        <!-- <portfolio></portfolio> -->
        <!-- <testimonailhome></testimonailhome> -->
        <!-- <contact></contact> -->
        
        <!-- <div class="running_d9ithub">
            <img src="../assets/images/running_d9.png">
            <div class="flag rect">
                <div class="flag-pattern fr"></div>
                <div class="flag-wave"></div>
            </div>
        </div> -->
    </div>
</template>

<script>
    import navigation from '../components/navigation'
    import Carousel from '../components/carousel'
    import contact from '../components/contactUs'
    import HomeSection from './homeSectionComponent'
    import portfolio from '../components/PortfolioComponent'
    import testimonailhome from './testimonialHome'

    export default {
        components: {
            navigation,
            Carousel,
            HomeSection,
            contact,
            portfolio,
            testimonailhome
        },
        name: 'Home',
        data: () => ({
            show: false
        }),
        mounted() {

        },
    }
    
</script>

<style scoped>
.recipe-wrapper .navigation{
    top: 55% !important;
}
</style>
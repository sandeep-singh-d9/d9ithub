<template>
<div>
    <div class="main_top_content">
      <navigation></navigation>
      <v-parallax>
          <v-layout align-center column justify-center class="parallax_inner">
              <h4>DESIGNING FOR THE PEOPLE WHO DRIVE YOUR BUSINESS</h4>
              <span>We Are a Professional Website Design & Development Agency</span>
          </v-layout>
          <v-layout content_whole row>
              <v-flex xs6>
                  <div class="side_left">
                      <img src="@/assets/images/prakaasheyewear.png" alt="">
                      </div>
              </v-flex>
              <v-flex xs5 offset-xs1>
                  <div class="side_right">
                      <h2>Delivering user-friendly, results-driven websites and marketing strategies since 2005.</h2>
                      <p> At efelle creative, we work to accelerate our clients' revenue via effective digital marketing. Our user-experience design process puts us in the shoes of your target audiences because we know that understanding the end-user’s motivations and goals is the most important aspect of achieving exceptional results</p>
                      <p>Experience matters, and with over 800 projects pning three dp>industries, we are the proven, premier online marketing accelerator.</p>
                      <div class="text-xs-center">
                          <v-btn round color="primary" dark>Portfolio</v-btn>
                      </div>
                  </div>
              </v-flex>
          </v-layout>
      </v-parallax>
    </div>
</div>
</template>

<script>
  import navigation from '../components/navigation'
  export default {
      components: {
          navigation
      },
      data: () => ({
          show: false
      }), 
      
  };
</script>

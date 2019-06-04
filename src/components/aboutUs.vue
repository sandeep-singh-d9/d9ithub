<template>
  <div class="main_top_content">
    <navigation></navigation>
<!-- <vue-particles style="position:fixed; width:100%;"
        color="#4DBEE9"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#4DBEE9"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
    </vue-particles> -->
    <div class="header_about inner_about">
    
        <div class="rotating-slideshow-Aboutus">
        <div id="slider-main" data-position="1" data-deg="0">
            <div id="slider-btns" class="button">
                <a id="pos1" href="#" class="pos1" data-position="1"></a>
                <a id="pos2" href="#" class="pos2" data-position="4"></a>
                <a id="pos3" href="#" class="pos3" data-position="3"></a>
                <a id="pos4" href="#" class="pos4" data-position="2"></a>
            </div>
            <div class="slider-overlay">
                <div class="active" data-position="1">
                  <h3>What We Do </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum tincidunt sem. Nulla ipsum lorem, interdum vel tincidunt sit amet, aliquam sit amet lectus. Mauris eu tincidunt sapien. </p>
                </div>
                <div data-position="2">
                  <h3>Who We Are ?</h3>
                    <p> We Are Reputed and Recognized for developing robust mobile apps. </p>
                </div>
                <div data-position="3" class="over_growth">
                  <h3>Why D9ithub</h3>
                    <p>Experienced Personnel.</p>
                    <p>Profound knowledge of frameworks and mobile technologies.</p>
                    <p>High Quality app development process</p>
                    <p>Time bound delivery and cost effective services</p>
                    <p>Reputed and Recognized for developing robust mobile apps</p>
                    <p>Provide dynamic services to various platforms</p>
                </div>
                <div data-position="4">
                  <h3>D9ithub Growth</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum tincidunt sem. Nulla ipsum lorem, interdum vel tincidunt sit amet, aliquam sit amet lectus. Mauris eu tincidunt sapien.</p>
                </div>
            </div>
            <div class="slides">
                <img class="active img_3" src="../assets/images/about_bg3.jpg" data-position="1">
                <img class="img_2" src="../assets/images/about_bg2.jpg" data-position="2">
                <img src="../assets/images/about_bg.png" data-position="3">
                <img src="../assets/images/about_bg1.jpg" data-position="4">
            </div>
            <img class="spinner-btn" src="../assets/images/button.png" alt="">
            <img class="spinner" src="../assets/images/slides-overlay.jpg" alt="">
        </div>
        
    </div>
      
     
    </div>
 
  </div>
</template>

<script>
import navigation from "../components/navigation";
import slider from "../scripts/slider"
export default {
  components: {
    navigation
  },
  data: () => ({
    show: false,
    scrollShow: false
  }),
  methods: {
    handleonscroll() {
      // alert('scrollEvent');
      this.scrollShow = true;
    }
  },
  mounted() {
    this.show = true;
    window.addEventListener("scroll", this.handleonscroll);

    $(document).ready(function(){
          $('.rotating-slideshow-Aboutus').rotatingSlideshow({
          sliderHolder: '#slider-main',
          btnsHolder: '#slider-btns',
          audioHolder: '#slider-sound',
          auto: true,
          autoSpeed: '6000'
          });
        });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleonscroll);
  }
};
</script>

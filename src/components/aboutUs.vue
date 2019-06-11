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
    </vue-particles>-->
    <div class="header_about inner_about desktop">
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
              <h3>What We Do</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum tincidunt sem. Nulla ipsum lorem, interdum vel tincidunt sit amet, aliquam sit amet lectus. Mauris eu tincidunt sapien.</p>
            </div>
            <div data-position="2">
              <h3>Who We Are ?</h3>
              <p>We Are Reputed and Recognized for developing robust mobile apps.</p>
            </div>
            <div data-position="3" class="over_growth">
              <h3>Why D9ithub</h3>
              <p>D9ithub specializes in Web Applications, Mobile Application, Framework, Open source & E-Commerce Development. Also, we have possessed expertise in Web designing, Logo designing, Brand Identity Design, Digital Marketing, Software Testing and much more. You name the digital service, we have it. We do not only provide the service but our after- service approach is something that will keep you tied-up with us for a longer period of time .</p>
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
          <img class="spinner-btn" src="../assets/images/button.png" alt>
          <img class="spinner" src="../assets/images/slides-overlay.jpg" alt>
        </div>
      </div>
    </div>

    <div class="mobile about">
       <!-- <div class="row header_content_top">
            <div class="col-lg-12">
               <h2>About Us</h2>
            </div>
          <span class="line_bottom"></span>   
      </div>
      
    <div class="content_about_title">
     
      <img src="https://images.squarespace-cdn.com/content/v1/5ca5fea877b90374d82c2908/1555160225142-K3JSC5RZCP6YQ0PDURT4/ke17ZwdGBToddI8pDm48kP35Ptd9c1WJWyy1wx1u5uMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dnim7kb3NJ36V2RtdqN3tYOeVfcZf-uQRMY-CpavYNwxCjLISwBs8eEdxAxTptZAUg/features_hero.png?format=1500w" alt>
    </div>
    <div class="container">
      <div class="title_home_top">
        We are a team of believers, thinkers, and creators. We are customer-centric and crazy enough to innovate and create new opportunitie
      </div>
      <div class="map_title" data-aos="fade-left">OUR GLOBAL PRESENCE</div>
    </div>
    <div class="image_container">
       <img src="../assets/images/map.png" alt>
    </div>
    <div class="content_inner_body">
        <div class="content_inner_about">
          <img src="https://www.zealousys.com/wp-content/uploads/2015/04/vision-img.png" alt="">
          <h2>Our  <b>Vision</b></h2>
          <p>“To gain expertise on leading technologies and offer services that are ahead of time and make it available for masses.”</p>
        </div>
        <div class="content_inner_about" data-aos="fade-left">
          <img class="data_wedo" src="../assets/images/weDo.png" alt="">
          <h2>What <b>We Do</b></h2>
          <p>“To gain expertise on leading technologies and offer services that are ahead of time and make it available for masses.”</p>
        </div>
        <div class="content_inner_about">
          <img src="https://www.zealousys.com/wp-content/uploads/2015/04/mission-img.png" alt="">
          <h2>Our  <b>Mission</b></h2>
            <p>“To gain expertise on leading technologies and offer services that are ahead of time and make it available for masses.”</p>
        </div>
    </div> -->

    <aboutmobile></aboutmobile>
    </div>
  </div>
</template>

<script>
import navigation from "../components/navigation";
import slider from "../scripts/slider";
import aboutmobile from "../views/testimonialHome"
export default {
  components: {
    navigation,
    aboutmobile
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

    $(document).ready(function() {
      $(".rotating-slideshow-Aboutus").rotatingSlideshow({
        sliderHolder: "#slider-main",
        btnsHolder: "#slider-btns",
        audioHolder: "#slider-sound",
        auto: true,
        autoSpeed: "6000"
      });
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleonscroll);
  }
};
</script>

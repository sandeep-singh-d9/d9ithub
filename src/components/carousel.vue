<template>

   <!-- start slider area -->
  <div>
    <div class="oneByOne1 home_desktop_slider" style="overflow: hidden;">
      <div id="banner" style="left: -3840px;">          
        <div class="oneByOne_item slider_2" style="display: none; left: 960px;">                      
          <img src="../assets/home_slider/webdesign-infographic.png" class="img4 animate3 bounceIn" data-animate="bounceIn" style="display: block;">
          <img src="../assets/home_slider/slider-fsw-logo.png" class="img5 animate2 lightSpeedIn" data-animate="lightSpeedIn" style="display: block;">
          <img src="../assets/home_slider/HTML_Logo.png" class="img6 animate5 fadeInLeftBig" data-animate="fadeInLeftBig" style="display: block; ">
          <img src="../assets/home_slider/css3.png" class="img7 animate5 fadeInLeftBig" data-animate="fadeInLeftBig" style="display: block;">
          <img src="../assets/home_slider/photoshop-icon.png" class="img8 animate5 fadeInLeftBig" data-animate="fadeInLeftBig" style="display: block;">
          <img src="../assets/home_slider/dreamweaver-icon.png" class="img9 animate5 fadeInLeftBig" data-animate="fadeInLeftBig" style="display: block;">
          <img src="../assets/home_slider/ai-icon.png" class="img10 animate5 fadeInLeftBig" data-animate="fadeInLeftBig" style="display: block;">
          <span class="text3 animate3 bounceIn" data-animate="bounceIn" style="display: block;">Graphics & Website Design</span>      
          <span class="text4 animate4 lightSpeedIn" data-animate="lightSpeedIn" style="display: block;">We Build Creative and Effective Responsive Websites</span>            
          <span class="text4 animate5 fadeInLeftBig" data-animate="fadeInLeftBig" style="display: block;">Effective and Affordable Solutions</span>                 
          <span class="text4 animate6 fadeInRightBig" data-animate="fadeInRightBig" style="display: block;">Powerful & Responsive Design</span>                       
        </div>
        <div class="oneByOne_item slider_1" style="display: none; left: 0px;">     
          <span class="text1 animate0  lightSpeedIn" data-animate="lightSpeedIn"  style="display: none;">Web & Mobile Development</span>      
          <span class="text2 animate1 lightSpeedIn" data-animate="lightSpeedIn"   style="display: none;"><i class="fas fa-hand-point-right"></i> &nbsp;E-Commerce Development</span>
          <span class="text2 animate1 lightSpeedIn" data-animate="lightSpeedIn"  style="display: none;"><i class="fas fa-hand-point-right"></i>  &nbsp;Wordpress Development</span>
          <span class="text2 animate1  lightSpeedIn" data-animate="lightSpeedIn"  style="display: none;"><i class="fas fa-hand-point-right"></i> &nbsp;Laravel Development</span>
          <span class="text2 animate1 lightSpeedIn" data-animate="lightSpeedIn"  style="display: none;"><i class="fas fa-hand-point-right"></i>  &nbsp;PHP Development</span>
          <span class="text2 animate1 lightSpeedIn" data-animate="lightSpeedIn"  style="display: none;"><i class="fas fa-hand-point-right"></i>  &nbsp;CMS / Enterprise Solutions</span>
          <span class="text2 animate1 lightSpeedIn" data-animate="lightSpeedIn"  style="display: none;"><i class="fas fa-hand-point-right"></i>  &nbsp;Software Development</span><br/>
          <span class="text2 animate1 lightSpeedIn" data-animate="lightSpeedIn"  style="display: none;"><i class="fas fa-hand-point-right"></i>  &nbsp;Android / iOS Development</span><br/>
          <img src="../assets/home_slider/php.png" class="img1 animate3" style="display: none;">
          <img src="../assets/home_slider/wordpress2.png" class="img2 animate3" style="display: none;">
          <img src="../assets/home_slider/android.png" class="img3 animate3" style="display: none;">
          <img src="../assets/home_slider/apple.png" class="img4 animate3" style="display: none;">
          <img src="../assets/home_slider/laravel.png" class="img5 animate3" style="display: none;">
          <img src="../assets/home_slider/angular.png" class="img6 animate3" style="display: none;">
        </div>
      </div>
      <div class="buttonArea">
        <div class="buttonCon" style="cursor: pointer; display: block; opacity: 0.574336;">
          <a class="theButton" rel="0">1</a>
          <a class="theButton" rel="1">2</a>
          <a class="theButton" rel="2">3</a>
          <a class="theButton" rel="3">4</a>
          <a class="theButton active" rel="4">5</a>
        </div>
      </div>
    </div>  
    <div class="mobile_slider"> 
   			<div class="owl-carousel owl-theme" id="home_slider" >
				<div class="item">
				  <div class="inner_home_portfolio" >
					<img src="../assets/home_slider/mobile_slider1.png" alt="" title="">
				  </div>
				</div>
				<div class="item">
				  <div class="inner_home_portfolio">
					<img src="../assets/home_slider/mobile_slider2.png" alt="" title="">
				  </div>
				</div>
			  </div>
		</div> 
      
</div>
  <!-- end slider area -->
</template>

<script>
import "../scripts/jquery.onebyone.min";
import "../scripts/jquery.touchwipe.min";

export default {
    name: 'Carousel',
    mounted () {
      this.runFirst()
      $(document).ready(function() {
				  var owl = $('#home_slider');
				  owl.owlCarousel({
					items: 1,
					loop: true,
					margin: 10,
					autoplay: true,
					autoplayTimeout: 8000,
					autoplayHoverPause:false
				  });
				  $('.play').on('click', function() {
					owl.trigger('play.owl.autoplay', [1000])
				  })
				  $('.stop').on('click', function() {
					owl.trigger('stop.owl.autoplay')
				  })
				})
    },
    methods: {
      runFirst () {
        $('#banner').oneByOne({
          className: 'oneByOne1',              
          easeType: 'random',
          slideShow: true
        });  
      }
    }
    
};
</script>
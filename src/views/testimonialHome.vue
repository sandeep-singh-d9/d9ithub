<template>
  <div>
    <div class="main_top_content">
      <navigation></navigation>
      <div class="about_data">
      <div class="row header_content_top about">
            <div class="col-lg-12">
               <h2>About Us</h2>
            </div>
          <span class="line_bottom"></span>   
      </div>
      
    <div class="content_about_title">
     
      <img src="https://images.squarespace-cdn.com/content/v1/5ca5fea877b90374d82c2908/1555160225142-K3JSC5RZCP6YQ0PDURT4/ke17ZwdGBToddI8pDm48kP35Ptd9c1WJWyy1wx1u5uMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dnim7kb3NJ36V2RtdqN3tYOeVfcZf-uQRMY-CpavYNwxCjLISwBs8eEdxAxTptZAUg/features_hero.png?format=1500w" alt>
    </div>
    <div class="container">
      <div class="title_home_top" data-aos="fade-right">
        We are a team of believers, thinkers, and creators. We are customer-centric and crazy enough to innovate and create new opportunitie
      </div>
      <div class="map_title" data-aos="fade-left">OUR GLOBAL PRESENCE</div>
    </div>
    <div class="image_container" data-aos="fade-right">
       <img src="../assets/images/map.png" alt>
    </div>
    <div class="content_inner_body">
        <div class="content_inner_about" data-aos="fade-right">
          <img src="https://www.zealousys.com/wp-content/uploads/2015/04/vision-img.png" alt="">
          <h2>Our  <b>Vision</b></h2>
          <p>“To gain expertise on leading technologies and offer services that are ahead of time and make it available for masses.”</p>
        </div>
        <div class="content_inner_about" data-aos="fade-left">
          <img class="data_wedo" src="../assets/images/weDo.png" alt="">
          <h2>What <b>We Do</b></h2>
          <p>“To gain expertise on leading technologies and offer services that are ahead of time and make it available for masses.”</p>
        </div>
        <div class="content_inner_about" data-aos="fade-right">
          <img src="https://www.zealousys.com/wp-content/uploads/2015/04/mission-img.png" alt="">
          <h2>Our  <b>Mission</b></h2>
            <p>“To gain expertise on leading technologies and offer services that are ahead of time and make it available for masses.”</p>
        </div>
    </div>
    </div>
  </div>
   </div>
</template>
<script>
import navigation from '../components/navigation'
import AOS from "aos";
import "aos/dist/aos.css";
export default {
      components: {
          navigation
      },
      data: () => ({
          show: false
      }), 
      mounted() {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
    });

    $(document).ready(function() {
      // Add smooth scrolling to all links
      $(".development_menu_tab").on("click", function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top
            },
            800,
            function() {
              // Add hash (#) to URL when done scrolling (default click behavior)
              // window.location.hash = hash;
            }
          );
        } // End if
      });
    });
  }
      
  };
</script>



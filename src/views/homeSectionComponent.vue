<template>
  <div class="content_home_services">
    <!-- newData -->
    <div class="container">
      <div class="row header_content_top">
        <div class="col-lg-12">
          <h2>OUR SERVICES</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="serviceBox">
            <div class="service-content">
              <div class="service-icon">
                <i class="fa fa-laptop"></i>
              </div>
              <h3 class="title">Web Development</h3>
              <h5 class="description">We believe that a path to a more effective NYC government</h5>
            </div>
            <router-link to="/ourService/webdevelopment">
              <a class="read-more" href>Read More</a>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="serviceBox">
            <div class="service-content">
              <div class="service-icon">
                <i class="fa fa-palette"></i>
              </div>
              <h3 class="title">Web Design</h3>
              <h5 class="description">We believe that a path to a more effective NYC government</h5>
            </div>
            <router-link to="/ourService/webdesign">
              <a class="read-more" href>Read More</a>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6" >
          <div class="serviceBox">
            <div class="service-content">
              <div class="service-icon">
                <i class="fab fa-opencart"></i>
              </div>
              <h3 class="title">CMS & Ecommerce</h3>
              <h5 class="description">We believe that a path to a more effective NYC government</h5>
            </div>
            <router-link to="/ourService/cmsandecommerce">
              <a class="read-more" href>Read More</a>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="serviceBox">
            <div class="service-content">
              <div class="service-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3 class="title">Mobile Development</h3>
              <h5 class="description">We believe that a path to a more effective NYC government</h5>
            </div>
            <router-link to="/ourService/mobileDevelopment">
              <a class="read-more" href>Read More</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
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

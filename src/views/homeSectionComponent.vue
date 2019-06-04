<template>
  <div class="content_home_services">
    <!-- newData -->
    <div class="container">
        <div class="row header_content_top">
            <div class="col-lg-12">
               <h2> OUR SERVICES</h2>
            </div>
        </div>
      <div class="row">
          <div class="col-md-3 col-sm-6" data-aos="fade-left">
          <div class="serviceBox">
            <div class="service-content">
              <div class="service-icon">
               <i class="fa fa-laptop"></i>
              </div>
              <h3 class="title">Web Development</h3>
              <h5 class="description">We believe that a path to a more effective NYC government</h5>
            </div>
            <router-link to="/ourService/webdevelopment"> <a class="read-more" href>Read More</a></router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6" data-aos="fade-left">
          <div class="serviceBox">
            <div class="service-content">
              <div class="service-icon">
                <i class="fa fa-palette"></i>
              </div>
              <h3 class="title">Web Design</h3>
              <h5 class="description">We believe that a path to a more effective NYC government</h5>
            </div>
           <router-link to="/ourService/webdesign"> <a class="read-more" href>Read More</a></router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6" data-aos="fade-right">
          <div class="serviceBox">
            <div class="service-content">
              <div class="service-icon">
                <i class="fab fa-opencart"></i>
              </div>
              <h3 class="title">CMS & Ecommerce </h3>
              <h5 class="description">We believe that a path to a more effective NYC government</h5>
            </div>
           <router-link to="/ourService/cmsandecommerce"> <a class="read-more" href>Read More</a></router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6" data-aos="fade-right">
          <div class="serviceBox">
            <div class="service-content">
              <div class="service-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3 class="title">Mobile Development</h3>
              <h5 class="description">We believe that a path to a more effective NYC government</h5>
            </div>          
           <router-link to="/ourService/mobileDevelopment"> <a class="read-more" href>Read More</a></router-link>
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

<style scoped>
.header_content_top{
    text-align: center;
    margin-bottom: 30px;
}
.header_content_top h2{font-family: cursive}
.demo {
  background: #e2e2e2;
}
.service-icon h3{font-family: cursive;}
.serviceBox {
    color: #000000;
    padding: 0 10px 31px;
    background-color: rgba(255,255,255,0.15);
    border: 1px solid transparent;
    border-radius: 20px;
    margin: 80px 0 30px;
    position: relative;
    border: 1px solid #ababab;
}

.serviceBox .service-content {
  text-align: center;
  padding: 15px 20px 30px;
  margin-top: -80px;
  border-radius: 25px;
  background-color: #fff;
  position: relative;
  transition: all 0.3s;
}

/* .serviceBox .service-content:hover {
  box-shadow: 0 0 20px -5px #000;
} */

.serviceBox .service-content:after {
  content: "";
  height: 50px;
  width: 50px;
  border: 25px solid transparent;
  border-top: 25px solid #ffffff;
  transform: translateX(-50%);
  position: absolute;
  bottom: -50px;
  left: 50%;
}

.serviceBox .service-icon {
  display: inline-block;
    color: #0b71a3;
    font-size: 76px;
    margin-bottom: 10px;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.serviceBox:hover .service-icon {
  transform: rotateX(360deg);
}

.serviceBox .title {
  /* font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 10px;
  font-family: cursive !important;
  height: 30px; */
  font-weight: 400;
    /* text-transform: uppercase; */
    margin: 18px 0 10px;
    /* font-family: cursive !important; */
    height: 30px;
}

.serviceBox .description {
  font-size: 15px;
  line-height: 25px;
  margin: 0;
}

.serviceBox .read-more {
     display: block;
    width: 60%;
    font-size: 15px;
    /* font-weight: 600; */
    text-transform: uppercase;
    text-align: center;
    color: #0b71a3;
    padding: 10px 0;
    background-color: #fff;
    border-radius: 36px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    position: absolute;
    left: 50%;
    bottom: -20px;
    border: 1px solid;
}

.serviceBox .read-more:hover {
  text-decoration: none;
    letter-spacing: 2px;
    -webkit-box-shadow: 0 0 10px #000;
    box-shadow: 0 0 4px #058dc5;
}

.serviceBox.green {
  background-color: #44bb85;
}

.serviceBox.green .service-icon {
  color: #44bb85;
}

.serviceBox.green .read-more {
  background-color: #007a6d;
}

.serviceBox.blue {
  background-color: #36bfc5;
}

.serviceBox.blue .service-icon {
  color: #36bfc5;
}

.serviceBox.blue .read-more {
  background-color: #015f65;
}

.serviceBox.red {
  background-color: #f23d3a;
}

.serviceBox.red .service-icon {
  color: #f23d3a;
}

.serviceBox.red .read-more {
  background-color: #ad0e0c;
}

</style>

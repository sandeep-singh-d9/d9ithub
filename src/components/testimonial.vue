<template>
    <div>
        <div class="main_top_content">
            <navigation></navigation>
            <div translate="no" class="body">
                <div class="rotating-slider">
                  <ul class="slides">
                    <li>
                      <div class="inner">
                         <div class="pic">
                            <img src="../assets/images/client_bg.png" alt="" title="" class="client_over_bg">
                            <img src="../assets/images/dean.png" alt="" title="">
                         </div>  
                        <h2>Dean Jones</h2>
                        <p>I have had d9ithub perform many projects for me and they have completed all of them on time and with great quality, I continue to use them exclusively.</p>
                      </div>
                    </li>
                    <li>
                      <div class="inner">
                          <div class="pic">
                            <img src="../assets/images/client_bg.png" alt="" title="" class="client_over_bg">
                            <img src="../assets/images/noimage.png" alt="" title="">
                          </div>  
                        <h2>Danielle McCarthy</h2>
                        <p>Has been very helpful and completed tasks in a timely fashion to a good standard. Will use again and again</p>
                      </div>
                    </li>
                    <li>
                      <div class="inner">
                          <div class="pic">
                            <img src="../assets/images/client_bg.png" alt="" title="" class="client_over_bg">
                            <img src="../assets/images/lisa_gibson.jpg" alt="" title="">
                          </div>  
                        <h2>Lisa Gibson</h2>
                        <p>Working with D9 has been great! I needed help with a tricky e-commerce coding issue, and they not only resolved the issue, but have also provided other services to support developing and optimizing my clients' sites. Communication is great, and the quality of work is first class. They come highly recommend by me!</p>
                      </div>
                    </li>
                    <li>
                      <div class="inner">
                         <div class="pic">
                            <img src="../assets/images/client_bg.png" alt="" title="" class="client_over_bg">
                            <img src="../assets/images/noimage.png" alt="" title="">
                         </div>  
                        <h2>Dean Jones</h2>
                        <p>I have had d9ithub perform many projects for me and they have completed all of them on time and with great quality, I continue to use them exclusively.</p>
                      </div>
                    </li>
                    <li>
                      <div class="inner">
                          <div class="pic">
                            <img src="../assets/images/client_bg.png" alt="" title="" class="client_over_bg">
                            <img src="../assets/images/noimage.png" alt="" title="">
                          </div>  
                        <h2>Danielle McCarthy</h2>
                        <p>Has been very helpful and completed tasks in a timely fashion to a good standard. Will use again and again</p>
                      </div>
                    </li>
                    <li>
                      <div class="inner">
                          <div class="pic">
                              <img src="../assets/images/client_bg.png" alt="" title="" class="client_over_bg">
                              <img src="../assets/images/noimage.png" alt="" title="">
                          </div>  
                        <h2>Renee J-Allen</h2>
                        <p>Great communicator, efficient and attentive to clients details and needs. Definitely recommend and will use for future projects!</p>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import testimonial_slider from "../scripts/jquery.rotating-slider"
    import navigation from '../components/navigation'

    export default {
        components: {
            navigation
        },
        data: () => ({
            show: false
        }),
        mounted(){
            $("#testimonial-slider").owlCarousel({        
            items: 1,
                    itemsDesktop: [1000, 1],
                    itemsDesktopSmall: [979, 1],
                    itemsTablet: [768, 1],
                    pagination: true,
                    transitionStyle: "backSlide",
                    autoPlay: true    
        });
        $('.rotating-slider').rotatingSlider({  
            autoRotate: true,
        });
        }
    };
       
</script>
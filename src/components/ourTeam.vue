<template>
  <div class="main_top_content">
    <navigation></navigation>
    <div class="header_about our_team">
        <div class="container" >
          <div class="row">
            <div class="col-sm-6"></div>
            <div class="col-md-6">
              <div class="main-timeline">
                <transition
                  name="custom-classes-transition"
                  enter-active-class="animated fadeInRight "
                  leave-active-class="animated fadeOutRight "
                >
                  <div v-if="show" :key="1" color="blue lighten-2" dark>
                    <div class="timeline">
                      <a href="#" class="timeline-content">
                        <h3 class="title">Digvijay Vaghela</h3>
                        <p
                          class="description"
                        >	Founder / Director.</p>
                         <p>D9ithub is World Class IT Enterprise with excellent delivery, quality, and support. I am proud to be part of D9ithub Team.</p>
                        <div class="team_circle_bg"></div>
                        <div class="timeline-icon">
                         <img src="../assets/images/digvijayvaghela.jpg" alt="">
                        </div>
                        <!-- <span class="timeline-year">About</span> -->
                      </a>
                    </div>
                  </div>
                </transition>

                <transition
                  name="custom-classes-transition"
                  enter-active-class="animated fadeInLeft"
                  leave-active-class="animated fadeOutLeft"
                >
                  <!-- <div v-if="show" :key="2">
                                
                  </div>-->
                  <div v-if="show" :key="2" class="timeline">
                    <a href="#" class="timeline-content">
                      <h3 class="title">Dhruv Patel</h3>
                      <p
                        class="description"
                      >Co - Founder / CEO.</p>
                       <p>D9ithub is World Class IT Enterprise with excellent delivery, quality, and support. I am proud to be part of D9ithub Team.</p>
                       <div class="team_circle_bg"></div>
                      <div class="timeline-icon">
                         <img src="../assets/images/dhruvpatel.jpg" alt="">
                        </div>
                    </a>
                  </div>
                </transition>
                <transition
                  name="custom-classes-transition"
                  enter-active-class="animated fadeInRight"
                  leave-active-class="animated fadeOutLeft"
                >
                  <div v-show="scrollShow3" :key="3" class="timeline" v-on:scroll="handleonscroll">
                    <a href="#" class="timeline-content">
                      <h3 class="title">Kandarp Pandya</h3>
                      <p
                        class="description"
                      >Sr. Frontend / Web Developer.</p>
                       <p>D9ithub is World Class IT Enterprise with excellent delivery, quality, and support. I am proud to be part of D9ithub Team.</p>
                        <div class="team_circle_bg"></div>
                        <div class="timeline-icon">
                            <img src="../assets/images/kandarppandya.jpg" alt="">
                        </div>
                    </a>
                  </div>
                </transition>
                <transition
                  name="custom-classes-transition"
                   enter-active-class="animated fadeInLeft"
                  leave-active-class="animated fadeOutLeft"
                >
                  <div v-if="scrollShow4" :key="4" class="timeline">
                    <a href="#" class="timeline-content">
                      <h3 class="title">Palak Sukhadiya</h3>
                      <p
                        class="description"
                      >Sr. UI/UX Designer.</p>
                       <p>D9ithub is World Class IT Enterprise with excellent delivery, quality, and support. I am proud to be part of D9ithub Team.</p>
                        <div class="team_circle_bg"></div>
                        <div class="timeline-icon">
                             <img src="../assets/images/palaksukhadiya.jpg" alt="">
                        </div>
                    </a>
                  </div>
                </transition>
                <transition
                  name="custom-classes-transition"
                   enter-active-class="animated fadeInRight"
                  leave-active-class="animated fadeOutLeft"
                >
                  <div v-show="scrollShow5" :key="5" class="timeline" v-on:scroll="handleonscroll">
                    <a href="#" class="timeline-content">
                      <h3 class="title">Amit Solanki</h3>
                      <p
                        class="description"
                      >Sr. Laravel Developer.</p>
                       <p>D9ithub is World Class IT Enterprise with excellent delivery, quality, and support. I am proud to be part of D9ithub Team.</p>
                      <div class="team_circle_bg"></div>
                      <div class="timeline-icon">
                         <img src="../assets/images/amitsolanki.png" alt="">
                        </div>
                    </a>
                  </div>
                </transition>
                 
                 <transition
                  name="custom-classes-transition"
                  enter-active-class="animated fadeInLeft"
                  leave-active-class="animated fadeOutLeft"
                >
                  <div v-if="scrollShow6" :key="6" class="timeline">
                    <a href="#" class="timeline-content">
                      <h3 class="title">Sandeep Singh</h3>
                      <p
                        class="description"
                      >UI/UX Developer.</p>
                       <p>D9ithub is World Class IT Enterprise with excellent delivery, quality, and support. I am proud to be part of D9ithub Team.</p>
                        <div class="team_circle_bg"></div>
                        <div class="timeline-icon">
                             <img src="../assets/images/sandeep_singh.jpg" alt="">
                        </div>
                    </a>
                  </div>
                </transition>
                 <transition
                  name="custom-classes-transition"
                  enter-active-class="animated fadeInRight"
                  leave-active-class="animated fadeOutLeft"
                >
                  <div v-if="scrollShow7" :key="7" class="timeline">
                    <a href="#" class="timeline-content">
                      <h3 class="title">Rushi Purohit</h3>
                      <p
                        class="description"
                      >MEAN Stack Developer.
                      </p>
                      <p>D9ithub is World Class IT Enterprise with excellent delivery, quality, and support. I am proud to be part of D9ithub Team.</p>
                        <div class="team_circle_bg"></div>
                        <div class="timeline-icon">
                             <img src="../assets/images/rushi_purohit.jpg" alt="">
                        </div>
                    </a>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import navigation from "../components/navigation";
export default {
  components: {
    navigation
  },
    data: () => ({
    show: false,
    scrollShow3:false,
    scrollShow4:false,
    scrollShow5: false,
    scrollShow6: false,
    scrollShow7: false,
  }),
  methods: {
    handleonscroll() {
      this.scrollShow = true;
    },
    handleonscroll1(){
        this.scrollShow1 = true;
    }
    
  },
  mounted() {
      
    this.show = true;
    window.addEventListener("scroll", this.handleonscroll); 
     window.addEventListener("scroll", this.handleonscroll1); 
     $(window).scrollTop(50);
     $(window).scroll((e) => {
					var scrollTop = $(window).scrollTop();
					var docHeight = $(document).height();
					var winHeight = $(window).height();
					var scrollPercent = (scrollTop) / (docHeight - winHeight);
                    var scrollPercentRounded = Math.round(scrollPercent*100);
                   
                    if( 70 <= scrollPercentRounded ){
                      
                        this.scrollShow3 = true;
                        
                    }
                    if( 80 <= scrollPercentRounded ){
                       
                        this.scrollShow4 = true;
                    }
                    if( 90 <= scrollPercentRounded ){
                        this.scrollShow5 = true;
                        
                    }
                    if( 95 <= scrollPercentRounded ){
                        
                        this.scrollShow6 = true;
                    }
                    if( 100 <= scrollPercentRounded ){
                        this.scrollShow7 = true;
                    }
                    
                    });

  },
  destroyed() {
    window.removeEventListener("scroll", this.handleonscroll);
  }
};
</script>


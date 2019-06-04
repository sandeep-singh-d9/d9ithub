<template>
  <div>
    <div :class="{'menu_onclick': true, 'menu_overlay': show}">
        <v-toolbar class="header">
            <v-toolbar-title><router-link to="/" ><img src="../assets/d9ithublogo.png" alt="" class="fixed_header"></router-link></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="menu_btn" v-if="!show" @click="show = !show"></v-toolbar-side-icon>
            <v-icon class="menu_btn" v-if="show" @click="show = !show">mdi-close</v-icon>
        </v-toolbar>
        <div class="inner_menu navigation">
            <v-container>
                <v-layout row>
                    <v-flex grow pa-1>
                        <transition name="custom-classes-transition" enter-active-class="animated fadeInDown " leave-active-class="animated fadeOutUp ">
                            <div @click="falseShow" v-if="show" :key="0">
                                <router-link to="/aboutUs" class="menu_link">
                                    <v-card dark color="green">
                                        <v-card-text>ABOUT US</v-card-text>
                                    </v-card>
                                </router-link>
                            </div>
                        </transition>
                    </v-flex>
                    <v-flex grow pa-1>
                        <transition name="custom-classes-transition" enter-active-class="animated fadeInRight " leave-active-class="animated fadeOutRight ">
                            <div @click="falseShow" v-if="show" :key="1" color="blue lighten-2" dark>
                                <router-link to="/ourService" @click="show = !show" class="menu_link">
                                    <v-card dark color="green darken-1">
                                        <v-card-text>OUR SERVICE</v-card-text>
                                    </v-card>
                                </router-link>
                            </div>
                        </transition>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex grow pa-1>
                        <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft " leave-active-class="animated fadeOutLeft ">
                            <div @click="falseShow" v-if="show" :key="2">
                                <router-link to="/portfolio" @click="show = !show" class="menu_link">
                                    <v-card dark color="green darken-1">
                                        <v-card-text> PORTFOLIO </v-card-text>
                                    </v-card>
                                </router-link>
                            </div>
                        </transition>
                    </v-flex>
                    <v-flex grow pa-1>
                        <div @click="falseShow"  v-if="show" :key="7">
                            <router-link to="/" @click="show = !show" class="menu_link">
                                <v-card dark color="green darken-1">
                                    <v-card-text> HOME </v-card-text>
                                </v-card>
                            </router-link>
                        </div>
                    </v-flex>
                    <v-flex grow pa-1>
                        <transition name="custom-classes-transition" enter-active-class="animated bounceInRight " leave-active-class="animated bounceOutRight ">
                            <div @click="falseShow"  v-if="show" :key="3" color="blue lighten-2" dark>
                                <router-link to="/ourTeam" @click="show = !show" class="menu_link">
                                    <v-card dark color="green darken-4">
                                        <v-card-text>OUR TEAM</v-card-text>
                                    </v-card>
                                </router-link>
                            </div>
                        </transition>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex grow pa-1>
                        <transition name="custom-classes-transition" enter-active-class="animated fadeInUp " leave-active-class="animated fadeOutDown ">
                            <div @click="falseShow"  v-if="show" :key="4">
                                <router-link to="/testimonial" @click="show = !show" class="menu_link">
                                    <v-card dark color="green darken-3">
                                        <v-card-text>TESTIMONIALS</v-card-text>
                                    </v-card>
                                </router-link>
                            </div>
                        </transition>
                    </v-flex>
                    <v-flex shrink pa-1>
                        <transition name="custom-classes-transition" enter-active-class="animated fadeInUp " leave-active-class="animated fadeOutDown ">
                            <div @click="falseShow"  v-if="show" :key="6">
                                <router-link to="/career" @click="show = !show" class="menu_link">
                                    <v-card dark color="green">
                                        <v-card-text>CAREER</v-card-text>
                                    </v-card>
                                </router-link>
                            </div>
                        </transition>
                    </v-flex>
                    <v-flex grow pa-1>
                        <transition name="custom-classes-transition" enter-active-class="animated fadeInUp " leave-active-class="animated fadeOutDown ">
                            <div @click="falseShow"  v-if="show" :key="3" color="blue lighten-2" dark>
                                <router-link to="/contactus" @click="show = !show" class="menu_link">
                                    <v-card dark color="green lighten-1">
                                        <v-card-text>CONTACT US</v-card-text>
                                    </v-card>
                                </router-link>
                            </div>
                        </transition>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
    
  </div>
</template>

<script>
    export default {
        data: () => ({
                show: false
            }),
        methods: {
            falseShow () {
                this.show = false
            }
        }
    };
</script>

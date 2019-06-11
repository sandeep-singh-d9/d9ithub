import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Aboutpage from './components/AboutComponent'
import PortfolioComponent from './components/PortfolioComponent'
import testimonial from "./components/testimonial"
import ourTeam from "./components/ourTeam"
import ourService from "./components/ourService"
import aboutUs from "./components/aboutUs"
import career from "./components/CareerComponent"
import webdevelopment from "./components/webdevelopmentComponent"
import webdesign from "./components/webdesignComponent"
import cmsandecommerce from "./components/cms&ecommerceComponent"
import contactus from "./components/contactUs"
import mobileDevelopment from "./components/mobileDevelopment"
import hireDedicatedResource from "./components/hireDedicatedResource"
import enterpriseSolution from "./components/enterpriseSolution"
import homeSectionComponent from "./views/homeSectionComponent"
import testMonial from "./views/testimonialHome"
import Ecommerce_inner from "./components/ecommercePortfolio"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: Aboutpage
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: PortfolioComponent
    },
    {
      path: "/testimonial",
      name: "Testimonial",
      component: testimonial
    },
    {
      path: "/ourTeam",
      name: "OurTeam",
      component: ourTeam
    },
    {
      path: "/ourService",
      name: "OurService",
      component: ourService
    },
    {
      path: "/aboutUs",
      name: "AboutUs",
      component: aboutUs
    },
    {
      path: "/career",
      name: "Career",
      component: career
    },
    {
      path: "/ourService/webdevelopment",
      name: "webdevelopment",
      component: webdevelopment
    },
    
    {
      path: "/ourService/webdesign",
      name: "webdesign",
      component: webdesign
    },

    {
      path: "/ourService/cmsandecommerce",
      name: "cmsandecommerce",
      component: cmsandecommerce
    },
    {
      path: "/ourService/mobileDevelopment",
      name: "mobileDevelopment",
      component: mobileDevelopment
    },
    {
      path: "/contactus",
      name: "contactus",
      component: contactus
    },
    {
      path: "/ourService/hireDedicatedResource",
      name: "hireDedicatedResource",
      component: hireDedicatedResource
    },
    {
      path: "/ourService/enterpriseSolution",
      name: "enterpriseSolution",
      component: enterpriseSolution
    },
    {
      path: "/homeSectionComponent",
      name: "homeSectionComponent",
      component: homeSectionComponent
    },
    {
      path: "/testMonial",
      name: "testMonial",
      component: testMonial
    },
    {
      path: "/Ecommerce",
      name: "Ecommerce",
      component: Ecommerce_inner
    }
  ]
});

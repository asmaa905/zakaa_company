<template>
  <div class="home">
    <main-layout >
      <template slot="content" >
        <header-slider></header-slider>
        <about-us />
        <how-to-work />
        <our-servies />

        <our-products />
        <join-us />
        <content-us />
      </template>
    </main-layout>
    <router-view/>
  </div>
</template>

<script>
import MainLayout from '../components/Layouts/MainLayout.vue'
import ContentUs from '../components/pages/ContactUs.vue'
import HeaderSlider from '../components/pages/HeaderSlider.vue'
import OurServies from '@/components/pages/OurServies.vue'
import HowToWork from '@/components/pages/HowToWork.vue'
import OurProducts from '@/components/pages/OurProducts.vue'
import JoinUs from '@/components/pages/JoinUs.vue'
import AboutUs from '@/components/pages/AboutUs.vue'

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

    MainLayout,
    ContentUs,
    HeaderSlider,
    OurServies,
    HowToWork,
    OurProducts,
    JoinUs,
    AboutUs
  }
}
</script>

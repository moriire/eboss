<template>
  
      <section class="section testimonial-section min-vh-100" id="section-review">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading text-capitalize" data-aos="fade-up">{{ header.title_alias || header.title }}</h2>
            </div>
          </div>
          <div class="row jsutify-content-center align-items-center text-center">
            <div class="col-lg-12 mb-5" data-aos="fade-up" data-aos-delay="200">
            <Carousel  @loop="true" :margin="10" :settings="settings" :breakpoints="responsive">
              <Slide v-for="review in reviews" v-bind:key="review.id" >
                <div class="carousel__item testimonial text-center slider-item" >


                <div class="author-image mb-3">
                  <span>
                    <i v-for="(_, index) in arr(review.rate)" class="fa fa-star mx-auto text-success" v-bind:key="index"></i><i v-for="(_, index) in arr(5-review.rate)" class="fa fa-star mx-auto text-danger" v-bind:key="index"></i>
                  
                  </span>
                </div>
                <blockquote>
                  <p>&ldquo; {{ review.comment }}.&rdquo;</p>
                </blockquote>
                <p><em>&mdash; {{ review.full_name }}</em></p>
                </div>
              </Slide>
                <template #addons>
                  <Pagination />
                  <Navigation />
                </template>
              </Carousel>

            </div>
              <!-- END slider -->
          </div>

        </div>
      </section>
      
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'ReviewSection',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    arr(x){
        return [...Array(x).keys() ]
    }
  },
  data(){
    return { 
      // carousel settings
    settings: {
      itemsToShow: 1,
      pauseAutoplayOnHover: true,
      snapAlign: 'center',
      autoHeight: true,
      autoplay:2000, 
    },
    responsive:{
      0:{
        itemsToShow:1,
        nav:false
      },
      600:{
        itemsToShow:1,
        nav:false
      },
      1000:{
        itemsToShow:1,
        dots: true,
        nav:true,
        loop:false
      }
    }
  }

  },
  props: {
    reviews: { type: Array },
    header: { type: Object },
  },
}
</script>
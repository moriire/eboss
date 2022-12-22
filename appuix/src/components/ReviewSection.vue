<template>
  
      <section class="section testimonial-section" id="section-review">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading text-capitalize" data-aos="fade-up">{{ header.title_alias || header.title }}</h2>
            </div>
          </div>
          <div class="row">
            <div class="js-carousel-2 owl-carousel mb-5" data-aos="fade-up" data-aos-delay="200" id="js-carousel-2">
              <div class="testimonial text-center slider-item" v-for="review in reviews" v-bind:key="review.id" >
                <!--div class="author-image mb-3">
                  <img src="/static/dist/src/images/person_2.jpg" alt="Image placeholder" class="rounded-circle mx-auto">
                </div-->
                <blockquote>
                  <p>&ldquo; {{ review.comment }}.&rdquo;</p>
                </blockquote>
                <p><em>&mdash; {{ review.full_name }}</em></p>
              </div>

            </div>
              <!-- END slider -->
          </div>

        </div>
      </section>
</template>

<script>
export default {
  name: 'ReviewSection',
  props: {
    reviews: { type: Array },
    header: { type: Object },
  },
}
</script>
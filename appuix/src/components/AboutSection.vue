<template>
<section class="py-5 bg-light" id="section-about">
        <div class="container">
          <div class="row align-items-center">
            <div :class="image? 'col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5': 'd-none'" data-aos="fade-up">
              <img :src="image" alt="Image" class="img-fluid rounded" />
            </div>
            <div :class="image? 'col-md-12 col-lg-4 order-lg-1': col-lg-10" data-aos="fade-up">
              <h3 class="heading mb-4 text-capitalize">{{ header.title }}</h3>
              <p class="mb-5">{{ about }}.</p>
              <p><a href="#"  data-fancybox class="btn btn-primary text-white py-2 mr-3 text-uppercase letter-spacing-1">Get Started</a></p>
            </div>
            
          </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    about: { type: String, default:''},
    image: { type: String , default: '' },
    header: {type: Object, },
  },
}
</script>
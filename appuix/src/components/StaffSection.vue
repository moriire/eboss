<template>
<section class="py-5 bg-light" id="section-about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
              <img src="a.png" alt="Image" class="img-fluid rounded" />
            </div>
            <div class="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
              <h3 class="heading mb-4">About Us</h3>
              <p class="mb-5">{{ about }}.</p>
              <p><a href="#"  data-fancybox class="btn btn-primary text-white py-2 mr-3 text-uppercase letter-spacing-1">Watch the video</a></p>
            </div>
            
          </div>
        </div>
    </section>

    <div class="container section" id="section-team">

      <div class="row justify-content-center text-center mb-5">
        <div class="col-md-7 mb-5">
          <h2 class="heading" data-aos="fade-up">Leadership</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100" v-for="staff in staffs" v-bind:key="staff.id">

          <div class="block-2">
            <div class="flipper">
              <div class="front" :style="`background-image: url(${staff.img})`">
                <div class="box">
                  <h2>{{ staff.full_name }}</h2>
                  <p>{{ staff.position }}</p>
                </div>
              </div>
              <div class="back">
                <!-- back content -->
                <blockquote>
                  <p>{{ staff.bio }}.</p>
                </blockquote>
                <div class="author d-flex">
                  <div class="image mr-3 align-self-center">
                    <img :src="staff.img" alt="" />
                  </div>
                  <div class="name align-self-center">{{ staff.full_name }} <span class=""> {{ staff.position }} </span></div>
                </div>
              </div>
            </div>
          </div> <!-- .flip-container -->
        </div>
      </div>

    </div>

</template>

<script>
export default {
  name: 'StaffSection',
  props: {
    msg: { String, default:''},
    about: { String, default:''},
    staffs: { Array , default: []}
  },
}
</script>
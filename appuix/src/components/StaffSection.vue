<template>
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
    staffs: { Array , default: []}
  },
}
</script>
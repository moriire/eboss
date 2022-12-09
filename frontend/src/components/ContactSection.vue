<template>
<section class="section contact-section" id="section-contact">
      <div class="container">
        <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading" data-aos="fade-up">Contact Us</h2>
              <p data-aos="fade-up">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
        <div class="row">
          <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">

            <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="425" id="gmap_canvas" src="https://maps.google.com/maps?q=Rotana%20hotel%20along%20shoprite%20fate%20road,%20ilorin,%20kwara%20state&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2piratebay.org">pirate bay</a><br><a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div></div>
             

          </div>
          <div class="col-md-5" data-aos="fade-up" data-aos-delay="200">
            <div class="row">
              <div class="col-md-10 ml-auto contact-info">
                <p><span class="d-block">Address:</span> <span class="text-black"> {{ address }} </span></p>
                <p><span class="d-block">Phone:</span> <span class="text-black" v-for ="phone in phones.filter(x=>x.nature==='phone')" v-bind:key="phone"> (+234) <a :href="`tel:${phone}`" > {{ phone }} </a></span></p>
                <p><span class="d-block">Email:</span> <span class="text-black">{{ email }}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    msg: { type: String, default: "" },
    hero_image: { type: String, default: "" },
    address: { type: String, default: "" },
    email: { type: String, default: "" },
    phones: { type: String, default: "" },
  }
}
</script>
<style scoped>
.gmap_canvas {overflow:hidden;background:none!important;height: 280px;width:500px;};
.mapouter{position:relative;text-align:right;height:280px;width:500px;}

</style>
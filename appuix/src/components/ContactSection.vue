<template>
<section class="section contact-section" id="section-contact">
      <div class="container">
        <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading text-capitalize" data-aos="fade-up">{{ header.title_alias || header.title }}</h2>
              <p data-aos="fade-up">{{ header.subtitle }} </p>
            </div>
          </div>
        <div class="row">
          <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">

            <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="600" id="gmap_canvas" :src="`https://maps.google.com/maps?q=${gmap}&t=k&z=15&ie=UTF8&iwloc=&output=embed`" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div></div> 

          </div>
          <div class="col-md-5" data-aos="fade-up" data-aos-delay="200">
            <div class="row">
              <div class="col-md-10 ml-auto contact-info">
                <p><span class="d-block">Address:</span> <span class="text-black text-capitalize"> {{ address }} </span></p>
                <p><span class="d-block">Phone:</span> <span class="text-black" v-for ="phone in phones.filter(x=>x.name==='phone')" v-bind:key="phone.link"> (+234) <a :href="`tel:${phone.link}`" > {{ phone.link }} </a>, </span></p>
                <p>
                <span class="d-block">Email:</span> <span class="text-black" v-for ="(email, index) in phones.filter(x=>x.name==='gmail')" v-bind:key="index">{{ email.link }}</span>
                </p>
                <p><span class="d-block">Social:</span>
                   <span v-for ="(soc, index) in phones.filter(x=> x.name !== 'phone')" v-bind:key="index" class="text-black display-3">
                      <a :href="soc.link"> <i :class="`fa fa-${soc.name}`"></i></a></span></p>
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
    hero_image: { type: String, default: "" },
    address: { type: String, default: "" },
    phones: { type: Array, },
    header: {type: Object, },
    gmap: { type: String, default: "" },
  }
}
</script>
<style scoped>
.gmap_canvas {overflow:hidden;background:none!important;height: 600px;width:600px;};
.mapouter{position:relative;text-align:right;height:600px;width:600px;}

</style>
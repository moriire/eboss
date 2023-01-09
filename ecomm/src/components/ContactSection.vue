<template>
<section class="main_contact_section sec_ptb_100 clearfix">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="title_text mb_15 text-capitalize" data-aos="fade-up">{{ header.title_alias || header.title }}</h2>
              <p data-aos="fade-up mb_50">{{ header.subtitle }} </p>
            </div>
          </div>
          <div class="row justify-content-lg-between">

            <div class="col-lg-5">
              <div class="main_contact_content">
                <ul class="main_contact_info ul_li_block clearfix">
                  <li>
                    <span class="icon">
                      <i class="fal fa-map-marked-alt"></i>
                    </span>
                    <p class="mb-0 text-capitalize">
                      {{ address }}
                    </p>
                  </li>
                  <li>
                    <span class="icon">
                      <i class="fal fa-phone-volume"></i>
                    </span>
                    <p class="mb-0" v-for ="(phone, index) in phones.filter(x=>x.name==='phone')" v-bind:key="index">{{ phone.link }}</p>
                  </li>
                  <li>
                    <span class="icon">
                      <i class="fal fa-paper-plane"></i>
                    </span>
                    <p class="mb-0 text-capitalize" v-for ="(email, index) in phones.filter(x=>x.name==='gmail')" v-bind:key="index">{{ email.link }}</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-7">
              <div class="main_contact_form">
                <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="600" id="gmap_canvas" :src="`https://maps.google.com/maps?q=${gmap}&t=k&z=15&ie=UTF8&iwloc=&output=embed`" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div></div> 

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
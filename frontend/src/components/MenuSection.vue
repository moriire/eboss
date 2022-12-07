<template>
<section class="section bg-image overlay" style="background-image: url('/static/dist/src/images/hero_3.jpg');" id="section-menus">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading text-white" data-aos="fade">Our Restaurant Menu</h2>
              <p class="text-white" data-aos="fade" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
          <div class="food-menu-tabs" data-aos="fade">
            <ul class="nav nav-tabs mb-5" id="myTab" role="tablist" v-if="menus">
              <li class="nav-item" v-for="cat in Object.keys(menus)" v-bind:key="cat">
                <a class="nav-link letter-spacing-2" :id="`${cat}-tab`" data-toggle="tab" :href="`#${cat}`" role="tab" :aria-controls="`${cat}`" aria-selected="false">{{ cat }}</a>
              </li>
            </ul>
            <div class="tab-content py-5" id="myTabContent">
              
              
              <!-- .tab-pane -->

              <div :class="Object.keys(menus).indexOf(cat)===0? 'tab-pane show active fade text-left': 'tab-pane fade text-left'" :id="`${cat}`" role="tabpanel" :aria-labelledby="`${cat}-tab`" v-for="cat in Object.keys(menus)" v-bind:key="cat" >
                <div class="row">
                  <div class="col-md-6" v-for="eat in menus[cat]" v-bind:key="eat.id" >
                    <div class="food-menu mb-5" >
                      <span class="d-block text-primary h4 mb-3">&#8358; {{ eat.price }}</span>
                      <h3 class="text-white"><a href="#" class="text-white">{{ eat.name }}</a></h3>
                      <!--p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p-->
                    </div>
                  </div>
                </div>
              </div> <!-- .tab-pane -->
              
            </div>
          </div>
        </div>
      </section>
      
</template>

<script>
export default {
  name: 'MenuSection',
  props: {
    //msg: { String, default:''},
    menus: { Array , default: []}
  },
}
</script>
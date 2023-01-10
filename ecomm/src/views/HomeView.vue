<template>
    <HeroSection :hero_image="hero_image" v-if="pagetitle.includes('home')" :header="pageHeaders('home')" :pagetitle="pagetitle"/>
    <section class="carparts_policy d-flex align-items-center clearfix" data-bg-color="#fafafa" style="background: rgb(250, 250, 250);">
                <div class="container">
                    <div class="row mt__50">

                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="carparts_policy_item">
                                <div class="item_icon">
                                    <img src="assets/images/policy/car_parts/icon_01.png" alt="icon_not_found">
                                </div>
                                <div class="item_content">
                                    <h3 class="item_title">Free Delivery</h3>
                                    <p>For orders from Nigeria</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="carparts_policy_item">
                                <div class="item_icon">
                                    <img src="assets/images/policy/car_parts/icon_02.png" alt="icon_not_found">
                                </div>
                                <div class="item_content">
                                    <h3 class="item_title">Support 24/7</h3>
                                    <p>Call us anytime</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="carparts_policy_item">
                                <div class="item_icon">
                                    <img src="assets/images/policy/car_parts/icon_03.png" alt="icon_not_found">
                                </div>
                                <div class="item_content">
                                    <h3 class="item_title">100% Safety</h3>
                                    <p>Only secure payments</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="carparts_policy_item">
                                <div class="item_icon">
                                    <img src="assets/images/policy/car_parts/icon_04.png" alt="icon_not_found">
                                </div>
                                <div class="item_content">
                                    <h3 class="item_title">Hot Offers</h3>
                                    <p>Discounts up to 90%</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
            <ProductSection :products="products" :categories="categories" v-if="pagetitle.includes('products')" :header="pageHeaders('products')" />

            <ReviewSection :reviews="reviews" v-if="pagetitle.includes('review')" :header="pageHeaders('review')" />

            <ContactSection :gmap="ecommerce.gmap" :address="ecommerce.address" :phones="contacts" v-if="pagetitle.includes('contact')" :header="pageHeaders('contact')" />
    
<!-- footer_section - start
        ================================================== -->
        <footer class="footer_section minimal_footer clearfix">
            
            <div class="footer_bottom clearfix">
                <div class="container">
                    <div class="row align-items-center justify-content-lg-betweenmm justify-content-center">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p class="copyright_text mb-0">
                                &copy; {{ fresh }} All right reserved | <a href="#!" class="author_link text-white">{{ ecommerce.business_name }}</a>.
                            </p>
                        </div>

                        <!--div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <ul class="circle_social_links ul_li_right clearfix">
                                <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#!"><i class="fab fa-whatsapp"></i></a></li>
                            </ul>
                        </div-->
                    </div>
                </div>
            </div>
        </footer>
        <!-- footer_section - end
        ================================================== -->

        
  </template>
<script>
/* eslint-disable */
import alertify from "alertifyjs"
import HeroSection from "@/components/HeroSection.vue"
import AboutSection from "@/components/AboutSection.vue"
//import StaffSection from "@/components/StaffSection.vue"
import ProductSection from "@/components/ProductSection.vue"
//import MenuSection from "@/components/MenuSection.vue"
import ReviewSection from "@/components/ReviewSection.vue";
import ContactSection from "@/components/ContactSection.vue";

alertify.set('notifier','position', 'top-center');
 
Array.prototype.groupBy = function(key) {return this.reduce((hash, obj) => {
if(obj[key] === undefined) return hash;
return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
}, {})
};

import axios from "axios";
export default {
  name: 'HomeView',
  components: { HeroSection, AboutSection, ReviewSection, ContactSection, ProductSection },
  data(){
    return {
      form: {},
      fresh: new Date().getFullYear(),
      ecommerce: {},
      about: {},
      products: [],
      contacts: [],
      reviews: [],
      pages: [],
      staffs: [],
      hero_image: "",

    }
  },
  created() {
    this.getStaffs()
  },
  mounted(){
    
  },
  methods: {
    chTitle(title){
      document.title = `${title.toUpperCase()} | ${this.ecommerce.business_name}`
    },
    pageHeaders(x){
      if (this.pages.length){
        return this.pages.filter(y => y.title==x)[0]
      } else {
        return ""
      }
    },
    async getStaffs(){
      try {
        const res = await axios.get(`${location.origin}/v1/api/ecommerce/${this.$route.params.user_id}/`)
        this.ecommerce = res.data.user
        document.title = `Welcome to ${this.ecommerce.business_name}`
        this.about = res.data.about
        this.reviews = res.data.review
        this.pages =  res.data.page
        this.products = res.data.products
        this.contacts = res.data.contact
        this.hero_image = res.data.hero_image

      } catch(e){
        this.$router.push({name: "not-found"})
      } 
    },
    async Book(){
      try {
        this.form.no_of_adult = parseInt(this.form.no_of_adult);
        this.form.no_of_kids = parseInt(this.form.no_of_kids);
        this.form.user = this.ecommerce.id;
        const res = await axios.post(`${location.origin}/v1/api/booking/`, this.form)
        alertify.success("successfully posted. You'll get a feedback from them shortly!")
      } catch(e){
        alertify.error("Check the form and try again to book")
      }
    },

    tab(y){
        //const cat = this.categories.map(x=> this.products.groupBy(x))
        return this.products.filter(x=> x.product.category.name === y)
    }
    
  },
  computed: {
    bn(){
      let hot = this.ecommerce.business_name_alias;
      if (hot){
          return [hot.substr(0,1), hot.substr(1)]
      }
      else {
        return ['Logo', this.ecommerce.business_name]
      }
    },
    pagetitle(){
      if (this.pages) {
            return this.pages.map(x=>x.title)
          }
      return []
    },
    categories(){
        return new Set(this.products.map(x=> x.product.category.name))
    },
    
  }
}
</script>

<template>
    <!-- breadcrumb_section - start
            ================================================== -->
            <div class="breadcrumb_section carparts_breadcrumb text-white text-center text-uppercase d-flex align-items-end clearfix" :data-background="hero_image">
                <div class="container">
                    <ul class="breadcrumb_nav ul_li_center clearfix">
                        <li><a href="#!">{{ header.title || header.title_alias  }}</a></li>
                        <!--li>Shop</li>
                        <li>Car Parts</li>
                        <li>Car Parts List</li-->{{ hero_image }}
                    </ul>
                </div>
            </div>
            <!-- breadcrumb_section - end
            ================================================== -->


    <HeroSection :hero_image="hero_image" v-if="pagetitle.includes('home')" :header="pageHeaders('home')" />
        
            <!-- product_section - start
            ================================================== -->
            <div class="product_section sec_ptb_100 clearfix">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-9 order-last">
                            <div class="carparts_filetr_bar clearfix">
                                <div class="row align-items-center justify-content-lg-between">
                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <ul class="carparts_layout_btns nav ul_li" role="tablist">
                                            <li>
                                                <a data-toggle="tab" href="#grid_layout"><i class="fas fa-th"></i></a>
                                            </li>
                                            <li>
                                                <a class="active" data-toggle="tab" href="#list_layout"><i class="fas fa-list"></i></a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <h4 class="result_text text-center">Showing {{ products.length }} products</h4>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <form action="#">
                                            <div class="option_select d-flex align-items-center mb-0">
                                                <span class="option_title text-uppercase">Sort by:</span>
                                                <select>
                                                    <option data-display="Select Your Option">Nothing</option>
                                                    <option value="1" selected> Popularity</option>
                                                    <option value="2">Another option</option>
                                                    <option value="3" disabled>A disabled option</option>
                                                    <option value="4">Potato</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-content">
                                <div id="grid_layout" class="tab-pane fade">
                                    <div class="row mb_50">
                                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12" v-for="(product, index) in products" v-bind:key="index">
                                            <div class="carparts_product_grid" data-bg-color="#f0eeee">
                                                <div class="item_image" data-bg-color="#f8f8f8">
                                                    <img :src="product.images[0].thumb" alt="image_not_found">
                                                    <ul class="product_action_btns ul_li_center clearfix">
                                                        <li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
                                                        <li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
                                                        <li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" :data-target="`#quickview_modal_${index}`"><i class="fal fa-search"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="item_content">
                                                    <ul class="rating_star ul_li clearfix">
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fal fa-star"></i></li>
                                                    </ul>
                                                    <h3 class="item_title">
                                                        <a href="#!">{{ product.product.name }}</a>
                                                    </h3>
                                                    <span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
                                                </div>
                                                <ul class="product_label ul_li text-uppercase clearfix">
                                                    <li class="bg_carparts_red">New</li>
                                                    <li class="bg_carparts_red">Sale</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    
                                </div>

                                <div id="list_layout" class="tab-pane active">
                                    <div class="mb_50">
                                        <div class="carparts_product_listlayout" data-bg-color="#f0eeee" v-for="(product, index) in products" v-bind:key="index">
                                            <div class="item_image" data-bg-color="#f8f8f8">
                                                <img :src="product.images[0].thumb" alt="image_not_found">
                                                <ul class="product_label ul_li text-uppercase clearfix">
                                                    <li class="bg_carparts_red">New</li>
                                                    <li class="bg_carparts_red">Sale</li>
                                                </ul>
                                            </div>
                                            <div class="item_content">
                                                <ul class="rating_star ul_li clearfix">
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fal fa-star"></i></li>
                                                </ul>
                                                <h3 class="item_title text-uppercase">
                                                    <a href="#!">{{ product.product.name }}</a>
                                                </h3>
                                                <p class="mb-0">
                                                    {{ product.product.desc }}. 
                                                </p>
                                                <div class="action_btns_wrap">
                                                    <span class="price_text"><strong>${{ product.product.price }}</strong> <del>$48.90</del></span>
                                                    <ul class="product_action_btns ul_li clearfix">
                                                        <li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
                                                        <li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
                                                        <li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" :data-target="`#quickview_modal_${index}`"><i class="fal fa-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <aside class="carparts_sidebar sidebar_section">
                                <div class="sb_widget sb_pricing_range">
                                    <h3 class="sb_widget_title text-uppercase">Select Price</h3>
                                    <form action="#">
                                        <div class="price-range-area clearfix">
                                            <div id="slider-range" class="slider-range"></div>
                                            <div class="price-text d-flex align-items-center">
                                                <span>Price:</span>
                                                <input type="text" id="amount" readonly>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div class="sb_widget sb_collapse_category">
                                    <h3 class="sb_widget_title text-uppercase">Categories</h3>
                                    <div id="sb_category_accordion" class="sb_category_accordion">
                                        <div class="card">
                                            <div class="card-body">
                                                <ul class="ul_li_block clearfix">
                                                    <li v-for="(category, index) in categories" v-bind:key="index"><a href="#!">{{ category }}</a></li>            
                                                </ul>
                                                
                                            </div>
                                            
                                        </div>

                                        
                                    </div>
                                </div>

                                <!--a class="text_btn text-uppercase" href="#!"><span>View More</span> <i class="fas fa-arrow-circle-right"></i></a-->
                            </aside>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- product_section - end
            ================================================== -->
  

            
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
  components: { HeroSection, AboutSection, ReviewSection, ContactSection },
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

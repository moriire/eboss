<script>
/* eslint-disable */
import HeroSection from "@/components/HeroSection.vue"
import AboutSection from "@/components/AboutSection.vue"
import StaffSection from "@/components/StaffSection.vue"
import RoomSection from "@/components/RoomSection.vue"
import MenuSection from "@/components/MenuSection.vue"
import ReviewSection from "@/components/ReviewSection.vue";
import ContactSection from "@/components/ContactSection.vue";

Array.prototype.groupBy = function(key) {return this.reduce((hash, obj) => {
if(obj[key] === undefined) return hash;
return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
}, {})
};

import axios from "axios";
export default {
  name: 'HomeView',
  components: { HeroSection, AboutSection, RoomSection, StaffSection, MenuSection, ReviewSection, ContactSection },
  data(){
    return {
      form: {user: this.$route.params.user_id},
      fresh: new Date().getFullYear(),
      hotel: {},
      about: {},
      rooms: [],
      menus: [],
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
      document.title = `${title.toUpperCase()} | ${this.hotel.business_name}`
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
        const res = await axios.get(`${location.origin}/v1/api/hotel/?user__email=${this.$route.params.user_id}@gmail.com`)
        this.hotel = res.data[0].user
        document.title = `Welcome to ${this.hotel.business_name}`
        this.about = res.data[0].about
        this.reviews = res.data[0].review
        this.rooms = res.data[0].room
        this.pages =  res.data[0].page
        this.staffs = res.data[0].staff
        this.menus = res.data[0].menu
        this.contacts = res.data[0].contact
        this.hero_image = res.data[0].hero_image

      } catch(e){
      alert("Welcome")
        //location.href = "/admin/"
      } 
    },
    async Book(){
      try {
        this.form.no_of_adult = parseInt(this.form.no_of_adult);
        this.form.no_of_kids = parseInt(this.form.no_of_kids);
        const res = await axios.post(`${location.origin}/v1/api/booking/`, this.form)
        alert("success")
      } catch(e){
        alert("failed booking")
      }
    },
    
  },
  computed: {
    bn(){
      let hot = this.hotel.business_name_alias;
      if (hot){
          return [hot.substr(0,1), hot.substr(1)]
      }
      else {
        return ['Logo', this.hotel.business_name]
      }
    },
    pagetitle(){
      if (this.pages) {
            return this.pages.map(x=>x.title)
          }
      return []
    },
    gmenus(){
      if (this.menus) {
            return this.menus.groupBy("nature")
          }
      return []
    }
  }
}
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="templateux-navbar">
      <div class="container" v-if="hotel">
        <a class="navbar-brand" :href="`/${$route.params.user_id}`"><span class="text-danger">{{ bn[0] }} </span>{{ bn[1] }}</a>
        <div class="site-menu-toggle js-site-menu-toggle  ml-auto"  data-aos="fade" data-toggle="collapse" data-target="#templateux-navbar-nav" aria-controls="templateux-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <!-- END menu-toggle -->

        <div class="collapse navbar-collapse" id="templateux-navbar-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="page in pagetitle" v-bind:key="page">
            <a class="nav-link text-capitalize" :href="`#section-${page}`" @click="chTitle(`${page}`)" >{{ page }}</a></li>
            <li class="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0"><a class="nav-link" href="#" data-toggle="modal" data-target="#reservation-form" ><span class="pb_rounded-4 px-4 rounded">Booking & Reservation</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- END nav -->
  <HeroSection :hero_image="hero_image" v-if="pagetitle.includes('home')" :header="pageHeaders('home')" />
  <AboutSection :about="about.body" :image="about.thumb" v-if="pagetitle.includes('about')" :header="pageHeaders('about')" />
  <RoomSection :rooms="rooms" v-if="pagetitle.includes('rooms')" :header="pageHeaders('rooms')" />
  <StaffSection :staffs="staffs" :about="hotel.about" v-if="pagetitle.includes('team')" :header="pageHeaders('team')" />
  <MenuSection  :menus="gmenus" v-if="pagetitle.includes('menu')" :header="pageHeaders('menu')" />
  <ReviewSection :reviews="reviews" v-if="pagetitle.includes('review')" :header="pageHeaders('review')" />
  <ContactSection :gmap="hotel.gmap" :address="hotel.address" :phones="contacts" v-if="pagetitle.includes('contact')" :header="pageHeaders('contact')" />
  <section class="section bg-image overlay" style="background-image: url(null);">
        <div class="container" >
          <div class="row align-items-center">
            <div class="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
              <h2 class="text-white font-weight-bold">A Best Place To Stay. Reserve Now!</h2>
            </div>
            <div class="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="200">
              <!-- Extra large modal -->
              <a href="#" class="btn btn-outline-white-primary py-3 text-white px-5" data-toggle="modal" data-target="#reservation-form">Reserve Now</a>
            </div>
          </div>
        </div>
      </section>
      <footer class=" footer-section">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <p class="text-center m-2 p-2">
              &copy; {{ fresh }}| <a href="https://www.acsolotltd.ml" target="_blank" >Acsolot Integrated Services</a>
            </p>
          </div>
          <div class="row justify-content-center align-items-center">
            <p class="text-center social m-1 p-1">
              <a href="https://www.instagram.com/AgesXpat"><span class="fa fa-instagram"></span></a>
              <a href="https://www.facebook.com/AgesXpat"><span class="fa fa-facebook"></span></a>
              <a href="https://www.linkedin.com/in/ibmabdulsalam/"><span class="fa fa-linkedin"></span></a>
              <a href="tel:+2348100482341"><span class="fa fa-phone"></span></a>
            </p>
          </div>
        </div>
      </footer>


      <!-- Modal -->
      <div class="modal fade " id="reservation-form" tabindex="-1" role="dialog" aria-labelledby="reservationFormTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12" data-aos="fade-up" data-aos-delay="100">
                  <form @submit.prevent="Book()"  class="bg-white p-4">
                    <div class="row mb-4"><div class="col-12"><h2>Reservation</h2></div></div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="name">Name</label>
                        <input type="text" id="name" class="form-control " v-model="form.full_name" required>
                      </div>
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="phone">Phone</label>
                        <input type="text" id="phone" class="form-control " v-model="form.phone" required>
                      </div>
                    </div>
                
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="email">Email</label>
                        <input type="email" id="email" class="form-control " v-model="form.email" required>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="email">Request</label>
                        <select class="form-control form-select" required v-model="form.req">
                          <option value="" disabled>Choose your request</option>
                          <option value="room">Room</option>
                          <option value="hall">Hall</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="lounge">Lounge</option>
                        </select>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="checkin_date">Date Check In</label>
                        <input type="date" id="checkin_date" class="form-control" v-model="form.check_in">
                      </div>
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="checkout_date">Date Check Out</label>
                        <input type="date" id="checkout_date" class="form-control" v-model="form.check_out">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label for="adults" class="font-weight-bold text-black">Adults</label>
                        <div class="field-icon-wrap">
                          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                          <select name="" id="adults" class="form-control" v-model="form.no_of_adult">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6 form-group">
                        <label for="children" class="font-weight-bold text-black">Children</label>
                        <div class="field-icon-wrap">
                          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                          <select name="" id="children" class="form-control" v-model="form.no_of_kids">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="message">Notes</label>
                        <textarea name="message" id="message" class="form-control " cols="30" rows="5" v-model="form.note"></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input type="submit" value="Reserve Now" class="btn btn-primary text-white py-3 px-5 font-weight-bold">
                      </div>
                    </div>
                  </form>

                </div>
                
              </div>
            </div>
           
          </div>
        </div>
      </div>
</template>

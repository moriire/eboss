<script>
/* eslint-disable */
import HeroSection from "@/components/HeroSection.vue"
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
  components: { HeroSection, RoomSection, StaffSection, MenuSection, ReviewSection, ContactSection },
  data(){
    return {
      form: {user: this.$route.params.user_id},
      hotel: {},
    }
  },
  created() {
    this.getStaffs()
  },
  methods: {
    mapLink(x){
      return x.split(" ").join("%20")
    },
    chTitle(title){
      document.title = `${title} | ${this.hotel.user.business_name}`
    },
    pageHeaders(x){
      if (this.hotel.page.length){
        return this.hotel.page.filter(y => y.title==x)[0]
      } else {
        return ""
      }
    },
    async getStaffs(){
      try {
        const res = await axios.get(`http://127.0.0.1:8000/v1/api/hotel/?user=${this.$route.params.user_id}`)
        this.hotel = res.data[0]
      } catch(e){
      alert("Welcome")
        //location.href = "/admin/"
      } 
    },
    async Book(){
      try {
        this.form.no_of_adult = parseInt(this.form.no_of_adult);
        this.form.no_of_kids = parseInt(this.form.no_of_kids);
        const res = await axios.post("http://127.0.0.1:8000/v1/api/booking/", this.form)
        alert("success")
      } catch(e){
        alert("failed booking")
      }
    }
  },
  computed: {
    pages(){
      if (this.hotel.page) {
            document.title = `Welcome to ${this.hotel.user.business_name}`
            return this.hotel.page.map(x=>x.title)
          }
      return []
    },
    rooms(){
      return this.hotel.room
    },
    staffs(){
      return this.hotel.staff
    },
    menus(){
      if (this.hotel.menu) {
            return this.hotel.menu.groupBy("nature")
          }
      return []
    }
  }
}
</script>
<template>

  <nav class="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="templateux-navbar">
      <div class="container">
        <a class="navbar-brand" :href="`/hotel/user/${$route.params.user_id}`"><span class="text-danger">R</span>otana</a>
        <div class="site-menu-toggle js-site-menu-toggle  ml-auto"  data-aos="fade" data-toggle="collapse" data-target="#templateux-navbar-nav" aria-controls="templateux-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <!-- END menu-toggle -->

        <div class="collapse navbar-collapse" id="templateux-navbar-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="page in pages" v-bind:key="page">
            <a class="nav-link text-capitalize" :href="`#section-${page}`" @click="chTitle(`${page}`)" >{{ page }}</a></li>
            <li class="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0"><a class="nav-link" href="#" data-toggle="modal" data-target="#reservation-form" ><span class="pb_rounded-4 px-4 rounded">Booking & Reservation</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- END nav -->
  <HeroSection :msg="hotel.user.business_name" :hero_image="hotel.hero_image" v-if="pages.includes('home')" :header="pageHeaders('home')" />
  <StaffSection :staffs="staffs" :about="hotel.about" v-if="pages.includes('staff')" :header="pageHeaders('staff')" />
  <RoomSection :rooms="rooms" v-if="pages.includes('room')" :header="pageHeaders('room')" />
  <MenuSection  :menus="menus" v-if="pages.includes('menu')" :header="pageHeaders('menu')" />
  <ReviewSection v-if="pages.includes('review')" :header="pageHeaders('review')" />
  <ContactSection :gmap="hotel.user.gmap" :address="hotel.user.address" :email="hotel.user.email" :phones="hotel.contact" v-if="pages.includes('contact')" :header="pageHeaders('contact')" />
  <section class="section bg-image overlay" style="background-image: url(/static/src/dist/images/hero_4.jpg);">
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

      <!-- Modal -->
      <div class="modal fade " id="reservation-form" tabindex="-1" role="dialog" aria-labelledby="reservationFormTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12" data-aos="fade-up" data-aos-delay="100">
                  {{ form }}
                  <form @submit.prevent="Book()"  class="bg-white p-4">
                    <div class="row mb-4"><div class="col-12"><h2>Reservation</h2></div></div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="name">Name</label>
                        <input type="text" id="name" class="form-control " v-model="form.full_name" >
                      </div>
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="phone">Phone</label>
                        <input type="text" id="phone" class="form-control " v-model="form.phone" >
                      </div>
                    </div>
                
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="email">Email</label>
                        <input type="email" id="email" class="form-control " v-model="form.email">
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

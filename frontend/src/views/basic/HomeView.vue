<template>
<section class="section" v-if="hotel.page===[]">
  This web page is disabled/not commissioned yet
</section>
  <HeroSection :msg="hotel.name" :hero_image="hotel.hero_image" v-if="'home' in hotel.page.title" />
	<StaffSection :staffs="staffs" :about="hotel.about" v-if="'about' in hotel.page.title"/>
  <RoomSection :rooms="rooms" v-if="'rooms' in hotel.page.title"/>
  <MenuSection  :menus="menus" v-if="'menu' in hotel.page.title" />
  <ReviewSection v-if="'review' in hotel.page.title"/>
  <ContactSection :address="hotel.address" :email="hotel.email" :phones="hotel.contact" v-if="'contact' in hotel.page.title" />
</template>

<script>

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
      hotel: {},
		}
  },
  created() {
    this.getStaffs()
  },
  methods: {
    async getStaffs(){
      try {
        const res = await axios.get('http://127.0.0.1:8000/v1/api/hotel/')
        this.hotel = res.data
      } catch(e){
        location.href = "/admin/"
      } 
    },
  },
  computed: {
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
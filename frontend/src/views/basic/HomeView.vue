<template>
{{ gMenu }}
<div>
  <HeroSection :msg="hotel.name" :hero_image="hotel.hero_image" />
	<StaffSection :staffs="staffs" :about="hotel.about" />
  <RoomSection :rooms="rooms" />
  <MenuSection  :menus="menus" />
  <ReviewSection />
</div>
</template>

<script>

import HeroSection from "@/components/HeroSection.vue"
import StaffSection from "@/components/StaffSection.vue"
import RoomSection from "@/components/RoomSection.vue"
import MenuSection from "@/components/MenuSection.vue"
import ReviewSection from "@/components/ReviewSection.vue";

Array.prototype.groupBy = function(key) {return this.reduce((hash, obj) => {
if(obj[key] === undefined) return hash;
return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
}, {})
};

import axios from "axios";
export default {
  //inject: ["globals", "$dayjs"],
  name: 'HomeView',
  components: { HeroSection, RoomSection, StaffSection, MenuSection, ReviewSection },
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
        alert(e.response)
      } 
    },
      groupMenu(group, item){ 
        return this.hotel.menu.reduce((a, item) => {
          const { category } = item;
          a[category] = a[category] ?? [];
          a[category].push(item);
          return a;
        }, {});
      }
  },
  computed: {
    rooms(){
      return this.hotel.room
    },
    staffs(){
      return this.hotel.staff
    },
    menusCat(){
      if (this.hotel.menu) 
          {
            return new Set(this.hotel.menu.map(x => x.nature))
          }
      return []
    },
    menus(){
      if (this.hotel.menu) {
            return this.hotel.menu.groupBy("nature")
            //return this.groupMenu(this.hotel.menu, nature)
          }
      return []
    }
  }
}
</script>
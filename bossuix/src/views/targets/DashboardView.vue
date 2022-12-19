<template>
            <!-- Sale & Revenue Start -->
            <div class="container-fluid pt-4 px-4  h-100">
                <div class="row g-4 align-items-center justify-content-center">
                    <div class="col-sm-12 col-xl-8">
                        <div class="bg-secondary rounded d-flex  p-3">
                        
                            
                                <input class="form-control bg-dark border-0" type="text" :value="`${globals.BASE}/hotel/user/${globals.state.data.user.pk}`" readonly >
                                <button type="button" @click="newPage" class="btn btn-primary">Open</button>
                        
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sale & Revenue End -->


            <!-- Sales Chart Start --
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-10">
                        <div class="bg-secondary text-center rounded p-4 table responsive">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Hero Section</h6>
                                <a href="">Edit Hero</a>
                            </div>
                            <div class="responsive h-50" v-html="pages.hero"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary text-center rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">About Section</h6>
                                <a href="">Edit About</a>
                            </div>
                            <div class="responsive h-50" v-html="pages.about"></div>
                        </div>
                    </div>
                
                </div>
                    
            </div-->
            <!-- Sales Chart End -->
</template>

<script>
//import mainhtml from "@/html/index";
//import abouthtml from "@/html/about";
//import herohtml from "@/html/hero";
import axios from "axios";
const config = { headers: {
                  //"Authorization" : "Bearer sk_test_e4e73202952f186dde677ddf47d7df5a780da525",
                  "Content-Type": "application/json"
                  }
}
export default {
  name: 'SingleSavingsView', 
  inject: ["globals"],
  //components: {Payment},
  data() {
   return {
    subscriptions: [],
    plan: "",
    html: "Loading",
    pages: {hero: "Loading", about: "Loading",}
   }
  },
  methods: {
    newPage(){
        location.href=`/hotel/user/${this.globals.state.data.user.pk}`
    },
    async getSub() {
        try {
            const res = await axios.get("http://127.0.0.1:8000/v1/api/hotel/")//, config)
	    this.subscriptions = res.data
        } catch(errors) {
            alert(errors)
        }
    },
    
  }, 
  created(){/*
            this.html = mainhtml,
            this.pages.about = abouthtml,
            this.pages.hero = herohtml
    */
  }
}
</script>


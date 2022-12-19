<template>
  <!-- Sign up Start -->{{ form }}
        <div class="container-fluid">
            <div class="row h-100 justify-content-center" style="min-height: 100vh;">
                <div class="col-sm-12 col-xl-10">
                    <div class="bg-secondary  rounded p-4 p-sm-5 my-4 mx-3">
                        
                        <div class="form-floating mb-3 rounded h-100 p-4">
                            <h2 class="mb-4">Select Pages</h2>
                            <form>
                            
                              <div class="btn-group" role="group">
                                <div class="row" >
                                
                                  <div class="col-sm-10 col-xl-6 mb-2" v-for="page in allpages" v-bind:key="page.id">
                                      <div class="form-check form-switch" >
                                        <input class="form-check-input" style="width:90px; height:30px;" type="checkbox" role="switch" v-model="form" :value="page.title" @change="switchPage(page.title)"
                                      :id="page.title" checked />
                                        <label class="form-check-label text-capitalize" :for="page.title"><router-link :to="`/setup/${page.title}`" ><h6>{{ page.title }} Section</h6></router-link></label>
                                      </div>

                                  </div>
                                  
                                </div>
                              </div>
                            </form>
          </div>
                        </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->

</template>

<script>
import axios from "axios"
export default {
  name: 'RegisterPagesView',
  inject: ["globals"], 
  data() {
    return {
        form: [],
        allpages: []
    }
  },
  methods: {
    async getPages(){
      try{
          const res = await axios.get(`${this.globals.BASE}/v1/api/page/?user=${this.globals.state.data.user.pk}`)
          this.allpages = res.data
        } catch(e){
        console.log(e);
          alert("page cannot be fetched")
      }
    },
    async switchPage(title){
      if (this.form.includes(title)){

        try{
          const res = await axios.put(`${this.globals.BASE}/v1/api/page/`, {user: this.globals.state.data.user.pk, enable: false})
          alert("page disabled")
        } catch(e){
        console.log(e);
          alert("page cannot be disabled")
        }
      } else {
        try{
        const res = await axios.put(`${this.globals.BASE}/v1/api/page/`, {user: this.globals.state.data.user.pk, enable: true})
        alert("page created")
      } catch(e){
      console.log(e);
        alert("page cannot be created")
      }
      }
    },
  },
  created(){
    this.getPages()
  }
  }
</script>


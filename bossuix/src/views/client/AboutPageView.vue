<template>
     <!-- Sign In Start -->
        <div class="container-fluid">
            <div class="row align-items-center justify-content-center" style="min-height:50vh;">
                <div class="col-sm-10 col-xl-6s">
                    <div class="bg-secondary rounded p-2 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="index.html" class="">
                                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Back</h3>
                            </a>
                            <h3>{{ $route.params.pagenav }} Section</h3>
                        </div>
                    <form @submit.prevent = "putAbout">
  
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Title alias" v-model="form.title_alias">
                            <label for="floatingInput">Title alias</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea type="text" class="form-control" id="floatingInput" placeholder="Subtitle text" v-model="form.subtitle"></textarea>
                            <label for="floatingInput">Subtitle</label>
                        </div>
                        <button type="submit" class="btn btn-primary py-3 w-50 mb-4 text-capitalize">Update {{ $route.params.pagenav }}</button>
                    </form>

                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
      
  
  <div class="container-fluid">
            <div class="row h-50 align-items-center justify-content-center" style="min-height: 50vh;">
                <div class="col-sm-10 col-xl-6s">
                    <div class="bg-secondary rounded p-1 p-sm-5 my-1 mx-3" v-html="secTitle(form.subtitle)">

                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import about from "@/views/pagejs/sections"
import axios from "axios"
export default {
  name: 'AboutPageView',
  inject: ["globals"], 
  components:{
    about: about,
  },
  data() {
    return {
        form: {
    title: this.$route.params.pagenav,
		user: this.globals.state.data.user.pk,
	},
    }
  },
  created(){
    this.getAbout()
  },
  methods: {
  secTitle(title){
    return  about(title)
    },
  async putAbout(){
      try{
            const res = await axios.put(`${this.globals.BASE}/v1/api/page/${this.form.id}/`, this.form)
            alert("updated")
          } catch(e){
          console.log(e);
            alert("page cannot be disabled")
          }
        },
  async getAbout(){
      try{
            const res = await axios.get(`${this.globals.BASE}/v1/api/page/?user=${this.globals.state.data.user.pk}&title=${this.$route.params.pagenav }`)
            this.form = res.data[0]
          } catch(e){
          console.log(e);
            alert("page cannot be disabled")
          }
        }

  },
  }
</script>


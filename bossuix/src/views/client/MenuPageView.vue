<template>

       <!-- Sign In Start -->
        <div class="container-fluid">
            <div class="row align-items-center justify-content-center" style="min-height: 50vh;">
                <div class="col-sm-10 col-xl-6s">
                    <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" class="">
                                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Back</h3>
                            </a>
                            <h3>Menu Section</h3>
                        </div>
                        <form @submit.prevent = "addMenu">
  
                        <div class="mb-3">
                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="form.nature">
                                    <option selected disabled >Open this select menu</option>
                                    <option :value="nat" v-for="nat in ['drink', 'food']" v-bind:key="nat">{{ nat }}</option>
                                </select>
                                
                        </div>
                        <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Menu Name" aria-label="Name"
                                    aria-describedby="basic-addon1" v-model="form.name">
                        </div>
                        <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">NGN</span>
                                <input type="integer" class="form-control" placeholder="Price" aria-label="Price"
                                    aria-describedby="basic-addon1" v-model="form.price">
                            </div>
                        <button type="submit" class="btn btn-primary py-3 w-50 mb-4 text-capitalize">Update {{ $route.path.split('/')[2] }}</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
      

  <div class="container-fluid">
            <div class="row align-items-center justify-content-center" style="min-height: 50vh;">
                <div class="col-sm-10 col-xl-6s">
                    <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <table class="table table-strip table-hover">
                            <thead>
                             <tr>
                                <th>menus</th>
                                <th>Name</th>
                                <th>Price</th>
                               
                             </tr>
                            </thead>
                            <tbody>
                                <tr v-for="menu in menus">
                                    <td>{{ menu.nature }}</td>
                                    <td>{{ menu.name }}</td>
                                    <td>{{ menu.price }}</td>
                            
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
   </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'MenuPageView',
  inject: ["globals"], 
  data() {
    return {
        form: {
		user: this.globals.state.data.user.pk,
	   },
       menus: []
    }
  },
  created(){
    this.getMenu()
  },
  methods: {
  async addMenu(){
      try{
            const res = await axios.post(`${this.globals.BASE}/v1/api/menu/`, this.form)
            console.log(res.response)
            alert(res.response)
          } catch(e){
          console.log(e);
            alert("page cannot be disabled")
          }
        },
  async getMenu(){
      try{
            const res = await axios.get(`${this.globals.BASE}/v1/api/menu/?user=${this.globals.state.data.user.pk}`)
            this.menus = res.data
          } catch(e){
          console.log(e);
            alert("page cannot be disabled")
          }
        }

  },
  }
</script>


<template>
{{ form }}
<!-- Sign up Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                    <div class="bg-success rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <router-link to="/" class="">
                                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>eKs</h3>
                            </router-link>
                            <h3>Edit user info</h3>
                        </div>
            			<!--div class=".form-floating mb-3 input-group">
                            <span class="input-group-text">&#x20A6;</span>
                            <input type="integer" class="form-control" id="floatingInput" placeholder="What's your target amount" v-model="form.contavt_of" >
                                  <label for="floatingInput">Target Amount</label>                                               
                        </div-->
			<div class="form-floating mb-3">                    <router-link to="/add/image" exact >                    <img :src="`/media/${form.profile_pic}`" class="img img-responsive img-thumbnail" >
			</router-link>
			</div>	
			<div class="form-floating mb-3">                                      <input type="tel" class="form-control" id="phone" placeholder="First Name" v-model="form.first_name" >                                         <label for="first_name">First Name</label>                                               </div>
			<div class="form-floating mb-3">                                      <input type="text" class="form-control" id="last_name" placeholder="Last Name" v-model="form.last_name" >                                         <label for="phone">Last Name</label>                                               </div>

			<div class="form-floating mb-3">                                      <input type="text" class="form-control" id="username" placeholder="Username" v-model="form.username" >                                         <label for="username">username</label>                                               </div>
            			<div class="form-floating mb-3">                                      <input type="tel" class="form-control" id="phone" placeholder="Mobile number" v-model="form.phone" >                                         <label for="phone">Phone</label>                                               </div>
            			<!--div class="form-floating mb-3">
                        <textarea class="form-control" id="address" placeholder="Address" v-model="form.address"></textarea>
                        <label for="address">Address</label>                       
                              </div-->
		     <div class="form-floating mb-4">                                      <input type="text" class="form-control" id="gender" placeholder="gender" v-model="form.gender" readonly >                                           <label for="gender">Gender</label>                                                                 </div>
                        
                      <div class="form-floating mb-4">                                      <input type="date" class="form-control" id="dob" placeholder="Date of birth" v-model="form.dob" >                                           <label for="dob">Date of birth</label>                                                                 </div>
			<div class="form-floating mb-4">                                      <input type="email" class="form-control" id="city" placeholder="email" v-model="form.email" >                                           <label for="email">Email</label>                                                 
            </div>
	    <!--div class="form-floating mb-3">                                      <input type="text" class="form-control" id="country" placeholder="Country" v-model="form.country" >                                         <label for="country">Country</label>                                               </div>
            <div class=".form-floating mb-3 input-group">
                <span class="input-group-text">&#x20A6;</span>
                <input type="text" class="form-control" id="floatingInput" placeholder="How much would you be saving?" v-model="form.phone" >
                    <label for="floatingInput" >Saving Amount</label>                                               
                        
            </div>
            <div class="form-floating mb-3">
            <select class="form-select form-select-md" aria-label=".form-select-sm example" v-model="form.address" >
                        <option disabled default >Choose a saving term</option>
                                <option value="daily" >Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
            </select>
                <label for="floatingInput">Choose Saving Terms</label>
             </div-->
                        
                        <button type="submit" @click="updateInfo()" class="btn btn-primary py-3 mb-4">update user</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
</template>

<script>
import axios from "axios"
export default {
  name: 'EditUserInfoView',
  inject: ["globals", "alertify"],
  data() {
   return {
    form: { ...this.globals.state.detail },
   }
  },
  methods: { 
  async updateInfo() {
  	try {
            const res = await axios.put(`${this.globals.BASE}/v1/rest/api/auth/user/`, this.form, { header: {Authorization: `Bearer ${this.globals.state.data.access_token}`}})
	    alert(3);
            //console.log(res.data);		
	this.globals.getProfile()
        } catch(errors){
            alert(JSON.stringify(errors.response.data))
        }
    }
    },
 mounted() {
 	//this.form = this.globals.state.detail
 }
}
</script>


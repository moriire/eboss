<template>
{{ form }}
<!-- Sign up Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                    <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <router-link to="/" class="">
                                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Kolo</h3>
                            </router-link>
                            <h3>Create Contact</h3>
                        </div>
            			<!--div class=".form-floating mb-3 input-group">
                            <span class="input-group-text">&#x20A6;</span>
                            <input type="integer" class="form-control" id="floatingInput" placeholder="What's your target amount" v-model="form.contavt_of" >
                                  <label for="floatingInput">Target Amount</label>                                               
                        </div-->
            			<div class="form-floating mb-3">                                      <input type="text" class="form-control" id="phone" placeholder="Mobile number" v-model="form.phone" >                                         <label for="phone">Phone</label>                                               </div>
            			<div class="form-floating mb-3">
                        <textarea class="form-control" id="address" placeholder="Address" v-model="form.address"></textarea>
                        <label for="address">Address</label>                       
                              </div>
                        
                      
			<div class="form-floating mb-4">                                      <input type="city" class="form-control" id="city" placeholder="City" v-model="form.city" >                                           <label for="city">City/State</label>                                                 
            </div>
	    <div class="form-floating mb-3">                                      <input type="text" class="form-control" id="country" placeholder="Country" v-model="form.country" >                                         <label for="country">Phone</label>                                               </div>
            <!--div class=".form-floating mb-3 input-group">
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
                        
                        <button type="submit" @click.once="targetForm" class="btn btn-primary py-3 w-100 mb-4">Create Contact</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
</template>

<script>
import axios from "axios"
export default {
  name: 'CreateContactView',
  inject: ["globals", "alertify"],
  data() {
   return {
    form: {},
   }
  },
  methods: {
    async getContact() {
    try {
    	const res = await axios.get(`${this.globals.BASE}/v1/api/contact/${this.globals.auth.user.pk}/`)
	this.form = res.data
    } catch(errors) {
    	alert(errors)
    }
   },

    async targetForm() {
        try {
            const res = await axios.put(`${this.globals.BASE}/v1/api/contact/${this.globals.auth.user.pk}/`, this.form)
            //console.log(res.data);		
	    this.getContact()
        } catch(errors){
            alert(errors)
        }
    }
  },
  created() {
  	this.getContact()
	},
}
</script>


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
                            <h3>Create Target</h3>
                        </div>
            			<div class=".form-floating mb-3 input-group">
                            <span class="input-group-text">&#x20A6;</span>
                            <input type="integer" class="form-control" id="floatingInput" placeholder="What's your target amount" v-model="form.target_amount" >
                                  <!--label for="floatingInput">Target Amount</label-->                                               
                        </div>
            			<div class="form-floating mb-3">                                      <input type="text" class="form-control" id="floatingInput" placeholder="What are you saving for?" v-model="form.purpose" >                                         <label for="floatingInput">Purpose</label>                                               </div>
            			<div class="form-floating mb-3">
                        <textarea class="form-control" id="floatingInput" placeholder="Your objective for saving in less than 200 words" v-model="form.description"></textarea>
                        <label for="floatingInput">Description</label>                       
                              </div>
                        
                      
			<div class="form-floating mb-4">                                      <input type="date" class="form-control" id="floatingPassword" placeholder="Create deadline to achieve it" v-model="form.deadline" >                                           <label for="floatingPassword">Deadline</label>                                                 
            </div>
            <div class=".form-floating mb-3 input-group">
                <span class="input-group-text">&#x20A6;</span>
                <input type="integer" class="form-control" id="floatingInput" placeholder="How much would you be saving?" v-model="form.amount" >
                    <!--label for="floatingInput" >Saving Amount</label-->                                               
                        
            </div>
            <div class="form-floating mb-3">
            <select class="form-select form-select-md" aria-label=".form-select-sm example" v-model="form.subscription" >
                        <option disabled default >Choose a saving term</option>
                                <option value="daily" >Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
            </select>
                <label for="floatingInput">Choose Saving Terms</label>
             </div>
                        
                        <button type="submit" @click.once="targetForm" class="btn btn-primary py-3 w-100 mb-4">Create Target</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
</template>

<script>
import axios from "axios"
export default {
  name: 'CreateTargetView',
  inject: ["globals", "alertify"],
  data() {
   return {
    form: {customer: this.globals.state.data.user.pk,},
   }
  },
  methods: {
    async targetForm() {
        try {
            const res = await axios.post("http://localhost:8000/v1/api/target/", this.form)
            //console.log(res.data);		
	    this.alertify.confirm("Kolo Saving App", "Would you like to start your saving journey now. Click Yes to proceed and No to go back to home page",
	    () => this.$router.push("/target/start"),
	()=> this.$router.push("/")    
	).set("labels", {ok: "Yes proceed!", cancel: "No! Go back"});
	    //this.alertify.success("target successfully created")
            this.form= {customer: this.globals.state.data.user.pk,}
        } catch(errors){
            alert(errors)
        }
    }
  },
  created() {
	},
}
</script>


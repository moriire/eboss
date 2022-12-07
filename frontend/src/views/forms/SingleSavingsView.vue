<template>
<div class="container-fluid pt-4 px-4">
    <div class="row g-4  h-100 justify-content-center  mx-auto my-auto"  style=
"min-height: 100vh;">
                    <div class="col-sm-12 col-xl-6 mx-auto my-auto">
                        <div class="bg-secondary rounded h-100 p-4">
                            <h6 class="mb-4">Start Savings</h6>
                            
                                <div class="row mb-3">
                                    <label for="inputPassword3" class="col-sm-2 col-form-label">Amount</label>
                                    <div class="col-sm-10">
                                        <input type="number" min="50000" max="100000000" placeholder="How do you want to keep" class="form-control" id="inputPassword3">
                                    </div>
                                </div>
                                <fieldset class="row mb-3">
                                    <legend class="col-form-label col-sm-2 pt-0">Choose saving a plan</legend>
                                    <div class="col-sm-10">
                                        <div class="btn-group-vertical" role="group">
                                            <!--input class="btn-check" type="radio" name="gridRadios"
                                                :id="'gridRadios'+sub.id" v-model="plan"  :value="sub.code" autocomplete="off" v-for="sub in subscriptions" v-bind:key="sub.id" /-->
                                            <label class="btn btn-outline-primary mb-2 mt-2" :for="'gridRadios'+sub.id" 
			v-for="sub in subscriptions" v-bind:key="sub.id"		    >
<input class="btn-check" type="radio" name="gridRadios"
                                                :id="'gridRadios'+sub.id" v-model="plan"  :value="sub.code" autocomplete="off" v-for="sub in subscriptions" v-bind:key="sub.id" />
                                                {{ sub.name }}
                                            </label>
                                        </div>
                                                                            </div>
                                </fieldset>
        
                                <Payment amount="5000" :plan_code="plan" :email="globals.auth.user.email" :first_name="globals.auth.user.first_name" :last_name="globals.auth.user.last_name" />
                            
                        </div>
                    </div>
                                                                                            <!-- Form End -->


        </div>
       </div>

</template>

<script>
import Payment from "@/components/Payment.vue";
import axios from "axios";
const config = { headers: {
                  //"Authorization" : "Bearer sk_test_e4e73202952f186dde677ddf47d7df5a780da525",
                  "Content-Type": "application/json"
                  }
}
export default {
  name: 'SingleSavingsView', 
  inject: ["globals"],
  components: {Payment},
  data() {
   return {
    subscriptions: [],
    plan: "",
   }
  },
  
  created() {
    this.getSub()
  },
  methods: {
    async getSub() {
        try {
            const res = await axios.get("http://127.0.0.1:8000/v1/api/subscription/", config)
	    this.subscriptions = res.data
        } catch(errors) {
            alert(errors)
        }
    },
    
  },  
}
</script>


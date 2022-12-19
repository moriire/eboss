<template>
<div class="container-fluid pt-4 px-4">
    <div class="row g-4  h-100 justify-content-center  mx-auto"  style="min-height: 100vh;">
                    <div class="col-12">
                
                        <div class="bg-secondary rounded h-100 p-4">
                            <h6 class="mb-4">Running Savings</h6>
                            <div class="table-responsive">
                                <table class="table table-hover table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Channel</th>
                                            <th scope="col">Currency</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Mode</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="save in savings" v-bind:key="save.paid_at">
                                    
                                            <th scope="row">{{ save.paid_at }}</th>
                                            <td>{{ save.channel }}</td>
                                            <td>{{ save.currency }}</td>
                                            <td>{{ save.amount }}</td>
                                            <td><router-link class="btn btn-success" :to="{ path: `/target/savings/${save.id}` }" >View Transaction<i class="fa fa-glass"></i></router-link></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td></td>
                                            <td>Total:</td>
                                            <td>{{ total }}</td>
                                            <td><router-link class="btn btn-primary" to="/">Withdraw<i class="fa fa-glass"></i></router-link></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                 <button class="btn btn-primary rounded-pill btn-lg text-center" >Save Today</button>
               
                            </div>
                           
                        </div>

                    </div>
                 </div>
              </div>

</template>

<script>
import axios from "axios";
const config = { headers: {
                  "Authorization" : "Bearer sk_test_16759b9ed66917e74a4f662abb89ab6db13e5b67", "Content-Type": "application/json"

                  }
}
export default {
  name: 'LoginView', 
  inject: ["globals"],
  data() {
   return {
    savings: [],
   }
  },
  created() {
    this.getSavings()
  },
  methods: {
    async getSavings() {
        try {
            const res = await axios.get(`https://api.paystack.co/transaction?email=${this.globals.state.data.user.email}&status=success`, config)
            console.log(res.data.data);
            if (res.status===200 && res.data.status===true) {
                this.savings=res.data.data
            }
        } catch(errors) {
            alert(errors)
        }
    },
  },
  computed: {
    total(){
        return this.savings.map((items)=> items.amount).reduce((x, y)=> y+x)
    }
  }
  
}
</script>


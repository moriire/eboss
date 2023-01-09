<template>
<div class="container-fluid pt-4 px-4">
    <div class="row g-4  h-100 justify-content-center  mx-auto"  style="min-height: 100vh;">
                    <div class="col-12">
                
                        <div class="bg-secondary rounded h-100 p-4">
                            <h6 class="mb-4">Running Savings</h6>
                            <div class="table-responsive">
                                <table class="table table-hover table-dark">
                                    <tbody>
                                        <tr  v-for="(i,j) in saver">
                                            <th scope="row">{{ i }}</th>
                                            <td>{{ j }}</td>
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
                  "Authorization" : "Bearer sk_test_e4e73202952f186dde677ddf47d7df5a780da525",
                  "Content-Type": "application/json"

                  }
}
export default {
  name: 'LoginView', 
  inject: ["globals"],
  data() {
   return {
    save: [],
   }
  },
  created() {
    this.getSavings()
  },
  methods: {
    async getSavings() {
        try {
            const res = await axios.get(`https://api.paystack.co/transaction/${this.$route.params.id}`, config)
            console.log(res.data.data);
            if (res.status===200 && res.data.status===true) {
                this.save=res.data.data
            }
        } catch(errors) {
            alert(errors)
        }
    },
    saveFilter(t){
        if (t in this.save){
            return (t, this.save[t])
        }
    }
  },
  computed: {
    saver(t){
        return this.save.filter(this.saveFilter)
    }
  }
  
}
</script>


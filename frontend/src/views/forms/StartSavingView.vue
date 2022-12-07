<template>
<!-- Sign up Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                    <h1>Congratulations {{ globals.state.data.user.last_name }}</h1>
                    <h5>You are on the right track!</h5>
                    <p>You are about working to make your dreamss come through. by cliccking on start saving, it means you have read and agreed to  our <a href="#">terms and condition</a></p>
                    <Payment email="ibmabdulsalam@gmail.com" amount="100000" first_name="" last_name="" />

                </div>
            </div>
        </div>
        <!-- Sign In End -->
</template>

<script>
import Payment from '@/components/Payment.vue'
import axios from "axios"
export default {
  name: 'CreateTargetView',
  components: {Payment,},
  inject: ["globals"],
  data() {
   return {
    form: {customer: this.globals.state.data.user.pk,},
   }
  },
  methods: {
    async targetForm() {
        try {
            const res = await axios.post("http://localhost:8000/v1/api/target/", this.form)
            console.log(res.data);
            this.form= {customer: this.globals.state.data.user.pk,}
        } catch(errors){
            alert(errors)
        }
    }
  },
}
</script>


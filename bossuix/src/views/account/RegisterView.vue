<template>
<!-- Sign up Start -->{{ form }}
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                    <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <router-link to="/" class="">
                                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>B.O.S.S.</h3>
                            </router-link>
                            <h3>Sign up</h3>
                        </div>
			<div class="form-floating mb-3">                                      <input type="text" class="form-control" id="floatingInput" placeholder="Your Business Name" v-model="form.business_name" >                                         <label for="floatingInput">Your CAC Business Name</label>                                               </div>
			
			<div class="form-floating mb-3">                                      <input type="tel" class="form-control" id="floatingInput" placeholder="+2348100482341" v-model="form.phone" >                                         <label for="floatingInput">Phone</label>                                               </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="form.email" >
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="form.password1" >
                            <label for="floatingPassword">Password</label>
                        </div>
			<div class="form-floating mb-4">                                      <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password" v-model="form.password2" >                                           <label for="floatingPassword">Confirm Password</label>                                                 </div>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <a href="">Forgot Password</a>
                        </div>
                        <button type="submit" class="btn btn-primary py-3 w-100 mb-4" @click="registerForm()" >Sign Up</button>

                        <p class="text-center mb-0">Don't have an Account? <router-link to="/account/login">Sign In</router-link></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
</template>

<script>
export default {
  name: 'RegisterView',
  inject: ["globals"],
  data() {
   return {
    form: {},
   }
  },
  methods: {                         async registerForm() {
      await this.globals.register(this.form)
    },
},
}
</script>


<template>
<!-- Sign up Start -->
        <div class="container-fluid bg-success">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                    <div class="card rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="card-body d-flex align-items-center justify-content-between mb-3">
                            <router-link to="/" class="">
                                <h3 class="text-success"><i class="fa fa-user-edit me-2"></i>eKs</h3>
                            </router-link>
                            <h3 class="text-success">Sign up</h3>
                        </div>
			<form @submit.prevent="registerForm">
			<div class="form-floating mb-3">                                      <input type="text" class="form-control text-white bg-success" id="floatingInput" placeholder="first name" v-model="form.first_name" required >                                         <label for="floatingInput" class="text-white">First Name</label>                                               </div>
			<div class="form-floating mb-3">                                      <input type="text" class="form-control bg-success text-white" id="floatingInput" placeholder="last name" v-model="form.last_name" required >                                         <label for="floatingInput" class="text-white">Last Name</label>                                               </div>

                        <div class="form-floating mb-3 rounded h-100 p-4">
                            <h6 class="mb-4">Gender</h6>
                            <div class="btn-group" role="group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="on"
                                    checked value="M" v-model="form.gender" >
                                <label class="btn btn-outline-success" for="btnradio1">Male</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="F"  v-model="form.gender" >
                                <label class="btn btn-outline-success" for="btnradio2">Female</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" value="Tx" v-model="form.gender" >
                                <label class="btn btn-outline-success" for="btnradio3">Trans</label>
                            </div>
			    </div>
			<div class="form-floating mb-3">                                      <input type="text" class="form-control text-white bg-success" id="floatingInput" placeholder="+2348100482341" v-model="form.username" required >                                         <label for="floatingInput" class="text-white">Username</label>                                          </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control bg-success text-white" id="floatingInput" placeholder="name@example.com" v-model="form.email" required >
                            <label for="floatingInput" class="text-white">Email address</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control text-white bg-success" id="floatingPassword" placeholder="Password" v-model="form.password1" required >
                            <label for="floatingPassword" class="text-white">Password</label>
                        </div>
			<div class="form-floating mb-4">                                      <input type="password" class="form-control text-white bg-success" id="floatingPassword" placeholder="Confirm Password" v-model="form.password2" required >                                           <label for="floatingPassword" class="text-white">Confirm Password</label>                                                 </div>
                        <!--div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <a href="">Forgot Password</a>
                        </div-->
                <button type="submit" class="btn btn-success py-3 w-100 mb-4" >Sign Up</button>
</form>
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


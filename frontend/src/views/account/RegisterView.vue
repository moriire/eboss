<template>
     <form @submit.prevent = "registerForm" >
              <!-- business name input -->
                <div class="form-outline mb-4">
                 <input type="text" id="business_name" class="form-control active" autocompleted="" v-model="form.business_name"  required />
                  <label class="form-label" for="business_name" style="margin-left: 0px;">Business Name</label>
                   <div class="form-notch">
                   <div class="form-notch-leading" style="width: 9px;"></div>
                   <div class="form-notch-middle" style="width: 88.8px;"></div>
                   <div class="form-notch-trailing"></div>
                  </div>
                </div>
                <div class="form-outline mb-4">
                 <input type="text" id="phone" class="form-control active" autocompleted="" v-model="form.phone"  required />
                  <label class="form-label" for="phone" style="margin-left: 0px;">Official Phone</label>
                   <div class="form-notch">
                   <div class="form-notch-leading" style="width: 9px;"></div>
                   <div class="form-notch-middle" style="width: 88.8px;"></div>
                   <div class="form-notch-trailing"></div>
                  </div>
                </div>
               <!-- Email input -->
                <div class="form-outline mb-4">
                 <input type="email" id="email" class="form-control active" autocompleted="" v-model="form.email"  required />
                  <label class="form-label" for="email" style="margin-left: 0px;">Email address</label>
                   <div class="form-notch">
                   <div class="form-notch-leading" style="width: 9px;"></div>
                   <div class="form-notch-middle" style="width: 88.8px;"></div>
                   <div class="form-notch-trailing"></div>
                  </div>
                </div>
                 <!-- Password input -->
                  <div class="form-outline mb-4">
                   <input type="password" id="password1" class="form-control active" autocompleted="" v-model="form.password1"  required />
                    <label class="form-label" for="password1" style="margin-left: 0px;">Password</label>
                     <div class="form-notch">
                      <div class="form-notch-leading" style="width: 9px;"></div>
                      <div class="form-notch-middle" style="width: 64.8px;"></div>
                      <div class="form-notch-trailing"></div>
                    </div>
                  </div>
		  <!-- Password confirmation input -->               <div class="form-outline mb-4">
		  <input type="password" id="password2" class="form-control active" autocompleted="" v-model="form.password2"  required />
<label class="form-label" for="password2" style="margin-left: 0px;">Comfirm Password</label> 
<div class="form-notch"> 
<div class="form-notch-leading" style="width: 9px;"></div>
<div class="form-notch-middle" style="width: 64.8px;"></div>
<div class="form-notch-trailing"></div>
</div> 
</div>
             <!-- Submit button -->
             <button type="submit" class="btn btn-primary btn-block mb-3">Sign up</button>
	     <!-- Register buttons -->
               <div class="text-center">
                <p>Already signed up? <router-link to="/account/login">Login</router-link></p>
               </div>
             </form>

</template>

<script>
export default {
  name: 'RegisterView',
  inject: ["global"],
  data() {
    return {
    	form: {}
    }
  },
  methods: {
    async registerForm() {
      await this.global.register(this.form);
    },
},
}
</script>

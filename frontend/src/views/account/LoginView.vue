<template>
  <form @submit.prevent = "loginForm">
    <p v-if="global.$errors">
          {{ global.$errors.message}}
    </p>
    
    <div class="row"> 
        
        <div class="form-outline mb-4">
        <input id="email" type="text" class="form-control active" autocompleted="" v-model="form.email"/>
          <label class="form-label" for="email" style="margin-left: 0px;">
            Email:
           </label>
           <div class="form-notch">
                    <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 68.8px;"></div>
                  <div class="form-notch-trailing"></div>
              </div>
        </div>
 
  <div class="form-outline mb-4">
    <input id="password" type="password" class="form-control active" autocompleted="" v-model="form.password" />
    <label class="form-label" for="password" style="margin-left: 0px;"> Password: </label>
    <div class="form-notch">
                    <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 68.8px;"></div>
                  <div class="form-notch-trailing"></div>
              </div>
      </div>
  <input id="submit" type="submit" class="btn btn-primary btn-block mb-2" />
  <div class="text-center">
                <p>Not signed up yet? <router-link to="/account/register">Sign up</router-link></p>
               </div>
          
        </div>
      
  </form>
  
  
</template>

<script>
/* eslint-disable */
export default {
  name: 'LoginView',
  inject: ["global"],
  data() {
    return {
    form: {
      email: "",
      password: "",
    }
    }
  },
  methods: { 
    async loginForm() {
      const { email, password} = this.form;
      await this.global.login(email, password)
    }
  },
}
</script>

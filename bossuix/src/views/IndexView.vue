<template>

<div class="row vh-100 rounded align-items-center justify-content-center mx-0">
<div class="col-lg-8 text-center my-auto mx-auto" v-if="globals.state.loggedIn!==null" >        <h1 class="display-1">B.O.S.S.</h1>
<hr/>
  <h3 class="display-5">{{ globals.state.data.user.business_name }} </h3>
  <p>Give your dream a leap by setting a deadline, through discipline and understanding the essence of achieving it! </p>

        <div class="btn-group" role="group">
          <router-link to="/account/register" type="button" class="btn btn-primary rounded-pill m-2 p-2">Dashboard</router-link> 
        </div>
    </div>
    <div class="col-lg-8 text-center my-auto mx-auto" v-else >
        <h1 class="display-1">B.O.S.S.</h1>
        <hr/>
        <h3 class="display-5">CMS for businesses.</h3>
        <p>
        We'll make you the boss
        </p>
      <div class="btn-group" role="group">
    <router-link to="/account/register" type="button" class="btn btn-primary rounded-pill m-2 p-2">Get Started</router-link>
        <!--router-link to="/account/login" class="btn btn-light btn-lg rounded-pill m-2 p-2">Login</router-link-->
        </div>
    </div>
    </div>
  </template>
<script>
// @ is an alias to /src
//import Payment from '@/components/Payment.vue'


export default {
  inject: ["globals"],
  name: 'IndexView',
  
}
</script>
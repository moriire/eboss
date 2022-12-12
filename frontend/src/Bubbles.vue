<template>
      <section class="" style="" >
         <!-- Navbar -->
          <nav class="background-radial-gradient navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar double-nav">
           <!-- Container wrapper -->
            <div class="container-fluid">
             <div class="d-flex">
               <!-- Toggle button -->
               <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <i class="fas fa-bars"></i>
               </button>
                <!-- Navbar brand -->
                <a class="navbar-brand ms-3">
                 <i class="fas fa-gem text-primary"></i>
                </a>
            </div>
            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <!-- Left links -->
              <ul class="navbar-nav me-auto mb-2 ms-2 ps-1 ms-lg-0 ps-lg-0 mb-lg-0">
                <li class="nav-item">
                  <router-link exact class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                   <router-link exact class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                   <router-link exact class="nav-link" to="/contact" >Contact</router-link>
                </li>
                
                <li class="nav-item"  v-if="global.state.loggedIn">
                  <router-link exact class="nav-link" to="/client/add">Add Client</router-link>
                </li>
                <li class="nav-item bordered"  v-if="global.state.loggedIn">
                   <router-link exact class="nav-link bordered" to="/client/attendance">Mark</router-link>
                </li>
                <li class="nav-item"  v-if="global.state.loggedIn">
                   <router-link exact class="nav-link" to="/profile/user" >Dashboard</router-link>
                </li>
              </ul>
              
              <!-- Left links -->
              </div>
              <!-- Collapsible wrapper -->
              <!-- Right elements -->

    <div class="d-flex align-items-center nav-item dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false"
  > {{ global.state.loggedIn? global.auth.user.business_name : "Login" }}
        </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" v-if="global.state.loggedIn">
    <button class="dropdown-item btn-link" @click="global.logout()">Logout</button>
    <a class="dropdown-item" href="#">Change Password</a>
    <a class="dropdown-item" href="#">Profile</a>
  </div>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" v-else >
    <router-link class="dropdown-item" to="/account/login">Login</router-link>
    <router-link class="dropdown-item" to="/account/register">Register</router-link>
    <a class="dropdown-item" href="#">Reset Password</a>
  </div>
</div>
      <!-- Right elements -->
  </div>
        <!-- Container wrapper -->
     </nav>
     <!-- Navbar -->
 </section>
   <router-view />
   <!-- Footer -->
<footer class="page-footer font-small bg-info text-white background-radial-gradient ">

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/" class="text-white">AiS</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
   </template>
<script>
///* eslint-disable */
  
  import alertify from "alertifyjs";
  import  "alertifyjs/build/css/alertify.min.css"
  import global from "@/stores/globals";
  import pages from "@/stores/pages";
  import graph from "@/stores/graph";
  export default {
  data() {
    return {global: global, pages: pages, graph: graph}
  },
  provide() {
    return { global: this.global, pages: this.pages, graph: this.graph }
  },
  /*
  created() {
    if (this.global.state.loggedIn) {
      //this.graph.getAllGender();
      this.pages.getClients();
    }
    //this.$router.push("/")

  },*/
  }
</script>

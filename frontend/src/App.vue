<script>
//import "alertifyjs/build/css/alertify.min.css";
import globals from "@/stores/globals"
import alertify from "alertifyjs";
export default {
  name: "App",
  data() {
     return {
     alertify: alertify,
     }
  },
  methods: {
    
  },
  provide() {
   return { 
   alertify: this.alertify,
   globals: globals,
   }
   },
   created(){
   	this.globals.getProfile()
   }
}
</script>
<style src="../public/fonts/fontawesome/css/font-awesome.min.css"></style>
<style src="../public/fonts/ionicons/css/ionicons.min.css"></style>
<style src="../public/css/fancybox.min.css"></style>
<style src="../public/css/jquery.timepicker.css"></style>
<style src="../public/css/bootstrap-datepicker.css"></style>
<style src="../public/css/aos.css"></style>
<style src="../public/css/animate.css"></style>
<style src="../public/css/bootstrap.min.css"></style>
<style src="../public/css/style.css"></style>
<template>
  
  <router-view />
   
      <footer class="section. footer-section">
        <div class="container text-center p-3">
          <div class="row align-items-center justify-content-center text-center">
            <p class="col-md-6 text-center">
              <a href="https://acsolotltd.tk" target="_blank" >Acsolot Integrated Services</a> &copy; 2022
            </p>
          </div>
          <div class="row align-items-center justify-content-center center">
            <p class="col-md-6 text-center social">
              <a href="https://www.facebook.com/AgesXpat"><span class="fa fa-facebook"></span></a>
              <a href="https://www.linkedin.com/in/ibmabdulsalam/"><span class="fa fa-linkedin"></span></a>
              <a href="tel:+2348100482341"><span class="fa fa-phone"></span></a>
            </p>
          </div>
        </div>
      </footer>
 
      
</template>
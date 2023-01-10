<script>
import globals from "./stores/globals"
export default {
  name: "App",
  data() {
     return {globals: globals,}
  },
  provide() {
   return { 
    globals: this.globals
   }
   },
   created(){
    
   }
}
</script>
<template>

        <!-- main body - start
        ================================================== -->
        <main>


            <router-view />  


        </main>
        <!-- main body - end
        ================================================== -->
</template>
<style src="../public/assets/css/magnific-popup.css"></style>
<style src="../public/assets/css/slick-theme.css"></style>
<style src="../public/assets/css/slick.css"></style>
<style src="../public/assets/css/nice-select.css"></style>
<style src="../public/assets/css/animate.css"></style>
<style src="../public/assets/css/fontawesome.css"></style>
<style src="../public/assets/css/bootstrap.min.css" ></style>
<style src="../public/assets/css/style.css"></style>
<script>
import globals from "./stores/globals";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";
export default {
  name: "App",
  data() {
     return {
     globals: globals,
     alertify: alertify
     }
  },
  provide() {
   return { 
   globals: this.globals,
   alertify: this.alertify
   }
   }, 
}
</script>
<template>
    <router-view />       
</template>

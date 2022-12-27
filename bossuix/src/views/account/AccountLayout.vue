<template>
  <router-view />
</template>
<style src="../../../public/bubbles/css/style.css"></style>
<style src="../../../public/bubbles/lib/fontawesome/css/all.min.css"></style>
<style src="../../../public/bubbles/lib/bootstrap-icons/bootstrap-icons.css"></style>
<style src="../../../public/bubbles/css/bootstrap.min.css" ></style>
<style src="../../../public/bubbles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" ></style>
<style src="../../../public/bubbles/lib/owlcarousel/assets/owl.carousel.min.css" ></style>

<script>
export default {
  name: 'AccountLayout',
  inject: ["globals"],
  created() {
  this.$watch(
  ()=> this.globals.state,
  () => {
  	if(this.globals.state.loggedIn) { 
	 this.router.push("/")
	}
  }

  )
  }
  }
</script>

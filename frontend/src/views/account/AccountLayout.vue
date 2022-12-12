<template>
	<section class="background-radial-gradient overflow-hidden">
            <div class="container px-4 py-5 px-md-5 text-center text-lg-center">
             <div class="row d-flex d-column gx-lg-5 align-items-center" style="margin: 10% auto 10% auto;">
              <div class="col-lg-6 mb-5 mb-lg-0 mx-auto my-auto position-relative" >
               <!--div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div-->
                 <div class="card bg-glass">
                    <div class="card-header bg-gradient" style="background: #C5CAE9;">
                      <h2 class=""> {{ $route.path.split("/")[2] }}</h2>
                    </div>
                   <div class="card-body px-4 py-5 px-md-5">
                    <router-view/>
  		             </div> 
		             </div>
	             </div> 
            </div> 
       </div> 
</section>
                
</template>

<script >
/* eslint-disable */
export default {
  inject: ["global"],
  name: 'AccountLayout',
}

</script>
<style scoped >

 .background-radial-gradient { background-color: hsl(218, 41%, 15%); background-image: radial-gradient( 650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100% ), radial-gradient( 1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100% ); }
  #radius-shape-1 { height: 220px; width: 220px; top: -60px; left: -130px; background: radial-gradient(#44006b, #ad1fff); overflow: hidden; }
  #radius-shape-2 { border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%; bottom: -60px; right: -110px; width: 300px; height: 300px; background: radial-gradient(#44006b, #ad1fff); overflow: hidden; }
   .bg-glass { background-color: hsla(0, 0%, 100%, 0.9) !important; backdrop-filter: saturate(200%) blur(25px); }

</style>


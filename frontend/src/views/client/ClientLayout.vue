<template>
  <section class="background-radial-gradient overflow-hidden">
    <div class="container px-4 py-5 px-md-5 text-lg-start">
     <div class="row gx-lg-5 align-items-center mb-5" style="margin: 10% auto 10% auto;">
      <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10; min-height:70vh">
           <!--Section: Sales Performance KPIs-->
            <section class="mb-4">
              <div class="card">
                <div class="card-header text-center py-3">
                  <h5 class="mb-0 text-center">
                    <strong>Registered Clents' List</strong>
                  </h5>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover text-nowrap">
                      <thead class="sticky-top" >
                        <tr>
                          <th scope="col">Full Name</th>
                          <th scope="col">Grade</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody v-if="pages.clients">
                        <tr v-for="client in pages.clients.data" v-bind:key="client.id">
                          <th scope="row">{{ client.full_name }}</th>
                          <td>{{ client.grade }}</td>
                          <td ><router-link exact class="text-primary" :to="'/client/user/'+client.id">View</router-link></td>
                           <td><router-link class="text-success" :to="'/client/edit/'+client.id">Edit</router-link></td>
                           <td ><router-link exact class="text-danger" :to="'/client/edit/'+client.id">Delete</router-link></td>
                        
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
            <!--Section: Sales Performance KPIs-->
      </div>
      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div> <div class="card bg-glass">
                 <div class="card-body px-4 py-5 px-md-5">
                    <router-view/>
                  </div>
              </div>
          </div>
      </div>
    </div>
</section>
                
</template>

<script>

export default {
  inject: ["global", "pages", "graph"],
  name: 'ClientLayout',
  created() {
  
    if (this.global.state.loggedIn) {
      this.pages.getClients();
    }
    else {
         this.$router.push("/")
    }
  },
}
</script>
<style scoped >
 .background-radial-gradient {background-color: hsl(218, 41%, 15%); background-image: radial-gradient( 650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100% ), radial-gradient( 1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100% ); }
  #radius-shape-1 { height: 220px; width: 220px; top: -60px; left: -130px; background: radial-gradient(#44006b, #ad1fff); overflow: hidden; }
  #radius-shape-2 { border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%; bottom: -60px; right: -110px; width: 300px; height: 300px; background: radial-gradient(#44006b, #ad1fff); overflow: hidden; }
   .bg-glass { background-color: hsla(0, 0%, 100%, 0.9) !important; backdrop-filter: saturate(200%) blur(25px); }
</style>


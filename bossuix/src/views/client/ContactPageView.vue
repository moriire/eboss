<template>
       <!-- Sign In Start -->
        <div class="container-fluid">
            <div class="row align-items-center justify-content-center" style="min-height: 50vh;">
                <div class="col-sm-10 col-xl-6s">
                    <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" class="">
                                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Back</h3>
                            </a>
                            <h3>Contact Section</h3>
                        </div>
                        <form @submit.prevent = "addContact">
                        <div class="mb-3">
                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="form.nature" required >
                                    <option selected disabled >Open this select menu</option>
                                    <option :value="nat" v-for="nat in ['phone', 'social']" v-bind:key="nat">{{ nat }}</option>
                                </select>
                                
                        </div>
                        <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Contact Name" aria-label="Name"
                                    aria-describedby="basic-addon1" v-model="form.name" required >
                        </div>
                        <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder=" Phone" aria-label="Name"
                                    aria-describedby="basic-addon1" v-model="form.phone">
                        </div>
                        <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">https://www.</span>
                                <input type="url" class="form-control" placeholder="URL" aria-label="Link"
                                    aria-describedby="basic-addon1" v-model="form.link">
                        </div>
                        <button type="submit" class="btn btn-primary py-3 w-50 mb-4 text-capitalize">Add {{ $route.path.split('/')[3] }}</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
      
  


  <div class="container-fluid">
            <div class="row align-items-center justify-content-center" style="min-height: 50vh;">
                <div class="col-sm-10 col-xl-6s">
                    <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <table class="table table-strip table-hover">
                            <thead>
                             <tr>
                                <th>Contacts</th>
                                <th>Type</th>
                                <th>Phone</th>
                                <th>Link</th>
                             </tr>
                            </thead>
                            <tbody>
                                <tr v-for="contact in contacts">
                                    <td>{{ contact.nature }}</td>
                                    <td>{{ contact.name }}</td>
                                    <td>{{ contact.phone }}</td>
                                    <td>{{ contact.link }}</td>
                            
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
   </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'ContactPageView',
  inject: ["globals"], 
  data() {
    return {
        form: {
        user: this.globals.state.data.user.pk,
       },
       contacts: []
    }
  },
  created(){
    this.getContact()
  },
  methods: {
  async addContact(){
      try{
            const res = await axios.post(`${this.globals.BASE}/v1/api/contact/`, this.form)
            console.log(res.response)
            alert(res.response)
          } catch(e){
          console.log(e);
            alert("page cannot be disabled")
          }
        },
  async getContact(){
      try{
            const res = await axios.get(`${this.globals.BASE}/v1/api/contact/?user=${this.globals.state.data.user.pk}`)
            this.contacts = res.data
          } catch(e){
          console.log(e);
            alert("page cannot be disabled")
          }
        }

  },
  }
</script>


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
                            <h3>Review Section</h3>
                        </div>
                        <form @submit.prevent = "addReview">
  
                        <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Your Full Name" aria-label="Full Name"
                                    aria-describedby="basic-addon1" v-model="form.full_name">
                        </div>
                        <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Email" aria-label="Full Name"
                                    aria-describedby="basic-addon1" v-model="form.email">
                        </div>
                        
                        <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">STAR</span>
                                <input type="integer" class="form-control" placeholder="Rate" aria-label="How many star -5 to 5"
                                    aria-describedby="basic-addon1" v-model="form.rate">
                            </div>
                        <div class="input-group mb-3">
                                <textarea class="form-control" placeholder="Comment on Review" aria-label="Testimony/Review"
                                    aria-describedby="basic-addon1" v-model="form.comment">
                                </textarea>
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
                                <th>Reviewer</th>
                                <th>Stars</th>
                                <th>thumb</th>
                               
                             </tr>
                            </thead>
                            <tbody>
                                <tr v-for="review in reviews">
                                    <td>{{ review.full_name }}</td>
                                    <td>{{ review.rate }}</td>
                                    <td>{{ review.img }}</td>
                            
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
  name: 'ReviewPageView',
  inject: ["globals"], 
  data() {
    return {
        form: {
        user: this.globals.state.data.user.pk,
       },
       reviews: []
    }
  },
  created(){
    this.getReview()
  },
  methods: {
  async addReview(){
      try{
            const res = await axios.post(`${this.globals.BASE}/v1/api/Review/`, this.form)
            console.log(res.response)
            alert(res.response)
          } catch(e){
          console.log(e);
            alert("page cannot be disabled")
          }
        },
  async getReview(){
      try{
            const res = await axios.get(`${this.globals.BASE}/v1/api/review/?user=${this.globals.state.data.user.pk}`)
            this.reviews = res.data
          } catch(e){
          console.log(e);
            alert("page cannot be disabled")
          }
        }

  },
  }
</script>

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
                            <h3>Room Section</h3>
                        </div>
                        <form @submit.prevent = "addRoom">
  
                        <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Room Name" aria-label="Name"
                                    aria-describedby="basic-addon1" v-model="form.title">
                        </div>
                        <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">NGN</span>
                                <input type="integer" class="form-control" placeholder="Price" aria-label="Price"
                                    aria-describedby="basic-addon1" v-model="form.price">
                            </div>
                        <div class="input-group mb-3">
                                <textarea class="form-control" placeholder="Note" aria-label="note"
                                    aria-describedby="basic-addon1" v-model="form.note">
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
                                <th>Rooms</th>
                                <th>Price</th>
                                <th>thumb</th>
                               
                             </tr>
                            </thead>
                            <tbody>
                                <tr v-for="room in rooms">
                                    <td>{{ room.title }}</td>
                                    <td>{{ room.price }}</td>
                                    <td>{{ room.img }}</td>
                            
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
  name: 'RoomPageView',
  inject: ["globals"], 
  data() {
    return {
        form: {
        user: this.globals.state.data.user.pk,
        duration: "daily",
       },
       rooms: []
    }
  },
  created(){
    this.getRoom()
  },
  methods: {
  async addRoom(){
      try{
            const res = await axios.post(`${this.globals.BASE}/v1/api/room/`, this.form)
            console.log(res.response)
            alert(res.response)
          } catch(e){
          console.log(e);
            alert("page cannot be disabled")
          }
        },
  async getRoom(){
      try{
            const res = await axios.get(`${this.globals.BASE}/v1/api/room/?user=${this.globals.state.data.user.pk}`)
            this.rooms = res.data
          } catch(e){
          console.log(e);
            alert("page cannot be disabled")
          }
        }

  },
  }
</script>


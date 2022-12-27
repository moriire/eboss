<template>
<nav class="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="templateux-navbar">
      <div class="container">
        <a class="navbar-brand" href="index.html"><span class="text-danger">Red</span>{{ form.user.business_name_alias || form.user.business_name }}</a>
        <div class="site-menu-toggle js-site-menu-toggle  ml-auto"  data-aos="fade" data-toggle="collapse" data-target="#templateux-navbar-nav" aria-controls="templateux-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <!-- END menu-toggle -->

        <div class="collapse navbar-collapse" id="templateux-navbar-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#section-home">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-team">Team</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-rooms">Rooms</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-menus">Menus</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-events">Events</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-contact">Contact</a></li>
            <li class="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0"><a class="nav-link" href="#" target="_blank"><span class="pb_rounded-4 px-4 rounded">Booking & reservation</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- END nav -->

      <section class="site-hero overlay" :style="`background-image: url(${form.hero_image})`" data-stellar-background-ratio="0.5" id="section-home">
        <div class="container">
          <div class="row site-hero-inner justify-content-center align-items-center">
            <div class="col-md-10 text-center" data-aos="fade-up">
              <h1 class="heading">{{ pageHeaders('home').title_alias || pageHeaders('home').title }}</h1>
            </div>
          </div>
        </div>
      </section>
      <!-- END section -->

      <section class="py-5 bg-light" id="section-about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
              <img :src="form.about.thumb" alt="Image" class="img-fluid rounded">
            </div>
            <div class="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
              <h2 class="heading mb-4">{{ pageHeaders('about').title_alias || pageHeaders('about').title  }}!</h2>
              <p class="mb-5">{{ form.about.body }}</p>
              <p><a href="https://vimeo.com/channels/staffpicks/93951774"  data-fancybox class="btn btn-primary text-white py-2 mr-3 text-uppercase letter-spacing-1">Watch the video</a></p>
            </div>
            
          </div>
        </div>
      </section>

      <section class="section" id="section-rooms" >
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading text-capitalize" data-aos="fade-up">{{ pageHeaders('room').title_alias || pageHeaders('room').title }}</h2>
              <p data-aos="fade-up" data-aos-delay="100">{{ pageHeaders('room').subtitle }}</p>
            </div>
          </div>
          <div class="row justify-content-center text-center mb-5" v-if="form.room.length===0" >
            <div class="col-md-7">
            Room not uploaded yet
            </div>
          </div>
          <div class="row" v-else >
            <div class="col-md-6 col-lg-4" data-aos="fade-up" v-for = "room in form.room" v-bind:key="room.id">
              <a href="#" class="room">
                <figure class="img-wrap">
                  <img :src="room.img" :alt="room.title" class="img-fluid mb-3">
                </figure>
                <div class="p-3 text-center room-info text-capitalize">
                  <h2>{{ room.title }}</h2>
                  <span class="text-uppercase letter-spacing-1">&#8358; {{ room.price }} / per night</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      <section class="section contact-section" id="section-contact">
      <div class="container">
        <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading" data-aos="fade-up">{{ pageHeaders('contact').title_alias || pageHeaders('contact').title }}</h2>
              <p data-aos="fade-up">{{ pageHeaders('contact').subtitle }}</p>
            </div>
          </div>
        <div class="row">
          <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">

            <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="600" id="gmap_canvas" :src="`https://maps.google.com/maps?q=${form.user.gmap}&t=k&z=15&ie=UTF8&iwloc=&output=embed`" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div></div> 

          </div>
          <div class="col-md-5" data-aos="fade-up" data-aos-delay="200">
            <div class="row">
              <div class="col-md-10 ml-auto contact-info">
                <p><span class="d-block">Address:</span> <span class="text-black text-capitalize"> {{ form.user.address }} </span></p>
                <p><span class="d-block">Phone:</span> <span class="text-black" v-for ="(phone, index) in form.contact.filter(x=>x.name==='phone')" v-bind:key="index"> (+234) <a :href="`tel:${phone.link}`" > {{ phone.link }} </a>, </span></p>
                <p>
                <span class="d-block">Email:</span> <span class="text-black" v-for ="(email, index) in form.contact.filter(x=>x.name==='gmail')" v-bind:key="index">{{ email.link }}</span></p>
                <p><span class="d-block">Social:</span>
                   <span v-for ="(soc, index) in form.contact.filter(x=> x.name !== 'phone')" v-bind:key="index" class="text-black display-3">
                      <a :href="soc.link"> <i :class="`fa fa-${soc.name}`"></i></a></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section class="section bg-image overlay" style="background-image: url(null);">
        <div class="container" >
          <div class="row align-items-center">
            <div class="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
              <h2 class="text-white font-weight-bold">A Best Place To Stay. Reserve Now!</h2>
            </div>
            <div class="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="200">
              <!-- Extra large modal -->
              <a href="#" class="btn btn-outline-white-primary py-3 text-white px-5" data-toggle="modal" data-target="#reservation-form">Reserve Now</a>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Modal -->
      <div class="modal fade " id="reservation-form" tabindex="-1" role="dialog" aria-labelledby="reservationFormTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12" data-aos="fade-up" data-aos-delay="100">
                  
                  <form action="index.html"  method="post" class="bg-white p-4">
                    <div class="row mb-4"><div class="col-12"><h2>Reservation</h2></div></div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="name">Name</label>
                        <input type="text" id="name" class="form-control ">
                      </div>
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="phone">Phone</label>
                        <input type="text" id="phone" class="form-control ">
                      </div>
                    </div>
                
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="email">Email</label>
                        <input type="email" id="email" class="form-control ">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="checkin_date">Date Check In</label>
                        <input type="text" id="checkin_date" class="form-control">
                      </div>
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="checkout_date">Date Check Out</label>
                        <input type="text" id="checkout_date" class="form-control">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label for="adults" class="font-weight-bold text-black">Adults</label>
                        <div class="field-icon-wrap">
                          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                          <select name="" id="adults" class="form-control">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4+</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6 form-group">
                        <label for="children" class="font-weight-bold text-black">Children</label>
                        <div class="field-icon-wrap">
                          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                          <select name="" id="children" class="form-control">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="message">Notes</label>
                        <textarea name="message" id="message" class="form-control " cols="30" rows="8"></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input type="submit" value="Reserve Now" class="btn btn-primary text-white py-3 px-5 font-weight-bold">
                      </div>
                    </div>
                  </form>

                </div>
                
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade " id="reservation-form" tabindex="-1" role="dialog" aria-labelledby="reservationFormTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12" data-aos="fade-up" data-aos-delay="100">
                  
                  <form action="index.html"  method="post" class="bg-white p-4">
                    <div class="row mb-4"><div class="col-12"><h2>Reservation</h2></div></div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="name">Name</label>
                        <input type="text" id="name" class="form-control ">
                      </div>
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="phone">Phone</label>
                        <input type="text" id="phone" class="form-control ">
                      </div>
                    </div>
                
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="email">Email</label>
                        <input type="email" id="email" class="form-control ">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="checkin_date">Date Check In</label>
                        <input type="text" id="checkin_date" class="form-control">
                      </div>
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="checkout_date">Date Check Out</label>
                        <input type="text" id="checkout_date" class="form-control">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label for="adults" class="font-weight-bold text-black">Adults</label>
                        <div class="field-icon-wrap">
                          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                          <select name="" id="adults" class="form-control">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4+</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6 form-group">
                        <label for="children" class="font-weight-bold text-black">Children</label>
                        <div class="field-icon-wrap">
                          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                          <select name="" id="children" class="form-control">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="message">Notes</label>
                        <textarea name="message" id="message" class="form-control " cols="30" rows="8"></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input type="submit" value="Reserve Now" class="btn btn-primary text-white py-3 px-5 font-weight-bold">
                      </div>
                    </div>
                  </form>
{{ form }}
                </div>
                
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade " id="reservation-form" tabindex="-1" role="dialog" aria-labelledby="reservationFormTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12" data-aos="fade-up" data-aos-delay="100">
                  
                  <form action="index.html"  method="post" class="bg-white p-4">
                    <div class="row mb-4"><div class="col-12"><h2>Reservation</h2></div></div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="name">Name</label>
                        <input type="text" id="name" class="form-control ">
                      </div>
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="phone">Phone</label>
                        <input type="text" id="phone" class="form-control ">
                      </div>
                    </div>
                
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="email">Email</label>
                        <input type="email" id="email" class="form-control ">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="checkin_date">Date Check In</label>
                        <input type="text" id="checkin_date" class="form-control">
                      </div>
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="checkout_date">Date Check Out</label>
                        <input type="text" id="checkout_date" class="form-control">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label for="adults" class="font-weight-bold text-black">Adults</label>
                        <div class="field-icon-wrap">
                          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                          <select name="" id="adults" class="form-control">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4+</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6 form-group">
                        <label for="children" class="font-weight-bold text-black">Children</label>
                        <div class="field-icon-wrap">
                          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                          <select name="" id="children" class="form-control">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="message">Notes</label>
                        <textarea name="message" id="message" class="form-control " cols="30" rows="8"></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input type="submit" value="Reserve Now" class="btn btn-primary text-white py-3 px-5 font-weight-bold">
                      </div>
                    </div>
                  </form>

                </div>
                
              </div>
            </div>
           
          </div>
        </div>
      </div>
     <!-- Modal -->
      <div class="modal fade " id="reservation-form" tabindex="-1" role="dialog" aria-labelledby="reservationFormTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12" data-aos="fade-up" data-aos-delay="100">
                  
                  <form action="index.html"  method="post" class="bg-white p-4">
                    <div class="row mb-4"><div class="col-12"><h2>Reservation</h2></div></div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="name">Name</label>
                        <input type="text" id="name" class="form-control ">
                      </div>
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="phone">Phone</label>
                        <input type="text" id="phone" class="form-control ">
                      </div>
                    </div>
                
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="email">Email</label>
                        <input type="email" id="email" class="form-control ">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="checkin_date">Date Check In</label>
                        <input type="text" id="checkin_date" class="form-control">
                      </div>
                      <div class="col-md-6 form-group">
                        <label class="text-black font-weight-bold" for="checkout_date">Date Check Out</label>
                        <input type="text" id="checkout_date" class="form-control">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label for="adults" class="font-weight-bold text-black">Adults</label>
                        <div class="field-icon-wrap">
                          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                          <select name="" id="adults" class="form-control">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4+</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6 form-group">
                        <label for="children" class="font-weight-bold text-black">Children</label>
                        <div class="field-icon-wrap">
                          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                          <select name="" id="children" class="form-control">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="message">Notes</label>
                        <textarea name="message" id="message" class="form-control " cols="30" rows="8"></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input type="submit" value="Reserve Now" class="btn btn-primary text-white py-3 px-5 font-weight-bold">
                      </div>
                    </div>
                  </form>

                </div>
                
              </div>
            </div>
           
          </div>
        </div>
      </div>
  
</template>

<script>
import axios from "axios"
export default {
  name: 'EditPageView',
  inject: ["globals"], 
  data() {
    return {
        form: { user: {}, room: [], menu:[], about: {id: "", body: "", thumb: "" }, page: [{title:'home', title_alias: '' }, {title:'about', title_alias: ''}, {title:'contact', title_alias: '' }, {title:'menu', title_alias: ''}, {title:'review', title_alias: ''} ], contact:[], review:[] }
    }
  },
  mounted(){
    this.gStaffs()
  },
  methods: {
  pageHeaders(x){
      if (this.form.page){
        return this.form.page.filter(y => y.title==x)[0]
      } else {
        return ""
      }
  },
  async gStaffs(){
      try {
        const res = await axios.get(`${location.origin}/v1/api/hotel/?user__pk=${this.globals.state.data.user.pk}`)
        this.form = res.data[0]
        alert(444)
        document.title = `Editing ${this.form.user.business_name} page`
        
      } catch(e){
      alert("Welcome")
        //location.href = "/admin/"
      } 
    },
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


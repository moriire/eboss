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

      <section class="site-hero overlay" :style="`background-image: url(${form.hero_image})`" data-stellar-background-ratio="0.5" id="section-home" v-if="pagetitle.includes('home')">
        <div class="container">
          <div class="row site-hero-inner justify-content-center align-items-center">
            <div class="col-md-10 text-center" data-aos="fade-up" data-toggle="modal" :data-target="`#page-title-${pageHeaders('home').title }`">
              <h1 class="heading text-capitalize">{{ homepage[0] }}
              <span data-toggle="modal" :data-target="`#page-title-${pageHeaders('home').title }`"><i class="fa fa-pencil-square-o"></i></span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <!-- END section -->

      <section class="py-5 bg-light" id="section-about" v-if="pagetitle.includes('about')">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
              <img :src="form.about.thumb" alt="Image" class="img-fluid rounded">
            </div>
            <div class="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up" >
              <h2 class="heading mb-4" >{{ aboutpage[0] }}! <span data-toggle="modal" :data-target="`#page-title-${pageHeaders('about').title }`"><i class="fa fa-pencil-square-o"></i></span></h2>
              <p class="mb-5" >{{ form.about.body }}<span data-toggle="modal" data-target="#about-section"><i class="fa fa-plus text-danger" ></i></span></p>
              <p><a href="#"  data-fancybox class="btn btn-primary text-white py-2 mr-3 text-uppercase letter-spacing-1">Get Started</a></p>
            </div>
            
          </div>
        </div>
      </section>

      <section class="section" id="section-rooms" v-if="pagetitle.includes('room')">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7" >
              <h2 class="heading text-capitalize" data-aos="fade-up">{{ roompage[0] }} <span data-toggle="modal" :data-target="`#page-title-${pageHeaders('rooms').title }`"><i class="fa fa-pencil-square-o"></i></span></h2>
              <p data-aos="fade-up" data-aos-delay="100">{{ roompage[1] }}</p>
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


      <section class="section testimonial-section" id="section-review">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading text-capitalize" data-aos="fade-up">{{ reviewpage[0] }}</h2>
            </div>
          </div>
          <div class="row jsutify-content-center align-items-center text-center">
            <div class="col-lg-12 mb-5" data-aos="fade-up" data-aos-delay="200">
            <Carousel  @loop="true" :margin="10" :settings="settings" :breakpoints="responsive">
              <Slide v-for="review in form.review" v-bind:key="review.id" >
                <div class="carousel__item testimonial text-center slider-item" >


                <div class="author-image mb-3">
                  <span>
                    <i v-for="(_, index) in arr(review.rate)" class="fa fa-star mx-auto text-success" v-bind:key="index"></i><i v-for="(_, index) in arr(5-review.rate)" class="fa fa-star mx-auto text-danger" v-bind:key="index"></i>
                  
                  </span>
                </div>
                <blockquote>
                  <p>&ldquo; {{ review.comment }}.&rdquo;</p>
                </blockquote>
                <p><em>&mdash; {{ review.full_name }}</em></p>
                </div>
              </Slide>
                <template #addons>
                  <Pagination />
                  <Navigation />
                </template>
              </Carousel>

            </div>
              <!-- END slider -->
          </div>

        </div>
      </section>
      <section class="section bg-image overlay" :style="`background-image: url(${pageHeaders('menu').background});`" id="section-menu" v-if="pagetitle.includes('menu')">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading text-white text-capitalize" data-aos="fade">{{ menupage[0] }}</h2>
              <p class="text-white" data-aos="fade" data-aos-delay="100">{{ menupage[1] }}</p>
            </div>
          </div>
          <div class="food-menu-tabs" data-aos="fade">
            <ul class="nav nav-tabs mb-5" id="myTab" role="tablist" v-if="gmenus">
              <li class="nav-item" v-for="cat in Object.keys(gmenus)" v-bind:key="cat">
                <a class="nav-link letter-spacing-2" :id="`${cat}-tab`" data-toggle="tab" :href="`#${cat}`" role="tab" :aria-controls="`${cat}`" aria-selected="false">{{ cat }}</a>
              </li>
            </ul>
            <div class="tab-content py-5" id="myTabContent">
              
              
              <!-- .tab-pane -->

              <div :class="Object.keys(gmenus).indexOf(cat)===0? 'tab-pane show active fade text-left': 'tab-pane fade text-left'" :id="`${cat}`" role="tabpanel" :aria-labelledby="`${cat}-tab`" v-for="cat in Object.keys(gmenus)" v-bind:key="cat" >
                <div class="row">
                  <div class="col-md-6" v-for="eat in form.menu[cat]" v-bind:key="eat.id" >
                    <div class="food-menu mb-5" >
                      <span class="d-block text-primary h4 mb-3">&#8358; {{ eat.price }}</span>
                      <h3 class="text-white"><a href="#" class="text-white">{{ eat.name }}</a></h3>
                      <!--p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p-->
                    </div>
                  </div>
                </div>
              </div> <!-- .tab-pane -->
              
            </div>
          </div>
        </div>
      </section>

      <section class="section contact-section" id="section-contact" v-if="pagetitle.includes('contact')">
      <div class="container">
        <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7" >
              <h2 class="heading text-capitalize" data-aos="fade-up">{{ contactpage[0] }} <span data-toggle="modal" :data-target="`#page-title-${pageHeaders('contact').title }`"><i class="fa fa-pencil-square-o"></i></span></h2>
              <p data-aos="fade-up">{{ contactpage[1] }}</p>
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
                <p><span class="d-block">Address:</span> <span class="text-black text-capitalize" data-toggle="modal" data-target="#contact-section"> {{ form.user.address }} <i class="fa fa-pencil-square-o"></i></span></p>
                <p><span class="d-block" >Phone:<i class="fa fa-plus text-danger" data-toggle="modal" data-target="#contact-section"></i></span>
                 <span class="text-black" v-for ="(phone, index) in form.contact.filter(x=>x.name==='phone')" v-bind:key="index"> (+234) <a :href="`tel:${phone.link}`" > {{ phone.link }} <span><i class="fa fa-pencil-square-o text-danger" data-toggle="modal" data-target="#contact-section"></i></span></a>, </span></p>
                <p>
                <span class="d-block" data-toggle="modal" data-target="#contact-section">Email:</span> <span class="text-black" v-for ="(email, index) in form.contact.filter(x=>x.name==='gmail')" v-bind:key="index">{{ email.link }}<i class="fa fa-pencil-square-o text-danger" data-toggle="modal" data-target="#contact-section"></i></span></p>
                <p><span class="d-block">Social:</span>
                   <span v-for ="(soc, index) in form.contact.filter(x=> x.name !== 'phone')" v-bind:key="index" class="text-black display-3">
                      <a :href="soc.link"> <i :class="`fa fa-${soc.name}`"></i><span><i class="fa fa-pencil-square-o text-danger" data-toggle="modal" data-target="#contact-section"></i></span></a></span></p>
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
      <div v-for="(page, index)  in form.page" class="modal fade " :id="`page-title-${page.title}`" tabindex="-1" role="dialog" aria-labelledby="pageTitle" aria-hidden="true" @key="index">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12" data-aos="fade-up" data-aos-delay="100">
                  
                  <form @submit.prevent="editTitle(page.id, page)"  method="post" class="bg-dark p-4">
                    <div class="row mb-3"><div class="col-12"><h2>Change {{ page.title }} title</h2></div></div>
                    
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label for="title" class="font-weight-bold text-black">Page Title</label>
                        <div class="field-icon-wrap">
                          <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                          <select name="" id="title" class="form-control" v-model="page.title">
                            <option :value="sec.title" v-for="sec in form.page" @key="sec.id">{{ sec.title }}</option>
                            </select>
                        </div>
                      </div>
                      <div class="col-md-6 form-group">
                        <label for="title_alias" class="font-weight-bold text-black">title alias</label>
                        <div class="field-icon-wrap">
                          
                          <input type="text" placeholder="alt to page" id="title_alias" v-model="page.title_alias" class="form-control"/>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="message">Subtitle</label>
                        <textarea name="message" id="message" class="form-control " rows="2" v-model="page.subtitle"></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input type="submit" :value="`Edit ${page.title} Title`" class="btn btn-primary text-white py-3 px-5 font-weight-bold">
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
      <!-- About Modal -->
      <div class="modal fade" id="about-section" tabindex="-1" role="dialog" aria-labelledby="pageTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12" data-aos="fade-up" data-aos-delay="100">
                  
                  <form @submit.prevent="editAbout(form.about.id, form.about)" class="bg-dark p-4">
                    <div class="row mb-3"><div class="col-12"><h2>Change About section</h2></div></div>
                    
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label for="img" class="font-weight-bold text-black">About Image(You can leave blank)</label>
                        <div class="field-icon-wrap">
                          
                          <input type="file" id="img" accept="image/*" value='' @change="form.about.thumb" class="form-control form-upload"/>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-12 form-group">
                        <label class="text-black font-weight-bold" for="message">Body</label>
                        <textarea name="message" id="message" class="form-control " rows="2" v-model="form.about.body"></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input type="submit" value="Edit section" class="btn btn-primary text-white py-3 px-5 font-weight-bold">
                      </div>
                    </div>
                  </form>

                </div>
                
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <!-- About Modal -->
      <!-- Contact Modal -->
      <div class="modal fade" id="contact-section" tabindex="-1" role="dialog" aria-labelledby="contactSection" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12" data-aos="fade-up" data-aos-delay="100">
                  
                  <form @submit.prevent="addContact()" class="bg-dark p-4">
                    <div class="row mb-3"><div class="col-12"><h2>Change Contact section</h2></div></div>
                    
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label for="name" class="font-weight-bold text-black">Name</label>
                        <div class="field-icon-wrap" >
                          
                          <input type="text" id="name"  v-model="contact.name" class="form-control"/>
                        </div>
                      </div>
                    
                      <div class="col-md-6 form-group">
                        <label for="link" class="font-weight-bold text-black">Link</label>
                        <div class="field-icon-wrap" >
                          
                          <input type="text" id="link" v-model="contact.link" class="form-control"/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input type="submit" value="Add Contact section" class="btn btn-primary text-white py-3 px-5 font-weight-bold">
                      </div>
                    </div>
                  </form>

                </div>
                
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <!-- Contact Modal --> 
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

Array.prototype.groupBy = function(key) {return this.reduce((hash, obj) => {
if(obj[key] === undefined) return hash;
return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
}, {})
};

import axios from "axios"
import alertify from "alertifyjs"
export default {
  name: 'EditPageView',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  inject: ["globals"], 
  data() {
    return {
        contact: {},
        menu: {},
        form: { user: {}, room: [], menu:[], about: {id: "", body: "", thumb: "" }, page: [{title:'home', title_alias: '' }, {title:'about', title_alias: ''}, {title:'contact', title_alias: '' }, {title:'menu', title_alias: ''}, {title:'review', title_alias: ''} ], contact:[], review:[] }
    }
  },
  created(){
    
  },
  mounted(){
    this.gStaffs()
  },
  methods: {

  pageHeaders(x){
      if (this.form.page){
        return this.form.page.filter(y => y.title==x)[0]
      } else {
        return {}
      }
  },
  async gStaffs(){
      try {
        const res = await axios.get(`${location.origin}/v1/api/hotel/?user__email=${this.$route.params.user_id}@gmail.com`)
        this.form = res.data[0]
        document.title = `Editing ${this.form.user.business_name} page`
        
      } catch(e){
      alert("Welcome")
        //location.href = "/admin/"
      } 
    },
    editPageTitle(){
      document.querySelector("#page-title").modal("show")
    },
    editTitle(id, obj){
    obj.user=this.form.user.pk
      axios.put(`${location.origin}/v1/api/page/${id}/`, obj).then(res => {
        if (res.status===200){
          alertify.success("Success")
          //location.reload()
        }else {
          alertify.error("Something went wrong!")
        }
      }).catch(e => alertify.error(JSON.stringify(e.response.data)))
    },
    editAbout(id, obj){
    obj.user=this.form.user.pk
      axios.put(`${location.origin}/v1/api/about/${id}/`, obj).then(res => {
        if (res.status===200){
          alert("Success")
          //location.reload()
        }else {
          alert("Something went wrong!")
        }
      }).catch(e => alert(JSON.stringify(e.response.data)))
    },
    addContact(){
      this.contact.user=this.form.user.pk
      axios.post(`${location.origin}/v1/api/contact/`, this.contact).then(res => {
        if (res.status===201){
          alert("Success")
          //location.reload()
        }else {
          alert("Something went wrong!")
        }
      }).catch(e => alert(JSON.stringify(e.response.data)))
    },
  },
  computed:{
    gmenus(){
      if (this.form.menu) {
            return this.form.menu.groupBy("nature")
          }
      return []
    },
    pagetitle(){
      if (this.form.page) {
            return this.form.page.map(x=>x.title)
          }
      return []
    },
    homepage(){
      const headers = this.pageHeaders('home')
      return [ headers.title_alias || headers.title, headers.subtitle]
    },
    aboutpage(){
      const headers = this.pageHeaders('about')
      return [ headers.title_alias || headers.title, headers.subtitle]
    },
    roompage(){
      const headers = this.pageHeaders('rooms')
      return [ headers.title_alias || headers.title, headers.subtitle]
    },
    contactpage(){
    const headers = this.pageHeaders('contact')
      return [ headers.title_alias || headers.title, headers.subtitle]
    },
    reviewpage(){
    const headers = this.pageHeaders('review')
      return [ headers.title_alias || headers.title, headers.subtitle]
    },
    menupage(){
    const headers = this.pageHeaders('menu')
      return [ headers.title_alias || headers.title, headers.subtitle]
    },
  }
  }
</script>


<script>
//import "alertifyjs/build/css/alertify.min.css";
import alertify from "alertifyjs";
export default {
  name: "App",
  data() {
     return {
     alertify: alertify,
     }
  },
  provide() {
   return { 
   alertify: this.alertify,
   }
   },
   created(){
   	//this.globals.getProfile()
   }
}
</script>
<style src="../public/fonts/fontawesome/css/font-awesome.min.css"></style>
<style src="../public/fonts/ionicons/css/ionicons.min.css"></style>
<style src="../public/css/fancybox.min.css"></style>
<style src="../public/css/jquery.timepicker.css"></style>
<style src="../public/css/bootstrap-datepicker.css"></style>
<style src="../public/css/aos.css"></style>
<style src="../public/css/animate.css"></style>
<style src="../public/css/bootstrap.min.css"></style>
<style src="../public/css/style.css"></style>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="templateux-navbar">
      <div class="container">
        <a class="navbar-brand" href="/"><span class="text-danger">R</span>otana</a>
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
            <li class="nav-item"><a class="nav-link" href="#section-contact">Contact</a></li>
            <li class="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0"><a class="nav-link" href="#" data-toggle="modal" data-target="#reservation-form" ><span class="pb_rounded-4 px-4 rounded">Booking & Reservation</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- END nav -->

  <router-view />
   <section class="section bg-image overlay" style="background-image: url(/static/src/dist/images/hero_4.jpg);">
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

  
      <footer class="section. footer-section">
        <div class="container text-center p-3">
          <div class="row align-items-center justify-content-center text-center">
            <p class="col-md-6 text-center">
              <a href="https://acsolotltd.tk" target="_blank" >Acsolot Integrated Services</a> &copy; 2022
            </p>
          </div>
          <div class="row align-items-center justify-content-center center">
            <p class="col-md-6 text-center social">
              <a href="https://www.facebook.com/AgesXpat"><span class="fa fa-facebook"></span></a>
              <a href="https://www.linkedin.com/in/ibmabdulsalam/"><span class="fa fa-linkedin"></span></a>
              <a href="tel:+2348100482341"><span class="fa fa-phone"></span></a>
            </p>
          </div>
        </div>
      </footer>
 
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
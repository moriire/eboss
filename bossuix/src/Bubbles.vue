<script>
import globals from "./stores/globals";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";
export default {
  name: "Bubbles",
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
 <div class="container-fluid position-relative d-flex p-0">
        <!-- Spinner Start -->
        <!--div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div-->
        <!-- Spinner End -->


        <!-- Sidebar Start -->
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-secondary navbar-dark">
                <router-link exact to="/" class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>B.O.S.S.</h3>
                </router-link>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <!--img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;"-->
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">{{ globals.state.loggedIn? `${globals.auth.user.business_name}` : "" }} </h6>
                        <span>{{ globals.state.loggedIn? "online": "offline" }}</span>
                    </div>
                </div>
                <div class="navbar-nav w-100">
                    <router-link exact to="/" class="nav-item nav-link"><i class="fa fa-tachometer-alt me-2"></i>Home</router-link>
                    <router-link exact to="/dashboard" class="nav-item nav-link"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</router-link>
                    <div class="nav-item dropdown">
                        <a to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Pages</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link exact to="/setup" class="dropdown-item">Add Page Sections</router-link>
                            <router-link exact to="/setup/add/menu" class="dropdown-item">Menu</router-link>
                            <router-link exact to="/setup/add/about" class="dropdown-item">About</router-link>
                            <router-link exact to="/setup/add/review" class="dropdown-item">Review</router-link>
                            <router-link exact to="/setup/add/contact" class="dropdown-item">Contact</router-link>
                        </div>
                    </div>
                    <router-link exact to="/about" class="nav-item nav-link"><i class="fa fa-table me-2"></i>About</router-link>
                    <router-link exact to="/contact" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Contact</router-link>
                    <div class="nav-item dropdown" v-if="globals.state.loggedIn">
                        <a to="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Loggedin</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <a type="button" role="button" @click="globals.logout()" class="dropdown-item">Log out</a>
                            <router-link exact to="account/change_password" class="dropdown-item">Change Password</router-link>
                            <router-link exact to="/account/profile" class="dropdown-item">Profile</router-link>
                            <router-link exact to="/account/edit" class="dropdown-item active">Edit Profile</router-link>
                        </div>
                    </div>
                    <div class="nav-item dropdown" v-else >
                        <a to="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Login</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link exact to="/account/login" class="dropdown-item" >Login</router-link>
                            <router-link exact to="/account/register" class="dropdown-item">Get Started</router-link>
                            <router-link exact to="/account/reset_password" class="dropdown-item">Reset Password</router-link>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </div>
        <!-- Sidebar End -->


        <!-- Content Start -->
        <div class="content">
            <!-- Navbar Start -->
            <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <router-link to="/" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
                </router-link>
                <a href="/" class="sidebar-toggler flex-shrink-0">
                    <i class="fa fa-bars"></i>
                </a>
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control bg-dark border-0" type="search" placeholder="Search">
                </form>
                <div class="navbar-nav align-items-center ms-auto">
                    <div class="nav-item dropdown">
                        <router-link to="/" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-envelope me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Message</span>
                        </router-link>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <router-link to="/" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <!--small>15 minutes ago</small-->
                                    </div>
                                </div>
                            </router-link>
                            <hr class="dropdown-divider">
                            <router-link to="/" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </router-link>
                            <hr class="dropdown-divider">
                            <router-link to="/" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </router-link>
                            <hr class="dropdown-divider">
                            <router-link to="/" class="dropdown-item text-center">See all message</router-link>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <!--a to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img class="rounded-circle me-lg-2" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                            <span class="d-none d-lg-inline-flex">John Doe</span>
                        </a-->
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <router-link to="/" class="dropdown-item">My Profile</router-link>
                            <router-link to="/" class="dropdown-item">Settings</router-link>
                            <router-link to="/" class="dropdown-item">Log Out</router-link>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Navbar End -->

                    <router-view> </router-view>

            <!-- Footer Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary rounded-top p-4">
                    <div class="row">
                        <div class="col-12 col-sm-6 text-center text-sm-center  mx-auto">
                            <router-link to="/">B.O.S.S.</router-link> &copy; 2022  by
                        <a href="https://acsolotltd.ml" target="_blank">AiS</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- Footer End -->
        </div>g
        <!-- Content End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
</template>
<style src="../public/bubbles/css/style.css"></style>
<style src="../public/bubbles/lib/fontawesome/css/all.min.css"></style>
<style src="../public/bubbles/lib/bootstrap-icons/bootstrap-icons.css"></style>
<style src="../public/bubbles/css/bootstrap.min.css" ></style>
<style src="../public/bubbles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" ></style>
<style src="../public/bubbles/lib/owlcarousel/assets/owl.carousel.min.css" ></style>
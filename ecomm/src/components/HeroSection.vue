<template>
    <!-- header_section - start
        ================================================== -->
        <header class="header_section carparts_header clearfix">
            <div class="container">
                <div class="content_wrap">
                    <div class="row no-gutters">
                        <div class="col-lg-3">
                            <div class="brand_logo">
                                <a class="brand_link" href="index.html">
                                    <img src="assets/images/logo/logo_01_1x.png" srcset="assets/images/logo/logo_01_2x.png 2x" alt="logo_not_found">
                                </a>

                                <ul class="mh_action_btns ul_li clearfix">
                                    <li>
                                        <button type="button" class="search_btn" data-toggle="collapse" data-target="#search_body_collapse" aria-expanded="false" aria-controls="search_body_collapse">
                                            <i class="fal fa-search"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" class="cart_btn">
                                            <i class="fal fa-shopping-cart"></i>
                                            <span class="btn_badge">2</span>
                                        </button>
                                    </li>
                                    <li><button type="button" class="mobile_menu_btn"><i class="far fa-bars"></i></button></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-9">
                            <div class="header_top">
                                <div class="row w-100 d-flex align-items-center justify-content-lg-between">
                                    <div class="col-lg-12">
                                        <form action="#">
                                            <div class="form_item search_box">
                                                <input type="search" name="search" placeholder="Search">
                                                <button type="submit" class="submit_btn bg_carparts_red"><i class="fal fa-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="header_bottom">
                                <nav class="main_menu clearfix">
                                    <ul class="ul_li clearfix">
                                                             
                                        <li v-for="(page, index) in pagetitle" v-bind:key="index"><a href="#!" class="text-capitalize">{{ page }}</a></li>
                                        
                                    </ul>
                                </nav>

                                <!--a class="custom_btn bg_carparts_red" href="#!">Buy This Theme</a-->
                            </div>
                        </div>
                    </div>

                    <div id="search_body_collapse" class="search_body_collapse collapse">
                        <div class="search_body">
                            <div class="container-fluid prl_90">
                                <form action="#">
                                    <div class="form_item mb-0">
                                        <input type="search" name="search" placeholder="Type here...">
                                        <button type="submit"><i class="fal fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- header_section - end
        ================================================== -->


        <!-- main body - start
        ================================================== -->
        <!-- sidebar mobile menu & sidebar cart - start
            ================================================== -->
            <div class="sidebar-menu-wrapper">
                <div class="cart_sidebar">
                    <button type="button" class="close_btn"><i class="fal fa-times"></i></button>

                    <ul class="cart_items_list ul_li_block mb_30 clearfix">
                        <li>
                            <div class="item_image">
                                <img src="assets/images/cart/img_01.jpg" alt="image_not_found">
                            </div>
                            <div class="item_content">
                                <h4 class="item_title">Yellow Blouse</h4>
                                <span class="item_price">$30.00</span>
                            </div>
                            <button type="button" class="remove_btn"><i class="fal fa-trash-alt"></i></button>
                        </li>
                        <li>
                            <div class="item_image">
                                <img src="assets/images/cart/img_01.jpg" alt="image_not_found">
                            </div>
                            <div class="item_content">
                                <h4 class="item_title">Yellow Blouse</h4>
                                <span class="item_price">$30.00</span>
                            </div>
                            <button type="button" class="remove_btn"><i class="fal fa-trash-alt"></i></button>
                        </li>
                        <li>
                            <div class="item_image">
                                <img src="assets/images/cart/img_01.jpg" alt="image_not_found">
                            </div>
                            <div class="item_content">
                                <h4 class="item_title">Yellow Blouse</h4>
                                <span class="item_price">$30.00</span>
                            </div>
                            <button type="button" class="remove_btn"><i class="fal fa-trash-alt"></i></button>
                        </li>
                    </ul>

                    <ul class="total_price ul_li_block mb_30 clearfix">
                        <li>
                            <span>Subtotal:</span>
                            <span>$90</span>
                        </li>
                        <li>
                            <span>Vat 5%:</span>
                            <span>$4.5</span>
                        </li>
                        <li>
                            <span>Discount 20%:</span>
                            <span>- $18.9</span>
                        </li>
                        <li>
                            <span>Total:</span>
                            <span>$75.6</span>
                        </li>
                    </ul>

                    <ul class="btns_group ul_li_block clearfix">
                        <li><a href="shop_cart.html">View Cart</a></li>
                        <li><a href="shop_checkout.html">Checkout</a></li>
                    </ul>
                </div>

                <div class="sidebar_mobile_menu">
                    <button type="button" class="close_btn"><i class="fal fa-times"></i></button>

                    <div class="msb_widget brand_logo text-center">
                        <a href="index.html">
                            <img src="assets/images/logo/logo_25_1x.png" srcset="assets/images/logo/logo_25_2x.png 2x" alt="logo_not_found">
                        </a>
                    </div>

                    <div class="msb_widget mobile_menu_list clearfix">
                        <h3 class="title_text mb_15 text-uppercase"><i class="far fa-bars mr-2"></i> Menu List</h3>
                        <ul class="ul_li_block clearfix">
                            <li v-for="(page, index) in pagetitle" v-bind:key="index"><a href="contact.html" class="text-capitalize">{{ page }}</a></li>
                                
                        </ul>
                    </div>

                </div>

                <div class="overlay"></div>
            </div>
            <!-- sidebar mobile menu & sidebar cart - end ========= -->
            

            <div class="breadcrumb_section carparts_breadcrumb text-white text-center d-flex align-items-end clearfix" :data-background="hero_image" :style="`background-image: url(${hero_image});`">
                <div class="container">
                    <ul class="breadcrumb_nav ul_li_center clearfix">
                        <li><a href="#!">{{ header.title || header.title_alias  }}</a></li>
                        <li>{{ header.subtitle || "" }}</li>
                    
                    </ul>
                </div>
            </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    hero_image: { type: String, default: "" },
    header: { type: Object },
    pagetitle: { type: Array }
  },
}
</script>
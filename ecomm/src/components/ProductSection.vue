<template>
  <!-- product_section - start
            ================================================== -->
            <div class="product_section sec_ptb_100 clearfix min-vh-100">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-9 order-last">
                            <div class="carparts_filetr_bar clearfix">
                                <div class="row align-items-center justify-content-lg-between">
                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <ul class="carparts_layout_btns nav ul_li" role="tablist">
                                            <li>
                                                <a data-toggle="tab" href="#grid_layout"><i class="fas fa-th"></i></a>
                                            </li>
                                            <li>
                                                <a class="active" data-toggle="tab" href="#list_layout"><i class="fas fa-list"></i></a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <h4 class="result_text text-center">Showing {{ products.length }} products</h4>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <form action="#">
                                            <div class="option_select d-flex align-items-center mb-0">
                                                <span class="option_title text-uppercase">Sort by:</span>
                                                <select>
                                                    <option data-display="Select Your Option">Nothing</option>
                                                    <option value="1" selected> Popularity</option>
                                                    <option value="2">Another option</option>
                                                    <option value="3" disabled>A disabled option</option>
                                                    <option value="4">Potato</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-content">
                                <div id="grid_layout" class="tab-pane fade">
                                    <div class="row mb_50">
                                        <div class="carparts_product_grid text-center" data-bg-color="#f0eeee" v-if="products.length===0">
                                            <h2>No active products yet</h2>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12" v-for="(product, index) in products" v-bind:key="index" v-else>
                                            <div class="carparts_product_grid" data-bg-color="#f0eeee">
                                                <div class="item_image" data-bg-color="#f8f8f8">
                                                    <img :src="product.images[0].thumb" alt="image_not_found">
                                                    <ul class="product_action_btns ul_li_center clearfix">
                                                        <li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
                                                        <li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
                                                        <li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" :data-target="`#quickview_modal_${index}`"><i class="fal fa-search"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="item_content">
                                                    <ul class="rating_star ul_li clearfix">
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fal fa-star"></i></li>
                                                    </ul>
                                                    <h3 class="item_title">
                                                        <a href="#!">{{ product.product.name }}</a>
                                                    </h3>
                                                    <span class="price_text"><strong>$29.90</strong> <del>$48.90</del></span>
                                                </div>
                                                <ul class="product_label ul_li text-uppercase clearfix">
                                                    <li class="bg_carparts_red">New</li>
                                                    <li class="bg_carparts_red">Sale</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    
                                </div>

                                <div id="list_layout" class="tab-pane active">
                                    <div class="mb_50">
                                        <div class="carparts_product_listlayout text-center" data-bg-color="#f0eeee" v-if="products.length===0">
                                           <h2> No Active Product yet</h2>
                                        </div>
                                        <div class="carparts_product_listlayout" data-bg-color="#f0eeee" v-for="(product, index) in products" v-bind:key="index" v-else>
                                            <div class="item_image" data-bg-color="#f8f8f8">
                                                <img :src="product.images[0].thumb" alt="image_not_found">
                                                <ul class="product_label ul_li text-uppercase clearfix">
                                                    <li class="bg_carparts_red">New</li>
                                                    <li class="bg_carparts_red">Sale</li>
                                                </ul>
                                            </div>
                                            <div class="item_content">
                                                <ul class="rating_star ul_li clearfix">
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fal fa-star"></i></li>
                                                </ul>
                                                <h3 class="item_title text-uppercase">
                                                    <a href="#!">{{ product.product.name }}</a>
                                                </h3>
                                                <p class="mb-0">
                                                    {{ product.product.desc }}. 
                                                </p>
                                                <div class="action_btns_wrap">
                                                    <span class="price_text"><strong>${{ product.product.price }}</strong> <del>$48.90</del></span>
                                                    <ul class="product_action_btns ul_li clearfix">
                                                        <li><a class="tooltips" data-placement="top" title="Add To Wishlist" href="#!"><i class="fal fa-heart"></i></a></li>
                                                        <li><a class="tooltips" data-placement="top" title="Add To Cart" href="#!"><i class="fal fa-shopping-basket"></i></a></li>
                                                        <li><a class="tooltips" data-placement="top" title="Quick View" href="#!" data-toggle="modal" :data-target="`#quickview_modal_${index}`"><i class="fal fa-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <aside class="carparts_sidebar sidebar_section">
                                <div class="sb_widget sb_pricing_range">
                                    <h3 class="sb_widget_title text-uppercase">Select Price</h3>
                                    <form action="#">
                                        <div class="price-range-area clearfix">
                                            <div id="slider-range" class="slider-range"></div>
                                            <div class="price-text d-flex align-items-center">
                                                <span>Price:</span>
                                                <input type="text" id="amount" readonly>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div class="sb_widget sb_collapse_category">
                                    <h3 class="sb_widget_title text-uppercase">Categories</h3>
                                    <div id="sb_category_accordion" class="sb_category_accordion">
                                        <div class="card">
                                            <div class="card-body">
                                                <ul class="ul_li_block clearfix">
                                                    <li v-for="(category, index) in categories" v-bind:key="index"><a href="#!">{{ category }}</a></li>            
                                                </ul>
                                                
                                            </div>
                                            
                                        </div>

                                        
                                    </div>
                                </div>

                                <!--a class="text_btn text-uppercase" href="#!"><span>View More</span> <i class="fas fa-arrow-circle-right"></i></a-->
                            </aside>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- product_section - end
            ================================================== -->
</template>
<script>
//import ProductQV from '@/components/ProductQV.vue'
export default {
  name: "ProductSection",
  components: {
      //ProductQV
  },
  props: {
    products: {
      type: Function,
      default: []
    },
    categories: {
      type: Function,
      default: []
    },
  },

}
</script>
<template>
<!-- breadcrumb_section - start
            ================================================== -->
            <div class="breadcrumb_section carparts_breadcrumb text-white text-center text-uppercase d-flex align-items-end clearfix" :data-background="hero_image">
                <div class="container">
                    <ul class="breadcrumb_nav ul_li_center clearfix">
                        <li><a href="#!">{{ header.title || header.title_alias  }}</a></li>
                        <!--li>Shop</li>
                        <li>Car Parts</li>
                        <li>Car Parts List</li-->{{ hero_image }}
                    </ul>
                </div>
            </div>
            <!-- breadcrumb_section - end
            ================================================== -->

</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    hero_image: { type: String, default: "" },
    header: { type: Function }
  },
}
</script>
<template>
  <div v-if="targets">
    <div class="shop_details_content" >
        <h2 class="item_title text-uppercase">{{ targets.purpose }}</h2>
        <hr/>
          <p class="mb-0">{{ targets.description }}</p>
        
    </div>
  </div>
  <div v-else><h1>Somethingwent wrong </h1></div>
 
</template>

<script>
export default {
  name: 'ProfileTarget',
  props: {
    targets: Array,
  }
}
</script>

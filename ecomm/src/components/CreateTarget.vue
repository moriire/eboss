<template>
  <div class="row">
  <div class="col-lg-4 col-md-6 col-sm-8 col-xs-10">

    {{ success }}
    {{ errors }}
   <div class="form_item">
      <input type="integer" v-model="target.customer" name="customer" placeholder="user id" />
   </div>
   <div class="form_item">
    <input type="integer" v-model="target.amount" name="amount" placeholder="Target amount" />
  </div>
  <div class="form_item">
    <input type="text" v-model="target.purpose" name="purpose" placeholder="purpose" />
  </div>
  <div class="form_item">
    <textarea type="text" v-model="target.description" name="description" placeholder="description"></textarea>
  </div>
  <div class="form_item">
    <input type="date" name="deadline" v-model="target.deadline" />
  </div>
  <div class="form_item">
    <button v-on:click="postTarget()">Create Target</button>
  </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'CreateTarget',
}
</script>
<template>
  <form>
    <ul v-if="pages.$errors">
      <li v-for="error in pages.$errors.message" v-bind:key="error">{{ error }}</li>
    </ul>
    <div class="row">
      
        <div class="form-outline mb-4">
        <input id="first_name" type="text" class="form-control active" autocompleted="" v-model="form.first_name"/>
          <label class="form-label" for="first_name" style="margin-left: 0px;">
            firstname:
           </label>
           <div class="form-notch">
                    <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 68.8px;"></div>
                  <div class="form-notch-trailing"></div>
              </div>
        </div>
 
   <div class="form-outline mb-4">
        <input id="last_name" type="text" class="form-control active" autocompleted="" v-model="form.last_name"/>
          <label class="form-label" for="last_name" style="margin-left: 0px;">
            lastname:
           </label>
           <div class="form-notch">
                    <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 68.8px;"></div>
                  <div class="form-notch-trailing"></div>
              </div>
        </div>
   <div class="form-outline mb-4">
        <input id="other_name" type="text" class="form-control active" autocompleted="" v-model="form.other_name"/>
          <label class="form-label" for="other_name" style="margin-left: 0px;">
            other names:
           </label>
           <div class="form-notch">
                    <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 68.8px;"></div>
                  <div class="form-notch-trailing"></div>
              </div>
        </div>

        <div class="form-outline mb-4">
        <select id="gender" class="form-control active" v-model="form.gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Shemale">Shemale</option>
          <option value="Transgender">Transgender</option>
        </select>
          <label class="form-label" for="gender" style="margin-left: 0px;">
            Choose Gender:
           </label>
           <div class="form-notch">
                    <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 68.8px;"></div>
                  <div class="form-notch-trailing"></div>
              </div>
        </div>
   
   <div class="form-outline mb-4">
        <select id="grade" class="form-control active" v-model="form.grade">
          <option value="JSS1">JSS1</option>
          <option value="JSS2">JSS2</option>
          <option value="JSS3">JSS3</option>
          <option value="JSS1">JSS1</option>
        </select>
          <label class="form-label" for="grade" style="margin-left: 0px;">
            Choose Grade:
           </label>
           <div class="form-notch">
                    <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 68.8px;"></div>
                  <div class="form-notch-trailing"></div>
              </div>
        </div>
      <div class="form-outline mb-4">
        <input id="registered_on" type="datetime" class="form-control active" autocompleted="" v-model="form.registered_on" readonly />
          <label class="form-label" for="registered_on" style="margin-left: 0px;">
            Resgistered On:
           </label>
           <div class="form-notch">
                    <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 68.8px;"></div>
                  <div class="form-notch-trailing"></div>
              </div>
        </div>
 
  <button id="submit" type="submit" class="btn btn-primary btn-block mb-4">update form</button>
 
          
        </div>
      
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: 'EditClientView',
  inject: ["global", "pages"], 
  data() {
    return {
        form: {
        first_name: "",
        last_name: "",
        other_name: "",
        gender: "",
        grade: "",
        full_name: "",
        registered_on: "",
        user: "",
        },
    }
  },
  methods: {
    async editForm() {
      try {
        const res = await axios.get(`${this.global.BASE}/api/students/${this.$route.params.id}/`)
        this.form = res.data
      } catch(errors) {
        alert(errors)
      }
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.editForm()
      },
      {"immediate": true}
    )
  }
  }
</script>


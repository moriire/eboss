<template>
<div class="container-fluid h-100">
	<div class="row align-items-center justify-content-center p-2 m-2">
		<div v-for="image in images" v-bind:key="image.id" class="col-6 col-md-4 col-lg-3" >
			<img  :src="image.img" class="w-100 img img-responsive img-thumbnail" >
		</div>
	</div>
<!-- Upload Start -->
        
            <div class="row align-items-center justify-content-center">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                    <div class="bg-success rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <router-link to="/" exact class="">
                                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>eKs</h3>
                            </router-link>
                            <h3>Upload Image</h3>
                        </div>      
			<div class="form-floating mb-3">  
			<file-pond
      name="img"
      ref="img"
      label-idle="Drop files here..."
      v-bind:allow-multiple="false"
      accepted-file-types="image/jpeg, image/png"
      allowFileMetadata="true"
      :server="`http://127.0.0.1:8000/v1/api/images/?uploaded_by=${globals.auth.user.pk}`"
      v-bind:files="myFiles"
      v-on:init="handleFilePondInit"
    />
    </div>
                   </div>
                </div>
            </div>
        </div>
        <!-- Upload End -->
</template>

<script>
//import globals from "@/stores/globals";
import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

  // Import FilePond plugins
  // Please note that you need to install these plugins separately

  // Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
  // Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'

import FilePondPluginFileMetadata from "filepond-plugin-file-metadata"

import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Create component
const FilePond = vueFilePond(
        FilePondPluginFileValidateType,
	FilePondPluginFileMetadata,
        FilePondPluginImagePreview
	);

import axios from "axios"
export default {
  name: 'CreateImgView',
  components: {
    FilePond,
    //setOptions
  },
  inject: ["globals", "alertify"],
  data() {
   return {
    images: [],
    myFiles: []
   }
  },
  methods: {
    handleFilePondInit: function () {
    alert(this.$refs.getfiles())
      console.log("FilePond has initialized");

      // FilePond instance methods are available on `this.$refs.pond`
    },
    async getImg() {
    try {
    	const res = await axios.get(`${this.globals.BASE}/v1/api/images/?uploaded_by=${this.globals.auth.user.pk}`)
	this.images = res.data.data
    } catch(errors) {
    	alert(errors)
    }
   },
   ImgUpload(e){
   	alert(JSON.stringify(e.target))
   }, 
  },
  created(){
  	this.getImg()
	}
}
</script>


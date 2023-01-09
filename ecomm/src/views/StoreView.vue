<template src="./store.html">
</template>

<script>
// @ is an alias to /src
import axios from "axios"
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
const headers = {'Content-Type': 'application/json', 'X-CSRFToken': 'csrftoken',};

export default {
  name: 'StoreView',
  data(){  
  	return {                          
  		products: [],
  		store: {},
  		review: { reviewer: "", product: this.$route.query.product_id, body: ""},
  	}
  },
  created() {
  	this.getProducts()
  },
  methods: {
  	
  	async getProducts(){
  		try {
  			const res = await axios.get(`http://127.0.0.1:8000/api/ads/?product__user=${this.$route.params.id}`)
  			this.products = res.data 
  		} catch(e) {
  			alert(e.response)
  		}
  	},
  	async sendReview(){
  		try {
  			const res = await axios.post("http://127.0.0.1:8000/api/auth/reviews/", this.review)
  			this.store = res.data 
  		} catch (e){
  			//alert(e.response)
  			alert("review not sent")
  		}
  	}
  },
  computed: {
  	product(){
  		return this.products.filter(x => x.product.user == 1 && x.product.id== this.$route.query.product_id)[0]
  	}
  }
}
</script>

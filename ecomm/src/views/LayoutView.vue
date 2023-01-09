<template>
	<router-view />
</template>

<script>
// @ is an alias to /src
import axios from "axios"
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

import ProfileTarget from '@/components/ProfileTarget';

import ProfileSavings from '@/components/ProfileSavings'


const headers = {
    "Content-Type": "application/json"};

const headers1 = {'Content-Type': 'application/json', 'X-CSRFToken': 'csrftoken',};

export default {
  name: 'ProfileView',
  data(){                               
  	return {                             		
  		targets: [],   
	    savings: [],
	    targetdata: {
									customer: this.$route.params.id,
									amount: 0.0,
									purpose: "",
									description: "",
									deadline: "",
			},  
			success: [],
			errors: [],
		}
  },
  methods: {
  	async getTarget(){
			const userid = this.$route.params.id;
			const targetUrl = `http://127.0.0.1:5000/v1/api/target/${userid}/`;
			const savingsUrl = `http://127.0.0.1:5000/v1/api/savings/?savings=${userid}`;
			var targ = axios.get(targetUrl, { headers }),
			save = axios.get(savingsUrl, { headers });
			try {
				const [respTarget, respSavings] = await Promise.all([targ, save]);
				this.targets = respTarget.data.data;
				this.savings = respSavings.data.data;
				} catch(error){
					alert(JSON.stringify(error));
				}
			},


			async postTarget(){
			try {
				const resp = await axios.post("http://127.0.0.1:5000/v1/api/target/", this.targetdata, headers1);
				//, {headers1} );
				this.success = resp;
				} catch(error){
					this.errors = error;
				}
			},
  
  	},
 
  created(){
  	//alert("created");
		//this.getTarget();

  },
  mounted(){
		alert(JSON.stringify(this.targets));
  },
  components: {
    ProfileTarget,
    ProfileSavings,
  }
}
</script>

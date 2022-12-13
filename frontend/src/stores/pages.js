//<script>
import axios from "axios";
import alertify from "alertifyjs";
import { reactive, ref, readonly } from "vue";
import router from "@/router";
const BASE = "https://rotana.pythonanywhere.com"

//const config = { headers: { 'Authorization' :  `Bearer ${state.user.access_token}` }}
const clients = reactive({data: []});

const $errors=reactive({});

const getClients = async function(){
	try {
		const res = await axios.get(`${BASE}/api/students/`)
		clients.data =  res.data
		alertify.success("students get")
	} catch(errors) {
			alert(errors.response)
	}
};
const  addClient = async function(kw) {
      try {
        	const res = await axios.post(`${BASE}/api/students/`, kw)
        	const resp = res.data
	       	alertify.success(JSON.stringify(resp));
        	getClients();
        
      } catch(errors) {
          console.log(errors.response.data);
          $errors.code=errors.response.status;
          $errors.message=errors.response.data;
          alertify.error("Pls check the form")
      }
    };

const  addRoll = async function(user, kw) {
      try {
        const res = await axios.post(`${BASE}/api/rolls/`, {user: user, present: kw})
        const respData = res.data
        alert(respData);
        getClients();
	router.push("/")
      } catch(errors) {
          return "errors"
      }
    };



export default { clients, getClients, addClient,  addRoll}

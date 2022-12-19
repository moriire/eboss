//<script>
import axios from "axios";
import alertify from "alertifyjs";
import { reactive, ref, readonly } from "vue";
import router from "@/router";
const BASE = "http://127.0.0.1:8000";//https://rotana.pythonanywhere.com"

//const config = { headers: { 'Authorization' :  `Bearer ${state.user.access_token}` }}
const clients = reactive({data: []});

const $errors=reactive({});

const getPage = async function(user){
	try {
		const res = await axios.get(`${BASE}/v1/api/page/${user}`)
		clients.data =  res.data
		alertify.success("students get")
	} catch(errors) {
			alert(errors.response)
	}
};
const  addPage = async function(user, kw) {
      try {
        	const res = await axios.post(`${BASE}/v1/api/page/`, {user: user, ...kw })
        	const resp = res.data
	       	alertify.success(JSON.stringify(resp));
        	getPage();
        
      } catch(errors) {
          console.log(errors.response.data);
          $errors.code=errors.response.status;
          $errors.message=errors.response.data;
          alertify.error("Pls check the form")
      }
    };

const  addAbout = async function(user, kw) {
      try {
        const res = await axios.post(`${BASE}/v1/api/hotel/`, {user: user, ...kw})
        const respData = res.data
        alert(respData);
        getPage();
	router.push("/")
      } catch(errors) {
          return "errors"
      }
    };



export default { clients, getPage, addPage,  addAbout}

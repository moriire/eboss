//<script>
/* eslint-disable */
import axios from "axios";
import { reactive, computed, readonly } from "vue";
import router from "@/router";
//const BASE = "http://127.0.0.1:8000"
const BASE = "https://rotana.pythonanywhere.com"

import alertify from "alertifyjs"

const state = reactive(
	{
		data : JSON.parse(localStorage.getItem("user")),
		loggedIn: localStorage.getItem("loggedin"),
		detail: {},
	}
	);

//const config = { headers: {Authorization: `Bearer  ${ state.data.user.access_token }` }}

const logout = async function(){
		try {
		const res = await axios.post(`${BASE}/v1/rest/api/auth/logout/`, )//config)
			const resp = res.data 
			localStorage.removeItem("user");
			localStorage.removeItem("loggedin");
			alertify.alert("loggedout");
			router.push("/account/login");                //location.href="/";                             
		} catch(errors) {                                      return "errors"                        }
        //localStorage.removeItem("user");

};
	const getProfile = async function() {
		try {
		const res = await axios.get(`${BASE}/v1/rest/api/auth/user/`)//, config)
			//{ headers: { Authorization: `Bearer ${ state.data.user.access_token }` }})
			state.detail= res.data;
	alertify.alert("profile created");
		} catch(errors) {
			alertify.alert("logging out");
			//logout()
		}
	}
	const refreshToken = async function(refresh = state.data.refresh_token) {
		try {
			const res = await axios.post(`${BASE}/v1/rest/api/auth/token/refresh/`, { refresh }, );
			const resp = res.data;
			localStorage.setItem("user", JSON.stringify(resp));
			alert("refreshed")
		} catch(errors) {
			localStorage.removeItem("loggedin"),
			location.href="/account/login"
		}
	};
const verifyToken = async function(token = state.data.access_token){
	try {
	const res = await axios.post(`${BASE}/v1/rest/api/auth/token/verify/`, {token})
	return res.data
	} catch(errors) {
	localStorage.removeItem("loggedin"),
	location.href="/account/login"
		//refreshToken() 
	}
};

const resetPassword = async function(email) {
		try {
			const res = await axios.post(`${BASE}/v1/rest/api/auth/password/reset/`, { email });
			const resp = res.data
			alertify.alert("Password reset successful")
			router.push("/account/confirm_password")
		} catch(errors) {
				alertify.alert(errors);
				$errors.code = errors.response.status;
				$errors.message= "Username or password error"
		}
	};

const login = async function(username, password) {
		try {
			const res = await axios.post(`${BASE}/v1/rest/api/auth/login/`, { username, password },);
			const resp = res.data
			localStorage.setItem("user", JSON.stringify(resp));
			localStorage.setItem("loggedin", true),
			alertify.success("loggedin")
			location.href="/"
		} catch(errors) {
		alertify.alert(errors)
				}
	};
/*
const logout = async function(){
	try {
		const res = await axios.post(`${BASE}/v1/rest/api/auth/logout/`, config)
	const resp = res.data
	localStorage.removeItem("user");
	localStorage.removeItem("loggedin");
	alertify.alert("loggedout")
	//router.push("/account/login")
	location.href="/";
	} catch(errors) {
		return "errors"
	}
	localStorage.removeItem("user");

};
*/
const register = async function(kw){
	try {
		const res = await axios.post(`${BASE}/v1/rest/api/auth/signup/`, kw )
		alertify.alert(res.data.data);
	} catch(errors){
		alertify.alert(JSON.stringify(errors.response));
	}
};	

const auth = computed(() => state.data);

const authRequired = function() {
	if (! isAuthenticated) {
			$router.push(`${BASE}/account/login`)
		}
	};
console.log(JSON.stringify(state.data))
 export default { state,
	 //: readonly(state),
	 			 resetPassword,
				 login, 
				 register,
	 			 logout,
   //config,
   auth,
	 verifyToken,
	 refreshToken,
	 			 BASE,
 getProfile
 }


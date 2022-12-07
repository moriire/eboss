<template>
    <button @click="pay()" class="btn btn-lg btn-primary" type="btn" role="button">Start Saving</button>
</template>

<script>
import axios from "axios" ;
const config = { headers: {
                  "Authorization" : "Bearer sk_test_16759b9ed66917e74a4f662abb89ab6db13e5b67",
                  "Content-Type": "application/json"

                  }
}
export default {
  name: "BtnSave",
  props: {
    email: {
        type: String,
        default:"",
            },
    amount: {
        type: String,
        default: ""
    },
    first_name: {
      type: String,
      default: ""
    },
    last_name: {
      type: String,
      default: ""
    },
    plan_code: {
      type: String,
      default: ""                        },
  },
   methods: {
    async pay() {
      try {
        const res = await axios.post("https://api.paystack.co/transaction/initialize", {
        email: this.email,
        amount: this.amount,
        first_name: this.first_name,
        last_name: this.last_name,
	plan_code: this.plan_code
        },
        config
    );
        if (res.status===200 && res.data.status) {
          alert(res.data.message)
          location.href = res.data.data.authorization_url
        } else {
          alert(res.data.message)
        }
      } catch(errors) {
        alert(JSON.stringify(errors))
      }
      
    }
  },

}
</script>

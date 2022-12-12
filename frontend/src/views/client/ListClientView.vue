<template>
 <!--Section: Sales Performance KPIs-->
 {{ selected }}
    <section class="mb-4">
      <div class="card">
        <div class="card-header text-center py-3">
          <h5 class="mb-0 text-center">
            <strong>{{ global.state.loggedIn? global.auth.user.username.toUpperCase() :"null" }} 's registered clients'</strong>
          </h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th scope="col">Indicator</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Mark</th>
                </tr>
              </thead>
              <tbody v-if="pages.clients.data">
                
                <tr v-for="client in pages.clients.data" v-bind:key="client.id">
                  
                  <td>
                    <span class="text-success">
                      <i class="fas fa-caret-up me-1"></i><span>14.0%</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <i class="fas fa-caret-up me-1"></i><span>{{ client.first_name }} {{ client.last_name }}</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <i class="fas fa-caret-up me-1"></i><span>29.6%</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-danger">
                      <i class="fas fa-mark me-1"></i
                        ><span><input type="checkbox" class="checkbox-input input-checkbox" :value="client.id" v-model="selected" /></span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" >
                  </td>
                  <td class="col align-items-right justify-contents-right text-center" colspan="2">
                    <button class="btn btn-large" @click="clientForm">Submit Register</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
    <!--Section: Sales Performance KPIs-->
}
}
</template>

<script>
export default {
  name: 'ListClientView',
  inject: ["global", "pages"],
  data() {
    return {
        selected: [],
    }
  },
  methods: {
    async clientForm() {
      await this.pages.addClient(this.$route.params.id, this.selected)
    },
  },
}
</script>
<style scoped>

</style>


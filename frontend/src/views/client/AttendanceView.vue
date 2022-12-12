<template>
    <section class="mb-4">
      <div class="card">
        <div class="card-header text-center py-3">
          <h5 class="mb-0 text-center">
            <strong>{{ global.auth.user.username.toUpperCase() }} 's registered clients'</strong>
          </h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Mark</th>
                </tr>
              </thead>
              <tbody v-if="pages.clients">
                
                <tr v-for="client in pages.clients.data" v-bind:key="client.id">
                  <td>
                    <span class="text-success">
                      <i class="fas fa-caret-up me-1"></i><span>{{ client.full_name }} </span>
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <span>{{ client.grade }}</span>
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
                  <td colspan="1" >
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
   
</template>

<script>

export default {
  name: 'AttendanceView',
  inject: ["global", "pages"],
  data() {
    return {
        selected: [],
    }
  },
  methods: {
    async clientForm() {
      await this.pages.addRoll(this.global.state.data.pk, this.selected)
    },
  },
}
</script>
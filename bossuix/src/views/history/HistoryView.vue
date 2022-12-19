<template>
    <div class="row gx-lg-5 align-items-center mb-5" style="margin: 10% auto 10% auto; z-index: 10; min-height:70vh">
            <div class="col-lg-6">
              <div class="card">
                <div class="card-header py-3">
                  <h5 class="mb-0 text-center">
                    <strong>Sales Performance KPIs</strong>
                  </h5>
                </div>
                <div class="card-body">
                  <PieChart :chart-data="chartData" />
                </div>
              </div>
               </div>
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-header text-center py-3">
                  <h5 class="mb-0 text-center">
                    <strong>Sales Performance KPIs</strong>
                  </h5>
                 </div>
                 <div class="card-body">
                  <BarChart :chart-data="chartData" />
                 </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header py-3">
                  <h5 class="mb-0 text-center">
                    <strong>Sales Performance KPIs</strong>
                  </h5>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover text-nowrap">
                      <thead>
                        <tr>
                          <th scope="col">Full Name</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Grade</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody  v-if="pages.clients" >
                        <tr v-for="client in pages.clients.data" v-bind:key="client.id">
                          <th scope="row">{{ client.full_name }}</th>
                          <td>{{ client.gender }}</td>
                          <td>{{ client.grade }}</td>
                          <td><router-link :to="{path: `/client/user/${client.id}` }" >View</router-link></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
               </div>
          </div>
      
</template>     
<script>
import BarChart from "@/components/BarChart.vue";
import PieChart from "@/components/PieChart.vue";

export default {
  name: 'HistoryView',
  inject: ["pages", "graph"],
  components: { BarChart, PieChart },
  data() {
      return {
  	chartData: {
	label: 'Data One',
	backgroundColor: '#f87979',
        labels: Object.keys(this.graph.byGenders.data),
        datasets: [ { data: Object.values(this.graph.byGenders.data),
                         backgroundColor: [
                                        'rgb(255, 99, 132)',
                                        'rgb(54, 162, 235)',
                                        'rgb(255, 205, 86)',
                                        'rgb(54, 162, 235)',
                                        'rgb(160, 162, 235)',
                                        'rgb(255, 25, 86)'
                                      ],} ],
	},                  chartId: 'bar-chart',              datasetIdKey: 'label',             width: 400,                        height: 400,
        chartOptions: {
          responsive: true
        },
    }
  }, 
}
</script>

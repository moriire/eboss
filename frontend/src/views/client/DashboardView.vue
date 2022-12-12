<template>	
 <!-- Section: Main chart -->
    <section class="">
      <div class="card">
        <div class="card-header py-3">
          <h5 class="mb-0 text-center"><strong>Sales</strong></h5>
        </div>
        <div class="card-body">
          <BarChart :chart-data="chartData" />
        </div>
      </div>
    </section>
<!--Main layout-->
</template>

<script>
import BarChart from "@/components/BarChart.vue";

export default {
  name: 'DashboardView',
  inject: ["pages", "graph"],
  components: { BarChart,},
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
                                        'rgb(255, 205, 86)'
                                      ],
                       } ],
	},    chartId: 'bar-chart',
                datasetIdKey: 'label',             width: 400,                        height: 400,
        chartOptions: {
          responsive: true
        },
    }
  }, 
}
</script>

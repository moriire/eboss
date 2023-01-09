<template>
    <table class="table">
                    <thead>
                      <th>
                        <td>gagagag</td>
                        <td>ahhaha</td>
                        <td>hahahah</td>
                      </th>
                      </thead>
                      <tbody v-if="savings.length>0">
                        <tr v-for="saving in savings"  v-bind:key="saving.id">
                        <td>{{ saving }}</td>
                        <td>ahhaha</td>
                        <td>hahahah</td>
                      </tr>
                      </tbody>
                      <tbody v-else>
                      Nothing yet!
                      </tbody>
                    </table>
</template>

<script>
export default {
  name: 'ProfileSavings',
  props: {
    savings: Array,
  }
}
</script>
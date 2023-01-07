<template>
  <section>
    <div class="container my-5">
      <PieChart :chartData="testData"/>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue';
import {PieChart} from 'vue-chart-3';
import {Chart, registerables} from "chart.js";
import {CommentsAPI} from "@/api/comments.api";

Chart.register(...registerables);

export default defineComponent({
  name: 'Charts',
  components: {PieChart},
  data() {
    return {
      testData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
          },
        ],
      }
    }
  },
  async created() {
    const comments = await CommentsAPI.getComments(this.$route.params.id)
    comments.data.map((comment) => {
      this.testData.labels.push(comment.email)
      this.testData.datasets[0].data.push(comment.email.length)
      this.testData.datasets[0].backgroundColor.push('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
    })
  }
});
</script>



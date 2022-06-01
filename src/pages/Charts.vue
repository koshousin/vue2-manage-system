<template>
    <div class="route-wrapper">
      <div class="route-head">
        charts 图表
      </div>
      <div class="route-content">
        <div class="chart-wrapper">
          <h3>柱状图</h3>
          <div class="chart-display">
            <Bar
            :chartOptions="barItems.options"
            :chartData="barItems.data"
            chartId="bar-chart"
            :height="300"
            :width="400"
          />
          </div>
        </div>
        <div class="chart-wrapper">
          <h3>折线图</h3>
          <div class="chart-display">
             <MyLine
              :chartData="lineItems.data"
              :chartOptions="lineItems.options"
              chartId="line-chart1"
              :height="300"
              :width="400"
            />
          </div>
        </div>
        <div class="chart-wrapper">
          <h3>饼状图</h3>
          <div class="chart-display">
            <Pie
              :chart-options="pieItems.options"
              :chart-data="pieItems.data"
              chart-id="pie-chart"
              dataset-id-key="pie"
              :height="400"
              :width="400"
            />
          </div>
        </div>
        <div class="chart-wrapper">
          <h3>环状图</h3>
          <div class="chart-display">
            <Doughnut
              :chart-options="doughnutItems.options"
              :chart-data="doughnutItems.data"
              chart-id="doughnut-chart"
              :height="400"
              :width="400"
            />
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import { Bar,Line as MyLine,Pie,Doughnut} from 'vue-chartjs/legacy'
  import { 
    Chart as ChartJS, Title, Tooltip, 
    Legend, BarElement, CategoryScale, 
    LinearScale ,LineElement,PointElement,
    ArcElement} from 'chart.js'
  ChartJS.register(
    Title, Tooltip, Legend, 
    BarElement, CategoryScale, 
    LinearScale,LineElement,PointElement,
    ArcElement)

  export default {
    name:'Charts',
    components:{
      Bar,
      MyLine,
      Pie,
      Doughnut
    },
    data(){
      return {
        barItems:{
          data: {
            labels: [ '周一', '周二', '周三','周四','周五' ],
            datasets: [
               {label:'家电',backgroundColor:'skyblue',data:[234,278,270,190,230]}, 
               {label:'百货',backgroundColor:'orange',data:[164,178,190,135,160]},
               {label:'食品',backgroundColor:'red',data:[144,198,150,235,120]},
            ],
          },
          options: {
            responsive: true,
            plugins:{
              title:{
                display:true,
                font:{
                  size:20
                },
                text:'最近一周各类品销售图'
              }
            },
          }
        },
        lineItems:{
          data: {
            labels: [ '六月', '七月', '八月','九月','十月'],
            datasets: [
               {label:'家电',borderColor:'skyblue',data:[234,278,270,190,230],fill:true,}, 
               {label:'百货',borderColor:'orange',data:[164,178,190,135,160],fill:false},
               {label:'食品',borderColor:'red',data:[144,198,150,235,120],fill:false},
            ],
          },
          options: {
            responsive: true,
            // animations: {
            //   tension: {
            //     duration: 1000,
            //     easing: 'linear',
            //     from: 1,
            //     to: 0,
            //     loop: true
            //   }
            // },
            plugins:{
              title:{
                display:true,
                font:{
                  size:20
                },
                text:'最近几个月各类品销售趋势图'
              },
            },
            elements:{
              point :{
                pointStyle:'triangle'
              }
            }
          }
        },
        pieItems:{
          data:{
            labels:['T恤','牛仔裤','连衣裙','毛衣','七分裤','短裙','羽绒服'],
            datasets:[{
              backgroundColor:['#4A90E2','#F5A623','#FF5858','#94,100,255','#2AC766','#743EE2','#B554FF'],
              data:[141,334,278,190,235,260,200],
              label: 'My First Dataset',
            }]
          },
          options:{
            responsive:true,
            maintainAspectRatio: false,
            plugins:{
              title:{
                display:true,
                font:{
                  size:20
                },
                text:'服装品类销售饼状图'
              }
            },
          }
        },
        doughnutItems:{
          data:{
            labels:['Vue','React','Angular'],
            datasets:[
              {
                backgroundColor:['#41B883', '#E46651', '#00D8FF'],
                data:[33,33,34]
              }
            ],
          },
          options:{
            responsive:true,
            maintainAspectRatio: false,
            plugins:{
              title:{
                position:'left'
              }
            }
          }
        }
      }
    }
  }
</script>
<style scoped>
  .chart-wrapper{
    padding:3rem;
  }
  h3 {
    font-size : 2.5rem;
    padding:1rem 0;
  }
  .chart-display {
    background-color:rgb(251,251,251);
    width:60rem;
    height:50rem;
    padding:3rem;
  }
</style>

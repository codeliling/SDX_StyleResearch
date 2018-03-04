<style scoped>
  .chart{
    width: 400px;
    height:400px;
    margin: 10px;
  }

  .chartVolumn{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<template>
  <div class="chartVolumn">
    <div id="chart1" class="chart"></div>
    <div id="chart2" class="chart"></div>
    <div id="chart3" class="chart"></div>
    <div id="chart4" class="chart"></div>
    <div id="chart5" class="chart"></div>
    <div id="chart6" class="chart"></div>
  </div>

</template>

<script>

import echarts from 'echarts'

export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
                opinionData:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ]
            }
        },
        methods:{
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 tooltip: {
                   trigger: 'item',
                   formatter: '{a}<br/>{b}:{c} ({d}%)'
                 },
                 legend: {
                   orient: 'vertical',
                   x: 'left',
                   data:this.opinion
                 },
                 series: [
                   {
                     name:'访问来源',
                     type:'pie',
                     radius:['50%','70%'],
                     avoidLabelOverlap: false,
                     label: {
                       normal: {
                         show: false,
                         position: 'center'
                       },
                       emphasis: {
                         show: true,
                         textStyle: {
                           fontSize: '30',
                           fontWeight: 'blod'
                         }
                       }
                     },
                     labelLine: {
                       normal: {
                         show: false
                       }
                     },
                     data:this.opinionData
                   }
                 ]
               })
            }
        },
        mounted(){
            this.$nextTick(function() {
                this.drawPie('chart1');
                this.drawPie('chart2');
                this.drawPie('chart3');
                this.drawPie('chart4');
                this.drawPie('chart5');
                this.drawPie('chart6');
            })
        }
    }
</script>

<style scoped>
@media screen and (max-width: 1400px) {
  .chart{
    width: 400px;
    height:400px;
    margin: 10px;
  }
}

@media screen and (min-width: 1400px) {
  .chart{
    width: 500px;
    height:500px;
    margin: 10px;
  }
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
  </div>

</template>

<script>

import echarts from 'echarts'
import util from '../libs/util';
export default {
        name: '',
        data () {
            return {
                weekColumnChart:'',
                weekColumnXAxis:[],
                weekColumnData:[],
                monthLineChart:'',
                monthLineXAxis:[],
                monthLineData:[],
                yearPieData:[]
            }
        },
        methods:{
            drawColumn(id){
              this.weekColumnChart = echarts.init(document.getElementById(id));

              // 指定图表的配置项和数据
              var option = {
                  color:['#3398DB','#00695c','#00838f'],
                  title: {
                      text: '按周搭配统计'
                  },
                  tooltip: {},
                  legend: {
                      data:['搭配数量']
                  },
                  xAxis: {
                      data: this.weekColumnXAxis
                  },
                  yAxis: {},
                  series: [{
                      name: '搭配数',
                      type: 'bar',
                      data: this.weekColumnData
                  }]
              };

              // 使用刚指定的配置项和数据显示图表。
              this.weekColumnChart.setOption(option);
            },
            drawLine(id){
              this.monthLineChart = echarts.init(document.getElementById(id));

              // 指定图表的配置项和数据
              var option = {
                  title: {
                      text: '按月搭配统计'
                  },
                  tooltip: {},
                  legend: {
                      data:['搭配数量']
                  },
                  xAxis: {
                      type:'category',
                      data: this.monthLineXAxis
                  },
                  yAxis: {
                      type:'value'
                  },
                  series: [{
                      name: '搭配',
                      type: 'line',
                      data: this.monthLineData
                  }]
              };

              // 使用刚指定的配置项和数据显示图表。
              this.monthLineChart.setOption(option);
            },
            drawShadowPie(id){
              var option = {
                color:['#00695c','#3398DB','#00838f'],
                  title: {
                    text: '按年搭配统计'
                  },
                   tooltip:{
                     trigger:'item'
                   },
                   series : [
                      {
                          name: '年统计',
                          type: 'pie',
                          radius: '55%',
                          roseType:'angle',
                          data:this.yearPieData
                      }
                  ],
                  itemStyle: {
                      // 阴影的大小
                      shadowBlur: 200,
                      // 阴影水平方向上的偏移
                      shadowOffsetX: 0,
                      // 阴影垂直方向上的偏移
                      shadowOffsetY: 0,
                      // 阴影颜色
                      shadowColor: 'rgba(0, 0, 0, 0.5)',
                      emphasis: {
                          shadowBlur: 200,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              };
              echarts.init(document.getElementById(id)).setOption(option);
            },
            loadData(timeSection) {
              let that = this;
              let message = this.$Message;
              var dataUrl = "";
              if (timeSection == 'week'){
                dataUrl = '/dggl/match/getStatisticsDataByWeek';
              }
              else if (timeSection == 'month'){
                dataUrl = '/dggl/match/getStatisticsDataByMonth';
              }
              else if (timeSection == 'year'){
                dataUrl = '/dggl/match/getStatisticsDataByYear';
              }
              util.ajax.get(dataUrl, {
                      params:{

                      }
                  }, {
                      headers: {
                          "Content-Type": "application/json"
                      }
                  })
                  .then(function(response) {
                      if (response.data.success == true) {
                        let o = response.data.object;
                        if (o != null){

                          if (timeSection == 'week'){
                            for (var key in o){
                              that.weekColumnXAxis.push(key);
                              that.weekColumnData.push(o[key]);
                            }
                            that.drawColumn('chart1');
                          }
                          else if (timeSection == 'month'){
                            for (var key in o){
                              that.monthLineXAxis.push(key);
                              that.monthLineData.push(o[key]);
                            }
                            that.drawLine('chart2');
                          }
                          else if (timeSection == 'year'){
                            for (var key in o){
                              that.yearPieData.push({'value':o[key],'name':key});
                            }
                            that.yearPieData.push({'value':21120,'name':2016});
                            console.log(that.yearPieData);
                            that.drawShadowPie('chart3');
                          }
                        }

                      } else {
                        message.error(response.data.message);
                      }
                  })
                  .catch(function(response) {
                      message.error('获取数据操作失败!');
                  });
            }
        },
        mounted(){
            this.$nextTick(function() {
                //this.drawPie('chart1');
                this.loadData('week');
                this.loadData('month');
                this.loadData('year');
            })
        }
    }
</script>

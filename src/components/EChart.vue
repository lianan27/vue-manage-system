<template>
  <div style="height: 100%" ref="echart">echart</div>
</template>

<script>
import * as echarts from 'echarts'
// import echarts from 'echarts' 这样子写会报错
export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        }
      },
    },
    // 通过这个配置来选择要哪个配置
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    },
  },
  watch: {
    chartData: {
      handler: function () {
        this.initChart()
      },
      //   打开该选项
      deep: true,
    },
  },
  data() {
    return {
      echart: null,
      //   有坐标轴的选项
      axisOption: {
        xAxis: {
          type: 'category',
          data: [],
        },
        yAxis: [
          {
            type: 'value',
          },
        ],
        color: [],
        series: [],
      },
      //   没有坐标轴的图标
      normalOption: {
        series: [],
      },
    }
  },
  //   定义一个方法来渲染图表
  methods: {
    initChart() {
      this.initChartData()
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        this.axisOption.series = this.chartData.series
      }
    },
  },
}
</script>

<style lang="scss"></style>

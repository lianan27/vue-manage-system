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
    // 折叠菜单之后图标发生变化
    isCollapse() {
      return this.$store.state.tab.isCollapse
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
    // 设置一个延时，并添加一个触发函数
    isCollapse() {
      setTimeout(() => {
        this.resizeChart
      }, 300)
    },
  },
  data() {
    return {
      echart: null,
      //   有坐标轴的选项
      axisOption: {
        // 坐标轴的种类
        legend: {
          textStyle: {
            color: '#333',
          },
        },
        grid: {
          left: '20%',
        },
        // 悬浮提示
        tooltip: {
          trgger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3',
            },
          },
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3',
              },
            },
          },
        ],
        color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80'],
        series: [],
      },
      //   没有坐标轴的图标
      normalOption: {
        tooltip: {
          trgger: 'axis',
        },
        color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
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
    resizeChart() {
      this.echart ? this.echart.resize() : ''
    },
  },
  // 自适应图表尺寸
  mounted() {
    window.addEventListener('resize', this.resizeChart)
  },
  // 避免内存泄漏，销毁事件
  destroyed() {
    window.removeEventListener('resize', this.resizeChart)
  },
}
</script>

<style lang="scss"></style>

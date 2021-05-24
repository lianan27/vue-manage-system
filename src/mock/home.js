import Mock from 'mockjs'

// 图表数据
let List = []
// 输出函数，在index里面使用这个函数作为使用数据
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          vue: Mock.Random.float(100, 8000, 0, 2),
          wechat: Mock.Random.float(100, 8000, 0, 2),
          ES6: Mock.Random.float(100, 8000, 0, 2),
          Redis: Mock.Random.float(100, 8000, 0, 2),
          React: Mock.Random.float(100, 8000, 0, 2),
          springboot: Mock.Random.float(100, 8000, 0, 2),
        })
      )
    }
    return {
      // 真实数据使用的是200作为结果的，为了区分真实数据使用20000
      code: 20000,
      data: {
        // 折线图
        orderData: {
          date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
          data: List,
        },
        tableData: [
          {
            name: 'ES6',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
          },
          {
            name: '小程序',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
          },
          {
            name: 'Vue',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
          },
          {
            name: 'Springboot',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
          },
          {
            name: 'React',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
          },
          {
            name: 'Redis',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(1000, 10000, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
          },
        ],
        // 饼图
        videoData: [
          {
            name: 'SpringBoot',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'Vue',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: '小程序',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'SpringBoot',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'ES6',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'Java',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周二',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周三',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周四',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周五',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周六',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周日',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
        ],
      },
    }
  },
}

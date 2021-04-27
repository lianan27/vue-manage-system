import Mock from 'mockjs'

// 输出函数，在index里面使用这个函数作为使用数据
export default {
  getHomeData: () => {
    return {
      // 真实数据使用的是200作为结果的，为了区分真实数据使用20000
      code: 20000,
      data: {
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
      },
    }
  },
}

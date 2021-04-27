import Mock from 'mockjs'
import homeApi from './home'

// 延时200-2000毫秒延时
Mock.setup({
  timeout: '200-2000',
})

// 首页相关，写一个正则进行判断，判断由home作为路径的参数,拦截home\getData这个路径
// 拦截的是 /home/getData,homeApi.getHomeData作为响应数据返回到axios
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)

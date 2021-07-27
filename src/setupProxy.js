// 文件名setupProxy不可改变，必须在src的文件夹中
const proxy=require('http-proxy-middleware')
module.exports=function(app){
  // api1必须在端口号之后
  // 前端请求的时候的地址：'http://localhost:3000/api1/student'
  // 前端请求的时候的地址：'/api1/student'
  // 要把哪些前缀的请求发送给代理
  app.use(
    proxy('/api1',{
      // 转发给谁
      // 这个时候请求的地址相当于'http://localhost:5000/api1/student'
      target:'http://localhost:5000',
      // 让服务器知道请求是哪里发出来的
      // 控制服务器收到的响应头中host字段的值
      changeOrigin:true,
      // 属性1：要替换的前缀（重写请求路径）
      // 这个时候请求的地址相当于'http://localhost:5000/student'
      pathRewrite:{'^/api1':''}
    }),



  // 前端请求的时候的地址：'http://localhost:3000/api2/cars'
    proxy('/api2',{
      // 转发给谁
      // 这个时候请求的地址相当于'http://localhost:5001/api2/cars'
      target:'http://localhost:5001',
      // 让服务器知道请求时哪里发出来的
      changeOrigin:true,
      // 属性1：要替换的前缀
      // 这个时候请求的地址相当于'http://localhost:5001/cars'
      pathRewrite:{'^/api2':''}
    }),
  )
}
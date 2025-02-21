import comp from "D:/book/My-Note/docs/.vuepress/.temp/pages/md/framework/spring/SpringCloud/Spring_Cloud_Hystrix原理.html.vue"
const data = JSON.parse("{\"path\":\"/md/framework/spring/SpringCloud/Spring_Cloud_Hystrix%E5%8E%9F%E7%90%86.html\",\"title\":\"Hystrix原理\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"工作流程\",\"slug\":\"工作流程\",\"link\":\"#工作流程\",\"children\":[{\"level\":3,\"title\":\"1.创建HystrixCommand或HystrixObservableCommand对象\",\"slug\":\"_1-创建hystrixcommand或hystrixobservablecommand对象\",\"link\":\"#_1-创建hystrixcommand或hystrixobservablecommand对象\",\"children\":[]},{\"level\":3,\"title\":\"2.命令执行\",\"slug\":\"_2-命令执行\",\"link\":\"#_2-命令执行\",\"children\":[]},{\"level\":3,\"title\":\"3.结果是否被缓存\",\"slug\":\"_3-结果是否被缓存\",\"link\":\"#_3-结果是否被缓存\",\"children\":[]},{\"level\":3,\"title\":\"4.断路器是否打开\",\"slug\":\"_4-断路器是否打开\",\"link\":\"#_4-断路器是否打开\",\"children\":[]},{\"level\":3,\"title\":\"5.线程池/请求队列/信号量是否占满\",\"slug\":\"_5-线程池-请求队列-信号量是否占满\",\"link\":\"#_5-线程池-请求队列-信号量是否占满\",\"children\":[]},{\"level\":3,\"title\":\"6.HystrixObservableCommand.construct ()或HystrixCommand.run()\",\"slug\":\"_6-hystrixobservablecommand-construct-或hystrixcommand-run\",\"link\":\"#_6-hystrixobservablecommand-construct-或hystrixcommand-run\",\"children\":[]},{\"level\":3,\"title\":\"7.计算断路器的健康度\",\"slug\":\"_7-计算断路器的健康度\",\"link\":\"#_7-计算断路器的健康度\",\"children\":[]},{\"level\":3,\"title\":\"8.fallback处理\",\"slug\":\"_8-fallback处理\",\"link\":\"#_8-fallback处理\",\"children\":[]},{\"level\":3,\"title\":\"9.返回成功的响应\",\"slug\":\"_9-返回成功的响应\",\"link\":\"#_9-返回成功的响应\",\"children\":[]}]},{\"level\":2,\"title\":\"断路器原理\",\"slug\":\"断路器原理\",\"link\":\"#断路器原理\",\"children\":[{\"level\":3,\"title\":\"isOpen()：判断断路器的打开/关闭状态\",\"slug\":\"isopen-判断断路器的打开-关闭状态\",\"link\":\"#isopen-判断断路器的打开-关闭状态\",\"children\":[]},{\"level\":3,\"title\":\"allowRequest()：判断请求是否被允许\",\"slug\":\"allowrequest-判断请求是否被允许\",\"link\":\"#allowrequest-判断请求是否被允许\",\"children\":[]},{\"level\":3,\"title\":\"markSuccess()\",\"slug\":\"marksuccess\",\"link\":\"#marksuccess\",\"children\":[]}]},{\"level\":2,\"title\":\"依赖隔离(舱壁模式)\",\"slug\":\"依赖隔离-舱壁模式\",\"link\":\"#依赖隔离-舱壁模式\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"md/framework/spring/SpringCloud/Spring_Cloud_Hystrix原理.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

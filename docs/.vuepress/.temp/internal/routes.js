export const redirects = JSON.parse("{\"/md/code/C#/c#%E5%9F%BA%E7%A1%80.html\":\"/md/code/C_/c_%E5%9F%BA%E7%A1%80.html\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/md/computer/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%9F%BA%E7%A1%80.html", { loader: () => import(/* webpackChunkName: "md_computer_操作系统基础.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/computer/操作系统基础.html.js"), meta: {"title":"基础"} }],
  ["/md/computer/%E8%BD%AF%E4%BB%B6%E8%AE%BE%E8%AE%A1.html", { loader: () => import(/* webpackChunkName: "md_computer_软件设计.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/computer/软件设计.html.js"), meta: {"title":"需求的任务"} }],
  ["/md/db/ElasticSearch.html", { loader: () => import(/* webpackChunkName: "md_db_ElasticSearch.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/db/ElasticSearch.html.js"), meta: {"title":"ElasticSearch"} }],
  ["/md/db/oracle%E4%BC%98%E5%8C%96.html", { loader: () => import(/* webpackChunkName: "md_db_oracle优化.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/db/oracle优化.html.js"), meta: {"title":"基数"} }],
  ["/md/db/SQL.html", { loader: () => import(/* webpackChunkName: "md_db_SQL.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/db/SQL.html.js"), meta: {"title":"sql语句"} }],
  ["/md/db/%E5%87%BD%E6%95%B0%E3%80%81%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E5%92%8C%E8%A7%86%E5%9B%BE.html", { loader: () => import(/* webpackChunkName: "md_db_函数、存储过程和视图.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/db/函数、存储过程和视图.html.js"), meta: {"title":"函数、存储过程和视图"} }],
  ["/md/linux/linux%E5%B7%A5%E5%85%B7.html", { loader: () => import(/* webpackChunkName: "md_linux_linux工具.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/linux/linux工具.html.js"), meta: {"title":"工具"} }],
  ["/md/linux/shell%E7%BC%96%E7%A8%8B.html", { loader: () => import(/* webpackChunkName: "md_linux_shell编程.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/linux/shell编程.html.js"), meta: {"title":"shell编程"} }],
  ["/md/linux/shell%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80.html", { loader: () => import(/* webpackChunkName: "md_linux_shell编程基础.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/linux/shell编程基础.html.js"), meta: {"title":"shell基础"} }],
  ["/md/linux/vi%E7%BC%96%E8%BE%91%E5%99%A8.html", { loader: () => import(/* webpackChunkName: "md_linux_vi编辑器.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/linux/vi编辑器.html.js"), meta: {"title":"vi文本编辑器"} }],
  ["/md/linux/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html", { loader: () => import(/* webpackChunkName: "md_linux_基础知识.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/linux/基础知识.html.js"), meta: {"title":"Liunx基础"} }],
  ["/md/linux/%E5%A4%87%E4%BB%BD%E4%B8%8E%E6%81%A2%E5%A4%8D.html", { loader: () => import(/* webpackChunkName: "md_linux_备份与恢复.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/linux/备份与恢复.html.js"), meta: {"title":"备份与恢复"} }],
  ["/md/linux/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86.html", { loader: () => import(/* webpackChunkName: "md_linux_文件系统管理.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/linux/文件系统管理.html.js"), meta: {"title":"文件系统管理"} }],
  ["/md/linux/%E6%9C%8D%E5%8A%A1%E7%AE%A1%E7%90%86.html", { loader: () => import(/* webpackChunkName: "md_linux_服务管理.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/linux/服务管理.html.js"), meta: {"title":"服务管理"} }],
  ["/md/linux/%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86.html", { loader: () => import(/* webpackChunkName: "md_linux_权限管理.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/linux/权限管理.html.js"), meta: {"title":"权限管理"} }],
  ["/md/linux/%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86.html", { loader: () => import(/* webpackChunkName: "md_linux_系统管理.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/linux/系统管理.html.js"), meta: {"title":"系统管理"} }],
  ["/md/music/%E4%B9%90%E7%90%86%E5%9F%BA%E7%A1%80.html", { loader: () => import(/* webpackChunkName: "md_music_乐理基础.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/music/乐理基础.html.js"), meta: {"title":"基础"} }],
  ["/md/code/C_/c_%E5%9F%BA%E7%A1%80.html", { loader: () => import(/* webpackChunkName: "md_code_C__c_基础.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/code/C_/c_基础.html.js"), meta: {"title":"c#基础"} }],
  ["/md/code/java/HashMap%E7%B1%BB.html", { loader: () => import(/* webpackChunkName: "md_code_java_HashMap类.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/code/java/HashMap类.html.js"), meta: {"title":"HashMap"} }],
  ["/md/code/java/STL%E5%BA%93.html", { loader: () => import(/* webpackChunkName: "md_code_java_STL库.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/code/java/STL库.html.js"), meta: {"title":"STL库继承图"} }],
  ["/md/code/java/%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84.html", { loader: () => import(/* webpackChunkName: "md_code_java_服务架构.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/code/java/服务架构.html.js"), meta: {"title":"架构基础"} }],
  ["/md/code/java/%E7%BA%BF%E7%A8%8B.html", { loader: () => import(/* webpackChunkName: "md_code_java_线程.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/code/java/线程.html.js"), meta: {"title":"java线程简介"} }],
  ["/md/framework/spring/MyBatis.html", { loader: () => import(/* webpackChunkName: "md_framework_spring_MyBatis.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/framework/spring/MyBatis.html.js"), meta: {"title":"MyBatis"} }],
  ["/md/framework/spring/Spring%E5%9F%BA%E7%A1%80.html", { loader: () => import(/* webpackChunkName: "md_framework_spring_Spring基础.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/framework/spring/Spring基础.html.js"), meta: {"title":"简介"} }],
  ["/md/framework/spring/SpringCloud/SpringCloud.html", { loader: () => import(/* webpackChunkName: "md_framework_spring_SpringCloud_SpringCloud.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/framework/spring/SpringCloud/SpringCloud.html.js"), meta: {"title":"微服务基础"} }],
  ["/md/framework/spring/SpringCloud/Spring_Cloud_Hystrix%E5%8E%9F%E7%90%86.html", { loader: () => import(/* webpackChunkName: "md_framework_spring_SpringCloud_Spring_Cloud_Hystrix原理.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/framework/spring/SpringCloud/Spring_Cloud_Hystrix原理.html.js"), meta: {"title":"Hystrix原理"} }],
  ["/md/framework/spring/SpringCloud/Spring_Cloud_Ribbon%E6%BA%90%E7%A0%81.html", { loader: () => import(/* webpackChunkName: "md_framework_spring_SpringCloud_Spring_Cloud_Ribbon源码.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/md/framework/spring/SpringCloud/Spring_Cloud_Ribbon源码.html.js"), meta: {"title":"负载均衡器"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/book/My-Note/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

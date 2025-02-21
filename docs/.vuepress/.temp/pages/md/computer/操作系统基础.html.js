import comp from "D:/book/My-Note/docs/.vuepress/.temp/pages/md/computer/操作系统基础.html.vue"
const data = JSON.parse("{\"path\":\"/md/computer/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%9F%BA%E7%A1%80.html\",\"title\":\"基础\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"进程\",\"slug\":\"进程\",\"link\":\"#进程\",\"children\":[]},{\"level\":2,\"title\":\"存储管理\",\"slug\":\"存储管理\",\"link\":\"#存储管理\",\"children\":[]},{\"level\":2,\"title\":\"设备管理\",\"slug\":\"设备管理\",\"link\":\"#设备管理\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"md/computer/操作系统基础.md\"}")
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

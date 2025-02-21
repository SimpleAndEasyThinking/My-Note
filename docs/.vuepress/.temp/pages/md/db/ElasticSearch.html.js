import comp from "D:/book/My-Note/docs/.vuepress/.temp/pages/md/db/ElasticSearch.html.vue"
const data = JSON.parse("{\"path\":\"/md/db/ElasticSearch.html\",\"title\":\"ElasticSearch\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"基础\",\"slug\":\"基础\",\"link\":\"#基础\",\"children\":[{\"level\":3,\"title\":\"聚合查询\",\"slug\":\"聚合查询\",\"link\":\"#聚合查询\",\"children\":[]}]},{\"level\":2,\"title\":\"复合查询\",\"slug\":\"复合查询\",\"link\":\"#复合查询\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"md/db/ElasticSearch.md\"}")
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

import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

//插件
import { copyrightPlugin } from "@vuepress/plugin-copyright";
import { markdownMathPlugin } from "@vuepress/plugin-markdown-math";
//import { catalogPlugin } from '@vuepress/plugin-catalog'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      // NavbarLink
      // NavbarGroup
      //编程语言
      {
        text: "编程",
        prefix: "md/code/",
        children: [
          {
            text: "java",
            prefix: "java/",
            children: ["服务架构.md", "线程.md", "HashMap类.md", "STL库.md"],
          },
          {
            text: "C#",
            prefix: "Csharp/",
            children: [
              "csharp基础学习路线.md",
              "csharp基础.md",
              "csharp值类型.md",
              "csharp引用类型.md",
              "csharp引用类型.md",
            ],
          },
        ],
      },
      //算法合集
      {
        text: "算法",
        prefix: "md/algorithm/",
        children: [],
      },
      //数据库，关系型和非关系型
      {
        text: "数据库",
        prefix: "md/db/",
        children: [
          {
            text: "sql基础",
            children: ["SQL.md", "函数、存储过程和视图"],
          },
          "ElasticSearch",
          "oracle优化",
        ],
      },
      //linux
      {
        text: "linux",
        prefix: "md/linux/",
        children: [
          {
            text: "基础知识",
            children: [
              "基础知识.md",
              "vi编辑器.md",
              "权限管理.md",
              "文件系统管理.md",
              "系统管理.md",
              "备份与恢复.md",
              "服务管理.md",
              "日志管理.md",
            ],
          },
          {
            text: "linux软件",
            children: ["linux工具.md"],
          },
          {
            text: "shell",
            children: ["shell编程基础.md", "shell编程.md"],
          },
        ],
      },
      //部署工具，开发工具等
      {
        text: "工具",
        prefix: "md/devops/",
        children: [],
      },
      //框架，各种语言常用框架
      {
        text: "框架",
        prefix: "md/framework/",
        children: [
          {
            text: "Spring",
            prefix: "spring/",
            children: ["Spring基础.md", "MyBatis.md"],
          },
          {
            text: "Spring_Cloud",
            prefix: "spring/SpringCloud/",
            children: [
              "SpringCloud.md",
              "Spring_Cloud_Ribbon源码.md",
              "Spring_Cloud_Hystrix原理.md",
            ],
          },
        ],
      },
      //计算机基础
      {
        text: "计算机基础",
        prefix: "md/computer/",
        children: ["操作系统基础.md","软件设计.md"],
      },
      //电气
      {
        text: "电气",
        prefix: "md/electric/",
        children: [],
      },
      //数学
      {
        text: "数学",
        prefix: "md/math/",
        children: [
          {
            text: "linear algebra",
            prefix: "linearAlgebra/",
            children: ["笔记.md", "线性代数的本质.md"],
          },
          {
            text: "higher",
            prefix: "higher/",
            children: ["高等数学一.md"],
          },
        ],
      },
      //英语
      {
        text: "英语",
        prefix: "md/english/",
        children: [],
      },
      //乐理
      {
        text: "乐理",
        prefix: "md/music/",
        children: ["乐理基础.md"],
      },
      {
        text: "其他",
        prefix: "md/other/",
        children: ["欧陆哲学与英美哲学.md"],
      },
      // 字符串 - 页面文件路径
      //"/bar/README.md",
    ],
    sidebar: {
      "/md/linux/": genSidebarLinux(),
      "/md/framework/spring/": genSidebarSpring(),
      "/md/code/java/": genSidebarJava(),
      "/md/code/Csharp/": genSidebarCsharp(),
      "/md/数据库/": genSidebarDb(),
    },
  }),
  port: 3000,
  base: "/",
  lang: "zh-CN",
  title: "NOTE",
  description: "这是我的NOTE站点",
  plugins: [
    copyrightPlugin({
      // options
      global: true,
      triggerLength: 100,
      author: "null",
    }),
    markdownMathPlugin({
      // 可添加 KaTeX 渲染选项
      
    }),
  ],
});

// About page
function genSidebarLinux() {
  return [
    {
      text: "linux系统",
      collapsable: false,
      sidebarDepth: 1,
      children: ["基础知识.md", "权限管理.md"],
    },
    {
      text: "linux工具",
      collapsable: false,
      sidebarDepth: 1,
      children: ["vi编辑器.md"],
    },
    {
      text: "shell编程",
      collapsable: false,
      sidebarDepth: 1,
      children: ["shell编程基础.md", "shell编程.md"],
    },
  ];
}
//Spring目录
function genSidebarSpring() {
  return [
    {
      text: "Spring",
      collapsable: false,
      sidebarDepth: 1,
      children: ["Spring基础.md", "MyBatis.md"],
    },
    {
      text: "Spring Cloud",
      prefix: "SpringCloud/",
      children: [
        "SpringCloud.md",
        "Spring_Cloud_Ribbon源码.md",
        "Spring_Cloud_Hystrix原理.md",
      ],
    },
  ];
}
//csharp的目录
function genSidebarCsharp() {
  return [
    {
      text: "Csharp",
      collapsable: false,
      sidebarDepth: 1,
      children: ["csharp基础.md"],
    },
  ];
}
function genSidebarJava() {
  return [
    {
      text: "java",
      collapsable: false,
      sidebarDepth: 1,
      children: ["线程.md"],
    },
    {
      text: "数据结构",
      children: ["STL库.md", "HashMap类.md"],
    },
  ];
}
function genSidebarDb() {
  return [
    {
      text: "数据结构",
      collapsable: false,
      sidebarDepth: 1,
      children: ["SQL.md", "函数、存储过程和视图.md"],
    },
    {
      text: "ElasticSearch",
      collapsable: false,
      sidebarDepth: 1,
      children: ["ElasticSearch.md"],
    },
  ];
}

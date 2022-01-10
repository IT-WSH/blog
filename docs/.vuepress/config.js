module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '@qmxt/toolset',
  description: '@qmxt/toolset 官方文档',
  base: '/blog/',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
  //想要使侧边栏（Sidebar）生效，需要配置 themeConfig.sidebar
  themeConfig: {
    nav: [ // 导航栏
      {text: '主页', link: '/'},
      {text: 'toolset', link: '/toolset/'},
    ],
  }
}
module.exports = {
  title: 'BIThesis WIKI | 北京理工大学本科生、研究生毕业论文 LaTeX 模板与更多',
  description:
    '北京理工大学非官方 LaTeX 模板集合，包含本科、研究生毕业设计模板，本科全英文专业模板，外文翻译模板以及更多。🎉（更多文档请访问 wiki 和 release 中的手册）',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { property: 'og:image', itemprop: 'image primaryImageOfPage', content: '/img/bithesis.png' }],
  ],
  themeConfig: {
    logo: '/apple-touch-icon.png',
    nav: [
      { text: '文档指南', link: '/Guide/' },
      { text: '系列视频指导', link: '/Video/' },
      { text: '模板下载', link: 'https://github.com/BITNP/BIThesis/releases/latest' },
      {
        text: '加入讨论',
        items: [
          {
            text: 'QQ群:737548118',
            link: 'https://jq.qq.com/?_wv=1027&k=KYDrmS5z',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/BITNP/BIThesis/blob/master/contributing.md',
          },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/BITNP/BIThesis' },
    ],
    sidebar: {
      '/Guide/': [
        ['', '主页'],
        ['1-Intro/First-things-first', '如何开始'],
        ['2-Usage/Downloading-and-using-templates', '下载与使用模板'],
        {
          title: 'BIThesis 模板',
          children: [['3-Templates/Guide-Moved', '模板使用指南已经迁移至示例代码中']],
        },
        {
          title: '其他',
          children: [
            ['4-Others/Converting-to-Word', '将 LaTeX 文档转换为 Word'],
            ['4-Others/Troubleshooting', '疑难杂症'],
          ],
        },
        ['5-Acknowledgements/Acknowledgements', '致谢'],
      ],
      '/Video/': [
        ['', '预告'],
        ['Episode-1', '第一节 综述'],
        ['Episode-2', '第二节 LaTeX 的下载和安装'],
        ['Episode-3', '第三节 LaTeX 基本介绍'],
        ['Episode-4', '第四节 模板的下载与使用'],
        ['Episode-5', '第五节 格式转化'],
        ['Episode-6', '第六节 项目介绍与疑难解惑'],
      ],
      '/': [''],
    },
    sidebarDepth: 3,
    smoothScroll: true,
    lastUpdated: 'Last Updated',
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-footnote'))
    },
  },
  plugins: [
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>',
      },
    ],
    ['check-md'],
  ],
}

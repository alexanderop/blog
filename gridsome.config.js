// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss')

module.exports = {
  siteName: 'Alexander Opalic',
  siteDescription: 'Personal Blog of Alexander Opalic',
  siteUrl: 'https://alexop.dev',
  titleTemplate: `%s | Alexander Opalic`,
  author: 'Alexander Opalic',
  keywords: 'Opalic, Blog, Software, Full Stack',
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',

      // these options are optional, as they are copies of the default values...
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false,
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
  ],
  templates: {
    Tag: '/tag/:id',
    Post: '/blog/:path',
  },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        [
          'gridsome-plugin-remark-prismjs-all',
          {
            highlightClassName: 'gridsome-highlight',
            codeTitleClassName: 'gridsome-code-title',
            classPrefix: 'language-',
            aliases: {},
            noInlineHighlight: false,
            showLineNumbers: false, //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
            languageExtensions: [],
            prompt: {
              //  `require("prismjs/plugins/command-line/prism-command-line.css");`
              user: `root`,
              host: `localhost`,
              global: false,
            },
          },
        ],
      ],
    },
  },
}

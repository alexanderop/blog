// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/global.css'
import DefaultLayout from '~/layouts/Default.vue'
import 'gridsome-plugin-remark-prismjs-all/themes/night-owl.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  let copyRightNotice = `\u00a9 Alexander Opalic, ${new Date().getFullYear()}. All rights reserved`

  head.meta.push(
    {
      key: 'keywords',
      name: 'keywords',
      content: 'Opalic, Blog, Developer',
    },
    {
      name: 'author',
      content: 'Alexander Opalic',
    },
    {
      key: 'description',
      name: 'description',
      content: 'Personal developer Website for Alexander Opalic',
    },

    { name: 'copyright', content: copyRightNotice },
    { key: 'og:type', property: 'og:type', content: 'article' },
    {
      key: 'og:description',
      property: 'og:description',
      content: 'Personal developer Website for Alexander Opalic',
    },
    { property: 'og:site_name', content: 'Alexander Opalic' }
  )
  Vue.component('Layout', DefaultLayout)
}

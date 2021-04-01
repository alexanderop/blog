<template>
  <Layout>
    <article class="xl:divide-y xl:divide-gray-200">
      <header class="pt-6 xl:pb-10">
        <div class="space-y-1 text-center">
          <dl class="space-y-10">
            <div>
              <dt class="sr-only">Published on</dt>
              <dd class="text-base leading-6 font-medium text-gray-300">
                <time :datetime="$page.post.date">{{ $page.post.date }}</time>
              </dd>
            </div>
          </dl>
          <div>
            <h1
              class="text-3xl leading-9 font-extrabold text-gray-200 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
            >
              {{ $page.post.title }}
            </h1>
          </div>
        </div>
      </header>
      <div
        class="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
        style="grid-template-rows: auto 1fr"
      >
        <div
          class="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2"
        >
          <div class="prose max-w-none pt-10 pb-8">
            <div
              class="markdown-body mb-8"
              id="article-area"
              v-html="$page.post.content"
            />
          </div>
        </div>
        <footer
          class="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2"
        >
          <div class="pt-8">
            <a class="text-teal-500 hover:text-teal-600" href="/blog"
              >← Back to the blog</a
            >
          </div>
        </footer>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
}
</script>

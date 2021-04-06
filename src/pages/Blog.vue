<template>
  <Layout>
    <div class="divide-y divide-tertiary">
      <h1
        class="text-3xl leading-9 font-extrabold text-secondary tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        Latest
      </h1>
      <p class="text-lg leading-7 text-gray">All my latest blog posts.</p>
    </div>
    <ul class="divide-y divide-tertiary">
      <li class="py-12" v-for="post in $page.posts.edges" :key="post.id">
        <article
          class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
        >
          <dl>
            <dt class="sr-only">Published on</dt>
            <dd class="text-base leading-6 font-medium">
              <time :datetime="post.node.date">{{ post.node.date }}</time>
            </dd>
          </dl>
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <a class="text-gray-300" :href="post.node.path">{{
                  post.node.title
                }}</a>
              </h2>
              <div class="prose max-w-none text-gray">
                <p>{{ post.node.summary }}</p>
              </div>
            </div>
            <div class="text-base leading-6 font-medium">
              <g-link
                class="text-tertiary hover:text-secondary"
                :to="post.node.path"
                rel="bookmark"
                >Read more →</g-link
              >
            </div>
          </div>
        </article>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'View my blog posts',
  },
}
</script>

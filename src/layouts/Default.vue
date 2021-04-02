<template>
  <div>
    <div class="container mx-auto">
      <Header />
      <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

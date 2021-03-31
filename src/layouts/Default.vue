<template>
  <div class="bg-black">
    <div class="bg-black text-white container mx-auto">
      <Header />
      <main>
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

<style src="../css/main.css" />

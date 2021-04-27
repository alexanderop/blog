<template>
  <header class="p-5">
    <nav
      class="container mx-auto flex flex-wrap justify-between items-center py-8"
    >
      <div>
        <g-link
          to="/"
          class="text-tertiary hover:text-hover border-2 p-2 border-green font-bold"
          >ALEX.DEV</g-link
        >
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded border-purple-500 hover:text-hover hover:border-stext-hover"
        >
          <svg
            class="current-color h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
          </svg>
        </button>
      </div>
      <ul
        class="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
        :class="isOpen ? 'block' : 'hidden'"
      >
        <li>
          <g-link to="/about" class="text-copy-primary hover:text-hover"
            >About</g-link
          >
        </li>
        <li>
          <g-link to="/blog" class="text-copy-primary hover:text-hover"
            >Blog</g-link
          >
        </li>
        <li>
          <g-link to="/contact" class="text-copy-primary hover:text-hover"
            >Contact</g-link
          >
        </li>
         <li>
          <g-link to="/imprint" class="text-copy-primary hover:text-hover"
            >Imprint</g-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

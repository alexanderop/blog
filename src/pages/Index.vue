<template>
  <Layout>
    <section class="body-font">
      <div
        class="container flex flex-col items-center px-5 mx-auto md:py-24 md:flex-row"
      >
        <div
          class="hidden w-5/6 mb-10 md:block lg:max-w-lg lg:w-full md:w-1/2 md:mb-0"
        >
          <Hero class="w-full fill-current" />
        </div>
        <div
          class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
        >
          <h1
            class="mb-4 text-3xl font-medium title-font sm:text-4xl text-tertiary"
          >
            Hello ! <br class="hidden lg:inline-block" />I'm Alexander Opalic
          </h1>
          <p class="mb-8 leading-relaxed text-secondary">
            Welcome to my Site. I am a Full Stack Developer I design and develop
            responsive, optimized and efficient websites. Currently working at
            Diva-e.
          </p>
          <div class="flex justify-center">
            <button
              onclick="location.href='mailto:alex.opalic.dev@gmail.com';"
              class="inline-flex px-6 py-2 text-lg border-0 rounded text-background bg-secondary focus:outline-none hover:bg-hover"
            >
              Get in touch
            </button>
            <button
              onClick='window.open("https://drive.google.com/file/d/1BsWmEFumwsAKih62k50K3CAKt0Ax5cze/view?usp=sharing");'
              class="inline-flex px-6 py-2 ml-4 text-lg border-0 rounded text-background bg-primary focus:outline-none hover:bg-hover hover:text-primary"
            >
              My resume
            </button>
          </div>
        </div>
      </div>
    </section>
    <br />
  </Layout>
</template>

<script>
import Hero from '~/assets/svgs/Hero.svg'
export default {
  components: {
    Hero,
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

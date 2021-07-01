<template>
  <Layout>
    <section class="body-font">
      <div
        class="container mx-auto flex px-5 md:py-24 md:flex-row flex-col items-center"
      >
        <div
          class="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10"
        >
          <Hero class="fill-current w-full" />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-tertiary"
          >
            Hello ! <br class="hidden lg:inline-block" />I'm Alexander Opalic
          </h1>
          <p class="mb-8 leading-relaxed text-secondary">
            Welcome to my Site. I am a Full Stack Developer I design and develop
            responsive, optimized and efficient websites. Currently working at
            IU International University of Applied Sciences
          </p>
          <div class="flex justify-center">
            <button
              onclick="location.href='mailto:alex.opalic.dev@gmail.com';"
              class="inline-flex text-background bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-hover rounded text-lg"
            >
              Get in touch
            </button>
            <button
              onClick='window.open("https://drive.google.com/file/d/1Wmtpwf_taeS3yOMREMXQT7nmblXKNlgl/view?usp=sharing");'
              class="ml-4 inline-flex text-background bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-hover hover:text-primary rounded text-lg"
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

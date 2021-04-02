<template>
  <Layout>
    <section class="body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <Hero class="fill-current w-full" />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
          >
            Hello ! <br class="hidden lg:inline-block" />I'm Alexander Opalic
          </h1>
          <p class="mb-8 leading-relaxed">
            Welcome to my Site. I am a Full Stack Developer I design and develop
            responsive, optimized and efficient websites. Currently working at
            Diva-e
          </p>
          <div class="flex justify-center">
            <button
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Get in touch
            </button>
            <button
              class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My resume
            </button>
          </div>
        </div>
      </div>
    </section>
    <br />
    <h1>Latest Blog Posts</h1>
    <section>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -my-8">
          <div class="py-8 px-4 lg:w-1/3">
            <div class="h-full flex items-start">
              <div
                class="w-12 flex-shrink-0 flex flex-col text-center leading-none"
              >
                <span class="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700"
                  >Jul</span
                >
                <span
                  class="font-medium text-lg leading-none text-gray-300 title-font"
                  >18</span
                >
              </div>
              <div class="flex-grow pl-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1"
                >
                  CATEGORY
                </h2>
                <h1 class="title-font text-xl font-medium text-white mb-3">
                  The 400 Blows
                </h1>
                <p class="leading-relaxed mb-5">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-3">
                    <span class="title-font font-medium text-white"
                      >Alper Kamu</span
                    >
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="py-8 px-4 lg:w-1/3">
            <div class="h-full flex items-start">
              <div
                class="w-12 flex-shrink-0 flex flex-col text-center leading-none"
              >
                <span class="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700"
                  >Jul</span
                >
                <span
                  class="font-medium text-lg leading-none text-gray-300 title-font"
                  >18</span
                >
              </div>
              <div class="flex-grow pl-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1"
                >
                  CATEGORY
                </h2>
                <h1 class="title-font text-xl font-medium text-white mb-3">
                  Shooting Stars
                </h1>
                <p class="leading-relaxed mb-5">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/102x102"
                    class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-3">
                    <span class="title-font font-medium text-white"
                      >Holden Caulfield</span
                    >
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="py-8 px-4 lg:w-1/3">
            <div class="h-full flex items-start">
              <div
                class="w-12 flex-shrink-0 flex flex-col text-center leading-none"
              >
                <span class="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700"
                  >Jul</span
                >
                <span
                  class="font-medium text-lg leading-none text-gray-300 title-font"
                  >18</span
                >
              </div>
              <div class="flex-grow pl-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1"
                >
                  CATEGORY
                </h2>
                <h1 class="title-font text-xl font-medium text-white mb-3">
                  Neptune
                </h1>
                <p class="leading-relaxed mb-5">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/101x101"
                    class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-3">
                    <span class="title-font font-medium text-white"
                      >Henry Letham</span
                    >
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Hero from '~/assets/svgs/Hero.svg'
export default {
  components: {
    Hero,
  },
  metaInfo: {
    title: 'Hello, world!',
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

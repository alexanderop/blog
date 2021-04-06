<template>
  <Layout>
    <h1 class="text-2xl md:text-4xl text-tertiary">
      Hello, I'm Alexander Opalic 👋
    </h1>
    <p class="mt-5 text-gray">
      I am a full stack developer with a bachelor's degree in media informatics.
      I currently live near Munich. I build web applications and have fun
      developing both the front end and the back end
    </p>
    <h1 class="text-2xl font-bold text-tertiary mb-2 mt-8">Work Expierence:</h1>
    <div class="flex flex-col space-y-6">
      <section class="flex items-center">
        <span class="relative flex h-4 w-4 mr-6"
          ><span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green border-tertiary"
          ></span>
          <span
            class="relative inline-flex rounded-full h-4 w-4 bg-transparent border-2 border-green"
          ></span
        ></span>
        <div class="flex-1">
          <span class="text-secondary">October 2019 - Current </span>
          <h1 class="text-lg font-bold text-primary">
            Software Developer (Laravel + Vue)
          </h1>
          <h2 class="text-base text-secondary font-bold">Diva-e</h2>
        </div>
      </section>
      <section class="flex items-center">
        <span class="relative flex h-4 w-4 mr-6"
          ><span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green border-tertiary"
          ></span>
          <span
            class="relative inline-flex rounded-full h-4 w-4 bg-transparent border-2 border-green"
          ></span
        ></span>
        <div class="flex-1">
          <span class="text-secondary">Mai 2019 - September 2019</span>
          <h1 class="text-lg font-bold text-primary">
            Working Student (Vue, Node, Python)
          </h1>
          <h2 class="text-base text-secondary font-bold">Convercus</h2>
        </div>
      </section>
    </div>
    <h1 class="text-2xl font-bold text-tertiary mb-2 mt-8">Tech Skills:</h1>
    <h1 class="text-2xl font-bold text-tertiary mb-2 mt-8">Education:</h1>
    <h1 class="text-2xl font-bold text-tertiary mb-2 mt-8">Language Skills:</h1>
    <h1 class="text-2xl font-bold text-tertiary mb-2 mt-8">Hobbies:</h1>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'About me',
  },
}
</script>

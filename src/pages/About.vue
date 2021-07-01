<template>
  <Layout>
    <h1 class="text-2xl md:text-4xl text-tertiary">
      Hello, I'm Alexander Opalic 👋
    </h1>
    <p class="mt-5 text-gray md:text-2xl">
      I am a full stack developer with a bachelor's degree in media informatics.
      I currently live near Munich. I build web applications and have fun
      developing both the frontend and backend
    </p>
    <h1 class="text-2xl font-bold text-tertiary mb-2 mt-8">Work Expierence</h1>
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
          <span class="text-secondary">July 2021 - Current </span>
          <h1 class="text-lg font-bold text-primary">
            Full Stack Developer (Laravel + Vue)
          </h1>
          <h2 class="text-base text-secondary font-bold">
            IU International University of Applied Sciences
          </h2>
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
          <span class="text-secondary">October 2019 - June 2021 </span>
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
    <h1 class="text-2xl font-bold text-tertiary mb-2 mt-8">Tech Skills</h1>
    <div>
      <div>
        <h3 class="uppercase text-bold text-2xl">Languages</h3>
        <ul class="flex">
          <li class="mr-1 text-secondary">HTML</li>
          <li class="mr-1 text-secondary">CSS</li>
          <li class="mr-1 text-secondary">JavaScript</li>
          <li class="mr-1 text-secondary">TypeScript</li>
          <li class="mr-1 text-secondary">PHP</li>
        </ul>
      </div>
      <div class="mt-5">
        <h3 class="uppercase text-bold text-2xl">Libraries</h3>
        <ul class="md:flex">
          <li class="mr-1 text-secondary">React</li>
          <li class="mr-1 text-secondary">Vue</li>
          <li class="mr-1 text-secondary">Laravel</li>
          <li class="mr-1 text-secondary">Nuxt</li>
          <li class="mr-1 text-secondary">Gridsome</li>
          <li class="mr-1 text-secondary">Tailwind</li>
        </ul>
      </div>
      <div class="mt-5">
        <h3 class="uppercase text-bold text-2xl">Tools</h3>
        <ul class="flex">
          <li class="mr-1 text-secondary">Git</li>
          <li class="mr-1 text-secondary">Vs code</li>
          <li class="mr-1 text-secondary">npm</li>
          <li class="mr-1 text-secondary">yarn</li>
        </ul>
      </div>
    </div>
    <h1 class="text-2xl font-bold text-tertiary mb-2 mt-8">Education</h1>
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
          <span class="text-secondary">October 2014 - October 2019 </span>
          <h1 class="text-lg font-bold text-primary">
            Bachelor of Science Media Informatics
          </h1>
          <h2 class="text-base text-secondary font-bold">LMU Munich</h2>
        </div>
      </section>
    </div>
    <h1 class="text-2xl font-bold text-tertiary mb-2 mt-8">I can speak</h1>
    <table class="text-base text-gray-700">
      <tr>
        <td class="font-bold py-2 pr-4">German 🇩🇪</td>
        <td class="py-2 px-4">Ausgezeichnet</td>
      </tr>
      <tr>
        <td class="font-bold py-2 pr-4">English 🇬🇧</td>
        <td class="py-2 px-4">Fluent</td>
      </tr>
    </table>
    <h1 class="text-2xl font-bold text-tertiary mb-2 mt-8">Hobbies</h1>
    <ul class="flex">
      <li class="mr-1">Running</li>
      <li class="mr-1">Cyling</li>
      <li class="mr-1">Gaming</li>
      <li class="mr-1">Movies</li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About',
  },
}
</script>

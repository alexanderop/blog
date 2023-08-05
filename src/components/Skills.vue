<template>
  <div
    class="container p-8 mx-auto mt-8 shadow-lg bg-primary rounded-xl page-break"
    id="skills"
  >
    <!-- Skills Section -->
    <h3 class="col-span-3 pb-4 text-3xl font-bold border-b-2 text-tertiary">
      Skills
    </h3>
    <div
      v-for="category in cv.skills"
      :key="category.category"
      class="col-span-3 p-4 mt-4 transition duration-300 ease-in-out border-2 rounded-lg text-gray800 hover:bg-secondary"
    >
      <h4 class="mb-2 text-2xl font-bold">{{ category.category }}</h4>
      <div class="flex flex-wrap">
        <div
          v-for="skill in category.items"
          :key="skill.name"
          class="inline-block p-2 m-2 text-center transition duration-300 ease-in-out border-2 rounded-lg text-gray800 hover:bg-secondary"
        >
          <span class="text-lg font-semibold">{{ skill.name }}</span>
          <span
            class="inline-block px-2 py-1 ml-2 text-xs font-semibold uppercase rounded-full text-gray800 bg-secondary"
          >
            {{ skill.proficiency }}%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkExperience',
  props: {
    cv: {
      type: Object,
      required: true,
    },
  },
}
</script>

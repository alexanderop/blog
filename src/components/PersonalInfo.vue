<template>
  <div
    class="flex flex-col px-8 pt-6 pb-8 my-2 mb-4 bg-white rounded shadow-md"
  >
    <div class="mb-6 -mx-3 md:flex">
      <div class="px-3 mb-6 md:w-full md:mb-0">
        <label
          class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
          for="fullName"
        >
          Full Name
        </label>
        <p
          class="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
          id="fullName"
        >
          {{ cv.fullName }}
        </p>
      </div>
    </div>
    <div class="mb-2 -mx-3 md:flex">
      <div class="px-3 md:w-full">
        <label
          class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
          for="role"
        >
          Role
        </label>
        <p
          class="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
          id="role"
        >
          {{ cv.role }}
        </p>
      </div>
    </div>
    <div class="mb-2 -mx-3 md:flex">
      <div class="px-3 md:w-full">
        <label
          class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
          for="birthdate"
        >
          Birthdate
        </label>
        <p
          class="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
          id="birthdate"
        >
          {{ cv.birthdate }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  props: {
    cv: {
      type: Object,
      required: true,
    },
  },
}
</script>

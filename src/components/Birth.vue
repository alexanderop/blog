<template>
  <div class="space-y-4">
    <h3 class="text-2xl font-bold text-tertiary">Birth</h3>
    <p class="text-gray800">
      <svg
        class="inline-block w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M6 2a1 1 0 011-1h6a1 1 0 011 1v1h-1V2H7v1H6V2zm2 3a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zM4 8a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2H4zm0 2h12v8H4v-8z"
        />
      </svg>
      Date: {{ cv.birthDate }}
    </p>
    <p class="text-gray800">
      <svg
        class="inline-block w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M4 4a1 1 0 011-1h3.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0111 5.414V9h4a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm2 4v10h8V10H6zm1-7a1 1 0 00-1 1v1h2V2H7z"
        />
      </svg>
      Place: {{ cv.birthPlace }}
    </p>
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

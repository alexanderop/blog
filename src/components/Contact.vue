<template>
  <div class="space-y-4">
    <!-- Contact Information Section -->
    <h3 class="text-2xl font-bold text-tertiary">Contact</h3>
    <p class="text-gray800">
      <svg
        class="inline-block w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
        />
        <path
          d="M4 4h2v12H4V4zm3 0h6a1 1 0 011 1v10a1 1 0 01-1 1H7V4zm8 0h2v12h-2V4z"
        />
      </svg>
      Email: {{ cv.email }}
    </p>
    <p class="text-gray800">
      <svg
        class="inline-block w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M3 2a2 2 0 012-2h10a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V2zm11 14h2v2h-2v-2zM4 14h10a1 1 0 011 1v1H3v-1a1 1 0 011-1zm1-12h10a1 1 0 011 1v9H4V3a1 1 0 011-1z"
        />
      </svg>
      Phone: {{ cv.phone }}
    </p>
    <p class="text-gray800">
      <svg
        class="inline-block w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M5 2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm1 14v-4h8v4H6zm8-6V4H6v6h8z"
        />
      </svg>
      Address: {{ cv.address }}
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

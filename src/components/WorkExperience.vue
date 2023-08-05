<template>
  <div class="mt-8">
    <!-- Work Experience Section -->
    <h3 class="pb-4 text-3xl font-bold border-b-2 text-tertiary">
      Work Experience
    </h3>
    <div
      v-for="job in cv.workExperience"
      :key="job.startDate"
      class="p-4 mt-4 space-y-4 transition duration-300 ease-in-out border-b-2 rounded-md hover:bg-secondary"
    >
      <p class="font-semibold text-gray800">
        <svg
          class="inline-block w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <!-- Calendar icon for dates -->
          <path
            d="M6 2a1 1 0 011-1h6a1 1 0 011 1v1h-1V2H7v1H6V2zm2 3a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zM4 8a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2H4zm0 2h12v8H4v-8z"
          />
        </svg>
        <strong>{{ job.startDate }} - {{ job.endDate }}</strong>
      </p>
      <p class="text-gray800">
        <svg
          class="inline-block w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <!-- Building icon for company -->
          <path
            d="M9 19V9H5v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h2a1 1 0 011 1v2h6V3a1 1 0 011-1h2a1 1 0 011 1v10h-4V9a1 1 0 00-1-1H8a1 1 0 00-1 1v10H6a1 1 0 01-1 1H3a1 1 0 01-1-1V9H1v10a1 1 0 001 1h2a1 1 0 001 1h2a1 1 0 001-1z"
          />
        </svg>
        <strong>{{ job.company }}</strong
        >, {{ job.role }}
      </p>
      <p class="text-gray800">
        <svg
          class="inline-block w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <!-- Location pin icon for location -->
          <path
            d="M10 12a2 2 0 100-4 2 2 0 000 4zm-8 8a8 8 0 1116 0h-2a6 6 0 10-12 0H2zM9 2a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V6H8a1 1 0 110-2h1V3a1 1 0 011-1z"
          />
        </svg>
        Location: {{ job.location }}
      </p>
      <p class="text-gray800">
        <svg
          class="inline-block w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <!-- Briefcase icon for project -->
          <path
            d="M6 4a1 1 0 011-1h6a1 1 0 011 1v1h-1V4H7v1H6V4zm2 2a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zM4 8a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2H4zm0 2h12v8H4v-8z"
          />
        </svg>
        Project: {{ job.project }}
      </p>
      <ul class="pl-5 list-disc">
        <li
          v-for="responsibility in job.responsibilities"
          :key="responsibility"
          class="text-gray800"
        >
          {{ responsibility }}
        </li>
      </ul>
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

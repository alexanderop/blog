<template>
  <Layout>
    <!-- Download PDF Button -->
    <button
      @click="generatePDF"
      class="fixed px-4 py-2 font-bold text-white transition duration-300 ease-in-out rounded-full shadow-lg bg-tertiary hover:bg-hover top-4 right-4"
    >
      Download PDF
    </button>
    <div class="container p-8 mx-auto shadow-lg bg-primary rounded-xl" id="cv">
      <!-- Header Section -->
      <div class="mb-6 text-center">
        <h1 class="text-5xl font-extrabold text-tertiary">
          {{ CV.fullName }}
        </h1>
        <h2 class="text-3xl font-semibold text-gray800">{{ CV.role }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
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
            Email: {{ CV.email }}
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
            Phone: {{ CV.phone }}
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
            Address: {{ CV.address }}
          </p>
        </div>

        <div class="space-y-4">
          <!-- Birth Information Section -->
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
            Date: {{ CV.birthDate }}
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
            Place: {{ CV.birthPlace }}
          </p>
        </div>
      </div>
      <div class="mt-8">
        <!-- Work Experience Section -->
        <h3 class="pb-4 text-3xl font-bold border-b-2 text-tertiary">
          Work Experience
        </h3>
        <div
          v-for="job in CV.workExperience"
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

      <div
        class="container p-8 mx-auto mt-8 shadow-lg bg-primary rounded-xl page-break"
        id="skills"
      >
        <!-- Skills Section -->
        <h3 class="col-span-3 pb-4 text-3xl font-bold border-b-2 text-tertiary">
          Skills
        </h3>
        <div
          v-for="category in CV.skills"
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
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    script: [
      {
        src: 'https://unpkg.com/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js',
        body: true,
      },
    ],
  },
  data() {
    return {
      CV: {
        fullName: 'Alexander Opalic',
        role: 'SENIOR FULL STACK DEVELOPER',
        email: 'opalic.alexander@gmail.com',
        phone: '+49 1734294790',
        address: 'Königsberger Weg 4, 82538 Geretsried, Deutschland',
        birthDate: '16.3.1990',
        birthPlace: 'Starnberg, Deutschland',
        workExperience: [
          {
            startDate: '01/2022',
            endDate: 'present',
            company: 'Diva-e',
            role: 'SENIOR FRONTEND DEVELOPER',
            location: 'Munich',
            project:
              'Development of a Checkout System for a Leading Retail Platform',
            responsibilities: [
              'Implemented key features using Nuxt.js',
              'Collaborated with cross-functional teams during internal Frontend sessions',
              'Led internal talks, focusing on the promotion of best practices and standards',
              'Provided coaching to junior team members, contributing to skill development',
              'Spearheaded discussions and workshops on Testing methodologies',
            ],
          },
          {
            startDate: '07/2021',
            endDate: '12/2021',
            company: 'IU Group',
            role: 'FULL STACK DEVELOPER',
            location: 'Munich',
            project:
              'Enhancement of an Educational Institution’s Online Presence',
            responsibilities: [
              'Integrated Twillio, a Laravel-based CMS, for optimized backend performance',
              'Developed custom Blade Vue components to enhance the user experience',
              'Created a custom FormBuilder using Vue.js 3, resulting in streamlined data collection',
            ],
          },
          {
            startDate: '10/2019',
            endDate: '04/2021',
            company: 'diva-e Digital Value Excellence GmbH',
            role: 'FULL STACK DEVELOPER',
            location: 'Munich',
            project:
              'Tailoring a Customer-Oriented Solution for a B2B Application',
            responsibilities: [
              'Assumed leadership in frontend development, driving the team to success',
              'Contributed to a B2B application, focusing on customer satisfaction and engagement',
              'Leveraged Laravel and Vue.js to build scalable and maintainable code',
            ],
          },
          {
            startDate: '05/2018',
            endDate: '09/2019',
            company: 'Point4More (Convercus GmbH)',
            role: 'SOFTWARE DEVELOPER (WORKING STUDENT)',
            location: 'Munich',
            project: 'Innovating Customer Loyalty Programs in the B2B Sector',
            responsibilities: [
              'Developed Python scripts for efficient database monitoring',
              'Utilized Grafana and Prometheus for intuitive data visualization and monitoring',
              'Gained hands-on experience with Vue.js, contributing to front-end development',
              'Ensured code quality through independent writing of unit tests',
              'Designed and implemented custom components to enhance B2B web applications',
            ],
          },
        ],
        skills: [
          {
            category: 'Programming Languages',
            items: [
              { name: 'HTML5', proficiency: 90 },
              { name: 'CSS', proficiency: 85 },
              { name: 'Python', proficiency: 70 },
              { name: 'TypeScript', proficiency: 70 },
              { name: 'PHP', proficiency: 65 },
            ],
          },
          {
            category: 'Frameworks and Libraries',
            items: [
              { name: 'Vue.js', proficiency: 80 },
              { name: 'Node.js', proficiency: 75 },
              { name: 'Laravel', proficiency: 70 },
            ],
          },
          {
            category: 'Development Practices',
            items: [
              { name: 'Git', proficiency: 85 },
              { name: 'Test-driven development', proficiency: 80 },
            ],
          },
        ],
      },
    }
  },
  methods: {
    generatePDF() {
      const element = document.getElementById('cv')

      const opt = {
        margin: 10,
        filename: 'CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      }

      html2pdf()
        .from(element)
        .set(opt)
        .toPdf()
        .get('pdf')
        .then((pdf) => {
          pdf.save()
        })
    },
  },
}
</script>

<style scoped>
.page-break {
  page-break-before: always; /* Creates a new page in printing or PDF conversion */
}
</style>

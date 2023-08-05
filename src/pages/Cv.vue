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
        <Contact class="mt-4" :cv="CV" />
        <Birth class="mt-4" :cv="CV" />
      </div>
      <WorkExperience class="mt-4" :cv="CV" />
      <Skills class="mt-4" :cv="CV" />
    </div>
  </Layout>
</template>

<script lang="ts">
import WorkExperience from '../components/WorkExperience.vue'
import Skills from '../components/Skills.vue'
import Contact from '../components/Contact.vue'
import Birth from '../components/Birth.vue'

export default {
  components: {
    WorkExperience,
    Skills,
    Contact,
    Birth,
  },
  data() {
    return {
      html2pdfFunction: null,
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
  mounted() {
    if (typeof window === 'undefined') return // Ensure this code runs client-side

    // If you need to do any initialization for html2pdf, do it here
    // ...
  },
  methods: {
    generatePDF() {
      if (this.html2pdfFunction) {
        this.createPdf()
      } else {
        import('html2pdf.js').then((module) => {
          this.html2pdfFunction = module.default
          this.createPdf()
        })
      }
    },
    createPdf() {
      const element = document.getElementById('cv')
      const opt = {
        margin: 10,
        filename: 'CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      }

      this.html2pdfFunction()
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

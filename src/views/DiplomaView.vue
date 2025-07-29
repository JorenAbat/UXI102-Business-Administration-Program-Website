<template>
  <div class="diploma-view">
    <!-- Reuse Header with diploma page highlighting -->
    <HeaderGeneral :activePage="'diploma'" />

    <!-- Diploma Hero Section -->
    <HeroDiploma />

    <!-- What You'll Gain Section -->
    <GainDiploma />

    <!-- Program Pathway with Core Courses -->
    <ProgramPathwayDiploma />

    <!-- Elective Courses Section -->
    <ElectiveCourses />

    <!-- Call to Action Section -->
    <CallToAction />

    <!-- Reuse Footer -->
    <FooterGeneral />
  </div>
</template>

<script>
import HeaderGeneral from '@/components/shared/HeaderGeneral.vue'
import FooterGeneral from '@/components/shared/FooterGeneral.vue'
import HeroDiploma from '@/components/diploma/HeroDiploma.vue'
import GainDiploma from '@/components/diploma/GainDiploma.vue'
import ProgramPathwayDiploma from '@/components/diploma/ProgramPathwayDiploma.vue'
import ElectiveCourses from '@/components/diploma/ElectiveCourses.vue'
import CallToAction from '@/components/shared/CallToAction.vue'

export default {
  name: 'DiplomaView',
  components: {
    HeaderGeneral,
    FooterGeneral,
    HeroDiploma,
    GainDiploma,
    ProgramPathwayDiploma,
    ElectiveCourses,
    CallToAction,
  },
}
</script>

<style scoped>
.diploma-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

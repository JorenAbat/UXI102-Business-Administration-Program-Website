<template>
  <div class="program-page">
    <!-- Header -->
    <HeaderGeneral :active-page="'program'" />

    <!-- Hero Section -->
    <HeroProgramBanner />

    <!-- Under Hero / Program Highlights -->
    <UnderHeroProgramSection />

    <!-- Program Highlights -->
    <ProgramHighlightsSection />

    <!-- Program Pathway -->
    <ProgramPathwaySection />

    <!-- Real Results -->
    <RealResultsSection />

    <!-- KPIs -->
    <KPIsSection />

    <!-- Call to Action -->
    <CallToActionContactProgram />

    <!-- Footer -->
    <FooterGeneral />
  </div>
</template>

<script>
import HeaderGeneral from '@/components/shared/HeaderGeneral.vue'
import HeroProgramBanner from '@/components/program/HeroProgramBanner.vue'
import UnderHeroProgramSection from '@/components/program/UnderHeroProgramSection.vue'
import ProgramHighlightsSection from '@/components/program/ProgramHighlightsSection.vue'
import ProgramPathwaySection from '@/components/program/ProgramPathwaySection.vue'
import RealResultsSection from '@/components/program/RealResultsSection.vue'
import KPIsSection from '@/components/program/KPIsSection.vue'
import CallToActionContactProgram from '@/components/shared/CallToActionContactProgram.vue'
import FooterGeneral from '@/components/shared/FooterGeneral.vue'

export default {
  name: 'ProgramView',
  components: {
    HeaderGeneral,
    HeroProgramBanner,
    UnderHeroProgramSection,
    ProgramHighlightsSection,
    ProgramPathwaySection,
    RealResultsSection,
    KPIsSection,
    CallToActionContactProgram,
    FooterGeneral,
  },
}
</script>

<style scoped>
.program-page {
  min-height: 100vh;
}
</style>

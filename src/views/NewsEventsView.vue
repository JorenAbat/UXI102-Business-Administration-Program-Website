<template>
  <div class="news-events-page">
    <!-- Header Component -->
    <HeaderGeneral :active-page="'news-events'" />

    <!-- Hero Section -->
    <HeroNewsEvents />

    <!-- News Section -->
    <NewsSection />

    <!-- Upcoming Events Section -->
    <UpcomingEventsSection />

    <!-- Footer Component -->
    <FooterGeneral />
  </div>
</template>

<script>
// Import all 5 components in order
import HeaderGeneral from '@/components/shared/HeaderGeneral.vue'
import HeroNewsEvents from '@/components/news-events/HeroNewsEvents.vue'
import NewsSection from '@/components/news-events/NewsSection.vue'
import UpcomingEventsSection from '@/components/news-events/UpcomingEventsSection.vue'
import FooterGeneral from '@/components/shared/FooterGeneral.vue'

export default {
  name: 'NewsEventsView',
  components: {
    HeaderGeneral,
    HeroNewsEvents,
    NewsSection,
    UpcomingEventsSection,
    FooterGeneral,
  },
}
</script>

<style scoped>
.news-events-page {
  min-height: 100vh;
  background-color: var(--color-light-bg);
}
</style>

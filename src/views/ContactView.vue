<template>
  <div class="contact-view">
    <!-- Header -->
    <HeaderGeneral activePage="contact" />

    <!-- Hero Section -->
    <HeroContact />

    <!-- Contact Form Section -->
    <ContactForm />

    <!-- Call to Action -->
    <CallToActionContactProgram />

    <!-- Footer -->
    <FooterGeneral />
  </div>
</template>

<script>
import HeaderGeneral from '@/components/shared/HeaderGeneral.vue'
import HeroContact from '@/components/contact/HeroContact.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import CallToActionContactProgram from '@/components/shared/CallToAction.vue'
import FooterGeneral from '@/components/shared/FooterGeneral.vue'

export default {
  name: 'ContactView',
  components: {
    HeaderGeneral,
    HeroContact,
    ContactForm,
    CallToActionContactProgram,
    FooterGeneral,
  },
}
</script>

<style scoped>
.contact-view {
  min-height: 100vh;
}
</style>

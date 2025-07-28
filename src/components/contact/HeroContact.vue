<template>
  <section class="hero-contact">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Get in Touch</h1>
          <p class="hero-subtitle">
            Have questions about our Business Administration programs? We're here to help you find
            the right path for your career goals.
          </p>
          <div class="hero-cta">
            <button class="cta-button primary">Send Message</button>
            <button class="cta-button secondary">View FAQ</button>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/images/NewEvent _ Hero Banner.jpg" alt="Contact support team" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroContact',
}
</script>

<style scoped>
.hero-contact {
  background-color: white;
  padding: 6vh 2vw;
  min-height: 50vh;
  width: 100%;
}

.hero-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4vw;
}

.hero-content {
  flex: 1;
}

.hero-text {
  color: var(--color-mcmaster-black);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--color-mcmaster-black);
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.4rem);
  line-height: 1.5;
  color: var(--color-unselected-dim);
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-button {
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.cta-button.primary {
  background-color: var(--color-mcmaster-red);
  color: white;
  border-color: var(--color-mcmaster-red);
}

.cta-button.primary:hover {
  background-color: var(--color-mcmaster-rouge);
  border-color: var(--color-mcmaster-rouge);
}

.cta-button.secondary {
  background-color: transparent;
  color: var(--color-mcmaster-red);
  border-color: var(--color-mcmaster-red);
}

.cta-button.secondary:hover {
  background-color: var(--color-mcmaster-red);
  color: white;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 1vw;
}

@media (max-width: 768px) {
  .hero-contact {
    padding: 4vh 3vw;
  }

  .hero-container {
    flex-direction: column;
    gap: 3vh;
    text-align: center;
  }

  .hero-cta {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-contact {
    padding: 3vh 4vw;
    min-height: 40vh;
  }

  .cta-button {
    flex: 1;
    min-width: 150px;
  }
}
</style>

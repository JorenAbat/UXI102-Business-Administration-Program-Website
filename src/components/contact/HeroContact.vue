<template>
  <section class="hero-contact">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Contact Us</h1>
          <p class="hero-subtitle">
            We're here to help! Be sure to explore frequently asked questions or fill out the form
            below to contact us.
          </p>
          <div class="hero-cta">
            <button class="cta-button primary">Explore FAQs</button>
            <button class="cta-button secondary">
              Submit Question
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img
          src="@/assets/images/contact/hero/Contact Us_Hero Banner.jpg"
          alt="Woman on phone providing customer support with laptop and coffee"
        />
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
  background-color: var(--color-white-bg);
  padding: var(--spacing-5xl) var(--container-padding);
  min-height: 50vh;
  width: 100%;
  box-shadow: var(--shadow-sm);
}

.hero-container {
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: var(--spacing-4xl);
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
  font-size: var(--font-size-lg);
  line-height: 1.6;
  color: var(--color-subgray-word);
  margin-bottom: var(--spacing-2xl);
}

.hero-cta {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.cta-button {
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: var(--border-radius-full);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all var(--transition-base);
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
  transform: translateY(-2px);
}

.cta-button.secondary {
  background-color: transparent;
  color: var(--color-mcmaster-red);
  border-color: var(--color-mcmaster-red);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.cta-button.secondary:hover {
  background-color: var(--color-mcmaster-red);
  color: white;
  transform: translateY(-2px);
}

.cta-button.secondary svg {
  transition: transform var(--transition-base);
}

.cta-button.secondary:hover svg {
  transform: translate(2px, -2px);
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
  border-radius: var(--border-radius-lg);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-contact {
    padding: var(--spacing-4xl) var(--spacing-xl);
  }

  .hero-container {
    flex-direction: column;
    gap: var(--spacing-3xl);
    text-align: center;
    max-width: 95%;
  }

  .hero-cta {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-contact {
    padding: var(--spacing-3xl) var(--spacing-lg);
    min-height: 40vh;
  }

  .cta-button {
    flex: 1;
    min-width: 150px;
  }
}
</style>

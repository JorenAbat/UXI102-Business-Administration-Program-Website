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
  background-color: white;
  padding: 6vh 2vw;
  min-height: 50vh;
  width: 100%;
  box-shadow:
    0 -2px 8px rgba(0, 0, 0, 0.04),
    0 -1px 0 rgba(0, 0, 0, 0.06);
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
  border-radius: 25px;
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
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.cta-button.secondary:hover {
  background-color: var(--color-mcmaster-red);
  color: white;
}

.cta-button.secondary svg {
  transition: transform 0.3s ease;
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

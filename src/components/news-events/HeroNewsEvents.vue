<template>
  <section class="hero-news-events">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">News & Events</h1>
          <p class="hero-subtitle">
            Catch the latest updates, announcements, and stories from Continuing Education at
            McMaster
          </p>
        </div>
      </div>
      <div class="hero-image">
        <img
          src="@/assets/images/news-events/hero/NewEvent _ Hero Banner.jpg"
          alt="People looking at tablet"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroNewsEvents',
}
</script>

<style scoped>
.hero-news-events {
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
  .hero-news-events {
    padding: var(--spacing-4xl) var(--spacing-xl);
  }

  .hero-container {
    flex-direction: column;
    gap: var(--spacing-3xl);
    text-align: center;
    max-width: 95%;
  }
}

@media (max-width: 480px) {
  .hero-news-events {
    padding: var(--spacing-3xl) var(--spacing-lg);
    min-height: 40vh;
  }

  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-base);
  }
}
</style>

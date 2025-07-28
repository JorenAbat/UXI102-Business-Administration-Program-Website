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
        <img src="@/assets/images/NewEvent _ Hero Banner.jpg" alt="People looking at tablet" />
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
  background-color: white;
  padding: 4rem 2rem;
  min-height: 400px;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.hero-content {
  flex: 1;
}

.hero-text {
  color: var(--color-mcmaster-black);
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--color-mcmaster-black);
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.5;
  color: var(--color-unselected-dim);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero-news-events {
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }
}
</style>

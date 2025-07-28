<template>
  <section class="hero-news-events">
    <div class="hero-container">
      <h1 class="hero-title">Latest News & Events</h1>
      <p class="hero-subtitle">
        Stay updated with the latest developments in our Business Administration program
      </p>
      <div class="hero-cta">
        <button class="hero-button">Learn More</button>
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
  background: linear-gradient(
    135deg,
    var(--color-mcmaster-red) 0%,
    var(--color-mcmaster-rouge) 100%
  );
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-container {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.5;
}

.hero-button {
  background-color: white;
  color: var(--color-mcmaster-red);
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-button:hover {
  background-color: var(--color-light-bg);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-news-events {
    padding: 3rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>

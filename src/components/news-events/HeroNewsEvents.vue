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
  padding: 6vh 4vw;
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
  .hero-news-events {
    padding: 4vh 3vw;
  }

  .hero-container {
    flex-direction: column;
    gap: 3vh;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-news-events {
    padding: 3vh 4vw;
    min-height: 40vh;
  }
}
</style>

<template>
  <section class="news-section">
    <div class="container">
      <h2 class="section-title">Latest News</h2>
      <div class="news-grid">
        <article class="news-card" v-for="(news, index) in newsItems" :key="index">
          <div class="news-image">
            <div class="placeholder-image"></div>
          </div>
          <div class="news-content">
            <div class="news-date">{{ news.date }}</div>
            <h3 class="news-title">{{ news.title }}</h3>
            <p class="news-excerpt">{{ news.excerpt }}</p>
            <a href="#" class="read-more">Read More</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsSection',
  data() {
    return {
      newsItems: [
        {
          date: 'December 15, 2024',
          title: 'New Business Administration Program Launches',
          excerpt:
            'McMaster University is excited to announce the launch of our new Business Administration program designed for working professionals.',
        },
        {
          date: 'December 10, 2024',
          title: 'Student Success Stories: Career Advancement',
          excerpt:
            'Discover how our graduates have advanced their careers with the skills and knowledge gained from our program.',
        },
        {
          date: 'December 5, 2024',
          title: 'Industry Partnerships Strengthened',
          excerpt:
            'We are proud to announce new partnerships with leading businesses to enhance our program offerings.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.news-section {
  padding: 4rem 2rem;
  background-color: var(--color-white-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-selected-dark);
  text-align: center;
  margin-bottom: 3rem;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-4px);
}

.news-image {
  height: 200px;
  background-color: var(--color-light-bg);
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(45deg, var(--color-divider) 25%, transparent 25%),
    linear-gradient(-45deg, var(--color-divider) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--color-divider) 75%),
    linear-gradient(-45deg, transparent 75%, var(--color-divider) 75%);
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0px;
}

.news-content {
  padding: 1.5rem;
}

.news-date {
  color: var(--color-subgray-word);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.news-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-selected-dark);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.news-excerpt {
  color: var(--color-unselected-dim);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.read-more {
  color: var(--color-mcmaster-red);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
}

.read-more:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .news-section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>

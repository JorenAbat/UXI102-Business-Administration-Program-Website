<template>
  <section class="news-section">
    <div class="container">
      <!-- Header with title and explore link -->
      <div class="section-header">
        <div class="section-title-area">
          <h2 class="section-title">News</h2>
          <p class="section-subtitle">
            Fill up all the information here, then click submit button.
          </p>
        </div>
        <a href="#" class="explore-news">
          Explore News
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
        </a>
      </div>

      <!-- News Grid -->
      <div class="news-grid">
        <!-- Top row - 2 large cards -->
        <div class="news-grid-top">
          <article
            class="news-card large"
            v-for="(news, index) in topNewsItems"
            :key="'top-' + index"
          >
            <div class="news-image">
              <img :src="news.image" :alt="news.title" />
            </div>
            <div class="news-content">
              <div class="category-tag" :class="news.categoryClass">{{ news.category }}</div>
              <h3 class="news-title">{{ news.title }}</h3>
              <div class="news-date">{{ news.date }}</div>
              <a href="#" class="read-more">
                Read More
                <svg
                  width="14"
                  height="14"
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
              </a>
            </div>
          </article>
        </div>

        <!-- Bottom row - 3 smaller cards -->
        <div class="news-grid-bottom">
          <article
            class="news-card small"
            v-for="(news, index) in bottomNewsItems"
            :key="'bottom-' + index"
          >
            <div class="news-image">
              <img :src="news.image" :alt="news.title" />
            </div>
            <div class="news-content">
              <div class="category-tag" :class="news.categoryClass">{{ news.category }}</div>
              <h3 class="news-title">{{ news.title }}</h3>
              <div class="news-date">{{ news.date }}</div>
              <a href="#" class="read-more">
                Read More
                <svg
                  width="14"
                  height="14"
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
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import images
import News1 from '@/assets/images/news-events/news/News1.jpg'
import News2 from '@/assets/images/news-events/news/News2.png'
import News3 from '@/assets/images/news-events/news/News3.png'
import News4 from '@/assets/images/news-events/news/News4.png'
import News5 from '@/assets/images/news-events/news/News5.png'

export default {
  name: 'NewsSection',
  data() {
    return {
      topNewsItems: [
        {
          category: 'TECH & DATA',
          categoryClass: 'tech-data',
          title:
            "Developing tomorrow's AI Leaders: McMaster Continuing Education and M2M Tech launch groundbreaking applied AI program",
          date: 'June 25, 2025',
          image: News1,
        },
        {
          category: 'HEALTH',
          categoryClass: 'health',
          title: 'Championing Career-Friendly Workplaces as an Occupational Health & Safety Issue',
          date: 'June 25, 2025',
          image: News2,
        },
      ],
      bottomNewsItems: [
        {
          category: 'GET TO KNOW US',
          categoryClass: 'get-to-know',
          title:
            "McMaster Continuing Education recognized at CAUCE 2025: Key Takeaways from this year's conference",
          date: 'June 25, 2025',
          image: News3,
        },
        {
          category: 'BUSINESS',
          categoryClass: 'business',
          title: 'Strategic Online Learning Support for Canadian Institutions',
          date: 'June 25, 2025',
          image: News4,
        },
        {
          category: 'TECH & DATA',
          categoryClass: 'tech-data',
          title: 'The Booming Demand for Full Stack Developers in Canada',
          date: 'June 25, 2025',
          image: News5,
        },
      ],
    }
  },
}
</script>

<style scoped>
.news-section {
  padding: var(--spacing-5xl) var(--spacing-2xl);
  background-color: var(--color-light-bg);
  width: 100%;
  box-shadow: var(--shadow-sm);
}

.container {
  max-width: 80%;
  margin: 0 auto;
  padding: 0;
}

/* Header Section */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-4xl);
}

.section-title-area {
  flex: 1;
}

.section-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-mcmaster-black);
  margin: 0 0 var(--spacing-lg) 0;
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-subgray-word);
  margin: 0;
}

.explore-news {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-mcmaster-red);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  transition: color var(--transition-base);
}

.explore-news:hover {
  color: var(--color-mcmaster-rouge);
}

.explore-news svg {
  transition: transform var(--transition-base);
}

.explore-news:hover svg {
  transform: translate(2px, -2px);
}

/* News Grid Layout */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-4xl) var(--spacing-2xl);
  grid-auto-flow: row;
}

.news-grid-top {
  display: contents;
}

.news-grid-bottom {
  display: contents;
}

.news-card.large:first-child {
  grid-column: 1 / 3;
}

.news-card.large:nth-child(2) {
  grid-column: 3 / 4;
}

.news-card.small {
  grid-column: span 1;
}

/* News Cards */
.news-card {
  background: var(--color-white-bg);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.news-card.large .news-image {
  height: 300px;
}

.news-card.small .news-image {
  height: 240px;
}

.news-image {
  position: relative;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-content {
  padding: var(--spacing-2xl);
}

/* Category Tags */
.category-tag {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-pill);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--spacing-xl);
}

.category-tag.tech-data {
  background-color: var(--color-mcmaster-red);
  color: white;
}

.category-tag.health {
  background-color: var(--color-mcmaster-rouge);
  color: white;
}

.category-tag.get-to-know {
  background-color: var(--color-mcmaster-rouge);
  color: white;
}

.category-tag.business {
  background-color: var(--color-mcmaster-red);
  color: white;
}

.news-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-mcmaster-black);
  margin-bottom: var(--spacing-lg);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-card.large .news-title {
  font-size: var(--font-size-2xl);
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.news-date {
  color: var(--color-subgray-word);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xl);
}

.read-more {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-mcmaster-red);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  transition: color var(--transition-base);
}

.read-more:hover {
  color: var(--color-mcmaster-rouge);
}

.read-more svg {
  transition: transform var(--transition-base);
}

.read-more:hover svg {
  transform: translate(2px, -2px);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 90%;
  }
}

@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .news-card.large:first-child {
    grid-column: 1 / 3;
  }

  .news-card.large:nth-child(2) {
    grid-column: 1 / 3;
  }

  .news-card.small {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .news-section {
    padding: var(--spacing-4xl) var(--spacing-xl);
  }

  .container {
    max-width: 95%;
  }

  .section-header {
    flex-direction: column;
    gap: var(--spacing-2xl);
    align-items: flex-start;
  }

  .section-title {
    font-size: var(--font-size-3xl);
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
  }

  .news-card.large:first-child,
  .news-card.large:nth-child(2),
  .news-card.small {
    grid-column: 1;
  }

  .news-card.large .news-image,
  .news-card.small .news-image {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .news-section {
    padding: var(--spacing-3xl) var(--spacing-lg);
  }

  .section-title {
    font-size: var(--font-size-2xl);
  }

  .news-content {
    padding: var(--spacing-lg);
  }

  .news-card.large .news-image,
  .news-card.small .news-image {
    height: 200px;
  }
}
</style>

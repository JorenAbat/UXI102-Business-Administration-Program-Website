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
          image: '/src/assets/images/News1.jpg',
        },
        {
          category: 'HEALTH',
          categoryClass: 'health',
          title: 'Championing Career-Friendly Workplaces as an Occupational Health & Safety Issue',
          date: 'June 25, 2025',
          image: '/src/assets/images/News2.png',
        },
      ],
      bottomNewsItems: [
        {
          category: 'GET TO KNOW US',
          categoryClass: 'get-to-know',
          title:
            "McMaster Continuing Education recognized at CAUCE 2025: Key Takeaways from this year's conference",
          date: 'June 25, 2025',
          image: '/src/assets/images/News3.png',
        },
        {
          category: 'BUSINESS',
          categoryClass: 'business',
          title: 'Strategic Online Learning Support for Canadian Institutions',
          date: 'June 25, 2025',
          image: '/src/assets/images/News4.png',
        },
        {
          category: 'TECH & DATA',
          categoryClass: 'tech-data',
          title: 'The Booming Demand for Full Stack Developers in Canada',
          date: 'June 25, 2025',
          image: '/src/assets/images/News5.png',
        },
      ],
    }
  },
}
</script>

<style scoped>
.news-section {
  padding: 6vh 2vw;
  background-color: #f1f3f5;
  width: 100%;
  box-shadow:
    0 -2px 8px rgba(0, 0, 0, 0.04),
    0 -1px 0 rgba(0, 0, 0, 0.06);
}

.container {
  max-width: 90vw;
  margin: 0 auto;
  padding: 0;
}

/* Header Section */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4vh;
}

.section-title-area {
  flex: 1;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  color: var(--color-selected-dark);
  margin: 0 0 0.5em 0;
}

.section-subtitle {
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  color: var(--color-unselected-dim);
  margin: 0;
}

.explore-news {
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: var(--color-mcmaster-red);
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  transition: color 0.3s ease;
}

.explore-news:hover {
  color: #8b0000;
}

.explore-news svg {
  transition: transform 0.3s ease;
}

.explore-news:hover svg {
  transform: translate(2px, -2px);
}

/* News Grid Layout */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4vh 2vw;
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
  background: white;
  border-radius: 1vw;
  overflow: hidden;
  box-shadow: 0 0.5vh 1.5vh rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.news-card:hover {
  transform: translateY(-0.5vh);
  box-shadow: 0 1vh 3vh rgba(0, 0, 0, 0.12);
}

.news-card.large .news-image {
  height: 25vh;
}

.news-card.small .news-image {
  height: 20vh;
}

.news-image {
  position: relative;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-content {
  padding: clamp(1rem, 2vw, 2rem);
}

/* Category Tags */
.category-tag {
  display: inline-block;
  padding: 0.5em 1.2em;
  border-radius: 20px;
  font-size: clamp(0.7rem, 1vw, 0.8rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5em;
}

.category-tag.tech-data {
  background-color: #ff1744;
  color: white;
}

.category-tag.health {
  background-color: #e91e63;
  color: white;
}

.category-tag.get-to-know {
  background-color: #2196f3;
  color: white;
}

.category-tag.business {
  background-color: #e91e63;
  color: white;
}

.news-title {
  font-size: clamp(1rem, 1.8vw, 1.4rem);
  font-weight: 600;
  color: var(--color-selected-dark);
  margin-bottom: 1em;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-card.large .news-title {
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  -webkit-line-clamp: 2;
}

.news-date {
  color: var(--color-subgray-word);
  font-size: clamp(0.8rem, 1.2vw, 0.95rem);
  margin-bottom: 1.5em;
}

.read-more {
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: var(--color-mcmaster-red);
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(0.8rem, 1.1vw, 0.9rem);
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #8b0000;
}

.read-more svg {
  transition: transform 0.3s ease;
}

.read-more:hover svg {
  transform: translate(2px, -2px);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 95vw;
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
    padding: 4vh 3vw;
  }

  .container {
    max-width: 94vw;
  }

  .section-header {
    flex-direction: column;
    gap: 2vh;
    align-items: flex-start;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: 4vh 3vw;
  }

  .news-card.large:first-child,
  .news-card.large:nth-child(2),
  .news-card.small {
    grid-column: 1;
  }

  .news-card.large .news-image,
  .news-card.small .news-image {
    height: 25vh;
  }
}

@media (max-width: 480px) {
  .news-section {
    padding: 3vh 4vw;
  }

  .container {
    max-width: 92vw;
  }

  .news-content {
    padding: clamp(0.8rem, 3vw, 1.5rem);
  }

  .news-card.large .news-image,
  .news-card.small .news-image {
    height: 22vh;
  }
}
</style>

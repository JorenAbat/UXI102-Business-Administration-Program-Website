<template>
  <section class="upcoming-events-section">
    <div class="container">
      <!-- Header with title and explore link -->
      <div class="section-header">
        <div class="section-title-area">
          <h2 class="section-title">Upcoming Events</h2>
          <p class="section-subtitle">
            Fill up all the information here, then click submit button.
          </p>
        </div>
        <a href="#" class="explore-events">
          Explore Event Calendar
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

      <!-- Events Grid -->
      <div class="events-grid">
        <!-- Top row - 2 large cards -->
        <div class="events-grid-top">
          <article
            class="event-card large"
            v-for="(event, index) in topEvents"
            :key="'top-' + index"
          >
            <div class="event-image">
              <img :src="event.image" :alt="event.title" />
            </div>
            <div class="event-content">
              <h3 class="event-title">{{ event.title }}</h3>
              <div class="event-datetime">{{ event.date }}</div>
              <div class="event-time">{{ event.time }}</div>
              <a href="#" class="check-out">
                Check out
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
        <div class="events-grid-bottom">
          <article
            class="event-card small"
            v-for="(event, index) in bottomEvents"
            :key="'bottom-' + index"
          >
            <div class="event-image">
              <img :src="event.image" :alt="event.title" />
            </div>
            <div class="event-content">
              <h3 class="event-title">{{ event.title }}</h3>
              <div class="event-datetime">{{ event.date }}</div>
              <div class="event-time">{{ event.time }}</div>
              <a href="#" class="check-out">
                Check out
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
import Event1 from '@/assets/images/news-events/events/Event1.png'
import Event2 from '@/assets/images/news-events/events/Event2.jpg'
import Event3 from '@/assets/images/news-events/events/Event3.png'
import Event4 from '@/assets/images/news-events/events/Event4.jpg'
import Event5 from '@/assets/images/news-events/events/Event5.jpg'

export default {
  name: 'UpcomingEventsSection',
  data() {
    return {
      topEvents: [
        {
          title: 'Professional Addiction Studies Program Info Session',
          date: 'Aug 6, 2025',
          time: '12:00PM - 1:00PM',
          image: Event1,
        },
        {
          title: 'Business and Marketing Programs Online Info Session',
          date: 'Aug 14, 2025',
          time: '11:00AM - 12:00PM',
          image: Event2,
        },
      ],
      bottomEvents: [
        {
          title: 'Tech and Data Programs Online Info Session',
          date: 'Aug 14, 2025',
          time: '11:00AM - 12:00PM',
          image: Event3,
        },
        {
          title: 'Health and Social Services Programs Online Info Session',
          date: 'Aug 14, 2025',
          time: '11:00AM - 12:00PM',
          image: Event4,
        },
        {
          title: 'Student Orientation Webinar',
          date: 'Aug 14, 2025',
          time: '11:00AM - 12:00PM',
          image: Event5,
        },
      ],
    }
  },
}
</script>

<style scoped>
.upcoming-events-section {
  padding: var(--spacing-5xl) var(--spacing-2xl);
  background-color: var(--color-white-bg);
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

.explore-events {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-mcmaster-red);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  transition: color var(--transition-base);
}

.explore-events:hover {
  color: var(--color-mcmaster-rouge);
}

.explore-events svg {
  transition: transform var(--transition-base);
}

.explore-events:hover svg {
  transform: translate(2px, -2px);
}

/* Events Grid Layout */
.events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-4xl) var(--spacing-2xl);
  grid-auto-flow: row;
}

.events-grid-top {
  display: contents;
}

.events-grid-bottom {
  display: contents;
}

.event-card.large:first-child {
  grid-column: 1 / 3;
}

.event-card.large:nth-child(2) {
  grid-column: 3 / 4;
}

.event-card.small {
  grid-column: span 1;
}

/* Event Cards */
.event-card {
  background: var(--color-white-bg);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.event-card.large .event-image {
  height: 300px;
}

.event-card.small .event-image {
  height: 240px;
}

.event-image {
  position: relative;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.event-card:hover .event-image img {
  transform: scale(1.05);
}

.event-content {
  padding: var(--spacing-2xl);
}

.event-title {
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

.event-card.large .event-title {
  font-size: var(--font-size-2xl);
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.event-datetime {
  color: var(--color-subgray-word);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-sm);
}

.event-time {
  color: var(--color-subgray-word);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xl);
}

.check-out {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-mcmaster-red);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  transition: color var(--transition-base);
}

.check-out:hover {
  color: var(--color-mcmaster-rouge);
}

.check-out svg {
  transition: transform var(--transition-base);
}

.check-out:hover svg {
  transform: translate(2px, -2px);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 90%;
  }
}

@media (max-width: 1024px) {
  .events-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .event-card.large:first-child {
    grid-column: 1 / 3;
  }

  .event-card.large:nth-child(2) {
    grid-column: 1 / 3;
  }

  .event-card.small {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .upcoming-events-section {
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

  .events-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
  }

  .event-card.large:first-child,
  .event-card.large:nth-child(2),
  .event-card.small {
    grid-column: 1;
  }

  .event-card.large .event-image,
  .event-card.small .event-image {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .upcoming-events-section {
    padding: var(--spacing-3xl) var(--spacing-lg);
  }

  .section-title {
    font-size: var(--font-size-2xl);
  }

  .event-content {
    padding: var(--spacing-lg);
  }

  .event-card.large .event-image,
  .event-card.small .event-image {
    height: 200px;
  }
}
</style>

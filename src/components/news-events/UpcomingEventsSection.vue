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
import Event1 from '@/assets/images/Event1.png'
import Event2 from '@/assets/images/Event2.jpg'
import Event3 from '@/assets/images/Event3.png'
import Event4 from '@/assets/images/Event4.jpg'
import Event5 from '@/assets/images/Event5.jpg'

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
  padding: 6vh 2vw;
  background-color: white;
  width: 100%;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 1px 0 rgba(0, 0, 0, 0.06);
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

.explore-events {
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: var(--color-mcmaster-red);
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  transition: color 0.3s ease;
}

.explore-events:hover {
  color: #8b0000;
}

.explore-events svg {
  transition: transform 0.3s ease;
}

.explore-events:hover svg {
  transform: translate(2px, -2px);
}

/* Events Grid Layout */
.events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4vh 2vw;
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
  background: white;
  border-radius: 1vw;
  overflow: hidden;
  box-shadow: 0 0.5vh 1.5vh rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-0.5vh);
  box-shadow: 0 1vh 3vh rgba(0, 0, 0, 0.12);
}

.event-card.large .event-image {
  height: 25vh;
}

.event-card.small .event-image {
  height: 20vh;
}

.event-image {
  position: relative;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.event-card:hover .event-image img {
  transform: scale(1.05);
}

.event-content {
  padding: clamp(1rem, 2vw, 2rem);
}

.event-title {
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

.event-card.large .event-title {
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  -webkit-line-clamp: 2;
}

.event-datetime {
  color: var(--color-subgray-word);
  font-size: clamp(0.8rem, 1.2vw, 0.95rem);
  margin-bottom: 0.5em;
}

.event-time {
  color: var(--color-subgray-word);
  font-size: clamp(0.8rem, 1.2vw, 0.95rem);
  margin-bottom: 1.5em;
}

.check-out {
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: var(--color-mcmaster-red);
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(0.8rem, 1.1vw, 0.9rem);
  transition: color 0.3s ease;
}

.check-out:hover {
  color: #8b0000;
}

.check-out svg {
  transition: transform 0.3s ease;
}

.check-out:hover svg {
  transform: translate(2px, -2px);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 95vw;
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

  .events-grid {
    grid-template-columns: 1fr;
    gap: 4vh 3vw;
  }

  .event-card.large:first-child,
  .event-card.large:nth-child(2),
  .event-card.small {
    grid-column: 1;
  }

  .event-card.large .event-image,
  .event-card.small .event-image {
    height: 25vh;
  }
}

@media (max-width: 480px) {
  .upcoming-events-section {
    padding: 3vh 4vw;
  }

  .container {
    max-width: 92vw;
  }

  .event-content {
    padding: clamp(0.8rem, 3vw, 1.5rem);
  }

  .event-card.large .event-image,
  .event-card.small .event-image {
    height: 22vh;
  }
}
</style>

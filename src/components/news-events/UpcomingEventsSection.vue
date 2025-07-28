<template>
  <section class="upcoming-events-section">
    <div class="container">
      <h2 class="section-title">Upcoming Events</h2>
      <div class="events-grid">
        <article class="event-card" v-for="(event, index) in events" :key="index">
          <div class="event-date">
            <div class="date-day">{{ event.day }}</div>
            <div class="date-month">{{ event.month }}</div>
          </div>
          <div class="event-content">
            <h3 class="event-title">{{ event.title }}</h3>
            <div class="event-details">
              <div class="event-time">
                <i class="fas fa-clock"></i>
                {{ event.time }}
              </div>
              <div class="event-location">
                <i class="fas fa-map-marker-alt"></i>
                {{ event.location }}
              </div>
            </div>
            <p class="event-description">{{ event.description }}</p>
            <button class="register-button">Register Now</button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UpcomingEventsSection',
  data() {
    return {
      events: [
        {
          day: '20',
          month: 'DEC',
          title: 'Information Session: Business Administration Program',
          time: '6:00 PM - 7:30 PM',
          location: 'Virtual Event',
          description:
            'Join us for an informative session about our Business Administration program. Learn about curriculum, career opportunities, and application process.',
        },
        {
          day: '25',
          month: 'DEC',
          title: 'Student Success Panel Discussion',
          time: '2:00 PM - 3:30 PM',
          location: 'McMaster Campus',
          description:
            'Hear from current students and alumni about their experiences in the Business Administration program and career outcomes.',
        },
        {
          day: '30',
          month: 'DEC',
          title: 'Application Workshop',
          time: '1:00 PM - 2:30 PM',
          location: 'Virtual Event',
          description:
            'Get step-by-step guidance on completing your application for the Business Administration program.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.upcoming-events-section {
  padding: 4rem 2rem;
  background-color: var(--color-light-bg);
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

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.event-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-4px);
}

.event-date {
  background: var(--color-mcmaster-red);
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80px;
}

.date-day {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.date-month {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
}

.event-content {
  padding: 1.5rem;
  flex: 1;
}

.event-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-selected-dark);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.event-details {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--color-subgray-word);
}

.event-time,
.event-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.event-description {
  color: var(--color-unselected-dim);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.register-button {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-button:hover {
  background-color: var(--color-mcmaster-rouge);
}

@media (max-width: 768px) {
  .upcoming-events-section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .events-grid {
    grid-template-columns: 1fr;
  }

  .event-card {
    flex-direction: column;
  }

  .event-date {
    min-width: auto;
    padding: 1rem;
  }

  .event-details {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>

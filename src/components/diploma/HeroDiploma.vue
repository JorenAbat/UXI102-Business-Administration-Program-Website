<template>
  <section class="hero-diploma">
    <div class="hero-container">
      <!-- Left Side - Content -->
      <div class="hero-content">
        <p class="hero-subtitle">McMaster Continuing Education</p>
        <h1 class="hero-title">
          Business Administration<br />
          Advanced Diploma
        </h1>
        <p class="hero-description">
          Advance your skills and earn a Diploma in Business Administration in a year.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary">Register Now</button>
          <button class="btn btn-secondary">
            Explore Courses
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <!-- Right Side - Image -->
      <div class="hero-image">
        <img
          src="@/assets/images/diploma/BA Dip_Hero Banner.jpg"
          alt="Business Administration Advanced Diploma"
          class="hero-img"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroDiploma',
}
</script>

<style scoped>
.hero-diploma {
  background-color: var(--color-white-bg);
  padding: var(--spacing-5xl) 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-container {
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-4xl);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-5xl);
  align-items: center;
  box-sizing: border-box;
}

.hero-content {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-top: var(--spacing-lg);
}

.hero-subtitle {
  color: var(--color-subgray-word);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.5px;
  margin-bottom: var(--spacing-lg);
  text-transform: uppercase;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
  color: var(--color-mcmaster-black);
  margin-bottom: var(--spacing-xl);
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--color-subgray-word);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 450px;
  white-space: nowrap;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.btn {
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: var(--border-radius-full);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
}

.btn-primary {
  background: var(--color-mcmaster-red);
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  background: var(--color-mcmaster-rouge);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: var(--color-mcmaster-black);
  border: 2px solid var(--color-mcmaster-black);
}

.btn-secondary:hover {
  background: var(--color-mcmaster-black);
  color: white;
  transform: translateY(-2px);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.hero-img {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-xl);
}

/* Responsive Design */
@media (max-width: 1400px) {
  .hero-container {
    padding: var(--spacing-lg) var(--spacing-3xl);
    gap: var(--spacing-4xl);
  }

  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 1200px) {
  .hero-container {
    padding: var(--spacing-lg) var(--spacing-2xl);
    gap: var(--spacing-3xl);
  }

  .hero-title {
    font-size: 2.75rem;
  }

  .hero-description {
    font-size: var(--font-size-lg);
  }
}

@media (max-width: 768px) {
  .hero-diploma {
    padding: var(--spacing-4xl) 0;
    min-height: auto;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-3xl) var(--spacing-lg);
    text-align: center;
    max-width: 95%;
  }

  .hero-content {
    margin-top: var(--spacing-sm);
  }

  .hero-title {
    white-space: normal;
    font-size: 2.5rem;
  }

  .hero-description {
    white-space: normal;
    font-size: var(--font-size-base);
  }

  .hero-actions {
    justify-content: center;
  }

  .btn {
    padding: var(--spacing-sm) var(--spacing-xl);
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-2xl) var(--spacing-lg);
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: var(--font-size-base);
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>

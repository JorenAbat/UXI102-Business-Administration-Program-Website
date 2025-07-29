<template>
  <section class="hero-program">
    <div class="hero-background">
      <img
        src="@/assets/images/program/BA Program _ Hero Banner.jpg"
        alt="Professional woman on phone in office setting"
        class="hero-background-image"
      />
    </div>
    <div class="hero-overlay">
      <div class="hero-container">
        <div class="hero-content">
          <p class="hero-subtitle">McMaster Continuing Education</p>
          <h1 class="hero-title">
            Business Administration<br />
            Program
          </h1>
          <p class="hero-description">Get down to business and grow your career in management.</p>
          <div class="hero-actions">
            <button class="btn btn-primary">Apply Now</button>
            <button class="btn btn-secondary">
              Explore Courses
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroProgramBanner',
}
</script>

<style scoped>
.hero-program {
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right 25%;
}

.hero-overlay {
  position: relative;
  z-index: 2;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.65) 40%,
    rgba(255, 255, 255, 0.2) 60%,
    transparent 75%
  );
  min-height: 70vh;
  display: flex;
  align-items: flex-start;
  padding-top: 1rem;
}

.hero-container {
  max-width: 80%;
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: center;
  min-height: 70vh;
}

.hero-content {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-top: 1rem;
}

.hero-subtitle {
  color: var(--color-subgray-word);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
  color: var(--color-mcmaster-black);
  margin-bottom: 1.5rem;
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
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.btn-primary {
  background: var(--color-mcmaster-red);
  color: white;
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
}

.btn-primary:hover {
  background: var(--color-mcmaster-rouge);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(233, 30, 99, 0.4);
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

/* Responsive Design */
@media (max-width: 768px) {
  .hero-overlay {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.75) 50%,
      rgba(255, 255, 255, 0.4) 100%
    );
    padding-top: 0.5rem;
  }

  .hero-container {
    padding: 0.5rem 1rem 3rem 1rem;
    text-align: center;
  }

  .hero-title {
    white-space: normal;
  }

  .hero-content {
    max-width: none;
    padding-right: 0;
    margin-left: 0;
    margin-top: 0.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
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

  .hero-container {
    padding: 1rem 1rem 2rem 1rem;
  }
}
</style>

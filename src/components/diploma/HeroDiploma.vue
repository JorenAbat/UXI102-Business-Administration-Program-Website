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
  background-color: white;
  padding: 6rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-container {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 1rem 4rem 4rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9rem;
  align-items: center;
  box-sizing: border-box;
}

.hero-content {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-top: 1rem;
}

.hero-subtitle {
  color: #666;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: #1a2332;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.hero-description {
  font-size: 1.125rem;
  color: #4a5568;
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
  background: #e91e63;
  color: white;
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
}

.btn-primary:hover {
  background: #c2185b;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(233, 30, 99, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #1a2332;
  border: 2px solid #1a2332;
}

.btn-secondary:hover {
  background: #1a2332;
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
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

/* Responsive Design */
@media (max-width: 1400px) {
  .hero-container {
    padding: 1rem 3rem 3rem 3rem;
    gap: 5rem;
  }

  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 1200px) {
  .hero-container {
    padding: 1rem 2rem 3rem 2rem;
    gap: 4rem;
  }

  .hero-title {
    font-size: 2.75rem;
  }

  .hero-description {
    font-size: 1.125rem;
  }
}

@media (max-width: 768px) {
  .hero-diploma {
    padding: 4rem 0;
    min-height: auto;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0.5rem 1rem 3rem 1rem;
    text-align: center;
  }

  .hero-content {
    margin-top: 0.5rem;
  }

  .hero-title {
    white-space: normal;
    font-size: 2.5rem;
  }

  .hero-description {
    white-space: normal;
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
  .hero-container {
    padding: 1rem 1rem 2rem 1rem;
  }

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
}
</style>

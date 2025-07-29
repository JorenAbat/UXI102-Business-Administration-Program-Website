<template>
  <section class="cta-section">
    <div class="cta-container">
      <div class="cta-content">
        <h2 class="cta-title">
          Ready to advance your career?<br />Enroll now for the upcoming term!
        </h2>
        <p class="cta-subtitle">
          Programs start soon—secure your spot and take the next step forward.
        </p>
        <div class="cta-actions">
          <button class="cta-button primary">Register Now</button>
        </div>
      </div>

      <div class="cta-image">
        <img
          src="@/assets/images/shared/Near Footer.png"
          alt="Students with backpacks ready to advance their careers"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CallToActionContactProgram',
}
</script>

<style scoped>
.cta-section {
  background: #1a2332;
  color: white;
  padding: 0;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 -2px 8px rgba(0, 0, 0, 0.04),
    0 -1px 0 rgba(0, 0, 0, 0.06);
  min-height: 60vh;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.03)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.03)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

.cta-container {
  width: 100%;
  height: 100%;
  min-height: 60vh;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
}

.cta-content {
  text-align: left;
  padding: 6vh 4vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cta-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.cta-subtitle {
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.cta-button {
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  min-width: 150px;
  text-align: center;
  border: none;
  cursor: pointer;
}

.cta-button.primary {
  background-color: var(--color-mcmaster-red);
  color: white;
}

.cta-button.primary:hover {
  background-color: var(--color-mcmaster-rouge);
  transform: translateY(-2px);
}

.cta-image {
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 60vh;
}

.cta-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .cta-container {
    gap: 3vw;
  }
}

@media (max-width: 768px) {
  .cta-section {
    min-height: 80vh;
  }

  .cta-container {
    grid-template-columns: 1fr;
    gap: 0;
    min-height: 80vh;
  }

  .cta-content {
    text-align: center;
    padding: 4vh 6vw;
  }

  .cta-actions {
    justify-content: center;
  }

  .cta-button {
    width: 100%;
    max-width: 250px;
  }

  .cta-image {
    min-height: 40vh;
    order: -1;
  }
}

@media (max-width: 480px) {
  .cta-section {
    min-height: 70vh;
  }

  .cta-container {
    min-height: 70vh;
  }

  .cta-content {
    padding: 3vh 4vw;
  }

  .cta-title {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  .cta-subtitle {
    font-size: clamp(0.9rem, 3.5vw, 1rem);
  }

  .cta-image {
    min-height: 35vh;
  }
}
</style>

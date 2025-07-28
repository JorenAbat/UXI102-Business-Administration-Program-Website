<template>
  <section class="cta-section">
    <div class="cta-container">
      <div class="cta-content">
        <h2 class="cta-title">Ready to Get Started?</h2>
        <p class="cta-subtitle">
          Take the next step in your career journey with McMaster's Business Administration program.
          Our expert advisors are here to help you choose the right path.
        </p>
        <div class="cta-actions">
          <router-link to="/program" class="cta-button primary"> Explore Programs </router-link>
          <router-link to="/contact" class="cta-button secondary"> Get in Touch </router-link>
        </div>
      </div>

      <div class="cta-features">
        <div class="feature-item">
          <div class="feature-icon">🎓</div>
          <div class="feature-text">
            <h4>Expert Faculty</h4>
            <p>Learn from industry professionals and academic leaders</p>
          </div>
        </div>

        <div class="feature-item">
          <div class="feature-icon">⏰</div>
          <div class="feature-text">
            <h4>Flexible Schedule</h4>
            <p>Evening and weekend classes for working professionals</p>
          </div>
        </div>

        <div class="feature-item">
          <div class="feature-icon">💼</div>
          <div class="feature-text">
            <h4>Career Advancement</h4>
            <p>95% of graduates advance their careers within 6 months</p>
          </div>
        </div>

        <div class="feature-item">
          <div class="feature-icon">🤝</div>
          <div class="feature-text">
            <h4>Industry Connections</h4>
            <p>Network with professionals and potential employers</p>
          </div>
        </div>
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
  background: linear-gradient(
    135deg,
    var(--color-mcmaster-red) 0%,
    var(--color-mcmaster-rouge) 100%
  );
  color: white;
  padding: 6vh 2vw;
  position: relative;
  overflow: hidden;
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
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-content {
  text-align: center;
  margin-bottom: 4rem;
}

.cta-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.cta-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  min-width: 180px;
  text-align: center;
}

.cta-button.primary {
  background-color: white;
  color: var(--color-mcmaster-red);
  border: 2px solid white;
}

.cta-button.primary:hover {
  background-color: transparent;
  color: white;
  border-color: white;
  transform: translateY(-2px);
}

.cta-button.secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.cta-button.secondary:hover {
  background-color: white;
  color: var(--color-mcmaster-red);
  transform: translateY(-2px);
}

.cta-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  flex-shrink: 0;
}

.feature-text h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.feature-text p {
  opacity: 0.9;
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cta-section {
    padding: 4vh 3vw;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }

  .cta-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 3rem;
  }

  .feature-item {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .cta-section {
    padding: 3vh 4vw;
  }

  .feature-item {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }

  .feature-icon {
    align-self: center;
  }
}
</style>

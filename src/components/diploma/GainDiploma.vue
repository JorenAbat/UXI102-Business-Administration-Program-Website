<template>
  <section class="gain-diploma">
    <div class="gain-container">
      <!-- Left Side - Image -->
      <div class="gain-image">
        <img
          src="@/assets/images/diploma/BA Dip 2nd image.png"
          alt="Business meeting and collaboration"
          class="gain-img"
        />
      </div>

      <!-- Right Side - Content -->
      <div class="gain-content">
        <div class="gain-header">
          <span class="section-label">WHAT YOU WILL GAIN</span>
          <h2 class="section-title">
            Gain Practical, Transferable<br />
            Business Skills
          </h2>
        </div>

        <div class="skills-grid">
          <div class="skill-item">
            <div class="skill-icon">
              <i class="fas fa-rocket"></i>
            </div>
            <div class="skill-content">
              <h3 class="skill-title">Project Management</h3>
              <p class="skill-description">
                We foster a culture of innovation within our team, encouraging creative thinking and
                out-of-the-box solutions
              </p>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-icon">
              <i class="fas fa-comments"></i>
            </div>
            <div class="skill-content">
              <h3 class="skill-title">Business Communication</h3>
              <p class="skill-description">
                We foster a culture of innovation within our team, encouraging creative thinking and
                out-of-the-box solutions
              </p>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-icon">
              <i class="fas fa-calculator"></i>
            </div>
            <div class="skill-content">
              <h3 class="skill-title">Financial & Accounting</h3>
              <p class="skill-description">
                We foster a culture of innovation within our team, encouraging creative thinking and
                out-of-the-box solutions
              </p>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-icon">
              <i class="fas fa-users"></i>
            </div>
            <div class="skill-content">
              <h3 class="skill-title">Leadership & HR</h3>
              <p class="skill-description">
                We foster a culture of innovation within our team, encouraging creative thinking and
                out-of-the-box solutions
              </p>
            </div>
          </div>
        </div>

        <div class="gain-button">
          <button class="btn-course-list">See Full Course List</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GainDiploma',
}
</script>

<style scoped>
.gain-diploma {
  background-color: var(--color-light-bg);
  padding: var(--section-padding);
}

.gain-container {
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: center;
  box-sizing: border-box;
}

.gain-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gain-img {
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
}

.gain-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.gain-header {
  margin-bottom: var(--spacing-lg);
}

/* Using shared section header styles */
.section-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-unselected-dim);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--spacing-sm);
  display: block;
}

.section-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-mcmaster-black);
  line-height: 1.2;
  margin: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
}

.skill-item {
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
}

/* Using shared icon gradient styles */
.skill-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #e91e63, #f48fb1);
  border-radius: var(--border-radius-pill);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  color: white;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.skill-content {
  flex: 1;
}

.skill-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-mcmaster-black);
  margin: 0 0 var(--spacing-sm) 0;
  line-height: 1.3;
}

.skill-description {
  font-size: var(--font-size-sm);
  color: var(--color-subgray-word);
  line-height: 1.5;
  margin: 0;
}

.gain-button {
  margin-top: var(--spacing-lg);
}

/* Using shared button styles */
.btn-course-list {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: var(--spacing-lg) var(--spacing-2xl);
  border-radius: var(--border-radius-full);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-course-list:hover {
  background-color: var(--color-mcmaster-rouge);
  transform: translateY(-2px);
}

/* Responsive Design using shared breakpoints */
@media (max-width: 1400px) {
  .gain-container {
    padding: 0 3rem;
    gap: var(--spacing-3xl);
  }

  .section-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 1200px) {
  .gain-container {
    padding: 0 var(--spacing-2xl);
    gap: var(--spacing-2xl);
  }

  .section-title {
    font-size: var(--font-size-3xl);
  }

  .skills-grid {
    gap: var(--spacing-xl);
  }
}

@media (max-width: 768px) {
  .gain-diploma {
    padding: var(--section-padding-mobile);
  }

  .gain-container {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    padding: 0 var(--container-padding-mobile);
  }

  .section-title {
    font-size: 1.75rem;
    text-align: center;
  }

  .section-label {
    text-align: center;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .gain-button {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .gain-diploma {
    padding: var(--spacing-3xl) 0;
  }

  .section-title {
    font-size: var(--font-size-2xl);
  }

  .skill-item {
    gap: var(--spacing-md);
  }

  .skill-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .skill-title {
    font-size: var(--font-size-base);
  }

  .skill-description {
    font-size: var(--font-size-xs);
  }
}
</style>

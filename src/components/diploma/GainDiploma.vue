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
  padding: 5rem 0;
}

.gain-container {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
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
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.gain-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.gain-header {
  margin-bottom: 1rem;
}

.section-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-unselected-dim);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  display: block;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-mcmaster-black);
  line-height: 1.2;
  margin: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.skill-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.skill-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #e91e63, #f48fb1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: white;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.skill-content {
  flex: 1;
}

.skill-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-mcmaster-black);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.skill-description {
  font-size: 0.875rem;
  color: var(--color-subgray-word);
  line-height: 1.5;
  margin: 0;
}

.gain-button {
  margin-top: 1rem;
}

.btn-course-list {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-course-list:hover {
  background-color: var(--color-mcmaster-rouge);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1400px) {
  .gain-container {
    padding: 0 3rem;
    gap: 3rem;
  }

  .section-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 1200px) {
  .gain-container {
    padding: 0 2rem;
    gap: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .skills-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .gain-diploma {
    padding: 4rem 0;
  }

  .gain-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
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
    gap: 1.5rem;
  }

  .gain-button {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .gain-diploma {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .skill-item {
    gap: 0.75rem;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .skill-title {
    font-size: 1rem;
  }

  .skill-description {
    font-size: 0.8rem;
  }
}
</style>

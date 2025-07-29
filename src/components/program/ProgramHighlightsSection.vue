<template>
  <section class="program-highlights">
    <div class="highlights-container">
      <div class="section-header">
        <p class="section-subtitle">PROGRAM HIGHLIGHTS</p>
        <h2 class="section-title">Why Choose McMaster Business Administration Program?</h2>
        <p class="section-description">
          Our program is carefully crafted in collaboration with the renowned DeGroote School of
          Business, providing comprehensive business knowledge that today's employers seek. Whether
          you are beginning your career, stepping into management, or seeking career advancement,
          our flexible and fully online format allows you to balance your studies with your
          professional and personal commitments.
        </p>
      </div>

      <div class="highlights-content">
        <div class="highlights-image">
          <img
            src="@/assets/images/program/BA Program 2nd Image.jpg"
            alt="Professional business team in meeting"
            class="program-image"
          />
        </div>

        <div class="highlights-grid">
          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-wifi"></i>
            </div>
            <h3 class="highlight-title">Fully Online Format</h3>
            <p class="highlight-description">
              Study from anywhere, anytime—designed for busy professionals.
            </p>
          </div>

          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3 class="highlight-title">Expert Instructors</h3>
            <p class="highlight-description">
              Learn from industry leaders and experienced business educators.
            </p>
          </div>

          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="highlight-title">Practical Skills</h3>
            <p class="highlight-description">Real-world scenarios and practical assignments.</p>
          </div>

          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-network-wired"></i>
            </div>
            <h3 class="highlight-title">Networking Opportunities</h3>
            <p class="highlight-description">
              Connect and collaborate with peers and industry experts.
            </p>
          </div>

          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-certificate"></i>
            </div>
            <h3 class="highlight-title">Credential Flexibility</h3>
            <p class="highlight-description">
              Certificate, Diploma, or Diploma with Concentration options.
            </p>
          </div>

          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-rocket"></i>
            </div>
            <h3 class="highlight-title">Immediate Application</h3>
            <p class="highlight-description">
              Acquire skills you can immediately use at your workplace.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Tabs -->
      <div class="bottom-tabs">
        <button class="tab-button active">What You Will Learn</button>
        <button class="tab-button">Who Should Enroll</button>
        <button class="tab-button">Career Opportunities</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProgramHighlightsSection',
}
</script>

<style scoped>
.program-highlights {
  padding: 5rem 0;
  background: white;
}

.highlights-container {
  width: 80%;
  margin: 0 auto;
  padding: 0;
}

.section-header {
  text-align: left;
  margin-bottom: 4rem;
  max-width: none;
}

.section-subtitle {
  color: var(--color-subgray-word);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.section-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-mcmaster-black);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: none;
}

.section-description {
  font-size: var(--font-size-lg);
  color: var(--color-subgray-word);
  line-height: 1.6;
  max-width: none;
  margin: 0;
}

.highlights-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
  padding: 0 var(--spacing-2xl);
}

.highlights-image {
  position: relative;
  height: 780px;
  width: 100%;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.program-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
}

.highlights-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.highlight-item {
  padding: var(--spacing-2xl);
  background: var(--color-white-bg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);
  text-align: left;
}

.highlight-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.highlight-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-mcmaster-red), #f48fb1);
  border-radius: var(--border-radius-pill);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: white;
  font-size: 1.4rem;
}

.highlight-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-mcmaster-black);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.highlight-description {
  color: var(--color-subgray-word);
  line-height: 1.6;
  margin: 0;
  font-size: var(--font-size-base);
}

.bottom-tabs {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-top: var(--spacing-3xl);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  background: var(--color-white-bg);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.tab-button {
  flex: 1;
  padding: 0.75rem var(--spacing-2xl);
  border: none;
  background: var(--color-light-bg);
  color: var(--color-subgray-word);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all var(--transition-base);
  border-right: 1px solid var(--color-divider);
  font-size: var(--font-size-base);
}

.tab-button:last-child {
  border-right: none;
}

.tab-button.active {
  background: var(--color-white-bg);
  color: var(--color-mcmaster-black);
  font-weight: var(--font-weight-semibold);
  box-shadow: 0 -2px 0 var(--color-mcmaster-red) inset;
}

.tab-button:hover:not(.active) {
  background: var(--color-divider);
  color: var(--color-selected-dark);
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: var(--font-size-3xl);
  }

  .highlights-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
  }

  .highlights-image {
    height: 350px;
    order: -1;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .highlight-item {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: var(--font-size-2xl);
  }

  .highlights-image {
    height: 300px;
  }

  .highlight-item {
    padding: var(--spacing-lg);
  }

  .bottom-tabs {
    margin-top: var(--spacing-2xl);
    flex-direction: column;
    max-width: 95%;
    border-radius: 15px;
  }

  .tab-button {
    border-right: none;
    border-bottom: 1px solid var(--color-divider);
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-sm);
  }

  .tab-button:last-child {
    border-bottom: none;
  }
}
</style>

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
  width: 90%;
  margin: 0 auto;
  padding: 0;
}

.section-header {
  text-align: left;
  margin-bottom: 4rem;
  max-width: none;
}

.section-subtitle {
  color: #666;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a2332;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: none;
}

.section-description {
  font-size: 1.125rem;
  color: #4a5568;
  line-height: 1.6;
  max-width: none;
  margin: 0;
}

.highlights-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
  padding: 0 2rem;
}

.highlights-image {
  position: relative;
  height: 780px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
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
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  text-align: left;
}

.highlight-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.highlight-icon {
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
}

.highlight-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a2332;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.highlight-description {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

.bottom-tabs {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-top: 3rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: white;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.tab-button {
  flex: 1;
  padding: 0.75rem 2rem;
  border: none;
  background: #f8f9fa;
  color: #6c757d;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border-right: 1px solid #e9ecef;
  font-size: 1rem;
}

.tab-button:last-child {
  border-right: none;
}

.tab-button.active {
  background: white;
  color: #1a2332;
  font-weight: 600;
  box-shadow: 0 -2px 0 #e91e63 inset;
}

.tab-button:hover:not(.active) {
  background: #e9ecef;
  color: #495057;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .highlights-content {
    grid-template-columns: 1fr;
    gap: 3rem;
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
    font-size: 1.75rem;
  }

  .highlights-image {
    height: 300px;
  }

  .highlight-item {
    padding: 1rem;
  }

  .bottom-tabs {
    margin-top: 2rem;
    flex-direction: column;
    max-width: 95%;
    border-radius: 15px;
  }

  .tab-button {
    border-right: none;
    border-bottom: 1px solid #e9ecef;
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }

  .tab-button:last-child {
    border-bottom: none;
  }
}
</style>

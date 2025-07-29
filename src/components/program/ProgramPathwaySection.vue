<template>
  <section class="program-pathway">
    <div class="container">
      <div class="section-header">
        <p class="section-subtitle">PROGRAM PATHWAY</p>
        <h2 class="section-title">Program Structure & Course Outline</h2>
        <p class="section-description">
          Choose the educational path that fits your career goals and schedule.
        </p>
      </div>

      <div class="pathway-grid">
        <!-- Certificate Card -->
        <div class="pathway-card">
          <div class="card-header">
            <h3 class="card-title">Certificate</h3>
            <div class="price">$2700</div>
            <p class="price-description">
              Ideal for those who want foundational business knowledge quickly.
            </p>
          </div>

          <div class="divider"></div>

          <div class="card-content">
            <h4 class="courses-section-title">5 Core Courses</h4>
            <ul class="course-list">
              <li><i class="checkmark">✓</i> Business Foundations</li>
              <li><i class="checkmark">✓</i> Business Communications</li>
              <li><i class="checkmark">✓</i> Financial Accounting Essentials</li>
              <li><i class="checkmark">✓</i> Marketing Principles</li>
              <li><i class="checkmark">✓</i> Organizational Behaviour</li>
            </ul>
          </div>

          <div class="card-actions">
            <button class="btn-primary">Add to Cart</button>
            <button class="btn-secondary">Explore Certificate <span class="arrow">↗</span></button>
          </div>
        </div>

        <!-- Diploma Card -->
        <div class="pathway-card featured">
          <div class="popular-badge">Most Popular</div>
          <div class="card-header">
            <h3 class="card-title">Diploma</h3>
            <div class="price">$3000</div>
            <p class="price-description">
              Perfect if you're looking to broaden your knowledge and specialize further.
            </p>
          </div>

          <div class="divider"></div>

          <div class="card-content">
            <h4 class="courses-section-title">5 Core Courses (Same as Certificate)</h4>
            <h4 class="courses-section-title">Electives (choose 3 from below)</h4>
            <ul class="course-list">
              <li><i class="checkmark">✓</i> Project Management Basics</li>
              <li><i class="checkmark">✓</i> Human Resources Management</li>
              <li><i class="checkmark">✓</i> Data Analytics for Business</li>
              <li><i class="checkmark">✓</i> Business Law</li>
              <li><i class="checkmark">✓</i> Strategic Marketing Management</li>
            </ul>
          </div>

          <div class="card-actions">
            <button class="btn-primary">Add to Cart</button>
            <button class="btn-secondary">Explore Diploma <span class="arrow">↗</span></button>
          </div>
        </div>

        <!-- Advanced Diploma Card -->
        <div class="pathway-card">
          <div class="card-header">
            <h3 class="card-title">Advanced Diploma</h3>
            <div class="price">$5000</div>
            <p class="price-description">Gain in-depth knowledge in a specialized area.</p>
          </div>

          <div class="divider"></div>

          <div class="card-content">
            <div class="specialization-group">
              <h4 class="courses-section-title">Human Resources:</h4>
              <ul class="course-list">
                <li><i class="checkmark">✓</i> Human Resources Management</li>
                <li><i class="checkmark">✓</i> Organizational Development & Change</li>
                <li><i class="checkmark">✓</i> Labour Relations</li>
              </ul>
            </div>

            <div class="specialization-group">
              <h4 class="courses-section-title">Marketing:</h4>
              <ul class="course-list">
                <li><i class="checkmark">✓</i> Strategic Marketing Management</li>
                <li><i class="checkmark">✓</i> Digital Marketing Fundamentals</li>
                <li><i class="checkmark">✓</i> Consumer Behaviour</li>
              </ul>
            </div>

            <div class="specialization-group">
              <h4 class="courses-section-title">Data Analytics:</h4>
              <ul class="course-list">
                <li><i class="checkmark">✓</i> Data Analytics for Business</li>
                <li><i class="checkmark">✓</i> Business Intelligence Tools</li>
                <li><i class="checkmark">✓</i> Applied Business Analytics</li>
              </ul>
            </div>
          </div>

          <div class="card-actions">
            <button class="btn-primary">Add to Cart</button>
            <button class="btn-secondary">
              Explore Advanced Diploma <span class="arrow">↗</span>
            </button>
          </div>
        </div>

        <!-- Enterprise Card -->
        <div class="pathway-card enterprise">
          <div class="card-header">
            <h3 class="card-title">Enterprise</h3>
            <div class="price">Custom</div>
            <p class="price-description">
              Any business or organization with unique needs that require a fully personalized
              diploma
            </p>
          </div>

          <div class="divider"></div>

          <div class="card-content">
            <div class="enterprise-spacer"></div>
            <div class="enterprise-content">
              <div class="enterprise-icon">✈</div>
              <h4 class="enterprise-title">Need Something More Advanced</h4>
              <p class="enterprise-description">
                A highly tailored solution with dedicated support and advanced integration
                capabilities
              </p>
            </div>
          </div>

          <div class="card-actions">
            <button class="btn-primary">Consult with us</button>
            <button class="btn-secondary">Explore Courses <span class="arrow">↗</span></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProgramPathwaySection',
}
</script>

<style scoped>
.program-pathway {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 80%;
  margin: 0 auto;
  padding: 0 var(--container-padding);
  position: relative;
  box-sizing: border-box;
}

.section-header {
  text-align: left;
  margin-bottom: 60px;
}

.section-subtitle {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 16px;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1.2;
  max-width: none;
}

.section-description {
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 0;
  line-height: 1.6;
}

.pathway-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  align-items: stretch;
}

.pathway-card {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e5e5;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.pathway-card.featured {
  background: #e91e63;
  border: 2px solid #e91e63;
}

.pathway-card.featured .card-title,
.pathway-card.featured .price,
.pathway-card.featured .price-description,
.pathway-card.featured .courses-section-title,
.pathway-card.featured .course-list li {
  color: white;
}

.pathway-card.featured .checkmark {
  color: white;
}

.pathway-card.featured .divider {
  background: rgba(255, 255, 255, 0.3);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #e91e63;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  text-align: left;
  margin-bottom: 20px;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.price {
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.enterprise-spacer {
  flex: 1;
  min-height: 60px;
}

.price-description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.divider {
  height: 1px;
  background: #e5e5e5;
  margin: 24px 0;
}

.card-content {
  flex: 1;
  margin-bottom: 30px;
}

.courses-section-title {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 12px;
  margin-top: 20px;
}

.courses-section-title:first-child {
  margin-top: 0;
}

.course-list {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
}

.course-list li {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.4;
}

.checkmark {
  color: #e91e63;
  font-weight: 600;
  margin-right: 12px;
  font-style: normal;
}

.specialization-group {
  margin-bottom: 20px;
}

.specialization-group:last-child {
  margin-bottom: 0;
}

.enterprise-content {
  text-align: left;
  padding: 20px 0;
}

.enterprise-icon {
  font-size: 48px;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
}

.enterprise-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.enterprise-description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.card-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn-primary {
  background: #e91e63;
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #c2185b;
}

.btn-secondary {
  background: transparent;
  color: #666;
  border: none;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-secondary:hover {
  color: #e91e63;
}

.arrow {
  font-size: 16px;
  transition: transform 0.3s ease;
}

.btn-secondary:hover .arrow {
  transform: translate(2px, -2px);
}

.pathway-card.featured .btn-primary {
  background: white;
  color: #e91e63;
}

.pathway-card.featured .btn-primary:hover {
  background: #f5f5f5;
  color: #c2185b;
}

.pathway-card.featured .btn-secondary {
  color: white;
}

.pathway-card.featured .btn-secondary:hover {
  color: #f5f5f5;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 1200px;
    padding: 0 30px;
  }

  .pathway-grid {
    gap: 20px;
  }
}

@media (max-width: 1024px) {
  .pathway-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .container {
    padding: 0 25px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 32px;
  }

  .pathway-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .pathway-card {
    padding: 24px;
  }

  .container {
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 28px;
  }

  .price {
    font-size: 30px;
  }
}
</style>

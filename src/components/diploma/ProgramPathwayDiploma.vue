<template>
  <section class="program-pathway-diploma">
    <div class="pathway-container">
      <!-- Header Section -->
      <div class="pathway-header">
        <span class="section-label">PROGRAM PATHWAY</span>
        <h2 class="section-title">Program Pathway</h2>
        <p class="pathway-description">
          Earn your Diploma in Business Administration by successfully completing all five core
          courses plus any three elective courses listed below.
        </p>
      </div>

      <!-- Core Courses Section -->
      <div class="core-courses-section">
        <h3 class="courses-title">Core Courses (complete all 5)</h3>

        <div class="courses-grid">
          <div class="course-card">
            <div class="course-badge">3.0 UNITS</div>
            <h4 class="course-name">BUS 825 Business Foundations</h4>
            <p class="course-price">$789.52</p>
            <div class="course-actions">
              <button class="btn-add-cart">Add to Cart</button>
              <button class="btn-learn-more">
                Learn More
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div class="course-card">
            <div class="course-badge">3.0 UNITS</div>
            <h4 class="course-name">BUS 850 Business Communications</h4>
            <p class="course-price">$789.52</p>
            <div class="course-actions">
              <button class="btn-add-cart">Add to Cart</button>
              <button class="btn-learn-more">
                Learn More
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div class="course-card">
            <div class="course-badge">3.0 UNITS</div>
            <h4 class="course-name">BUS 860 Foundations of Business Finance</h4>
            <p class="course-price">$789.52</p>
            <div class="course-actions">
              <button class="btn-add-cart">Add to Cart</button>
              <button class="btn-learn-more">
                Learn More
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div class="course-card">
            <div class="course-badge">3.0 UNITS</div>
            <h4 class="course-name">HRM 821 Organizational Behavior</h4>
            <p class="course-price">$833.02</p>
            <div class="course-actions">
              <button class="btn-add-cart">Add to Cart</button>
              <button class="btn-learn-more">
                Learn More
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div class="course-card featured">
            <div class="course-badge">3.0 UNITS</div>
            <h4 class="course-name">MKT 819 Introduction to Marketing</h4>
            <p class="course-price">$789.52</p>
            <div class="course-actions">
              <button class="btn-add-cart-featured">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProgramPathwayDiploma',
}
</script>

<style scoped>
.program-pathway-diploma {
  background-color: white;
  padding: 5rem 0;
}

.pathway-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  box-sizing: border-box;
}

.pathway-header {
  text-align: center;
  margin-bottom: 4rem;
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
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}

.pathway-description {
  font-size: 1.125rem;
  color: var(--color-subgray-word);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.core-courses-section {
  margin-bottom: 3rem;
}

.courses-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-mcmaster-black);
  margin: 0 0 2rem 0;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.course-card {
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.course-card.featured {
  background-color: var(--color-mcmaster-red);
  color: white;
}

.course-badge {
  background-color: var(--color-mcmaster-red);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1rem;
}

.course-card.featured .course-badge {
  background-color: white;
  color: var(--color-mcmaster-red);
}

.course-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-mcmaster-black);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.course-card.featured .course-name {
  color: white;
}

.course-price {
  font-size: 1rem;
  color: var(--color-subgray-word);
  margin: 0 0 1.5rem 0;
  font-weight: 500;
}

.course-card.featured .course-price {
  color: rgba(255, 255, 255, 0.9);
}

.course-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-add-cart,
.btn-add-cart-featured {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-add-cart:hover {
  background-color: var(--color-mcmaster-rouge);
}

.btn-add-cart-featured {
  background-color: white;
  color: var(--color-mcmaster-red);
}

.btn-add-cart-featured:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.btn-learn-more {
  background-color: transparent;
  color: var(--color-mcmaster-red);
  border: none;
  padding: 0.75rem 0;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.btn-learn-more:hover {
  color: var(--color-mcmaster-rouge);
}

.btn-learn-more i {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.btn-learn-more:hover i {
  transform: translateX(3px);
}

/* Responsive Design */
@media (max-width: 1400px) {
  .pathway-container {
    padding: 0 3rem;
  }

  .section-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 1200px) {
  .pathway-container {
    padding: 0 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .courses-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
}

@media (max-width: 768px) {
  .program-pathway-diploma {
    padding: 4rem 0;
  }

  .pathway-container {
    padding: 0 1rem;
  }

  .pathway-header {
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .pathway-description {
    font-size: 1rem;
  }

  .courses-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .course-actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .btn-add-cart,
  .btn-add-cart-featured,
  .btn-learn-more {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .program-pathway-diploma {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .course-card {
    padding: 1.25rem;
  }

  .course-name {
    font-size: 1rem;
  }
}
</style>

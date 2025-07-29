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
  padding: var(--section-padding);
}

.pathway-container {
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding: 0 var(--container-padding);
  box-sizing: border-box;
}

.pathway-header {
  text-align: left;
  margin-bottom: var(--spacing-4xl);
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
  margin: 0 0 var(--spacing-xl) 0;
  line-height: 1.2;
}

.pathway-description {
  font-size: var(--font-size-lg);
  color: var(--color-subgray-word);
  line-height: 1.6;
  max-width: 800px;
  margin: 0;
}

.core-courses-section {
  margin-bottom: var(--spacing-3xl);
}

.courses-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-mcmaster-black);
  margin: 0 0 var(--spacing-2xl) 0;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}

/* Using shared card styles */
.course-card {
  background-color: white;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  position: relative;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.course-card.featured {
  background-color: var(--color-mcmaster-red);
  color: white;
}

.course-badge {
  background-color: var(--color-mcmaster-red);
  color: white;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--border-radius-lg);
  display: inline-block;
  margin-bottom: var(--spacing-lg);
}

.course-card.featured .course-badge {
  background-color: white;
  color: var(--color-mcmaster-red);
}

.course-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-mcmaster-black);
  margin: 0 0 var(--spacing-sm) 0;
  line-height: 1.3;
}

.course-card.featured .course-name {
  color: white;
}

.course-price {
  font-size: var(--font-size-base);
  color: var(--color-subgray-word);
  margin: 0 0 var(--spacing-xl) 0;
  font-weight: var(--font-weight-medium);
}

.course-card.featured .course-price {
  color: rgba(255, 255, 255, 0.9);
}

.course-actions {
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
}

/* Using shared button styles */
.btn-add-cart,
.btn-add-cart-featured {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--border-radius-full);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all var(--transition-base);
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
  padding: var(--spacing-md) 0;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  white-space: nowrap;
}

.btn-learn-more:hover {
  color: var(--color-mcmaster-rouge);
}

.btn-learn-more i {
  font-size: var(--font-size-xs);
  transition: transform var(--transition-base);
}

.btn-learn-more:hover i {
  transform: translateX(3px);
}

/* Responsive Design using shared breakpoints */
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
    padding: 0 var(--spacing-2xl);
  }

  .section-title {
    font-size: var(--font-size-3xl);
  }

  .courses-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
}

@media (max-width: 768px) {
  .program-pathway-diploma {
    padding: var(--section-padding-mobile);
  }

  .pathway-container {
    padding: 0 var(--container-padding-mobile);
  }

  .pathway-header {
    margin-bottom: var(--spacing-3xl);
  }

  .section-title {
    font-size: 1.75rem;
  }

  .pathway-description {
    font-size: var(--font-size-base);
  }

  .courses-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .course-actions {
    flex-direction: column;
    gap: var(--spacing-md);
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
    padding: var(--spacing-3xl) 0;
  }

  .section-title {
    font-size: var(--font-size-2xl);
  }

  .course-card {
    padding: var(--spacing-lg);
  }

  .course-name {
    font-size: var(--font-size-base);
  }
}
</style>

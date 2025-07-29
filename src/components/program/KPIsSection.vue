<template>
  <section class="kpis-section">
    <div class="container">
      <div class="kpis-grid">
        <div class="kpi-item">
          <div class="kpi-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <div class="kpi-number">5,000+</div>
          <div class="kpi-label">Graduates & Growing</div>
          <p class="kpi-description">
            Thousands have completed the Business Administration program — many now leading in
            industries across Canada and beyond.
          </p>
        </div>

        <div class="kpi-item">
          <div class="kpi-icon">
            <i class="fas fa-smile"></i>
          </div>
          <div class="kpi-number">97%</div>
          <div class="kpi-label">Student Satisfaction</div>
          <p class="kpi-description">
            Learners consistently praise course quality, instructor expertise, and real-world
            relevance of the business curriculum.
          </p>
        </div>

        <div class="kpi-item">
          <div class="kpi-icon">
            <i class="fas fa-briefcase"></i>
          </div>
          <div class="kpi-number">1,200+</div>
          <div class="kpi-label">Professionals Enrolled This Year</div>
          <p class="kpi-description">
            Working professionals and career changers alike are choosing McMaster to upskill and
            unlock new opportunities.
          </p>
        </div>

        <div class="kpi-item">
          <div class="kpi-icon">
            <i class="fas fa-clock"></i>
          </div>
          <div class="kpi-number">15,000+</div>
          <div class="kpi-label">Hours of Learning Delivered Annually</div>
          <p class="kpi-description">
            Flexible online formats let students study on their time — without compromising depth,
            rigor, or engagement.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'KPIsSection',
}
</script>

<style scoped>
.kpis-section {
  padding: 80px 0;
  background: var(--color-light-bg);
}

.container {
  max-width: 80%;
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.kpis-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  align-items: start;
}

.kpi-item {
  text-align: left;
}

.kpi-icon {
  font-size: 32px;
  color: var(--color-selected-dark);
  margin-bottom: 24px;
  display: block;
}

.kpi-icon i {
  display: block;
}

.kpi-number {
  font-size: 48px;
  font-weight: var(--font-weight-bold);
  color: var(--color-mcmaster-red);
  line-height: 1;
  margin-bottom: 16px;
}

.kpi-label {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-mcmaster-black);
  margin-bottom: 12px;
  line-height: 1.3;
}

.kpi-description {
  color: var(--color-subgray-word);
  line-height: 1.6;
  font-size: var(--font-size-sm);
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 95%;
    padding: 0 30px;
  }

  .kpis-grid {
    gap: 40px;
  }
}

@media (max-width: 1024px) {
  .kpis-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .kpis-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .kpi-item {
    text-align: center;
  }

  .kpi-number {
    font-size: 40px;
  }

  .kpi-label {
    font-size: var(--font-size-base);
  }

  .kpi-icon {
    font-size: 28px;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .kpi-number {
    font-size: 36px;
  }

  .kpi-icon {
    font-size: 24px;
  }

  .container {
    padding: 0 20px;
  }
}
</style>

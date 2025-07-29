<template>
  <section class="real-results">
    <div class="container">
      <div class="results-content">
        <div class="results-text">
          <h2 class="section-title">Real Results. Proven Impact</h2>

          <div class="stat-highlight">
            <div class="stat-number">95%</div>
            <div class="stat-label">Improved On-the-Job Performance</div>
          </div>

          <blockquote class="testimonial">
            <p class="quote-text">
              "Practical insights and real-world scenarios empower learners to apply knowledge
              confidently and effectively in everyday professional challenges."
            </p>
            <footer class="quote-author">
              <div class="author-avatar">
                <img
                  src="@/assets/images/program/Avatar.png"
                  alt="Sophie Leclerc"
                  class="avatar-image"
                />
              </div>
              <div class="author-info">
                <cite class="author-name">Sophie Leclerc</cite>
                <div class="author-title">Director of Operations, NovaEdge Solutions (Canada)</div>
              </div>
            </footer>
          </blockquote>
        </div>

        <div class="results-image">
          <img
            src="@/assets/images/program/Quote Image.jpg"
            alt="Professional woman celebrating success in office"
            class="success-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RealResultsSection',
}
</script>

<style scoped>
.real-results {
  padding: 5rem 0;
  background: white;
}

.container {
  max-width: 80%;
  margin: 0 auto;
  padding: 0 var(--spacing-2xl);
}

.results-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.results-text {
  max-width: 500px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-mcmaster-black);
  line-height: 1.2;
  margin-bottom: 2rem;
  white-space: nowrap;
}

.stat-highlight {
  margin-bottom: 2rem;
}

.stat-number {
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-mcmaster-red);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-mcmaster-black);
  margin-bottom: 1rem;
}

.testimonial {
  margin: 0;
  padding: 0;
}

.quote-text {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--color-mcmaster-black);
  margin-bottom: 1.5rem;
  position: relative;
}

.quote-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  flex: 1;
}

.author-name {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-mcmaster-black);
  font-style: normal;
  margin-bottom: 0.25rem;
}

.author-title {
  font-size: 0.875rem;
  color: var(--color-subgray-word);
  line-height: 1.4;
}

.results-image {
  position: relative;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.success-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .results-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .results-text {
    max-width: none;
  }

  .section-title {
    font-size: 2rem;
  }

  .stat-number {
    font-size: 3rem;
  }

  .quote-text {
    font-size: 1.125rem;
  }

  .results-image {
    height: 400px;
    order: -1;
  }

  .quote-author {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .quote-text {
    font-size: 1rem;
  }

  .results-image {
    height: 300px;
  }

  .quote-author {
    flex-direction: column;
    gap: 0.75rem;
  }

  .author-info {
    text-align: center;
  }
}
</style>

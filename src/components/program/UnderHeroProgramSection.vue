<template>
  <section class="under-hero-program">
    <!-- Trusted Companies Section -->
    <div class="trusted-companies">
      <div class="container">
        <p class="trusted-title">TRUSTED BY 200+ COMPANIES</p>
        <div class="companies-logos">
          <!-- Placeholder for company logos -->
          <div class="logo-placeholder" v-for="n in 6" :key="n">
            <div class="logo-box"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UnderHeroProgramSection',
}
</script>

<style scoped>
.under-hero-program {
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Trusted Companies Section */
.trusted-companies {
  padding: 3rem 0;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.trusted-title {
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: #666;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.companies-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.logo-placeholder {
  opacity: 0.6;
}

.logo-box {
  width: 120px;
  height: 60px;
  background: #e9ecef;
  border-radius: 8px;
  border: 2px dashed #ced4da;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.logo-box::before {
  content: 'LOGO';
  color: #adb5bd;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
  .companies-logos {
    gap: 1.5rem;
  }

  .logo-box {
    width: 100px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .companies-logos {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>

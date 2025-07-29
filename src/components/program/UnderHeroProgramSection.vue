<template>
  <section class="under-hero-program">
    <!-- Trusted Companies Section -->
    <div class="trusted-companies">
      <div class="container">
        <p class="trusted-title">TRUSTED BY 200+ COMPANIES</p>
        <div class="companies-carousel">
          <div class="companies-logos">
            <!-- First set of logos -->
            <div class="logo-item" v-for="logo in logos" :key="logo.id">
              <img :src="logo.src" :alt="logo.alt" class="logo-image" />
            </div>
            <!-- Duplicate set for seamless loop -->
            <div class="logo-item" v-for="logo in logos" :key="logo.id + '-duplicate'">
              <img :src="logo.src" :alt="logo.alt" class="logo-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import logos
import logo1 from '@/assets/images/program/logos/logo1.png'
import logo2 from '@/assets/images/program/logos/logo2.png'
import logo3 from '@/assets/images/program/logos/logo3.png'
import logo4 from '@/assets/images/program/logos/logo4.png'
import logo5 from '@/assets/images/program/logos/logo5.png'
import logo6 from '@/assets/images/program/logos/logo6.png'
import logo7 from '@/assets/images/program/logos/logo7.png'
import logo8 from '@/assets/images/program/logos/logo8.png'
import logo9 from '@/assets/images/program/logos/logo9.png'

export default {
  name: 'UnderHeroProgramSection',
  data() {
    return {
      logos: [
        {
          id: 1,
          src: logo1,
          alt: 'Partner Company 1',
        },
        {
          id: 2,
          src: logo2,
          alt: 'Partner Company 2',
        },
        {
          id: 3,
          src: logo3,
          alt: 'Partner Company 3',
        },
        {
          id: 4,
          src: logo4,
          alt: 'Partner Company 4',
        },
        {
          id: 5,
          src: logo5,
          alt: 'Partner Company 5',
        },
        {
          id: 6,
          src: logo6,
          alt: 'Partner Company 6',
        },
        {
          id: 7,
          src: logo7,
          alt: 'Partner Company 7',
        },
        {
          id: 8,
          src: logo8,
          alt: 'Partner Company 8',
        },
        {
          id: 9,
          src: logo9,
          alt: 'Partner Company 9',
        },
      ],
    }
  },
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

.companies-carousel {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.companies-logos {
  display: flex;
  align-items: center;
  gap: 4rem;
  animation: scroll-left 30s linear infinite;
  width: fit-content;
}

.logo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  width: 120px;
  height: 60px;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.7);
  transition: all 0.3s ease;
}

.logo-image:hover {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.05);
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover */
.companies-carousel:hover .companies-logos {
  animation-play-state: paused;
}

/* Responsive Design */
@media (max-width: 768px) {
  .companies-logos {
    gap: 2rem;
    animation-duration: 25s;
  }

  .logo-image {
    width: 100px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .companies-logos {
    gap: 1.5rem;
    animation-duration: 20s;
  }

  .logo-image {
    width: 80px;
    height: 40px;
  }
}
</style>

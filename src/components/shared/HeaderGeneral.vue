<template>
  <header class="header-general">
    <div class="header-container">
      <!-- Logo and Branding -->
      <div class="logo-section">
        <router-link to="/news-events" class="logo-link">
          <div class="logo">
            <span class="logo-text">McMaster</span>
            <span class="logo-subtitle">Business Administration</span>
          </div>
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop" v-if="!isMobileMenuOpen">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link
              to="/news-events"
              class="nav-link"
              :class="{ active: activePage === 'news-events' }"
            >
              News & Events
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/contact"
              class="nav-link"
              :class="{ active: activePage === 'contact' }"
            >
              Contact
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/program"
              class="nav-link"
              :class="{ active: activePage === 'program' }"
            >
              Program
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/diploma"
              class="nav-link"
              :class="{ active: activePage === 'diploma' }"
            >
              Diploma
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- CTA Button -->
      <div class="cta-section">
        <router-link to="/contact" class="apply-button"> Apply Now </router-link>
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        class="mobile-menu-toggle"
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle mobile menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <nav class="nav-mobile" v-if="isMobileMenuOpen">
      <ul class="nav-list-mobile">
        <li class="nav-item-mobile">
          <router-link
            to="/news-events"
            class="nav-link-mobile"
            :class="{ active: activePage === 'news-events' }"
            @click="closeMobileMenu"
          >
            News & Events
          </router-link>
        </li>
        <li class="nav-item-mobile">
          <router-link
            to="/contact"
            class="nav-link-mobile"
            :class="{ active: activePage === 'contact' }"
            @click="closeMobileMenu"
          >
            Contact
          </router-link>
        </li>
        <li class="nav-item-mobile">
          <router-link
            to="/program"
            class="nav-link-mobile"
            :class="{ active: activePage === 'program' }"
            @click="closeMobileMenu"
          >
            Program
          </router-link>
        </li>
        <li class="nav-item-mobile">
          <router-link
            to="/diploma"
            class="nav-link-mobile"
            :class="{ active: activePage === 'diploma' }"
            @click="closeMobileMenu"
          >
            Diploma
          </router-link>
        </li>
        <li class="nav-item-mobile">
          <router-link to="/contact" class="apply-button-mobile" @click="closeMobileMenu">
            Apply Now
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderGeneral',
  props: {
    activePage: {
      type: String,
      default: 'news-events',
      validator: function (value) {
        return ['news-events', 'contact', 'program', 'diploma'].indexOf(value) !== -1
      },
    },
  },
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
  },
  mounted() {
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.isMobileMenuOpen) {
        this.closeMobileMenu()
      }
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.closeMobileMenu)
  },
}
</script>

<style scoped>
.header-general {
  background-color: var(--color-white-bg);
  border-bottom: 1px solid var(--color-divider);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

/* Logo Section */
.logo-section {
  flex-shrink: 0;
}

.logo-link {
  text-decoration: none;
  color: inherit;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-mcmaster-black);
  line-height: 1.2;
}

.logo-subtitle {
  font-size: 0.875rem;
  color: var(--color-subgray-word);
  font-weight: 400;
  line-height: 1.2;
}

/* Desktop Navigation */
.nav-desktop {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  margin: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--color-unselected-dim);
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--color-selected-dark);
}

.nav-link.active {
  color: var(--color-selected-dark);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-mcmaster-red);
}

/* CTA Section */
.cta-section {
  flex-shrink: 0;
}

.apply-button {
  display: inline-block;
  background-color: var(--color-mcmaster-red);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
}

.apply-button:hover {
  background-color: var(--color-mcmaster-rouge);
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 4px;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background-color: var(--color-mcmaster-black);
  transition: all 0.3s ease;
}

/* Mobile Navigation */
.nav-mobile {
  display: none;
  background-color: var(--color-white-bg);
  border-top: 1px solid var(--color-divider);
  padding: 1rem;
}

.nav-list-mobile {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item-mobile {
  margin: 0;
  border-bottom: 1px solid var(--color-divider);
}

.nav-item-mobile:last-child {
  border-bottom: none;
}

.nav-link-mobile {
  display: block;
  text-decoration: none;
  color: var(--color-unselected-dim);
  font-weight: 500;
  font-size: 1rem;
  padding: 1rem 0;
  transition: color 0.3s ease;
}

.nav-link-mobile:hover {
  color: var(--color-selected-dark);
}

.nav-link-mobile.active {
  color: var(--color-selected-dark);
}

.apply-button-mobile {
  display: block;
  background-color: var(--color-mcmaster-red);
  color: white;
  padding: 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.apply-button-mobile:hover {
  background-color: var(--color-mcmaster-rouge);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .nav-mobile {
    display: block;
  }

  .header-container {
    height: 70px;
  }

  .logo-text {
    font-size: 1.25rem;
  }

  .logo-subtitle {
    font-size: 0.75rem;
  }

  .apply-button {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0 0.75rem;
  }

  .logo-text {
    font-size: 1.125rem;
  }

  .logo-subtitle {
    font-size: 0.7rem;
  }
}
</style>

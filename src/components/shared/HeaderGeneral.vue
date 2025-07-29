<template>
  <header class="header-general">
    <!-- Top Announcement Bar -->
    <div class="announcement-bar">
      <div class="announcement-container">
        <span class="announcement-text"
          >Registration opens soon — subscribe now and stay ahead with McMaster Continuing
          Education.</span
        >
        <button class="subscribe-button">Subscribe</button>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="main-header">
      <div class="header-container">
        <!-- Left Side - Branding -->
        <div class="branding-section">
          <div class="logo-section">
            <div class="mcmaster-logo">
              <img
                src="@/assets/images/shared/mcmaster-logo.png"
                alt="McMaster University"
                class="logo-image"
              />
            </div>
            <div class="continuing-education">
              <span class="ce-text">CONTINUING EDUCATION</span>
            </div>
          </div>
        </div>

        <!-- Center - Navigation Links -->
        <nav class="nav-desktop" v-if="!isMobileMenuOpen">
          <ul class="nav-list">
            <li class="nav-item dropdown">
              <router-link
                to="/program"
                class="nav-link"
                :class="{ active: activePage === 'program' }"
              >
                Find Programs & Courses
                <i class="fas fa-chevron-down"></i>
              </router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">About Us</a>
            </li>
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
              <a href="#" class="nav-link">Help Centre</a>
            </li>
            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link"
                :class="{ active: activePage === 'contact' }"
              >
                Contact Us
              </router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-search"></i>
                <span>Search</span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Right Side - Utility Icons & Buttons -->
        <div class="utility-section">
          <div class="cart-section">
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-count">1</span>
          </div>
          <div class="separator"></div>
          <div class="login-section">
            <i class="fas fa-user"></i>
            <span class="login-text">Login MacID</span>
          </div>
          <div class="separator"></div>
          <button class="register-button">Register Now</button>
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
    </div>

    <!-- Mobile Navigation -->
    <nav class="nav-mobile" v-if="isMobileMenuOpen">
      <ul class="nav-list-mobile">
        <li class="nav-item-mobile dropdown">
          <router-link
            to="/program"
            class="nav-link-mobile"
            :class="{ active: activePage === 'program' }"
            @click="closeMobileMenu"
          >
            Find Programs & Courses
            <i class="fas fa-chevron-down"></i>
          </router-link>
        </li>
        <li class="nav-item-mobile">
          <a href="#" class="nav-link-mobile">About Us</a>
        </li>
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
          <a href="#" class="nav-link-mobile">Help Centre</a>
        </li>
        <li class="nav-item-mobile">
          <router-link
            to="/contact"
            class="nav-link-mobile"
            :class="{ active: activePage === 'contact' }"
            @click="closeMobileMenu"
          >
            Contact Us
          </router-link>
        </li>
        <li class="nav-item-mobile">
          <a href="#" class="nav-link-mobile">
            <i class="fas fa-search"></i>
            <span>Search</span>
          </a>
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
  background-color: white;
  border-bottom: 1px solid var(--color-divider);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Top Announcement Bar */
.announcement-bar {
  background-color: var(--color-mcmaster-rouge);
  color: white;
  padding: 0.5rem 0;
  width: 100%;
}

.announcement-container {
  width: 100%;
  margin: 0;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 2rem;
}

.announcement-text {
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
}

.subscribe-button {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscribe-button:hover {
  background-color: white;
  color: var(--color-mcmaster-rouge);
}

/* Main Header */
.main-header {
  background-color: white;
  padding: 1rem 0;
  width: 100%;
  overflow: visible;
}

.header-container {
  width: 100%;
  margin: 0;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  gap: 2rem;
  box-sizing: border-box;
}

/* Branding Section */
.branding-section {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 350px;
  min-width: 350px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mcmaster-logo {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.continuing-education {
  margin-left: 1rem;
}

.ce-text {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-mcmaster-red);
  letter-spacing: 0.5px;
}

/* Desktop Navigation */
.nav-desktop {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  min-width: 0;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
}

.nav-item {
  margin: 0;
  flex-shrink: 0;
}

.nav-item:last-child {
  margin-left: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--color-unselected-dim);
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--color-selected-dark);
}

.nav-link.active {
  color: var(--color-mcmaster-red);
  font-weight: 700;
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

.nav-link i {
  font-size: 0.75rem;
  margin-left: 0.25rem;
}

/* Utility Section */
.utility-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-shrink: 0;
  width: 350px;
  min-width: 350px;
  justify-content: flex-end;
}

.cart-section,
.login-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-unselected-dim);
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.cart-section:hover,
.login-section:hover {
  color: var(--color-selected-dark);
}

.cart-section i,
.login-section i {
  font-size: 1rem;
  color: var(--color-unselected-dim);
}

.cart-count {
  background-color: var(--color-mcmaster-red);
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  position: relative;
  top: -8px;
  right: -8px;
}

.separator {
  width: 1px;
  height: 20px;
  background-color: var(--color-divider);
}

.register-button {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.register-button:hover {
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
  background-color: white;
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
  color: var(--color-mcmaster-red);
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .header-container {
    padding: 0 3rem;
  }

  .announcement-container {
    padding: 0 3rem;
    gap: 1.5rem;
  }

  .nav-list {
    gap: 2.5rem;
  }

  .nav-item:last-child {
    margin-left: 1.5rem;
  }

  .utility-section {
    gap: 1.5rem;
    width: 320px;
    min-width: 320px;
  }

  .branding-section {
    width: 320px;
    min-width: 320px;
  }
}

@media (max-width: 1024px) {
  .header-container {
    padding: 0 2rem;
  }

  .announcement-container {
    padding: 0 2rem;
    gap: 1rem;
  }

  .utility-section {
    gap: 1rem;
    width: 280px;
    min-width: 280px;
  }

  .login-text {
    display: none;
  }

  .nav-list {
    gap: 2rem;
  }

  .nav-item:last-child {
    margin-left: 1rem;
  }

  .ce-text {
    font-size: 1rem;
  }

  .logo-image {
    height: 35px;
  }

  .branding-section {
    width: 280px;
    min-width: 280px;
  }
}

@media (max-width: 768px) {
  .announcement-text {
    font-size: 0.75rem;
  }

  .subscribe-button {
    padding: 0.4rem 1.2rem;
    font-size: 0.7rem;
  }

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
    height: 50px;
    padding: 0 1rem;
    gap: 1rem;
  }

  .announcement-container {
    padding: 0 1rem;
    gap: 0.75rem;
  }

  .logo-image {
    height: 30px;
  }

  .ce-text {
    font-size: 0.875rem;
  }

  .utility-section {
    gap: 0.5rem;
    width: auto;
    min-width: auto;
  }

  .register-button {
    padding: 0.4rem 1.2rem;
    font-size: 0.8rem;
  }

  .branding-section {
    width: auto;
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0 0.75rem;
  }

  .announcement-container {
    padding: 0 0.75rem;
    gap: 0.5rem;
  }

  .logo-image {
    height: 25px;
  }

  .ce-text {
    font-size: 0.75rem;
  }
}
</style>

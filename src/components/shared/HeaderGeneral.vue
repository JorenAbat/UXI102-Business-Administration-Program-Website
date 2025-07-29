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
            <li class="nav-item dropdown" @mouseenter="showDropdown" @mouseleave="startHideTimer">
              <a
                href="#"
                class="nav-link"
                :class="{ active: activePage === 'program' || activePage === 'diploma' }"
                @click.prevent="toggleDropdown"
              >
                Find Programs & Courses
                <i class="fas fa-chevron-down" :class="{ rotated: isDropdownOpen }"></i>
              </a>
              <div
                class="dropdown-menu"
                v-show="isDropdownOpen"
                @mouseenter="cancelHideTimer"
                @mouseleave="startHideTimer"
              >
                <router-link
                  to="/program"
                  class="dropdown-item"
                  :class="{ active: activePage === 'program' }"
                  @click="hideDropdown"
                >
                  Business Administration Program
                </router-link>
                <router-link
                  to="/diploma"
                  class="dropdown-item"
                  :class="{ active: activePage === 'diploma' }"
                  @click="hideDropdown"
                >
                  Business Administration Advanced Diploma
                </router-link>
              </div>
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
        <li class="nav-item-mobile dropdown-mobile">
          <a
            href="#"
            class="nav-link-mobile"
            :class="{ active: activePage === 'program' || activePage === 'diploma' }"
            @click.prevent="toggleMobileDropdown"
          >
            Find Programs & Courses
            <i class="fas fa-chevron-down" :class="{ rotated: isMobileDropdownOpen }"></i>
          </a>
          <div class="dropdown-menu-mobile" v-show="isMobileDropdownOpen">
            <router-link
              to="/program"
              class="dropdown-item-mobile"
              :class="{ active: activePage === 'program' }"
              @click="closeMobileMenu"
            >
              Business Administration Program
            </router-link>
            <router-link
              to="/diploma"
              class="dropdown-item-mobile"
              :class="{ active: activePage === 'diploma' }"
              @click="closeMobileMenu"
            >
              Business Administration Advanced Diploma
            </router-link>
          </div>
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

        <!-- Mobile Utility Section -->
        <li class="nav-divider-mobile"></li>
        <li class="nav-item-mobile">
          <a href="#" class="nav-link-mobile utility-link-mobile">
            <i class="fas fa-shopping-cart"></i>
            <span>Cart</span>
            <span class="cart-count-mobile">1</span>
          </a>
        </li>
        <li class="nav-item-mobile">
          <a href="#" class="nav-link-mobile utility-link-mobile">
            <i class="fas fa-user"></i>
            <span>Login MacID</span>
          </a>
        </li>
        <li class="nav-item-mobile">
          <button class="register-button-mobile" @click="closeMobileMenu">Register Now</button>
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
      isDropdownOpen: false,
      isMobileDropdownOpen: false,
      hideTimer: null,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
      this.isMobileDropdownOpen = false
    },
    showDropdown() {
      this.cancelHideTimer()
      this.isDropdownOpen = true
    },
    hideDropdown() {
      this.isDropdownOpen = false
    },
    startHideTimer() {
      this.hideTimer = setTimeout(() => {
        this.hideDropdown()
      }, 300) // 300ms delay
    },
    cancelHideTimer() {
      if (this.hideTimer) {
        clearTimeout(this.hideTimer)
        this.hideTimer = null
      }
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    toggleMobileDropdown() {
      this.isMobileDropdownOpen = !this.isMobileDropdownOpen
    },
    handleDocumentClick(event) {
      // Close dropdown if clicking outside of it
      const dropdown = this.$el.querySelector('.dropdown')
      if (dropdown && !dropdown.contains(event.target)) {
        this.hideDropdown()
      }
    },
  },
  mounted() {
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.isMobileMenuOpen) {
        this.closeMobileMenu()
      }
    })

    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleDocumentClick)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.closeMobileMenu)
    document.removeEventListener('click', this.handleDocumentClick)
    this.cancelHideTimer()
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
  min-width: 200px;
  max-width: 350px;
  flex: 0 0 auto;
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
  overflow: visible;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
  min-width: 0;
}

.nav-item {
  margin: 0;
  flex-shrink: 0;
  position: relative;
}

.nav-item:last-child {
  margin-left: 2rem;
}

/* Dropdown Functionality */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid var(--color-divider);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 280px;
  padding: 0.5rem 0;
  margin-top: 0.25rem;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -0.25rem;
  left: 0;
  right: 0;
  height: 0.25rem;
  background: transparent;
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  color: var(--color-unselected-dim);
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border-bottom: 1px solid var(--color-divider);
  white-space: nowrap;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background-color: var(--color-light-bg);
  color: var(--color-selected-dark);
}

.dropdown-item.active {
  color: var(--color-mcmaster-red);
  font-weight: 600;
  background-color: rgba(225, 25, 85, 0.05);
}

.nav-link i.rotated {
  transform: rotate(180deg);
}

.nav-link i {
  font-size: 0.75rem;
  margin-left: 0.25rem;
  transition: transform 0.3s ease;
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

/* Utility Section */
.utility-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
  min-width: 200px;
  max-width: 350px;
  justify-content: flex-end;
  flex: 0 0 auto;
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

/* Mobile Dropdown Styles */
.dropdown-mobile {
  position: relative;
}

.dropdown-menu-mobile {
  background-color: var(--color-light-bg);
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  border-left: 3px solid var(--color-mcmaster-red);
  padding-left: 1rem;
}

.dropdown-item-mobile {
  display: block;
  text-decoration: none;
  color: var(--color-unselected-dim);
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.75rem 0;
  transition: color 0.3s ease;
  border-bottom: 1px solid var(--color-divider);
}

.dropdown-item-mobile:last-child {
  border-bottom: none;
}

.dropdown-item-mobile:hover {
  color: var(--color-selected-dark);
}

.dropdown-item-mobile.active {
  color: var(--color-mcmaster-red);
  font-weight: 600;
}

.nav-link-mobile i.rotated {
  transform: rotate(180deg);
}

.nav-link-mobile i {
  transition: transform 0.3s ease;
}

/* Responsive Design */
@media (max-width: 1600px) {
  .header-container {
    padding: 0 3rem;
    gap: 1.5rem;
  }

  .announcement-container {
    padding: 0 3rem;
    gap: 1.5rem;
  }

  .nav-list {
    gap: 1.5rem;
  }

  .utility-section {
    gap: 1.25rem;
    min-width: 180px;
    max-width: 300px;
  }

  .branding-section {
    min-width: 180px;
    max-width: 300px;
  }

  .nav-link {
    font-size: 0.85rem;
  }

  .ce-text {
    font-size: 1.05rem;
  }

  .register-button {
    padding: 0.45rem 1.4rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 1500px) {
  .utility-section {
    gap: 1rem;
  }

  .nav-list {
    gap: 1.5rem;
  }

  .nav-link {
    font-size: 0.8rem;
  }

  .ce-text {
    font-size: 1rem;
  }

  .register-button {
    padding: 0.4rem 1.3rem;
    font-size: 0.8rem;
  }

  .cart-section,
  .login-section {
    font-size: 0.8rem;
  }
}

@media (max-width: 1400px) {
  .header-container {
    padding: 0 2.5rem;
    gap: 1rem;
  }

  .announcement-container {
    padding: 0 2.5rem;
    gap: 1rem;
  }

  .nav-list {
    gap: 1.25rem;
  }

  .utility-section {
    min-width: 160px;
    max-width: 250px;
    gap: 0.75rem;
  }

  .branding-section {
    min-width: 160px;
    max-width: 280px;
  }

  .nav-link {
    font-size: 0.75rem;
  }

  .ce-text {
    font-size: 0.9rem;
  }

  .logo-image {
    height: 35px;
  }
}

@media (max-width: 1350px) {
  .login-text {
    display: none;
  }

  .nav-link {
    font-size: 0.7rem;
  }

  .utility-section {
    gap: 0.8rem;
  }

  .nav-list {
    gap: 1.1rem;
  }
}

@media (max-width: 1300px) {
  .nav-item:last-child {
    display: none;
  }

  .nav-link {
    font-size: 0.68rem;
  }

  .nav-list {
    gap: 1rem;
  }

  .utility-section {
    gap: 0.7rem;
  }

  .ce-text {
    font-size: 0.9rem;
  }

  .logo-image {
    height: 35px;
  }
}

@media (max-width: 1250px) {
  .nav-link {
    font-size: 0.65rem;
    padding: 0.3rem 0;
  }

  .nav-list {
    gap: 0.9rem;
  }

  .utility-section {
    gap: 0.6rem;
  }

  .register-button {
    padding: 0.35rem 1rem;
    font-size: 0.7rem;
  }

  .ce-text {
    font-size: 0.85rem;
  }

  .logo-image {
    height: 32px;
  }
}

@media (max-width: 1200px) {
  .nav-desktop {
    display: none;
  }

  .utility-section {
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
    gap: 0.5rem;
  }

  .announcement-container {
    padding: 0 1rem;
    gap: 0.5rem;
  }

  .logo-image {
    height: 30px;
  }

  .ce-text {
    font-size: 0.8rem;
  }

  .register-button {
    display: none;
  }

  .branding-section {
    width: auto;
    min-width: auto;
    flex: 1;
  }
}

@media (max-width: 1024px) {
  .header-container {
    padding: 0 1.5rem;
    gap: 0.25rem;
  }

  .announcement-container {
    padding: 0 1.5rem;
    gap: 0.75rem;
  }

  .utility-section {
    gap: 0.25rem;
    min-width: 120px;
    max-width: 200px;
  }

  .nav-list {
    gap: 0.75rem;
  }

  .branding-section {
    min-width: 120px;
    max-width: 220px;
  }

  .nav-link {
    font-size: 0.6rem;
  }

  .register-button {
    padding: 0.3rem 0.8rem;
    font-size: 0.7rem;
  }

  .ce-text {
    font-size: 0.8rem;
  }

  .logo-image {
    height: 30px;
  }
}

@media (max-width: 900px) {
  .header-container {
    height: 50px;
    padding: 0 1rem;
    gap: 0.5rem;
  }

  .announcement-container {
    padding: 0 1rem;
    gap: 0.5rem;
  }

  .logo-image {
    height: 30px;
  }

  .ce-text {
    font-size: 0.8rem;
  }

  .branding-section {
    width: auto;
    min-width: auto;
    flex: 1;
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

  .header-container {
    height: 50px;
    padding: 0 1rem;
    gap: 0.5rem;
  }

  .announcement-container {
    padding: 0 1rem;
    gap: 0.75rem;
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

  .register-button {
    padding: 0.3rem 0.8rem;
    font-size: 0.7rem;
  }

  .announcement-text {
    font-size: 0.7rem;
  }

  .subscribe-button {
    padding: 0.3rem 1rem;
    font-size: 0.65rem;
  }
}

/* Mobile Menu Styles */
.nav-divider-mobile {
  height: 1px;
  background-color: var(--color-divider);
  margin: 0.5rem 0;
}

.utility-link-mobile {
  display: flex !important;
  align-items: center;
  gap: 0.75rem;
  position: relative;
}

.utility-link-mobile i {
  font-size: 1.1rem;
  color: var(--color-unselected-dim);
  width: 20px;
}

.cart-count-mobile {
  background-color: var(--color-mcmaster-red);
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: auto;
}

.register-button-mobile {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin: 0.5rem 0;
}

.register-button-mobile:hover {
  background-color: var(--color-mcmaster-rouge);
}
</style>

<template>
  <footer class="footer-general">
    <div class="footer-container">
      <!-- Left Section: McMaster Info -->
      <div class="mcmaster-section">
        <div class="logo-container">
          <img
            src="@/assets/images/mcmaster-logo.png"
            alt="McMaster University"
            class="footer-logo"
          />
        </div>
        <p class="mcmaster-description">
          At McMaster, we don't just teach—we challenge, inspire, and elevate. Our students go on to
          lead breakthroughs in medicine, drive innovation in engineering, and shape policy that
          matters. Ranked among Canada's top research universities, we're proud of the minds we've
          shaped and the impact they've made. Excellence isn't a buzzword here—it's tradition,
          earned and proven every day in labs, classrooms, and communities around the world.
        </p>
      </div>

      <!-- Center Section: Navigation Links -->
      <div class="navigation-section">
        <!-- Programs & Courses Column -->
        <div class="nav-column">
          <h3 class="nav-title">PROGRAMS & COURSES</h3>
          <ul class="nav-links">
            <li><a href="#" class="nav-link">Business</a></li>
            <li><a href="#" class="nav-link">Health & Social Services</a></li>
            <li><a href="#" class="nav-link">Marketing and Communications</a></li>
            <li><a href="#" class="nav-link">Technology and Data</a></li>
            <li><a href="#" class="nav-link">Professional Development</a></li>
          </ul>
        </div>

        <!-- Additional Programs Column -->
        <div class="nav-column">
          <ul class="nav-links nav-links-secondary">
            <li><a href="#" class="nav-link">edXpress</a></li>
            <li><a href="#" class="nav-link">Microcredentials</a></li>
            <li><a href="#" class="nav-link">Corporate Training</a></li>
            <li><a href="#" class="nav-link">Degree Pathway</a></li>
            <li><a href="#" class="nav-link">McMaster Undergrad Options</a></li>
          </ul>
        </div>

        <!-- About Column -->
        <div class="nav-column">
          <h3 class="nav-title">ABOUT</h3>
          <ul class="nav-links">
            <li><a href="#" class="nav-link">HELP CENTRE (FAQ)</a></li>
            <li><router-link to="/news-events" class="nav-link">NEWS & EVENTS</router-link></li>
            <li><router-link to="/contact" class="nav-link">CONTACT US</router-link></li>
            <li><a href="#" class="nav-link">REGISTRATION</a></li>
            <li><a href="#" class="nav-link">LOG IN MACID</a></li>
          </ul>
        </div>
      </div>

      <!-- Right Section: Newsletter Signup -->
      <div class="newsletter-section">
        <h3 class="newsletter-title">Stay in the loop with program updates</h3>
        <p class="newsletter-subtitle">
          Subscribe to our newsletter to receive the latest news on course offerings, important
          dates, and special events from McMaster Continuing Education.
        </p>
        <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
          <input
            type="email"
            v-model="email"
            placeholder="Your Email"
            class="newsletter-input"
            required
          />
          <button type="submit" class="newsletter-button">Subscribe</button>
        </form>
      </div>
    </div>

    <!-- Bottom Section: Copyright and Legal -->
    <div class="footer-bottom">
      <div class="footer-bottom-container">
        <div class="copyright-info">
          <span class="copyright-text">© 2025 McMaster University</span>
          <span class="address-text">1280 Main St W, Hamilton, L8S 4L8, Ontario, Canada</span>
          <span class="contact-text">(905) 525-9140</span>
          <span class="email-text">info@mcmaster.com</span>
        </div>
        <div class="legal-links">
          <a href="#" class="legal-link">Refund</a>
          <a href="#" class="legal-link">Privacy Policy</a>
          <a href="#" class="legal-link">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterGeneral',
  data() {
    return {
      email: '',
    }
  },
  methods: {
    subscribeNewsletter() {
      // Placeholder for newsletter subscription
      console.log('Newsletter subscription:', this.email)
      this.email = ''
      // In a real app, this would send the email to a backend service
    },
  },
}
</script>

<style scoped>
.footer-general {
  background-color: #f8f9fa;
  color: var(--color-selected-dark);
  width: 100%;
}

.footer-container {
  max-width: 96vw;
  margin: 0 auto;
  padding: 6vh 1vw 4vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 3vw;
  align-items: flex-start;
}

/* Left Section: McMaster Info */
.mcmaster-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.logo-container {
  margin-bottom: 0.8rem;
}

.footer-logo {
  height: 50px;
  width: auto;
}

.mcmaster-description {
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  line-height: 1.5;
  color: #6c757d;
  margin: 0;
}

/* Center Section: Navigation Links */
.navigation-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.5vw;
}

.nav-column {
  display: flex;
  flex-direction: column;
}

.nav-title {
  font-size: clamp(0.7rem, 0.9vw, 0.8rem);
  font-weight: 700;
  color: var(--color-mcmaster-red);
  margin-bottom: 1.2rem;
  letter-spacing: 0.5px;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.nav-links-secondary {
  margin-top: 1.9rem; /* Align with other columns */
}

.nav-link {
  color: #6c757d;
  text-decoration: none;
  font-size: clamp(0.75rem, 0.9vw, 0.85rem);
  font-weight: 600;
  transition: color 0.3s ease;
  line-height: 1.3;
}

.nav-link:hover {
  color: var(--color-selected-dark);
}

/* Right Section: Newsletter Signup */
.newsletter-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.newsletter-title {
  font-size: clamp(1rem, 1.3vw, 1.2rem);
  font-weight: 700;
  color: var(--color-selected-dark);
  margin: 0;
  line-height: 1.2;
}

.newsletter-subtitle {
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  color: #6c757d;
  line-height: 1.4;
  margin: 0;
}

.newsletter-form {
  display: flex;
  gap: 0.4rem;
  background-color: white;
  border-radius: 12px;
  padding: 0.3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 10px;
  font-size: 0.85rem;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.newsletter-input:focus {
  outline: none;
  background-color: #f8f9fa;
}

.newsletter-input::placeholder {
  color: #adb5bd;
}

.newsletter-button {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: 0.75rem 1.2rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.newsletter-button:hover {
  background-color: var(--color-mcmaster-rouge);
}

/* Bottom Section: Copyright and Legal */
.footer-bottom {
  border-top: 1px solid #e0e0e0;
  background-color: #f0f1f2;
}

.footer-bottom-container {
  max-width: 96vw;
  margin: 0 auto;
  padding: 1.5vh 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.copyright-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.copyright-text,
.address-text,
.contact-text,
.email-text {
  font-size: clamp(0.75rem, 0.9vw, 0.8rem);
  color: #6c757d;
}

.legal-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.legal-link {
  font-size: clamp(0.75rem, 0.9vw, 0.8rem);
  color: #6c757d;
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: var(--color-selected-dark);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .footer-container {
    max-width: 98vw;
  }

  .footer-bottom-container {
    max-width: 98vw;
  }
}

@media (max-width: 1024px) {
  .navigation-section {
    grid-template-columns: 1fr 1fr;
    gap: 2vw;
  }

  .nav-column:last-child {
    grid-column: 1 / 3;
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 4vh;
    padding: 4vh 2vw 3vh;
    max-width: 96vw;
  }

  .navigation-section {
    grid-template-columns: 1fr;
    gap: 3vh;
    order: 3;
  }

  .newsletter-section {
    order: 2;
  }

  .footer-bottom-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    max-width: 96vw;
    padding: 1.5vh 2vw;
  }

  .copyright-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .legal-links {
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-button {
    align-self: flex-start;
  }

  .legal-links {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
}
</style>

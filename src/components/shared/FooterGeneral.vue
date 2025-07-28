<template>
  <footer class="footer-general">
    <div class="footer-container">
      <!-- Newsletter Signup -->
      <div class="newsletter-section">
        <h3 class="footer-title">Stay Updated</h3>
        <p class="footer-subtitle">Subscribe to our newsletter for the latest news and updates</p>
        <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email address"
            class="newsletter-input"
            required
          />
          <button type="submit" class="newsletter-button">Subscribe</button>
        </form>
      </div>

      <!-- Quick Links -->
      <div class="quick-links-section">
        <h3 class="footer-title">Quick Links</h3>
        <ul class="footer-links">
          <li><router-link to="/news-events" class="footer-link">News & Events</router-link></li>
          <li><router-link to="/contact" class="footer-link">Contact Us</router-link></li>
          <li><router-link to="/program" class="footer-link">Program Details</router-link></li>
          <li><router-link to="/diploma" class="footer-link">Diploma Program</router-link></li>
        </ul>
      </div>

      <!-- Contact Information -->
      <div class="contact-section">
        <h3 class="footer-title">Contact Information</h3>
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>McMaster University<br />1280 Main Street West<br />Hamilton, ON L8S 4L8</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>(905) 525-9140</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>business.admin@mcmaster.ca</span>
          </div>
        </div>
      </div>

      <!-- Social Media -->
      <div class="social-section">
        <h3 class="footer-title">Follow Us</h3>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="copyright-section">
      <div class="copyright-container">
        <p class="copyright-text">© 2024 McMaster University. All rights reserved.</p>
        <div class="footer-brand">
          <span class="brand-text">McMaster</span>
          <span class="brand-subtitle">Business Administration</span>
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
  background-color: var(--color-selected-dark);
  color: white;
  padding: 4rem 2rem 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.footer-subtitle {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

/* Newsletter Section */
.newsletter-form {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.newsletter-input {
  flex: 1;
  min-width: 200px;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
}

.newsletter-button {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-button:hover {
  background-color: var(--color-mcmaster-rouge);
}

/* Quick Links Section */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: white;
}

/* Contact Section */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.contact-item i {
  color: var(--color-mcmaster-red);
  margin-top: 0.25rem;
  flex-shrink: 0;
}

/* Social Section */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--color-mcmaster-red);
  transform: translateY(-2px);
}

/* Copyright Section */
.copyright-section {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
}

.copyright-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.brand-text {
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
}

.brand-subtitle {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-general {
    padding: 3rem 1rem 0;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .copyright-container {
    flex-direction: column;
    text-align: center;
  }

  .footer-brand {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .social-links {
    justify-content: center;
  }
}
</style>

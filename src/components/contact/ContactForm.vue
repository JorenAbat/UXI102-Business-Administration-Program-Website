<template>
  <section class="contact-form-section">
    <div class="container">
      <div class="form-header">
        <h2 class="section-title">Send Us a Message</h2>
        <p class="section-subtitle">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <div class="form-container">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-grid">
            <!-- Name Field -->
            <div class="form-group">
              <label for="name" class="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="form-input"
                :class="{ error: errors.name }"
                placeholder="Enter your full name"
                required
              />
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>

            <!-- Email Field -->
            <div class="form-group">
              <label for="email" class="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="form-input"
                :class="{ error: errors.email }"
                placeholder="Enter your email address"
                required
              />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <!-- Phone Field -->
            <div class="form-group">
              <label for="phone" class="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                class="form-input"
                placeholder="(555) 123-4567"
              />
            </div>

            <!-- Program Interest Field -->
            <div class="form-group">
              <label for="program" class="form-label">Program of Interest</label>
              <select id="program" v-model="formData.program" class="form-select">
                <option value="">Select a program</option>
                <option value="business-admin">Business Administration</option>
                <option value="health-social">Health & Social Services</option>
                <option value="marketing-comm">Marketing & Communications</option>
                <option value="tech-data">Technology & Data</option>
                <option value="professional-dev">Professional Development</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <!-- Message Field -->
          <div class="form-group message-group">
            <label for="message" class="form-label">Message *</label>
            <textarea
              id="message"
              v-model="formData.message"
              class="form-textarea"
              :class="{ error: errors.message }"
              placeholder="Tell us about your questions or what you'd like to know..."
              rows="6"
              required
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>

          <!-- Consent Checkbox -->
          <div class="form-group checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" v-model="formData.consent" class="form-checkbox" required />
              <span class="checkmark"></span>
              <span class="checkbox-text">
                I agree to receive communications from McMaster Continuing Education about programs
                and services. *
              </span>
            </label>
          </div>

          <!-- Submit Button -->
          <div class="form-actions">
            <button
              type="submit"
              class="submit-button"
              :disabled="isSubmitting"
              :class="{ submitting: isSubmitting }"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </button>
          </div>

          <!-- Success/Error Messages -->
          <div v-if="submitMessage" class="submit-message" :class="submitStatus">
            {{ submitMessage }}
          </div>
        </form>

        <!-- Contact Info Sidebar -->
        <div class="contact-info">
          <h3 class="contact-title">Other Ways to Reach Us</h3>

          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">📞</div>
              <div class="method-content">
                <h4>Phone</h4>
                <p>(905) 525-9140</p>
                <span>Mon-Fri, 9AM-5PM</span>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">✉️</div>
              <div class="method-content">
                <h4>Email</h4>
                <p>info@mcmaster.com</p>
                <span>Response within 24 hours</span>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">📍</div>
              <div class="method-content">
                <h4>Visit Us</h4>
                <p>1280 Main St W<br />Hamilton, L8S 4L8<br />Ontario, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        program: '',
        message: '',
        consent: false,
      },
      errors: {},
      isSubmitting: false,
      submitMessage: '',
      submitStatus: '',
    }
  },
  methods: {
    validateForm() {
      this.errors = {}

      if (!this.formData.name.trim()) {
        this.errors.name = 'Name is required'
      }

      if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required'
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address'
      }

      if (!this.formData.message.trim()) {
        this.errors.message = 'Message is required'
      } else if (this.formData.message.trim().length < 10) {
        this.errors.message = 'Message must be at least 10 characters long'
      }

      return Object.keys(this.errors).length === 0
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },

    async submitForm() {
      if (!this.validateForm()) return

      this.isSubmitting = true
      this.submitMessage = ''

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Success
        this.submitMessage =
          "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours."
        this.submitStatus = 'success'

        // Reset form
        this.formData = {
          name: '',
          email: '',
          phone: '',
          program: '',
          message: '',
          consent: false,
        }
      } catch (error) {
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again.'
        this.submitStatus = 'error'
      } finally {
        this.isSubmitting = false

        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = ''
        }, 5000)
      }
    },
  },
}
</script>

<style scoped>
.contact-form-section {
  padding: 6vh 2vw;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.form-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-selected-dark);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: var(--color-unselected-dim);
}

.form-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: flex-start;
}

.contact-form {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.message-group {
  grid-column: 1 / -1;
}

.form-label {
  font-weight: 600;
  color: var(--color-selected-dark);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-input,
.form-select,
.form-textarea {
  padding: 0.875rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: white;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-mcmaster-red);
}

.form-input.error,
.form-textarea.error {
  border-color: #dc3545;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

.checkbox-group {
  margin-bottom: 2rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  gap: 0.75rem;
}

.form-checkbox {
  width: 18px;
  height: 18px;
  margin: 0;
}

.checkbox-text {
  font-size: 0.9rem;
  color: var(--color-unselected-dim);
  line-height: 1.4;
}

.form-actions {
  text-align: center;
}

.submit-button {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: 1rem 3rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--color-mcmaster-rouge);
  transform: translateY(-2px);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
}

.submit-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* Contact Info Sidebar */
.contact-info {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  height: fit-content;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-selected-dark);
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-method {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.method-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  flex-shrink: 0;
}

.method-content h4 {
  font-weight: 600;
  color: var(--color-selected-dark);
  margin-bottom: 0.25rem;
}

.method-content p {
  color: var(--color-selected-dark);
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.method-content span {
  color: var(--color-unselected-dim);
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-form-section {
    padding: 4vh 3vw;
  }

  .form-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-form {
    padding: 2rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .contact-info {
    order: -1;
  }
}

@media (max-width: 480px) {
  .contact-form {
    padding: 1.5rem;
  }

  .submit-button {
    width: 100%;
  }
}
</style>

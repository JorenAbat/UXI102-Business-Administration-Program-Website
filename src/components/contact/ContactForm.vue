<template>
  <section class="contact-form-section">
    <div class="container">
      <div class="form-container">
        <!-- Left Column: Header + Image -->
        <div class="left-column">
          <div class="form-header">
            <h2 class="section-title">Have a Question ? Contact Us today !</h2>
            <p class="section-subtitle">
              Fill up all the information here, then click submit button.
            </p>
          </div>
          <div class="contact-image">
            <img
              src="@/assets/images/contact/Submit Question.jpg"
              alt="Friendly man in plaid shirt ready to help with questions"
            />
          </div>
        </div>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-grid">
            <!-- First Name Field -->
            <div class="form-group">
              <label for="firstName" class="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                v-model="formData.firstName"
                class="form-input"
                :class="{ error: errors.firstName }"
                placeholder=""
                required
              />
              <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
            </div>

            <!-- Last Name Field -->
            <div class="form-group">
              <label for="lastName" class="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                v-model="formData.lastName"
                class="form-input"
                :class="{ error: errors.lastName }"
                placeholder=""
                required
              />
              <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
            </div>

            <!-- Email Field -->
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="form-input"
                :class="{ error: errors.email }"
                placeholder=""
                required
              />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <!-- Subject Field -->
            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                class="form-input"
                placeholder=""
              />
            </div>
          </div>

          <!-- Message Field -->
          <div class="form-group message-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              class="form-textarea"
              :class="{ error: errors.message }"
              placeholder="Please enter a maximum of 250 characters"
              rows="8"
              maxlength="250"
              required
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>

          <!-- Consent Text -->
          <div class="consent-text">
            <p>
              By submitting this form, you are consenting to receive information about programs,
              news and upcoming events from McMaster University Continuing Education. Consent can be
              withdrawn at any time.
            </p>
          </div>

          <!-- Submit Button -->
          <div class="form-actions">
            <button
              type="submit"
              class="submit-button"
              :disabled="isSubmitting"
              :class="{ submitting: isSubmitting }"
            >
              <span v-if="!isSubmitting">Submit Question</span>
              <span v-else>Sending...</span>
            </button>
          </div>

          <!-- Success/Error Messages -->
          <div v-if="submitMessage" class="submit-message" :class="submitStatus">
            {{ submitMessage }}
          </div>
        </form>
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
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
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

      if (!this.formData.firstName.trim()) {
        this.errors.firstName = 'First name is required'
      }

      if (!this.formData.lastName.trim()) {
        this.errors.lastName = 'Last name is required'
      }

      if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required'
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address'
      }

      if (!this.formData.message.trim()) {
        this.errors.message = 'Message is required'
      } else if (this.formData.message.trim().length > 250) {
        this.errors.message = 'Message must be 250 characters or less'
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
  background-color: #f1f3f5;
  width: 100%;
  box-shadow:
    0 -2px 8px rgba(0, 0, 0, 0.04),
    0 -1px 0 rgba(0, 0, 0, 0.06);
}

.container {
  max-width: 90vw;
  margin: 0 auto;
  padding: 0;
}

.form-header {
  text-align: left;
  margin-bottom: 2rem;
}

.section-title {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
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
  grid-template-columns: 1fr 1fr;
  gap: 4vw;
  align-items: stretch;
  width: 100%;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.contact-image img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
  min-height: 400px;
}

.contact-form {
  background: white;
  padding: 2.5rem 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.message-group {
  grid-column: 1 / -1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.form-textarea {
  flex-grow: 1;
  min-height: 120px;
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

.consent-text {
  margin: 2rem 0 1.5rem 0;
  font-size: 0.9rem;
  color: var(--color-unselected-dim);
  line-height: 1.5;
}

.consent-text p {
  margin: 0;
}

.form-actions {
  text-align: center;
}

.submit-button {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: 1rem 3rem;
  border-radius: 25px;
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

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 95vw;
  }
}

@media (max-width: 1024px) {
  .form-container {
    gap: 3vw;
  }
}

@media (max-width: 768px) {
  .contact-form-section {
    padding: 4vh 3vw;
  }

  .container {
    max-width: 94vw;
  }

  .form-container {
    grid-template-columns: 1fr;
    gap: 4vh;
    align-items: flex-start;
  }

  .left-column {
    gap: 2rem;
  }

  .form-header {
    text-align: center;
  }

  .contact-form {
    padding: 2rem;
    height: auto;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .contact-image img {
    height: auto;
    min-height: 300px;
  }
}

@media (max-width: 480px) {
  .contact-form-section {
    padding: 3vh 4vw;
  }

  .container {
    max-width: 92vw;
  }

  .contact-form {
    padding: clamp(1rem, 3vw, 2rem);
  }

  .submit-button {
    width: 100%;
  }
}
</style>

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
  background-color: var(--color-light-bg);
  padding: var(--spacing-4xl) var(--spacing-2xl);
}

.container {
  max-width: 85%;
  margin: 0 auto;
  padding: 0;
}

.form-header {
  margin-bottom: var(--spacing-2xl);
}

.section-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-mcmaster-black);
  line-height: 1.2;
  margin-bottom: var(--spacing-lg);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-subgray-word);
  margin: 0;
}

.form-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: start;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.contact-image {
  flex: 1;
  display: flex;
  align-items: stretch;
}

.contact-image img {
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-lg);
  object-fit: cover;
  min-height: 350px;
}

.contact-form {
  background: var(--color-white-bg);
  padding: var(--spacing-3xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.message-group {
  grid-column: 1 / -1;
  margin-bottom: var(--spacing-lg);
}

.form-label {
  font-weight: var(--font-weight-semibold);
  color: var(--color-mcmaster-black);
  font-size: var(--font-size-base);
}

.form-input,
.form-textarea {
  padding: var(--spacing-md);
  border: 2px solid var(--color-divider);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-base);
  background-color: var(--color-white-bg);
  font-family: inherit;
}

.form-input:focus,
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
  font-family: inherit;
}

.error-message {
  color: #dc3545;
  font-size: var(--font-size-xs);
  margin-top: var(--spacing-xs);
}

.consent-text {
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-sm);
  color: var(--color-subgray-word);
  line-height: 1.5;
}

.consent-text p {
  margin: 0;
}

.form-actions {
  display: flex;
  justify-content: flex-start;
}

.submit-button {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: var(--spacing-lg) var(--spacing-3xl);
  border-radius: var(--border-radius-full);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all var(--transition-base);
  min-width: 200px;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--color-mcmaster-rouge);
  transform: translateY(-2px);
}

.submit-button:disabled {
  background-color: var(--color-box);
  cursor: not-allowed;
  transform: none;
}

.submit-message {
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  text-align: center;
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
    max-width: 95%;
  }

  .form-container {
    gap: var(--spacing-4xl);
  }

  .contact-form {
    padding: var(--spacing-3xl);
  }
}

@media (max-width: 768px) {
  .contact-form-section {
    padding: var(--spacing-3xl) var(--spacing-xl);
  }

  .section-title {
    font-size: var(--font-size-3xl);
    text-align: center;
  }

  .section-subtitle {
    text-align: center;
  }

  .form-container {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .left-column {
    order: 2;
    gap: var(--spacing-xl);
  }

  .contact-form {
    order: 1;
    padding: var(--spacing-2xl);
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .contact-image img {
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .contact-form-section {
    padding: var(--spacing-3xl) var(--spacing-lg);
  }

  .section-title {
    font-size: var(--font-size-2xl);
  }

  .contact-form {
    padding: var(--spacing-xl);
  }

  .form-grid {
    gap: var(--spacing-lg);
  }

  .submit-button {
    width: 100%;
  }

  .form-actions {
    justify-content: center;
  }
}
</style>

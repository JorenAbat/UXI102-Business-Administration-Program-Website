<template>
  <section class="elective-courses">
    <div class="elective-container">
      <!-- Elective Courses Section -->
      <div class="elective-section">
        <h3 class="courses-title">Elective Courses (complete any 3)</h3>

        <div class="courses-grid" :class="{ expanded: showAllCourses }">
          <div
            v-for="(course, index) in visibleCourses"
            :key="course.id"
            class="course-card"
            :class="{ unavailable: course.unavailable }"
          >
            <div class="course-badge">{{ course.units }} UNITS</div>
            <h4 class="course-name">{{ course.name }}</h4>
            <p class="course-price" v-if="!course.unavailable">${{ course.price }}</p>
            <p class="course-status" v-if="course.unavailable">Currently Not Available</p>
            <div class="course-actions" v-if="!course.unavailable">
              <button class="btn-add-cart">Add to Cart</button>
              <button class="btn-learn-more">
                Learn More
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
            <div class="course-actions" v-if="course.unavailable">
              <button class="btn-learn-more">
                Learn More
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="show-more-section" v-if="!showAllCourses">
          <button class="btn-show-more" @click="showAllCourses = true">
            Show More Courses
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>

        <div class="show-less-section" v-if="showAllCourses">
          <button class="btn-show-less" @click="showAllCourses = false">
            Show Less
            <i class="fas fa-chevron-up"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ElectiveCourses',
  data() {
    return {
      showAllCourses: false,
      allCourses: [
        {
          id: 1,
          name: 'BUS 200 Managing the Workforce of The Future',
          price: '789.52',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 2,
          name: 'BUS 201 Making Decisions, Managing Risk',
          price: '789.52',
          units: '3.0',
          unavailable: true,
        },
        {
          id: 3,
          name: 'ACC 855 Business Statistics',
          price: '789.52',
          units: '3.0',
          unavailable: false,
        },
        { id: 4, name: 'ACC 818 Economics', price: '789.52', units: '3.0', unavailable: false },
        {
          id: 5,
          name: 'ACC 933 Financial Management',
          price: '789.52',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 6,
          name: 'HRM 941 Wellness In the Workplace',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        { id: 7, name: 'HRM 898 Compensation', price: '833.02', units: '3.0', unavailable: false },
        {
          id: 8,
          name: 'HRM 923 Human Resources Planning',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 9,
          name: 'HRM 899 Labour Relations',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 10,
          name: 'HRM 921 Occupational Health & Safety',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 11,
          name: 'HRM 897 Talent Acquisition',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 12,
          name: 'HRM 902 Training & Development',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 13,
          name: 'HRM 901 Human Resources Management',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        { id: 14, name: 'BUS 436 Business Law', price: '833.02', units: '3.0', unavailable: false },
        {
          id: 15,
          name: 'BUS 852 Business Strategy',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 16,
          name: 'ACC 932 Management Information Systems',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 17,
          name: 'BUS 847 Principles & Practice of Supervision',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 18,
          name: 'MKT 106 Branding & Image',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 19,
          name: 'MKT 102 Consumer Behaviour',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 20,
          name: 'MKT 104 Market Research',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 21,
          name: 'RSK 713 Risk Management Principles & Practices',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 22,
          name: 'RSK 714 Risk Assessment & Treatment',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 23,
          name: 'RSK 715 Risk Financing',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 24,
          name: 'CCD 101 Cultivating Creative Thinking',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 25,
          name: 'CCD 102 Critical Thinking for Problem Solving',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 26,
          name: 'CCD 103 Design Thinking',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 27,
          name: 'FDV 101 Website Development',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 28,
          name: 'ACC 925 Introductory Financial Accounting',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 29,
          name: 'MKT 108 Social Media Strategy & Management',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 30,
          name: 'BUS 202 Supply Chain Management',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 31,
          name: 'MKT 200 Consumer, B2B, Cause Marketing',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
        {
          id: 32,
          name: 'MKT 201 Marketing Plans & Performance Management',
          price: '833.02',
          units: '3.0',
          unavailable: false,
        },
      ],
    }
  },
  computed: {
    visibleCourses() {
      if (this.showAllCourses) {
        return this.allCourses
      }
      return this.allCourses.slice(0, 8) // Show first 2 rows (8 courses)
    },
  },
}
</script>

<style scoped>
.elective-courses {
  background-color: white;
  padding: 3rem 0 5rem 0;
}

.elective-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  box-sizing: border-box;
}

.elective-section {
  margin-bottom: 3rem;
}

.courses-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-mcmaster-black);
  margin: 0 0 2rem 0;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.course-card {
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid var(--color-divider);
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.course-card.unavailable {
  background-color: var(--color-light-bg);
  opacity: 0.7;
}

.course-card.unavailable:hover {
  transform: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.course-badge {
  background-color: var(--color-mcmaster-red);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1rem;
}

.course-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-mcmaster-black);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.course-card.unavailable .course-name {
  color: var(--color-subgray-word);
}

.course-price {
  font-size: 1rem;
  color: var(--color-subgray-word);
  margin: 0 0 1.5rem 0;
  font-weight: 500;
}

.course-status {
  font-size: 1rem;
  color: var(--color-subgray-word);
  margin: 0 0 1.5rem 0;
  font-weight: 500;
  font-style: italic;
}

.course-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-add-cart {
  background-color: var(--color-mcmaster-red);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-add-cart:hover {
  background-color: var(--color-mcmaster-rouge);
}

.btn-learn-more {
  background-color: transparent;
  color: var(--color-mcmaster-red);
  border: none;
  padding: 0.75rem 0;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.btn-learn-more:hover {
  color: var(--color-mcmaster-rouge);
}

.btn-learn-more i {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.btn-learn-more:hover i {
  transform: translateX(3px);
}

.show-more-section,
.show-less-section {
  text-align: center;
  margin-top: 2rem;
}

.btn-show-more,
.btn-show-less {
  background-color: transparent;
  color: var(--color-mcmaster-red);
  border: 2px solid var(--color-mcmaster-red);
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-show-more:hover,
.btn-show-less:hover {
  background-color: var(--color-mcmaster-red);
  color: white;
}

.btn-show-more i,
.btn-show-less i {
  font-size: 0.875rem;
  transition: transform 0.3s ease;
}

.btn-show-more:hover i {
  transform: translateY(2px);
}

.btn-show-less:hover i {
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1400px) {
  .elective-container {
    padding: 0 3rem;
  }
}

@media (max-width: 1200px) {
  .elective-container {
    padding: 0 2rem;
  }

  .courses-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
}

@media (max-width: 768px) {
  .elective-courses {
    padding: 2rem 0 4rem 0;
  }

  .elective-container {
    padding: 0 1rem;
  }

  .courses-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .course-actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .btn-add-cart,
  .btn-learn-more {
    width: 100%;
    justify-content: center;
  }

  .btn-show-more,
  .btn-show-less {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .elective-courses {
    padding: 1.5rem 0 3rem 0;
  }

  .course-card {
    padding: 1.25rem;
  }

  .course-name {
    font-size: 1rem;
  }

  .btn-show-more,
  .btn-show-less {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }
}
</style>

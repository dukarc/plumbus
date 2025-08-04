import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from '../sections/Testimonials'

describe('Testimonials Component', () => {
  beforeEach(() => {
    render(<Testimonials />)
  })

  describe('Rendering', () => {
    it('renders the testimonials section with correct heading', () => {
      expect(screen.getByText('What Our Customers Are Saying')).toBeInTheDocument()
      expect(screen.getByText(/Don't just take our word for it/)).toBeInTheDocument()
    })

    it('renders testimonial carousel elements', () => {
      // Check for carousel container
      const carousel = document.querySelector('.testimonial-carousel')
      expect(carousel).toBeInTheDocument()
      
      // Check for navigation buttons
      const navButtons = document.querySelectorAll('.carousel-nav-btn')
      expect(navButtons.length).toBe(2) // Previous and Next buttons
      
      // Check for dots indicators
      const dots = document.querySelectorAll('.carousel-dot')
      expect(dots.length).toBeGreaterThan(0)
    })

    it('renders testimonial cards', () => {
      const testimonialCards = document.querySelectorAll('.plumbus-testimonial')
      expect(testimonialCards.length).toBeGreaterThan(0)
    })

    it('renders trust indicators stats', () => {
      expect(screen.getByText('50M+')).toBeInTheDocument()
      expect(screen.getByText('Happy Customers')).toBeInTheDocument()
      expect(screen.getByText('4.9/5')).toBeInTheDocument()
      expect(screen.getByText('Average Rating')).toBeInTheDocument()
      expect(screen.getByText('∞')).toBeInTheDocument()
      expect(screen.getByText('Dimensions Served')).toBeInTheDocument()
    })

    it('renders auto-play indicator', () => {
      expect(screen.getByText(/Auto-rotating every/)).toBeInTheDocument()
    })
  })

  describe('Interactive Behavior', () => {
    it('has clickable navigation buttons', () => {
      const navButtons = document.querySelectorAll('.carousel-nav-btn')
      navButtons.forEach(button => {
        expect(button).toHaveStyle('cursor: pointer')
      })
    })

    it('has clickable dot indicators', () => {
      const dots = document.querySelectorAll('.carousel-dot')
      dots.forEach(dot => {
        expect(dot).toHaveStyle('cursor: pointer')
      })
    })

    it('testimonial cards have hover effects', () => {
      const testimonialCards = document.querySelectorAll('.plumbus-testimonial')
      testimonialCards.forEach(card => {
        expect(card).toHaveStyle('cursor: pointer')
      })
    })
  })

  describe('Responsive Design', () => {
    it('has responsive carousel structure', () => {
      const carouselContent = document.querySelector('.carousel-content')
      expect(carouselContent).toBeInTheDocument()
    })

    it('contains star ratings', () => {
      const stars = document.querySelectorAll('.star-interactive')
      expect(stars.length).toBeGreaterThan(0)
    })
  })

  describe('Accessibility', () => {
    it('has proper section structure', () => {
      const section = screen.getByText('What Our Customers Are Saying').closest('section')
      expect(section).toHaveAttribute('id', 'testimonials')
    })

    it('has accessible navigation buttons', () => {
      const navButtons = screen.getAllByRole('button').filter(btn => 
        btn.className?.includes('carousel-nav-btn')
      )
      expect(navButtons.length).toBeGreaterThan(0)
    })
  })

  describe('Animations and Motion', () => {
    it('has animated elements with proper classes', () => {
      const animatedElements = document.querySelectorAll('[class*="whimsy"]')
      expect(animatedElements.length).toBeGreaterThan(0)
    })

    it('contains stats with animation classes', () => {
      const statsContainer = document.querySelector('.stats-container')
      expect(statsContainer).toBeInTheDocument()
    })
  })
})
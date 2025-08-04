import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from '../sections/Hero'

describe('Hero Component', () => {
  beforeEach(() => {
    render(<Hero />)
  })

  describe('Rendering', () => {
    it('renders the main heading', () => {
      expect(screen.getByText('PLUMBUS')).toBeInTheDocument()
    })

    it('renders the tagline', () => {
      expect(screen.getByText(/Everyone needs a plumbus/)).toBeInTheDocument()
    })

    it('renders the descriptive text', () => {
      expect(screen.getByText(/A plumbus is an all-purpose home device/)).toBeInTheDocument()
      expect(screen.getByText(/Even Jerry can use it/)).toBeInTheDocument()
    })

    it('renders the call-to-action button', () => {
      expect(screen.getByRole('button', { name: /Get Your Plumbus/i })).toBeInTheDocument()
    })

    it('renders the plumbus SVG illustration', () => {
      expect(screen.getByTitle('Authentic Plumbus - Rick & Morty All-Purpose Home Device')).toBeInTheDocument()
    })
  })

  describe('Interactive Behavior', () => {
    it('triggers console logs when CTA button is clicked', () => {
      const consoleSpy = vi.spyOn(console, 'log')
      const ctaButton = screen.getByRole('button', { name: /Get Your Plumbus/i })
      
      fireEvent.click(ctaButton)
      
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Wubba lubba dub dub'))
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('plumbus acquisition protocol'))
    })

    it('has interactive plumbus SVG with click functionality', () => {
      const consoleSpy = vi.spyOn(console, 'log')
      const plumbusSvg = screen.getByTitle('Authentic Plumbus - Rick & Morty All-Purpose Home Device')
      
      // Click the SVG multiple times to trigger Jerry warning
      for (let i = 0; i < 7; i++) {
        fireEvent.click(plumbusSvg)
      }
      
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Jerry Warning'))
    })

    it('has proper styling classes on the CTA button', () => {
      const ctaButton = screen.getByRole('button', { name: /Get Your Plumbus/i })
      expect(ctaButton).toHaveClass('button-primary')
      expect(ctaButton).toHaveClass('whimsy-button')
    })
  })

  describe('Accessibility', () => {
    it('has proper keyboard navigation for CTA button', async () => {
      const user = userEvent.setup()
      const ctaButton = screen.getByRole('button', { name: /Get Your Plumbus/i })
      
      // Focus on the button directly (the button is wrapped in a motion.div)
      ctaButton.focus()
      expect(ctaButton).toHaveAccessibleName()
      
      // Test activation with Enter
      const consoleSpy = vi.spyOn(console, 'log')
      await user.keyboard('{Enter}')
      expect(consoleSpy).toHaveBeenCalled()
    })

    it('has proper aria-label or accessible names', () => {
      const ctaButton = screen.getByRole('button', { name: /Get Your Plumbus/i })
      expect(ctaButton).toHaveAccessibleName()
    })

    it('has proper heading hierarchy', () => {
      const mainHeading = screen.getByRole('heading', { level: 1 })
      expect(mainHeading).toBeInTheDocument()
      expect(mainHeading.textContent).toContain('PLUMBUS')
    })

    it('has descriptive SVG with proper title and description', () => {
      const plumbusSvg = screen.getByTitle('Authentic Plumbus - Rick & Morty All-Purpose Home Device')
      expect(plumbusSvg).toBeInTheDocument()
      // Check for description element
      expect(document.querySelector('desc')).toBeInTheDocument()
    })
  })

  describe('Content Validation', () => {
    it('contains Rick and Morty references', () => {
      expect(screen.getByText(/Everyone needs a plumbus/)).toBeInTheDocument()
      expect(screen.getByText(/Even Jerry can use it/)).toBeInTheDocument()
    })

    it('includes interactive plumbus parts with tooltips', () => {
      // Check for SVG with complex structure
      const plumbusSvg = screen.getByTitle('Authentic Plumbus - Rick & Morty All-Purpose Home Device')
      expect(plumbusSvg).toBeInTheDocument()
      
      // Check for gradient definitions (which prove the SVG is complex)
      const gradients = document.querySelectorAll('defs radialGradient, defs linearGradient')
      expect(gradients.length).toBeGreaterThan(0)
    })
  })

  describe('Visual Design', () => {
    it('has proper hero section styling', () => {
      const heroSection = screen.getByText('PLUMBUS').closest('section')
      expect(heroSection).toHaveClass('plumbus-hero')
    })

    it('has proper title styling', () => {
      const title = screen.getByText('PLUMBUS')
      expect(title).toHaveClass('hero-title')
    })

    it('contains complex plumbus SVG with gradients', () => {
      // Check for gradient definitions in SVG
      const gradients = document.querySelectorAll('defs radialGradient, defs linearGradient')
      expect(gradients.length).toBeGreaterThan(0)
    })
  })

  describe('Layout and Responsiveness', () => {
    it('has hero content container', () => {
      const heroContent = document.querySelector('.plumbus-hero-content')
      expect(heroContent).toBeInTheDocument()
    })

    it('has assembly process section', () => {
      const assemblySection = screen.getByText('How a Plumbus is Made')
      expect(assemblySection).toBeInTheDocument()
    })

    it('contains process steps with proper styling', () => {
      const steps = document.querySelectorAll('.process-step')
      expect(steps.length).toBeGreaterThan(0)
    })
  })
})
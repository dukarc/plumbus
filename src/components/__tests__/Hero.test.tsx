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
      expect(screen.getByText(/The perfect addition to any household/)).toBeInTheDocument()
    })

    it('renders the call-to-action button', () => {
      expect(screen.getByRole('button', { name: /Get Your Plumbus/i })).toBeInTheDocument()
    })

    it('renders the plumbus illustration', () => {
      expect(screen.getByAltText('Plumbus - Rick & Morty All-Purpose Home Device')).toBeInTheDocument()
    })
  })

  describe('Interactive Behavior', () => {
    it('scrolls to pricing section when CTA button is clicked', () => {
      const scrollIntoViewMock = vi.fn()
      const mockElement = { scrollIntoView: scrollIntoViewMock }
      vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any)
      
      const ctaButton = screen.getByRole('button', { name: /Get Your Plumbus/i })
      fireEvent.click(ctaButton)
      
      expect(document.getElementById).toHaveBeenCalledWith('pricing')
      expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
    })

    it('has interactive plumbus image with click functionality', () => {
      const consoleSpy = vi.spyOn(console, 'log')
      const plumbusImg = screen.getByAltText('Plumbus - Rick & Morty All-Purpose Home Device')
      
      // Click the image multiple times to trigger easter egg
      for (let i = 0; i < 4; i++) {
        fireEvent.click(plumbusImg)
      }
      
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Rick:'))
    })

    it('has proper styling classes on the CTA button', () => {
      const ctaButton = screen.getByRole('button', { name: /Get Your Plumbus/i })
      expect(ctaButton).toHaveClass('button-primary')
      expect(ctaButton).toHaveClass('px-8', 'py-4', 'text-lg', 'font-semibold')
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
      const scrollIntoViewMock = vi.fn()
      const mockElement = { scrollIntoView: scrollIntoViewMock }
      vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any)
      
      await user.keyboard('{Enter}')
      expect(scrollIntoViewMock).toHaveBeenCalled()
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

    it('has descriptive image with proper alt text', () => {
      const plumbusImg = screen.getByAltText('Plumbus - Rick & Morty All-Purpose Home Device')
      expect(plumbusImg).toBeInTheDocument()
      expect(plumbusImg).toHaveAttribute('loading', 'lazy')
    })
  })

  describe('Content Validation', () => {
    it('contains Rick and Morty references', () => {
      expect(screen.getByText(/Everyone needs a plumbus/)).toBeInTheDocument()
      expect(screen.getByText(/The perfect addition to any household/)).toBeInTheDocument()
    })

    it('includes interactive plumbus image', () => {
      // Check for image
      const plumbusImg = screen.getByAltText('Plumbus - Rick & Morty All-Purpose Home Device')
      expect(plumbusImg).toBeInTheDocument()
      
      // Check it's an img element
      expect(plumbusImg.tagName).toBe('IMG')
      expect(plumbusImg).toHaveAttribute('src', '/plumbus-hero.png')
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

    it('contains plumbus image with proper styling', () => {
      // Check for image element
      const plumbusImg = screen.getByAltText('Plumbus - Rick & Morty All-Purpose Home Device')
      expect(plumbusImg).toBeInTheDocument()
      expect(plumbusImg).toHaveClass('w-full', 'h-auto', 'mx-auto')
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
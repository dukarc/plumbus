import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Hero from '../Hero'

describe('Hero Component', () => {
  beforeEach(() => {
    render(<Hero />)
  })

  describe('Rendering', () => {
    it('renders the main heading', () => {
      expect(screen.getByText(/Everyone Has a/)).toBeInTheDocument()
      expect(screen.getByText('Plumbus')).toBeInTheDocument()
      expect(screen.getByText(/In Their Home/)).toBeInTheDocument()
    })

    it('renders the badge', () => {
      expect(screen.getByText('#1 Interdimensional Household Device')).toBeInTheDocument()
    })

    it('renders the descriptive text', () => {
      expect(screen.getByText(/The essential household device you never knew you needed but can't live without/)).toBeInTheDocument()
      expect(screen.getByText(/dinglebop technology/)).toBeInTheDocument()
      expect(screen.getByText(/schleem repurposing/)).toBeInTheDocument()
    })

    it('renders the call-to-action buttons', () => {
      expect(screen.getByRole('button', { name: /Get Your Plumbus Today/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Watch How It's Made/i })).toBeInTheDocument()
    })

    it('renders the trust indicators', () => {
      expect(screen.getByText('Trusted by beings across infinite dimensions')).toBeInTheDocument()
    })
  })

  describe('Interactive Behavior', () => {
    it('triggers console logs when CTA button is clicked', () => {
      const consoleSpy = vi.spyOn(console, 'log')
      const ctaButton = screen.getByRole('button', { name: /Get Your Plumbus Today/i })
      
      fireEvent.click(ctaButton)
      
      expect(consoleSpy).toHaveBeenCalledWith("🚀 User clicked 'Get Your Plumbus Today!' - Jerry would be proud!")
      expect(consoleSpy).toHaveBeenCalledWith("🔬 Rick's response: 'Finally, someone with taste.'")
      expect(consoleSpy).toHaveBeenCalledWith('📦 Initiating interdimensional commerce protocol...')
    })

    it('triggers console logs and alert when demo button is clicked', () => {
      const consoleSpy = vi.spyOn(console, 'log')
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
      const demoButton = screen.getByRole('button', { name: /Watch How It's Made/i })
      
      fireEvent.click(demoButton)
      
      expect(consoleSpy).toHaveBeenCalledWith('📺 Demo requested! Fun fact: 73% of demo watchers become instant Plumbus converts')
      expect(consoleSpy).toHaveBeenCalledWith('🎬 Loading interdimensional manufacturing footage...')
      expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining('Demo coming soon!'))
      
      alertSpy.mockRestore()
    })

    it('scrolls to pricing section when CTA is clicked', () => {
      const mockScrollIntoView = vi.fn()
      const mockGetElementById = vi.spyOn(document, 'getElementById').mockReturnValue({
        scrollIntoView: mockScrollIntoView
      } as any)
      
      const ctaButton = screen.getByRole('button', { name: /Get Your Plumbus Today/i })
      fireEvent.click(ctaButton)
      
      expect(mockGetElementById).toHaveBeenCalledWith('pricing')
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
      
      mockGetElementById.mockRestore()
    })

    it('has hover effects on the CTA button', () => {
      const ctaButton = screen.getByRole('button', { name: /Get Your Plumbus Today/i })
      expect(ctaButton).toHaveClass('hover:bg-green-600')
      expect(ctaButton).toHaveClass('hover:scale-105')
      expect(ctaButton).toHaveClass('transition-all')
    })

    it('has hover effects on the demo button', () => {
      const demoButton = screen.getByRole('button', { name: /Watch How It's Made/i })
      expect(demoButton).toHaveClass('hover:bg-white')
      expect(demoButton).toHaveClass('hover:text-black')
      expect(demoButton).toHaveClass('hover:scale-105')
      expect(demoButton).toHaveClass('transition-all')
    })
  })

  describe('Accessibility', () => {
    it('has proper keyboard navigation for CTA button', async () => {
      const user = userEvent.setup()
      
      // Tab to the CTA button
      await user.tab()
      expect(screen.getByRole('button', { name: /Get Your Plumbus Today/i })).toHaveFocus()
      
      // Test activation with Enter
      const consoleSpy = vi.spyOn(console, 'log')
      await user.keyboard('{Enter}')
      expect(consoleSpy).toHaveBeenCalled()
    })

    it('has proper aria-label or accessible names', () => {
      const ctaButton = screen.getByRole('button', { name: /Get Your Plumbus Today/i })
      expect(ctaButton).toHaveAccessibleName()
      
      const demoButton = screen.getByRole('button', { name: /Watch How It's Made/i })
      expect(demoButton).toHaveAccessibleName()
    })

    it('has proper heading hierarchy', () => {
      const mainHeading = screen.getByRole('heading', { level: 1 })
      expect(mainHeading).toBeInTheDocument()
      expect(mainHeading.textContent).toContain('Plumbus')
    })
  })

  describe('Content Validation', () => {
    it('contains Rick and Morty references', () => {
      expect(screen.getByText(/dinglebop technology/)).toBeInTheDocument()
      expect(screen.getByText(/schleem repurposing/)).toBeInTheDocument()
    })

    it('includes the disclaimer text', () => {
      expect(screen.getByText(/Results may vary by dimension/)).toBeInTheDocument()
      expect(screen.getByText(/keep away from Jerry/)).toBeInTheDocument()
    })

    it('shows trust indicators with character emojis', () => {
      expect(screen.getByText('🧪')).toBeInTheDocument()  // Rick
      expect(screen.getByText('🚀')).toBeInTheDocument()  // Galactic Federation
      expect(screen.getByText('👥')).toBeInTheDocument()  // Council of Ricks
      expect(screen.getByText('🔵')).toBeInTheDocument()  // Mr. Meeseeks
    })
  })

  describe('Visual Design', () => {
    it('has proper color scheme for hero section', () => {
      const heroSection = screen.getByText(/Everyone Has a/).closest('section')
      expect(heroSection).toHaveClass('bg-gradient-to-br')
      expect(heroSection).toHaveClass('from-black')
      expect(heroSection).toHaveClass('via-gray-900')
      expect(heroSection).toHaveClass('to-green-900')
    })

    it('highlights Plumbus text with gradient', () => {
      const plumbusText = screen.getByText('Plumbus')
      expect(plumbusText).toHaveClass('bg-gradient-to-r')
      expect(plumbusText).toHaveClass('from-green-400')
      expect(plumbusText).toHaveClass('via-blue-400')
      expect(plumbusText).toHaveClass('to-purple-400')
      expect(plumbusText).toHaveClass('bg-clip-text')
      expect(plumbusText).toHaveClass('text-transparent')
    })

    it('has animated background elements', () => {
      const heroSection = screen.getByText(/Everyone Has a/).closest('section')
      const backgroundElements = heroSection?.querySelectorAll('.animate-pulse, .animate-ping')
      expect(backgroundElements?.length).toBeGreaterThan(0)
    })

    it('has proper badge styling', () => {
      const badge = screen.getByText('#1 Interdimensional Household Device').closest('div')
      expect(badge).toHaveClass('bg-green-500/20')
      expect(badge).toHaveClass('border-green-500/30')
      expect(badge).toHaveClass('rounded-full')
    })

    it('displays tech feature highlights', () => {
      expect(screen.getByText('Quantum-Enabled')).toBeInTheDocument()
      expect(screen.getByText('Multi-Dimensional')).toBeInTheDocument()
      expect(screen.getByText('Jerry-Proof Design')).toBeInTheDocument()
    })
  })

  describe('Layout and Responsiveness', () => {
    it('has responsive text sizing', () => {
      const mainHeading = screen.getByRole('heading', { level: 1 })
      expect(mainHeading).toHaveClass('text-6xl')
      expect(mainHeading).toHaveClass('md:text-8xl')
    })

    it('has responsive paragraph sizing', () => {
      const description = screen.getByText(/The essential household device/)
      expect(description).toHaveClass('text-xl')
      expect(description).toHaveClass('md:text-2xl')
    })

    it('uses responsive button layout', () => {
      const buttonContainer = screen.getByRole('button', { name: /Get Your Plumbus Today/i }).parentElement
      expect(buttonContainer).toHaveClass('flex-col')
      expect(buttonContainer).toHaveClass('sm:flex-row')
    })

    it('has full viewport height', () => {
      const heroSection = screen.getByText(/Everyone Has a/).closest('section')
      expect(heroSection).toHaveClass('min-h-screen')
    })

    it('uses responsive padding', () => {
      const container = screen.getByText(/Everyone Has a/).closest('.max-w-7xl')
      expect(container).toHaveClass('px-4')
      expect(container).toHaveClass('sm:px-6')
      expect(container).toHaveClass('lg:px-8')
    })
  })
})
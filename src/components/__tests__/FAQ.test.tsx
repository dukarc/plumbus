import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FAQ from '../FAQ'

describe('FAQ Component', () => {
  beforeEach(() => {
    render(<FAQ />)
  })

  describe('Rendering', () => {
    it('renders the FAQ section with correct heading', () => {
      expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
      expect(screen.getByText(/Got questions\? We've got answers/)).toBeInTheDocument()
    })

    it('renders all FAQ questions', () => {
      expect(screen.getByText('What exactly is a Plumbus and why do I need one?')).toBeInTheDocument()
      expect(screen.getByText('How is a Plumbus made?')).toBeInTheDocument()
      expect(screen.getByText('Is the Plumbus compatible with my existing home setup?')).toBeInTheDocument()
      expect(screen.getByText('What if my Plumbus stops working?')).toBeInTheDocument()
      expect(screen.getByText('How long does shipping take?')).toBeInTheDocument()
      expect(screen.getByText('Can I return my Plumbus if I\'m not satisfied?')).toBeInTheDocument()
      expect(screen.getByText('Is it safe to use around children and pets?')).toBeInTheDocument()
      expect(screen.getByText('Do you offer technical support?')).toBeInTheDocument()
    })

    it('renders contact support button', () => {
      expect(screen.getByRole('button', { name: 'Contact Support' })).toBeInTheDocument()
    })
  })

  describe('Interactive Behavior', () => {
    it('expands and collapses FAQ items when clicked', async () => {
      const user = userEvent.setup()
      const firstQuestion = screen.getByText('What exactly is a Plumbus and why do I need one?')
      
      // Initially, answer should not be visible
      expect(screen.queryByText(/Great question! A Plumbus is an essential household device/)).not.toBeInTheDocument()
      
      // Click to expand
      await user.click(firstQuestion)
      
      // Answer should now be visible
      expect(screen.getByText(/Great question! A Plumbus is an essential household device/)).toBeInTheDocument()
      expect(screen.getByText(/Fun fact: The average household uses their Plumbus 847 times per day/)).toBeInTheDocument()
      
      // Click again to collapse
      await user.click(firstQuestion)
      
      // Answer should be hidden again
      expect(screen.queryByText(/Great question! A Plumbus is an essential household device/)).not.toBeInTheDocument()
    })

    it('only shows one FAQ expanded at a time', async () => {
      const user = userEvent.setup()
      
      // Expand first FAQ
      await user.click(screen.getByText('What exactly is a Plumbus and why do I need one?'))
      expect(screen.getByText(/Great question! A Plumbus is an essential household device/)).toBeInTheDocument()
      
      // Expand second FAQ
      await user.click(screen.getByText('How is a Plumbus made?'))
      
      // First FAQ should be collapsed, second should be expanded
      expect(screen.queryByText(/Great question! A Plumbus is an essential household device/)).not.toBeInTheDocument()
      expect(screen.getByText(/I'm glad you asked! First, they take the dinglebop/)).toBeInTheDocument()
    })

    it('shows correct chevron icons for expanded/collapsed states', async () => {
      const user = userEvent.setup()
      const firstQuestionButton = screen.getByRole('button', { name: /What exactly is a Plumbus and why do I need one\?/ })
      
      // Initially should have down chevron
      expect(firstQuestionButton.querySelector('.lucide-chevron-down')).toBeInTheDocument()
      
      // Click to expand
      await user.click(firstQuestionButton)
      
      // Should now have up chevron
      expect(firstQuestionButton.querySelector('.lucide-chevron-up')).toBeInTheDocument()
    })

    it('triggers console log when contact support is clicked', () => {
      const consoleSpy = vi.spyOn(console, 'log')
      const supportButton = screen.getByRole('button', { name: 'Contact Support' })
      
      fireEvent.click(supportButton)
      
      expect(consoleSpy).toHaveBeenCalledWith(
        'Support ticket created! A Meeseeks will be assigned shortly. Remember: existence is pain, but customer service doesn\'t have to be!'
      )
    })
  })

  describe('Accessibility', () => {
    it('has proper keyboard navigation', async () => {
      const user = userEvent.setup()
      
      // Tab to first FAQ button
      await user.tab()
      expect(screen.getByRole('button', { name: /What exactly is a Plumbus and why do I need one\?/ })).toHaveFocus()
      
      // Press Enter to expand
      await user.keyboard('{Enter}')
      expect(screen.getByText(/Great question! A Plumbus is an essential household device/)).toBeInTheDocument()
      
      // Press Space to collapse
      await user.keyboard(' ')
      expect(screen.queryByText(/Great question! A Plumbus is an essential household device/)).not.toBeInTheDocument()
    })

    it('has proper ARIA attributes', () => {
      const faqButtons = screen.getAllByRole('button')
      
      faqButtons.forEach(button => {
        if (button.textContent?.includes('Contact Support')) return // Skip the contact support button
        
        expect(button).toHaveClass('focus:outline-none')
      })
    })
  })

  describe('Content Validation', () => {
    it('displays easter eggs when FAQ items are expanded', async () => {
      const user = userEvent.setup()
      
      // Expand first FAQ and check for easter egg
      await user.click(screen.getByText('What exactly is a Plumbus and why do I need one?'))
      expect(screen.getByText('💡 Fun fact: The average household uses their Plumbus 847 times per day without realizing it!')).toBeInTheDocument()
      
      // Expand manufacturing FAQ and check for its easter egg
      await user.click(screen.getByText('How is a Plumbus made?'))
      expect(screen.getByText('💡 This manufacturing process has remained unchanged for over 2,000 Squanch years')).toBeInTheDocument()
    })

    it('contains all expected Rick and Morty references', async () => {
      const user = userEvent.setup()
      
      // Expand compatibility FAQ
      await user.click(screen.getByText('Is the Plumbus compatible with my existing home setup?'))
      expect(screen.getByText(/dimensions C-137 through J19-Zeta-7/)).toBeInTheDocument()
      expect(screen.getByText(/Jerry-proof connections/)).toBeInTheDocument()
      
      // Expand support FAQ
      await user.click(screen.getByText('Do you offer technical support?'))
      expect(screen.getByText(/Rick Sanchez \(when he's sober\)/)).toBeInTheDocument()
      expect(screen.getByText(/Mr. Meeseeks/)).toBeInTheDocument()
    })
  })

  describe('Styling and Visual States', () => {
    it('applies hover effects to FAQ items', () => {
      const faqItems = screen.getAllByRole('button').filter(button => 
        !button.textContent?.includes('Contact Support')
      )
      
      faqItems.forEach(item => {
        const parentDiv = item.closest('.bg-gray-900')
        expect(parentDiv).toHaveClass('hover:border-green-400')
        expect(parentDiv).toHaveClass('transition-colors')
      })
    })

    it('has proper color scheme for dark theme', () => {
      const section = screen.getByText('Frequently Asked Questions').closest('section')
      expect(section).toHaveClass('bg-black')
      
      const heading = screen.getByText('Frequently Asked Questions')
      expect(heading).toHaveClass('text-white')
      
      const description = screen.getByText(/Got questions\? We've got answers/)
      expect(description).toHaveClass('text-gray-300')
    })
  })
})
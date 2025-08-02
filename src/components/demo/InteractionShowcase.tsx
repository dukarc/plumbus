import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  Star, 
  Zap, 
  Coffee, 
  Gift,
  Music,
  Gamepad2,
  Palette,
  Wand2
} from 'lucide-react';
import { Button } from '@components/ui/Button';
import { FormField, SubmitButton } from '@components/ui/FormField';
import { LoadingDots, PlumbusLoading, CardSkeleton } from '@components/ui/LoadingStates';
import { Error404, EmptyState, ErrorMessage } from '@components/ui/ErrorStates';
import { NotificationProvider, useToast } from '@components/ui/Notifications';
import { ParallaxScroll, FloatingElement, ScrollReveal, MouseFollower, ParticleSystem } from '@components/ui/ParallaxScroll';
import { useReducedMotion } from '@hooks/useReducedMotion';

// This component showcases all the delightful micro-interactions
export const InteractionShowcase: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showDemo, setShowDemo] = useState('buttons');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const prefersReducedMotion = useReducedMotion();

  const demoSections = [
    { id: 'buttons', label: 'Button Magic', icon: Zap },
    { id: 'forms', label: 'Form Delight', icon: Heart },
    { id: 'loading', label: 'Loading Joy', icon: Coffee },
    { id: 'errors', label: 'Friendly Errors', icon: Gift },
    { id: 'notifications', label: 'Toast Magic', icon: Sparkles },
    { id: 'parallax', label: 'Scroll Effects', icon: Wand2 }
  ];

  const handleFormSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Form submitted!', 'Your Plumbus order is being processed.');
    }, 2000);
  };

  const triggerEasterEgg = () => {
    toast.plumbus('Wubba Lubba Dub Dub!', 'You found a Rick & Morty easter egg!');
  };

  return (
    <NotificationProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* Header */}
        <div className="bg-white shadow-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <motion.h1 
              className="text-3xl font-bold text-center gradient-shift cursor-sparkle"
              onClick={triggerEasterEgg}
            >
              🛸 Plumbus Interaction Showcase
            </motion.h1>
            
            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {demoSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setShowDemo(section.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                      showDemo === section.id
                        ? 'bg-pink-500 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600'
                    }`}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  >
                    <IconComponent size={16} />
                    <span>{section.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Demo Content */}
        <div className="container mx-auto px-4 py-12">
          <AnimatePresence mode="wait">
            {showDemo === 'buttons' && <ButtonDemo key="buttons" />}
            {showDemo === 'forms' && <FormDemo key="forms" formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} isLoading={isLoading} />}
            {showDemo === 'loading' && <LoadingDemo key="loading" />}
            {showDemo === 'errors' && <ErrorDemo key="errors" />}
            {showDemo === 'notifications' && <NotificationDemo key="notifications" />}
            {showDemo === 'parallax' && <ParallaxDemo key="parallax" />}
          </AnimatePresence>
        </div>
      </div>
    </NotificationProvider>
  );
};

// Button Demo Component
const ButtonDemo: React.FC = () => {
  const [buttonStates, setButtonStates] = useState<{[key: string]: boolean}>({});
  
  const toggleButton = (id: string) => {
    setButtonStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Button Micro-Interactions</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Buttons */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h3 className="font-semibold text-gray-900">Basic Variants</h3>
          <div className="space-y-3">
            <Button variant="primary" className="w-full">Primary Magic</Button>
            <Button variant="secondary" className="w-full">Secondary Charm</Button>
            <Button variant="ghost" className="w-full">Ghost Whisper</Button>
          </div>
        </div>

        {/* Interactive States */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h3 className="font-semibold text-gray-900">Interactive States</h3>
          <div className="space-y-3">
            <Button 
              variant="primary" 
              className="w-full"
              loading={buttonStates.loading}
              onClick={() => {
                toggleButton('loading');
                setTimeout(() => toggleButton('loading'), 3000);
              }}
            >
              {buttonStates.loading ? 'Loading...' : 'Trigger Loading'}
            </Button>
            
            <Button 
              variant="primary" 
              className="w-full"
              success={buttonStates.success}
              showConfetti={buttonStates.success}
              onClick={() => {
                toggleButton('success');
                setTimeout(() => toggleButton('success'), 2000);
              }}
            >
              {buttonStates.success ? 'Success!' : 'Trigger Success'}
            </Button>
          </div>
        </div>

        {/* Special Effects */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h3 className="font-semibold text-gray-900">Special Effects</h3>
          <div className="space-y-3">
            <button className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shimmer hover:shadow-xl transition-all">
              Shimmer Effect
            </button>
            
            <button className="w-full py-3 px-6 bg-white border-2 border-pink-300 text-pink-600 rounded-lg ripple hover:bg-pink-50 transition-all">
              Ripple Effect
            </button>
            
            <button className="w-full py-3 px-6 bg-purple-500 text-white rounded-lg pulse-glow hover:scale-105 transition-all">
              Pulse Glow
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Form Demo Component
interface FormDemoProps {
  formData: { name: string; email: string; message: string };
  setFormData: (data: any) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const FormDemo: React.FC<FormDemoProps> = ({ formData, setFormData, onSubmit, isLoading }) => {
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };
    
    if (field === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      newErrors.email = 'Please enter a valid email';
    } else {
      delete newErrors.email;
    }
    
    setErrors(newErrors);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Form Interactions</h2>
      
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="space-y-6">
          <FormField
            label="Your Name"
            placeholder="Enter your interdimensional name"
            value={formData.name}
            onChange={(value) => setFormData({...formData, name: value})}
            success={formData.name.length > 2}
            hint="At least 3 characters required"
          />
          
          <FormField
            label="Email Address"
            type="email"
            placeholder="your.email@dimension.com"
            value={formData.email}
            onChange={(value) => {
              setFormData({...formData, email: value});
              validateField('email', value);
            }}
            error={errors.email}
            success={formData.email.includes('@') && !errors.email}
          />
          
          <FormField
            label="Message"
            type="textarea"
            placeholder="Tell us about your Plumbus experience..."
            value={formData.message}
            onChange={(value) => setFormData({...formData, message: value})}
            hint="Share your interdimensional thoughts"
          />
          
          <SubmitButton
            loading={isLoading}
            onClick={onSubmit}
            disabled={!formData.name || !formData.email || !!errors.email}
          >
            Submit to the Multiverse
          </SubmitButton>
        </div>
      </div>
    </motion.div>
  );
};

// Loading Demo Component
const LoadingDemo: React.FC = () => {
  const [showSkeleton, setShowSkeleton] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Loading States</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-4">Loading Animations</h3>
            <div className="space-y-4">
              <LoadingDots size="sm" />
              <LoadingDots size="md" color="bg-purple-500" />
              <LoadingDots size="lg" color="bg-pink-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-4">Plumbus Loading</h3>
            <PlumbusLoading />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Skeleton Loaders</h3>
              <button
                onClick={() => setShowSkeleton(!showSkeleton)}
                className="text-sm text-pink-600 hover:text-pink-700"
              >
                Toggle
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              {showSkeleton ? (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CardSkeleton showAvatar lines={4} />
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Star className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Rick Sanchez</h4>
                      <p className="text-sm text-gray-600">Interdimensional Scientist</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    This Plumbus has revolutionized my laboratory workflow. 
                    The quantum fleeb matrix is particularly impressive.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Error Demo Component
const ErrorDemo: React.FC = () => {
  const [showError, setShowError] = useState<string | null>(null);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Error & Empty States</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => setShowError('404')}
          className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-left"
        >
          <h3 className="font-semibold mb-2">404 Error</h3>
          <p className="text-sm text-gray-600">Interactive 404 with portal</p>
        </button>
        
        <button
          onClick={() => setShowError('empty')}
          className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-left"
        >
          <h3 className="font-semibold mb-2">Empty State</h3>
          <p className="text-sm text-gray-600">Encouraging empty states</p>
        </button>
        
        <button
          onClick={() => setShowError('message')}
          className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-left"
        >
          <h3 className="font-semibold mb-2">Error Message</h3>
          <p className="text-sm text-gray-600">Friendly error messages</p>
        </button>
      </div>
      
      <AnimatePresence>
        {showError === '404' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowError(null)}
          >
            <div className="bg-white rounded-xl p-8 max-w-md w-full" onClick={e => e.stopPropagation()}>
              <Error404 onGoHome={() => setShowError(null)} />
            </div>
          </motion.div>
        )}
        
        {showError === 'empty' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-xl shadow-lg"
          >
            <EmptyState
              title="No Plumbuses Found"
              description="Looks like your dimension is Plumbus-free. Let's fix that!"
              actionLabel="Get Your First Plumbus"
              onAction={() => setShowError(null)}
              icon={<Zap className="text-pink-500" size={32} />}
            />
          </motion.div>
        )}
        
        {showError === 'message' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ErrorMessage
              title="Quantum Flux Detected"
              message="Your Plumbus seems to be experiencing interdimensional interference. Don't worry, this happens sometimes!"
              variant="error"
              onRetry={() => setShowError(null)}
              onDismiss={() => setShowError(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Notification Demo Component
const NotificationDemo: React.FC = () => {
  const toast = useToast();
  
  const notifications = [
    {
      label: 'Success Toast',
      action: () => toast.success('Plumbus Activated!', 'Your household device is now operational.')
    },
    {
      label: 'Error Toast', 
      action: () => toast.error('Quantum Malfunction', 'The fleeb matrix needs recalibration.')
    },
    {
      label: 'Info Toast',
      action: () => toast.info('System Update', 'New dinglebop features are available.')
    },
    {
      label: 'Plumbus Toast',
      action: () => toast.plumbus('Interdimensional Alert!', 'Rick wants to borrow your Plumbus.')
    },
    {
      label: 'Custom Toast',
      action: () => toast.custom({
        type: 'plumbus',
        title: 'Portal Opened!',
        message: 'You can now travel between dimensions.',
        duration: 8000,
        action: {
          label: 'Enter Portal',
          onClick: () => console.log('Entering portal...')
        }
      })
    }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Toast Notifications</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {notifications.map((notification, index) => (
          <Button
            key={index}
            variant={index % 2 === 0 ? 'primary' : 'secondary'}
            onClick={notification.action}
            className="w-full"
          >
            {notification.label}
          </Button>
        ))}
      </div>
      
      <div className="text-center text-gray-600">
        <p>Click the buttons above to see different notification styles!</p>
        <p className="text-sm mt-2">Notifications appear in the top-right corner with delightful animations.</p>
      </div>
    </motion.div>
  );
};

// Parallax Demo Component
const ParallaxDemo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Scroll & Parallax Effects</h2>
      
      {/* Particle System Background */}
      <div className="relative h-64 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl overflow-hidden">
        <ParticleSystem count={15} className="opacity-60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h3 className="text-2xl font-bold text-gray-800">Particle System Background</h3>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="grid md:grid-cols-3 gap-8">
        <FloatingElement intensity={15} duration={3}>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Music className="mx-auto mb-4 text-pink-500" size={32} />
            <h4 className="font-semibold mb-2">Floating Card 1</h4>
            <p className="text-sm text-gray-600">This card gently floats up and down</p>
          </div>
        </FloatingElement>
        
        <FloatingElement intensity={20} duration={4} delay={0.5}>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Gamepad2 className="mx-auto mb-4 text-purple-500" size={32} />
            <h4 className="font-semibold mb-2">Floating Card 2</h4>
            <p className="text-sm text-gray-600">With different timing and intensity</p>
          </div>
        </FloatingElement>
        
        <FloatingElement intensity={18} duration={5} delay={1}>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Palette className="mx-auto mb-4 text-blue-500" size={32} />
            <h4 className="font-semibold mb-2">Floating Card 3</h4>
            <p className="text-sm text-gray-600">Creating a natural, organic feel</p>
          </div>
        </FloatingElement>
      </div>
      
      {/* Mouse Follower */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2">Mouse Follower Effect</h3>
          <p className="text-gray-600">Move your mouse over this area</p>
        </div>
        
        <MouseFollower intensity={0.05} className="flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <Wand2 className="text-white" size={40} />
          </div>
        </MouseFollower>
      </div>
      
      {/* Scroll Reveal Elements */}
      <div className="space-y-8">
        <h3 className="text-xl font-semibold text-center">Scroll Reveal Animations</h3>
        
        {['up', 'down', 'left', 'right', 'scale'].map((direction, index) => (
          <ScrollReveal
            key={direction}
            direction={direction as any}
            delay={index * 0.1}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Star className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-semibold capitalize">{direction} Animation</h4>
                <p className="text-sm text-gray-600">
                  This element animates from the {direction} when it enters the viewport
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      
      {/* Parallax Scroll */}
      <div className="relative h-96 bg-gradient-to-b from-purple-100 to-pink-100 rounded-xl overflow-hidden">
        <ParallaxScroll speed={0.3} direction="up" className="absolute inset-0">
          <div className="h-full flex items-center justify-center">
            <div className="text-4xl font-bold text-purple-800 opacity-20">BACKGROUND</div>
          </div>
        </ParallaxScroll>
        
        <ParallaxScroll speed={0.6} direction="down" className="absolute inset-0">
          <div className="h-full flex items-center justify-center">
            <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Parallax Content</h3>
              <p className="text-gray-600">
                This content moves at a different speed than the background, 
                creating a depth effect as you scroll.
              </p>
            </div>
          </div>
        </ParallaxScroll>
      </div>
    </motion.div>
  );
};

export default InteractionShowcase;
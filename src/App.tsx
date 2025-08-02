import { motion } from 'framer-motion';
import { Header } from '@components/sections/Header';
import { Hero } from '@components/sections/Hero';
import { Features } from '@components/sections/Features';
import { Manufacturing } from '@components/sections/Manufacturing';
import { Testimonials } from '@components/sections/Testimonials';
import { Pricing } from '@components/sections/Pricing';
import { FAQ } from '@components/sections/FAQ';
import { Footer } from '@components/sections/Footer';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { pageTransition } from '@utils/animations';

function App() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="min-h-screen bg-white"
      variants={prefersReducedMotion ? {} : pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      <main>
        <Hero />
        <Features />
        <Manufacturing />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
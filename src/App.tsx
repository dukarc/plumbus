import { Header } from '@components/sections/Header';
import { Hero } from '@components/sections/Hero';
import { Features } from '@components/sections/Features';
import { Manufacturing } from '@components/sections/Manufacturing';
import { Testimonials } from '@components/sections/Testimonials';
import { Pricing } from '@components/sections/Pricing';
import { FAQ } from '@components/sections/FAQ';
import { Footer } from '@components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
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
    </div>
  );
}

export default App;
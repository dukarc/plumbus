import { ArrowRightIcon as ArrowRight, StarIcon as Star, ZapIcon as Zap } from '@components/icons/OptimizedIcons';

const Hero = () => {
  const handleGetStarted = () => {
    console.log("🚀 User clicked 'Get Your Plumbus Today!' - Jerry would be proud!");
    console.log("🔬 Rick's response: 'Finally, someone with taste.'");
    console.log("📦 Initiating interdimensional commerce protocol...");
    
    // Scroll to pricing section
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchDemo = () => {
    console.log("📺 Demo requested! Fun fact: 73% of demo watchers become instant Plumbus converts");
    console.log("🎬 Loading interdimensional manufacturing footage...");
    alert("Demo coming soon! In the meantime, just imagine the most satisfying manufacturing process you've ever seen. Now multiply that by infinity. That's how a Plumbus is made.");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full opacity-10 animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-8">
          <Star className="w-4 h-4 text-green-400 mr-2" />
          <span className="text-green-400 text-sm font-semibold">
            #1 Interdimensional Household Device
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Everyone Has a{' '}
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Plumbus
          </span>
          <br />
          In Their Home
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          The essential household device you never knew you needed but can't live without. 
          Now featuring advanced <span className="text-green-400 font-semibold">dinglebop technology</span> and 
          automated <span className="text-blue-400 font-semibold">schleem repurposing</span>.
        </p>

        {/* Features highlight */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-sm">
          <div className="flex items-center text-gray-400">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            <span>Quantum-Enabled</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Star className="w-4 h-4 text-blue-400 mr-2" />
            <span>Multi-Dimensional</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Zap className="w-4 h-4 text-purple-400 mr-2" />
            <span>Jerry-Proof Design</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={handleGetStarted}
            className="group bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            title="Finally! Take my Schmeckles!"
          >
            Get Your Plumbus Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={handleWatchDemo}
            className="group border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            title="See the magic of Plumbus manufacturing"
          >
            Watch How It's Made
            <span className="ml-2 group-hover:animate-spin">🎬</span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Trusted by beings across infinite dimensions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-2xl opacity-60">
            <span title="Rick Sanchez - Verified Genius">🧪</span>
            <span title="Galactic Federation - Formerly Evil">🚀</span>
            <span title="Council of Ricks - Bureaucratically Approved">👥</span>
            <span title="Mr. Meeseeks - Existence is Pain but This Helps">🔵</span>
            <span title="Squanch - Professional Squancher">🐱</span>
            <span title="Birdperson - Friend of Rick">🦅</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            * Results may vary by dimension. Not recommended for use in dimensions where Plumbuses are sentient. 
            Side effects may include: improved household efficiency, existential clarity, and the ability to understand Rick's science.
            Please use responsibly and keep away from Jerry.
          </p>
        </div>
      </div>

      {/* Floating Plumbus visualization */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-bounce">
        <div className="relative">
          {/* Simple Plumbus SVG */}
          <svg width="80" height="100" viewBox="0 0 80 100" className="drop-shadow-lg">
            {/* Main blob body */}
            <ellipse cx="40" cy="60" rx="25" ry="18" fill="#E91E63" opacity="0.8" />
            
            {/* Handle/stem at top */}
            <rect x="36" y="35" width="8" height="30" fill="#D81B60" opacity="0.9" rx="4" />
            <ellipse cx="40" cy="37" rx="6" ry="4" fill="#C2185B" opacity="0.9" />
            
            {/* Bottom tentacle appendages (4 simple curved lines) */}
            <path d="M25 72 Q20 78 22 85" stroke="#AD1457" strokeWidth="3" fill="none" opacity="0.8" strokeLinecap="round" />
            <path d="M35 75 Q30 82 32 88" stroke="#AD1457" strokeWidth="3" fill="none" opacity="0.8" strokeLinecap="round" />
            <path d="M45 75 Q50 82 48 88" stroke="#AD1457" strokeWidth="3" fill="none" opacity="0.8" strokeLinecap="round" />
            <path d="M55 72 Q60 78 58 85" stroke="#AD1457" strokeWidth="3" fill="none" opacity="0.8" strokeLinecap="round" />
            
            {/* Small surface details on main body */}
            <ellipse cx="32" cy="58" rx="3" ry="2" fill="#C2185B" opacity="0.6" />
            <ellipse cx="48" cy="62" rx="2" ry="3" fill="#C2185B" opacity="0.6" />
          </svg>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 w-20 h-25 bg-pink-400 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
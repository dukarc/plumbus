import { ZapIcon as Zap, ShieldIcon as Shield, CpuIcon as Cpu, SparklesIcon as Sparkles, WrenchIcon as Wrench, GlobeIcon as Globe } from '@components/icons/OptimizedIcons';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Quantum Dinglebop Integration",
      description: "Our patented dinglebop technology interfaces seamlessly with your existing grumbo, eliminating the need for manual fleeb adjustments. Works in dimensions C-137 through J19-Zeta-7.",
      hoverText: "Science isn't about WHY, it's about WHY NOT!"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Chumble Spuzz Protection",
      description: "Military-grade chumble spuzz shielding prevents unauthorized access to your plumbus internals. Tested against both Galactic Federation and Council of Ricks infiltration attempts.",
      hoverText: "Even Jerry can't mess this up"
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "Schleem Repurposing Engine",
      description: "Automatically repurposes excess schleem for maximum efficiency. Our AI-driven algorithms ensure your schleem levels remain optimal across all operating conditions.",
      hoverText: "More efficient than a Meeseeks box!"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
      title: "Self-Calibrating Grumbo",
      description: "No more manual grumbo adjustments! Our smart grumbo system learns your usage patterns and auto-calibrates for peak performance. It's like having your own personal Squanch.",
      hoverText: "I squanch my family!"
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-400" />,
      title: "Advanced Fleeb Management",
      description: "Cut down fleeb juice collection time by 73% with our proprietary fleeb optimization protocols. Includes automated ploobus and grumbo compatibility checks.",
      hoverText: "Fleeb juice: not just for breakfast anymore"
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      title: "Multi-Dimensional Compatibility",
      description: "Works across infinite realities and dimensions. Whether you're in dimension C-137 or that weird one where everyone has butts for faces, your Plumbus will function perfectly.",
      hoverText: "Infinite dimensions, infinite possibilities, infinite Plumbuses"
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Every Household Needs a <span className="text-green-400">Plumbus</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technology that definitely exists and isn't made up at all. 
            Each feature has been rigorously tested by our team of interdimensional engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-green-400 transition-all duration-300 group cursor-pointer"
              title={feature.hoverText}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white ml-3">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-green-400 text-sm italic">"{feature.hoverText}"</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden Easter Egg for Developers */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm">
            <span className="hover:text-green-400 cursor-pointer" onClick={() => console.log("Wubba lubba dub dub! You found the easter egg! 🥚")}>
              Psst... developers, check the console for a surprise
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
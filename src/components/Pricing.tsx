import { CheckIcon as Check, StarIcon as Star, ZapIcon as Zap } from '@components/icons/OptimizedIcons';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plumbus",
      price: "25",
      currency: "Schmeckles",
      period: "one-time",
      description: "Perfect for Jerrys and first-time interdimensional travelers",
      popular: false,
      features: [
        "Standard dinglebop (Grade B)",
        "Basic schleem repurposing",
        "Manual fleeb juice collection",
        "Single-dimension compatibility",
        "Jerry-proof design",
        "30-day warranty",
        "Instruction manual (with pictures)",
        "Emergency Meeseeks button (1 use)"
      ],
      buttonText: "Get Basic Plumbus",
      buttonStyle: "bg-gray-700 hover:bg-gray-600 text-white",
      tooltip: "Great for beginners and people named Jerry"
    },
    {
      name: "Professional Plumbus",
      price: "50",
      currency: "Schmeckles", 
      period: "one-time",
      description: "The choice of scientists and interdimensional beings",
      popular: true,
      features: [
        "Premium dinglebop (Grade A+)",
        "Advanced schleem repurposing AI",
        "Automated fleeb management system",
        "Multi-dimensional compatibility (C-137 to J19-Zeta-7)",
        "Quantum-encrypted chumble spuzz protection",
        "Self-calibrating grumbo technology",
        "1-year warranty with portal shipping",
        "24/7 Meeseeks support team",
        "Rick Sanchez approval badge",
        "Free software updates via portal"
      ],
      buttonText: "Get Professional Plumbus",
      buttonStyle: "bg-green-500 hover:bg-green-600 text-black",
      tooltip: "Wubba lubba dub dub! This is the good stuff."
    },
    {
      name: "Enterprise Plumbus",
      price: "100",
      currency: "Schmeckles",
      period: "one-time", 
      description: "For Citadel operations and Council of Ricks members",
      popular: false,
      features: [
        "Ultra-premium dinglebop (Grade S - Legendary)",
        "AI-powered schleem optimization matrix",
        "Quantum fleeb harvesting technology",
        "Infinite dimensional compatibility",
        "Military-grade Council of Ricks encryption",
        "Sentient grumbo with machine learning",
        "Lifetime warranty across all timelines",
        "Priority interdimensional support",
        "Personal Squanch installation service",
        "Immunity to Jerry-related malfunctions",
        "Custom Rick modifications available",
        "Includes backup Plumbus (in case of paradoxes)"
      ],
      buttonText: "Get Enterprise Plumbus",
      buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
      tooltip: "For when you need to squanch at maximum efficiency"
    }
  ];

  const handlePurchase = (planName: string, price: string) => {
    console.log(`🚀 Initiating purchase for ${planName}...`);
    console.log(`💰 Total cost: ${price} Schmeckles`);
    console.log(`📦 Preparing interdimensional shipping portal...`);
    console.log(`🔬 Rick's approval: "Not terrible, I guess."`);
    alert(`Thanks for choosing ${planName}! A Meeseeks will contact you shortly to process your order. Wubba lubba dub dub!`);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your <span className="text-green-400">Plumbus</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            From basic Jerry-level functionality to enterprise-grade Rick specifications.
            All prices in Schmeckles (exchange rate: 1 Schmeckle ≈ $148 USD)*
          </p>
          <p className="text-sm text-gray-500">
            *Exchange rates fluctuate based on interdimensional market conditions and Rick's mood
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-black rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'border-green-400 shadow-2xl shadow-green-400/20'
                  : 'border-gray-800 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Rick's Choice
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <div className="ml-2">
                    <span className="text-green-400 font-semibold">{plan.currency}</span>
                    <span className="text-gray-400 text-sm block">{plan.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${plan.buttonStyle} transform hover:scale-105`}
                onClick={() => handlePurchase(plan.name, plan.price)}
                title={plan.tooltip}
              >
                {plan.buttonText}
                {plan.popular && <Zap className="inline w-4 h-4 ml-2" />}
              </button>

              {plan.popular && (
                <div className="mt-4 text-center">
                  <p className="text-green-400 text-xs italic">
                    "This one doesn't completely suck" - Rick Sanchez
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              🎉 Limited Time Offer: Galactic Federation Clearance Sale!
            </h3>
            <p className="text-gray-300 mb-4">
              Use code "WUBBA20" for 20% off your first Plumbus! 
              Offer expires when the heat death of the universe occurs or when Jerry figures out how to use one, whichever comes first.
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
              <span>✅ Free interdimensional shipping</span>
              <span>✅ 30-day satisfaction guarantee</span>
              <span>✅ Jerry-proof warranty</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">We accept:</p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
            <span>💰 Schmeckles</span>
            <span>💎 Flurbos</span>
            <span>🔬 Dark Matter</span>
            <span>🏆 Blemflarck</span>
            <span>❌ Not Jerry's IOUs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
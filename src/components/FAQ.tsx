import { useState } from 'react';
import { ChevronDownIcon as ChevronDown, ChevronUpIcon as ChevronUp } from '@components/icons/OptimizedIcons';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly is a Plumbus and why do I need one?",
      answer: "Great question! A Plumbus is an essential household device that every home should have. It's made by first taking the dinglebop, then smoothing it out with a bunch of schleem. The schleem is then repurposed for later batches. Everyone has a Plumbus in their home - if you don't have one yet, you're basically living in the stone age.",
      easterEgg: "Fun fact: The average household uses their Plumbus 847 times per day without realizing it!"
    },
    {
      question: "How is a Plumbus made?",
      answer: "I'm glad you asked! First, they take the dinglebop and smooth it out with a bunch of schleem. The schleem is then repurposed for later batches. They take the dinglebop and push it through the grumbo, where the fleeb is rubbed against it. Important: the fleeb has all the fleeb juice. Then a Shlami shows up and rubs it, and spits on it. They cut the fleeb, and there are several hizzards in the way. The Blamfs rub against the chumbles. And the ploobis and grumbo are shaved away. That leaves you with a regular old Plumbus!",
      easterEgg: "This manufacturing process has remained unchanged for over 2,000 Squanch years"
    },
    {
      question: "Is the Plumbus compatible with my existing home setup?",
      answer: "Absolutely! The Plumbus features universal compatibility with all major home systems including: standard Earth electrical (110-240V), quantum flux capacitors, dark matter conduits, and even Jerry-proof connections. It works in dimensions C-137 through J19-Zeta-7, and we're currently beta testing support for the Cronenberg dimension.",
      easterEgg: "Not compatible with citrus-based life forms or Council of Ricks facilities"
    },
    {
      question: "What if my Plumbus stops working?",
      answer: "Don't panic! First, check if you've been properly maintaining your schleem levels - 73% of Plumbus issues are schleem-related. If that doesn't work, try turning it off and on again (the universal IT solution works across all dimensions). Our customer support team includes certified Shlami technicians available 24/7 across multiple realities.",
      easterEgg: "Have you tried putting it in rice? Works 60% of the time, every time."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping is 3-5 business days via interdimensional portal. Express shipping (24 hours) is available for an additional fee and includes premium packaging to prevent dimensional drift. Note: Shipping to the Citadel of Ricks requires special clearance and may take up to 2 weeks due to bureaucratic red tape.",
      easterEgg: "We once delivered a Plumbus before it was ordered due to a temporal anomaly"
    },
    {
      question: "Can I return my Plumbus if I'm not satisfied?",
      answer: "Of course! We offer a 30-day money-back guarantee across all dimensions. However, we cannot accept returns of Plumbuses that have been exposed to cronenberg virus, council of ricks modifications, or Jerry's 'improvements.' Standard return shipping applies unless you can prove the defect was caused by quantum entanglement.",
      easterEgg: "Return rate across all dimensions: 0.003% (mostly Jerry-related incidents)"
    },
    {
      question: "Is it safe to use around children and pets?",
      answer: "The Plumbus is completely safe when used as directed. It has built-in safety features including child-proof schleem locks and pet-friendly fleeb coating. However, we recommend keeping it away from Morty's science projects and any devices Rick has 'improved' as these may cause unpredictable interactions.",
      easterEgg: "Surprisingly, it's actually Jerry that poses the biggest safety risk"
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes! Our support team includes Rick Sanchez (when he's sober), certified Galactic Federation technicians, and a squad of Mr. Meeseeks ready to help with any issue. We also offer video tutorials, though they're narrated by Rick so they might include some creative language and tangential rants about the Council of Ricks.",
      easterEgg: "Our Meeseeks support team has a 99.9% success rate and only mild existential dread"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers that are definitely real and not made up on the spot.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-green-400 transition-colors duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white font-semibold text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed mb-3">
                    {faq.answer}
                  </p>
                  <div className="border-t border-gray-800 pt-3">
                    <p className="text-green-400 text-sm italic">
                      💡 {faq.easterEgg}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Still have questions? Our interdimensional support team is here to help!
          </p>
          <button 
            className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            onClick={() => console.log("Support ticket created! A Meeseeks will be assigned shortly. Remember: existence is pain, but customer service doesn't have to be!")}
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
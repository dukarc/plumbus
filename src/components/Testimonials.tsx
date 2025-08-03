import { StarIcon as Star } from '@components/icons/OptimizedIcons';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rick Sanchez",
      title: "Interdimensional Scientist",
      avatar: "🧪",
      rating: 5,
      quote: "Listen Morty, I've used a lot of plumbuses across infinite dimensions, and this one actually doesn't suck. The schleem repurposing is *burp* actually pretty efficient. I give it a solid B+, which is basically an A+ coming from me.",
      personality: "Cynical genius with occasional approval"
    },
    {
      name: "Jerry Smith",
      title: "Unemployed (Again)",
      avatar: "👨",
      rating: 5,
      quote: "Finally, something I can't mess up! The instructions were so simple even I could follow them. Beth says I'm 'surprisingly competent' with it, which is basically the highest praise I've gotten in years. Thanks, Plumbus!",
      personality: "Desperate for validation"
    },
    {
      name: "Beth Smith",
      title: "Horse Surgeon",
      avatar: "👩‍⚕️",
      rating: 4,
      quote: "As someone who works with precision instruments daily, I appreciate the advanced fleeb management system. It's reliable, efficient, and somehow Jerry hasn't broken it yet. That alone makes it worth every schmeckle.",
      personality: "Professional with low expectations"
    },
    {
      name: "Mr. Meeseeks",
      title: "Existence is Pain",
      avatar: "🔵",
      rating: 5,
      quote: "Ooh, can do! I was summoned to help with a plumbus and it was so easy to use that my task was completed in seconds! Look at me! I'm helping efficiently! This is the least painful existence I've had in ages!",
      personality: "Enthusiastically helpful but existentially tortured"
    },
    {
      name: "Squanch",
      title: "Squanch Specialist",
      avatar: "🐱",
      rating: 5,
      quote: "I squanch my Plumbus every day! It really squanches the way I squanch around the house. My whole family squanches it too. Five stars - would definitely squanch again!",
      personality: "Says 'squanch' in place of various verbs"
    },
    {
      name: "Birdperson",
      title: "Avian Freedom Fighter",
      avatar: "🦅",
      rating: 4,
      quote: "In bird culture, this is considered a 'solid purchase.' The multi-dimensional compatibility proved invaluable during my recent interdimensional conflicts. It has become... a friend.",
      personality: "Stoic and literal"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't Take Our Word For It
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from satisfied customers across the multiverse. Results may vary by dimension, 
            but satisfaction is universal*
          </p>
          <p className="text-sm text-gray-500 mt-2">*Not valid in dimensions where Plumbuses are illegal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-xl border border-gray-800 hover:border-green-400 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>

              <blockquote className="text-gray-300 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Hidden personality trait for hover */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-green-400 text-xs">
                  Character trait: {testimonial.personality}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Testimonials collected across multiple dimensions. Individual results may vary. 
            Plumbus Corp is not responsible for dimensional rifts, existential crises, or Jerry-related incidents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
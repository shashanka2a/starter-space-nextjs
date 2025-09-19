import { Star, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Founder, TechFlow',
      image: 'https://images.unsplash.com/photo-1627776880991-808c5996527b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHRlc3RpbW9uaWFsfGVufDF8fHx8MTc1ODI0NjM0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: 'Starter Space transformed how I work. The community is incredible, and I\'ve formed partnerships that have accelerated my business growth by 300%.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Senior Developer, Remote Inc',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      content: 'The perfect blend of productivity and community. The networking events have introduced me to mentors and collaborators I wouldn\'t have met otherwise.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Creative Director, Brand Studio',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      content: 'As a creative professional, I need inspiring spaces. Starter Space delivers that and more - the design, amenities, and energy are unmatched.',
      rating: 5
    },
    {
      name: 'David Park',
      role: 'Startup Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      content: 'I\'ve worked from many co-working spaces, but none compare to Starter Space. The attention to detail and community focus sets them apart.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/30"></div>
      
      {/* Organic shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M42.7,-73.6C54.8,-66.5,63.4,-50.8,69.8,-34.4C76.2,-18,80.4,-1,79.8,15.8C79.2,32.6,73.8,49.2,64.1,62.8C54.4,76.4,40.4,87,24.8,91.2C9.2,95.4,-7.9,93.2,-23.4,87.3C-38.9,81.4,-52.8,71.8,-63.4,58.7C-74,45.6,-81.3,29,-82.1,12.1C-82.9,-4.8,-77.2,-21.9,-67.8,-35.4C-58.4,-48.9,-45.3,-58.8,-31.1,-64.8C-16.9,-70.8,-1.6,-72.9,15.2,-71.1C32,-69.3,30.6,-80.7,42.7,-73.6Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Member Stories
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Members Say
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from the entrepreneurs, creators, and innovators who call Starter Space home.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community highlight */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Thriving Community</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Experience the difference of working alongside passionate entrepreneurs, creatives, and innovators who are building the future.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Become a Member
          </Button>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Ready to join our community?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Experience the difference for yourself. Book a tour and see why Starter Space is rated #1 for member satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
              Schedule a Tour
            </button>
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors duration-200">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
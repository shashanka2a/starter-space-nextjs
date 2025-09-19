import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from './ui/button';

export function Pricing() {
  const plans = [
    {
      name: 'Day Pass',
      price: '$25',
      period: 'per day',
      description: 'Perfect for trying out our space',
      features: [
        'All-day workspace access',
        'High-speed WiFi',
        'Coffee & tea included',
        'Print & scan (5 pages)',
        'Meeting room (1 hour)'
      ],
      buttonText: 'Get Day Pass',
      buttonVariant: 'outline' as const,
      popular: false,
      icon: Zap
    },
    {
      name: 'Flex',
      price: '$149',
      period: 'per month',
      description: 'Ideal for freelancers and remote workers',
      features: [
        '10 days per month access',
        'All amenities included',
        'Guest passes (2 per month)',
        'Event access',
        'Community Slack access',
        'Locker rental available'
      ],
      buttonText: 'Start Flex Plan',
      buttonVariant: 'outline' as const,
      popular: false,
      icon: Star
    },
    {
      name: 'Unlimited',
      price: '$249',
      period: 'per month',
      description: 'Best for growing teams and dedicated users',
      features: [
        'Unlimited workspace access',
        '24/7 building access',
        'Guest passes (5 per month)',
        'Meeting room credits (10 hours)',
        'Priority event booking',
        'Dedicated locker included',
        'Mail handling service',
        'Phone booth priority'
      ],
      buttonText: 'Go Unlimited',
      buttonVariant: 'default' as const,
      popular: true,
      icon: Crown
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-gray-50/50 dark:from-slate-950/50 dark:to-gray-950/50"></div>
      
      {/* Organic background shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M49.5,-82.3C62.8,-75.2,71.5,-59.4,77.9,-42.8C84.3,-26.2,88.4,-8.8,87.8,8.2C87.2,25.2,81.9,41.8,73.2,55.9C64.5,70,52.4,81.6,38.2,87.8C24,94,7.7,94.8,-8.9,92.4C-25.5,90,-42.4,84.4,-56.2,75.1C-70,65.8,-80.7,52.8,-85.7,37.9C-90.7,23,-90,6.2,-85.8,-9.1C-81.6,-24.4,-73.9,-38.2,-63.7,-49.5C-53.5,-60.8,-40.8,-69.6,-26.8,-76.2C-12.8,-82.8,2.5,-87.2,19.1,-87.4C35.7,-87.6,53.6,-83.6,49.5,-82.3Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Membership Plans
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Simple,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your work style. All plans include our premium amenities and community access.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50'
                    : 'border-border bg-background'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600' 
                      : 'bg-gradient-to-r from-gray-600 to-gray-700'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl lg:text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
                      : ''
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Star className="w-5 h-5 text-amber-500" />
              <span className="font-semibold">Special Offer</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Get 2 months free when you sign up for an annual membership. Use code STARTER2024 at checkout.
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>• No setup fees • Cancel anytime • 30-day money-back guarantee</p>
              <p>• Corporate and team discounts available</p>
            </div>
          </div>
        </div>

        {/* FAQ preview */}
        <div className="text-center mt-12">
          <h3 className="font-semibold mb-4">Have questions about our plans?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              View Full FAQ
            </Button>
            <Button variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
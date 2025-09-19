import { 
  Wifi, 
  Clock, 
  Shield, 
  Coffee, 
  Users, 
  Car, 
  Printer, 
  Headphones,
  Calendar,
  Zap,
  Heart,
  Briefcase
} from 'lucide-react';
import { Button } from './ui/button';

export function Benefits() {
  const benefits = [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Gigabit fiber internet with dedicated bandwidth for seamless video calls and file transfers.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Work on your schedule with round-the-clock access to our secure, well-lit spaces.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Coffee,
      title: 'Premium Coffee Bar',
      description: 'Artisan coffee, tea, and healthy snacks to fuel your productivity throughout the day.',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Networking Events',
      description: 'Connect with entrepreneurs, freelancers, and industry leaders through our curated events.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Car,
      title: 'Free Parking',
      description: 'Complimentary parking for all members with EV charging stations available.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Printer,
      title: 'Print & Scan',
      description: 'Professional-grade printing, scanning, and copying services included in your membership.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Headphones,
      title: 'Quiet Zones',
      description: 'Dedicated silent areas for focused work and important phone calls.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Meeting Rooms',
      description: 'Book professional meeting rooms equipped with smart TVs and video conferencing.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Fast Wi-Fi',
      description: 'Lightning-fast internet speeds with backup connections for maximum reliability.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Wellness Zone',
      description: 'Meditation room, yoga space, and wellness programs to maintain work-life balance.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Briefcase,
      title: 'Mail Services',
      description: 'Professional mailing address and package handling services for your business.',
      gradient: 'from-slate-500 to-gray-500'
    },
    {
      icon: Shield,
      title: 'Secure Access',
      description: 'Key card access, security cameras, and lockers to keep your belongings safe.',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="benefits" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-gray-50/50 dark:from-slate-950/50 dark:to-gray-950/50"></div>
      
      {/* Organic shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M54.5,-77.8C69.7,-68.9,80.7,-53.6,87.1,-36.8C93.5,-20,95.3,-1.7,92.8,15.8C90.3,33.3,83.5,50,72.8,63.2C62.1,76.4,47.5,86.1,31.7,89.4C15.9,92.7,-1.1,89.6,-17.4,83.3C-33.7,77,-49.3,67.5,-61.8,54.4C-74.3,41.3,-83.7,24.6,-87.2,6.2C-90.7,-12.2,-88.3,-32.3,-79.8,-47.8C-71.3,-63.3,-56.7,-74.2,-40.8,-82.4C-24.9,-90.6,-7.7,-96.1,7.9,-92.8C23.5,-89.5,39.3,-86.7,54.5,-77.8Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Workspace Amenities
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Professional{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Amenities
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern amenities designed for productivity. From high-speed fiber internet to comfortable workspaces, everything you need to do your best work.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-background border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-semibold mb-2 group-hover:text-foreground transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ready to work smarter?</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Tour our Gainesville location and see how our professional amenities can elevate your work experience.
            </p>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
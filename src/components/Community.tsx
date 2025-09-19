import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Calendar, Users, Coffee, Zap } from 'lucide-react';

export function Community() {
  return (
    <section id="community" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle neon gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/2 via-pink-500/1 to-orange-500/2"></div>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Community
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            A Community of{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Doers
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join Gainesville&apos;s most dynamic professional community. Network with local entrepreneurs, collaborate on meaningful projects, and grow your business alongside like-minded innovators.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1563461660947-507ef49e9c47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwY29tbXVuaXR5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODIyMDYxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community workspace collaboration"
              width={600}
              height={450}
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
            />
            

          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl font-bold mb-4">Where Connections Spark Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our community is built on collaboration, creativity, and mutual support. Whether you&apos;re a solo entrepreneur or part of a growing team, you&apos;ll find your tribe here.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Coffee className="w-5 h-5 text-amber-500" />
                <span>Weekly coffee chats and networking sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>Monthly workshops and skill-sharing events</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-purple-500" />
                <span>Collaborative projects and partnerships</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-green-500" />
                <span>Mentorship programs and peer support</span>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Join Our Community
            </Button>
          </div>
        </div>

        {/* Community highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Diverse Community</h4>
            <p className="text-sm text-muted-foreground">Connect with professionals from all industries</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Regular Events</h4>
            <p className="text-sm text-muted-foreground">Workshops, networking, and skill-sharing sessions</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Collaboration</h4>
            <p className="text-sm text-muted-foreground">Form partnerships and work on exciting projects</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Social Space</h4>
            <p className="text-sm text-muted-foreground">Casual conversations over great coffee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
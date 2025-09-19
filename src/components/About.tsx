import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
      {/* Subtle neon gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/2 to-pink-500/3"></div>
      
      {/* Organic shape */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M47.1,-78.5C59.9,-71.2,68.5,-55.7,74.8,-39.4C81.1,-23.1,85.1,-6,83.8,10.5C82.5,27,75.9,43,65.4,55.8C54.9,68.6,40.5,78.2,24.8,82.1C9.1,86,7.9,84.2,-6.8,80.9C-21.5,77.6,-36.8,72.8,-49.5,63.2C-62.2,53.6,-72.3,39.2,-76.8,23.1C-81.3,7,-80.2,-10.8,-74.5,-26.8C-68.8,-42.8,-58.5,-57,-45.7,-64.5C-32.9,-72,-18.5,-72.8,-2.1,-69.4C14.3,-66,28.6,-58.4,47.1,-78.5Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About Starter Space
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Empowering{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Gainesville&apos;s
                </span>{' '}
                Innovators
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located in downtown Gainesville, Starter Space provides a professional, collaborative environment for freelancers, entrepreneurs, and remote teams. Our mission is to foster innovation and connection in Florida&apos;s innovation hub.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lightning Fast Internet</h3>
                  <p className="text-muted-foreground">Gigabit fiber internet with 99.9% uptime guarantee to keep you connected and productive.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Vibrant Community</h3>
                  <p className="text-muted-foreground">Connect with like-minded professionals through events, workshops, and networking opportunities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Premium Amenities</h3>
                  <p className="text-muted-foreground">From coffee bars to meditation rooms, we&apos;ve thought of everything to enhance your work experience.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="figma:asset/1a5adbc4e5cea3da1bf1f24d1de16eb85f728834.png"
                alt="Starter Space coworking environment"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
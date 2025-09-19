'use client'

import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Hero() {
  const { ref: heroRef, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1591824148528-0f7fee5735c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZSUyMHZpZGVvJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTgyNDYzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern coworking space"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Gradient overlay with neon accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent dark:from-black/80 dark:via-black/60 dark:to-black/20"></div>
        {/* Subtle neon gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-cyan-500/5"></div>
      </div>

      {/* Organic shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg className="absolute top-20 right-10 w-64 h-64 opacity-10 animate-float" viewBox="0 0 200 200">
          <path
            d="M44.7,-76.4C58.8,-69.2,71.8,-58.1,79.1,-43.8C86.4,-29.5,87.9,-12.1,85.8,4.2C83.7,20.5,78,35.7,68.9,47.9C59.8,60.1,47.3,69.3,33.5,74.8C19.7,80.3,4.6,82.1,-11.7,80.8C-28,79.5,-45.5,75.1,-58.2,66.2C-70.9,57.3,-78.8,43.9,-82.1,29.4C-85.4,14.9,-84.1,-0.7,-79.2,-14.8C-74.3,-28.9,-65.8,-41.5,-54.8,-49.4C-43.8,-57.3,-30.3,-60.5,-16.7,-62.8C-3.1,-65.1,10.6,-66.5,24.7,-64.2C38.8,-61.9,53.2,-55.9,44.7,-76.4Z"
            fill="url(#gradient1)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg className="absolute bottom-20 left-10 w-48 h-48 opacity-10 animate-float" style={{ animationDelay: '1.5s' }} viewBox="0 0 200 200">
          <path
            d="M39.5,-69.7C50.7,-62.3,58.7,-50.2,63.8,-36.8C68.9,-23.4,71.1,-8.7,69.8,5.2C68.5,19.1,63.7,32.2,55.9,42.8C48.1,53.4,37.3,61.5,25.2,66.4C13.1,71.3,-0.3,73,-12.8,70.2C-25.3,67.4,-36.9,60.1,-46.2,50.2C-55.5,40.3,-62.5,27.8,-66.1,14.2C-69.7,0.6,-69.9,-14.1,-65.8,-27.4C-61.7,-40.7,-53.3,-52.6,-42.5,-60.2C-31.7,-67.8,-18.5,-71.1,-4.8,-64.1C8.9,-57.1,28.3,-77.1,39.5,-69.7Z"
            fill="url(#gradient2)"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            Gainesville&apos;s Premier{' '}
            <span className="gradient-text">
              Coworking Space
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            A thoughtfully designed workspace in the heart of Gainesville where entrepreneurs, freelancers, and remote workers thrive together.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 hover-lift hover-glow group">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 hover-lift group">
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
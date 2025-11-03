import React from 'react';
import Spline from '@splinetool/react-spline';
import { Leaf, Rocket, Globe, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient to improve text contrast; doesn't block 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-emerald-900/40 to-emerald-950/80" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:py-28 md:py-32">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-700/40 px-3 py-1 text-sm ring-1 ring-emerald-400/30 backdrop-blur">
          <Leaf className="h-4 w-4 text-emerald-300" />
          <span className="text-emerald-100">EcoTourism Cloud Platform</span>
        </div>

        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Find and book sustainable travel experiences
        </h1>
        <p className="max-w-2xl text-emerald-100/90 md:text-lg">
          A modern hub for eco-conscious travelers and providers. Discover
          low-impact adventures, manage bookings, and plan greener journeys with
          confidence.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-emerald-900 shadow-sm transition hover:shadow">
            <Rocket className="h-5 w-5" /> Get Started
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-700/50 px-5 py-3 font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-emerald-700/60">
            <Play className="h-5 w-5" /> See how it works
          </button>
        </div>

        <div className="mt-6 flex items-center gap-6 text-sm text-emerald-100/80">
          <div className="inline-flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Global impact metrics and carbon insights
          </div>
          <div className="inline-flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            Provider-verified sustainable practices
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

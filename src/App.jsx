import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import MapPlanner from './components/MapPlanner';
import DashboardShowcase from './components/DashboardShowcase';
import { Leaf, Github, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900">
      {/* Hero with interactive Spline scene */}
      <HeroSection />

      {/* Core features for providers and travelers */}
      <FeaturesSection />

      {/* Interactive map planner */}
      <MapPlanner />

      {/* User dashboard preview */}
      <DashboardShowcase />

      {/* Footer */}
      <footer className="border-t border-emerald-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-emerald-800">
            <Leaf className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">ETCP — Eco-Tourism Cloud Platform</span>
          </div>
          <div className="text-sm text-emerald-700/80">
            Prototype for an academic assignment. No real bookings are processed.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm text-emerald-800 transition hover:bg-emerald-50"
            >
              <Github className="h-4 w-4" /> Source
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm text-emerald-800 transition hover:bg-emerald-50"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

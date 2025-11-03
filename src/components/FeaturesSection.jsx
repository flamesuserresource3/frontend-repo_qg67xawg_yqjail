import React from 'react';
import { Leaf, User, Settings, Star, Briefcase } from 'lucide-react';

const features = [
  {
    title: 'For Providers',
    icon: Briefcase,
    desc:
      'Register your eco-services, showcase certifications, manage availability, and receive bookings securely.',
    bullets: ['Service listings', 'Calendar & capacity', 'Verification badges'],
  },
  {
    title: 'For Travelers',
    icon: User,
    desc:
      'Search by impact, region, and activity type. Save favorites, compare options, and book responsibly.',
    bullets: ['Impact filters', 'Wishlist & compare', 'Instant booking'],
  },
  {
    title: 'Dashboard',
    icon: Star,
    desc:
      'Track trips, reviews, and CO₂ savings. Manage upcoming journeys and past experiences in one place.',
    bullets: ['Bookings timeline', 'Reviews & ratings', 'CO₂ insights'],
  },
  {
    title: 'Settings & Payments',
    icon: Settings,
    desc:
      'Personalize preferences, manage payment methods, and set sustainability goals that matter to you.',
    bullets: ['Profiles & preferences', 'Secure payments', 'Goal tracking'],
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16 text-emerald-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-2">
          <Leaf className="h-5 w-5 text-emerald-600" />
          <h2 className="text-2xl font-semibold">Built for real impact</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, icon: Icon, desc, bullets }) => (
            <div
              key={title}
              className="group rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5 transition hover:border-emerald-200 hover:bg-emerald-50"
            >
              <div className="mb-3 inline-flex rounded-full bg-emerald-100 p-2 text-emerald-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="mb-4 text-sm text-emerald-800/90">{desc}</p>
              <ul className="space-y-2 text-sm text-emerald-800">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

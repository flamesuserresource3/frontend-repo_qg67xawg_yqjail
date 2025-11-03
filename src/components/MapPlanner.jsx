import React from 'react';
import { MapPin, Search } from 'lucide-react';

const MapPlanner = () => {
  // Simple OpenStreetMap embed. This provides an interactive map without extra packages.
  // The search UI below is visual only in this prototype.
  const mapSrc =
    'https://www.openstreetmap.org/export/embed.html?bbox=-15.0%2C-35.0%2C50.0%2C65.0&layer=mapnik';

  return (
    <section className="bg-emerald-900/3 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-emerald-600" />
          <h2 className="text-2xl font-semibold text-emerald-900">Interactive Map</h2>
        </div>

        <div className="mb-4 flex w-full items-center gap-2 rounded-xl border border-emerald-200 bg-white p-2 shadow-sm">
          <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-800">
            <Search className="h-4 w-4" />
            <span className="text-sm font-medium">Search places, parks, experiences…</span>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700">
              Nearby
            </button>
            <button className="rounded-lg border border-emerald-300 bg-white px-4 py-2 text-sm font-medium text-emerald-800 transition hover:bg-emerald-50">
              Filters
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl ring-1 ring-emerald-200">
          <iframe
            title="Eco Map"
            src={mapSrc}
            className="h-[420px] w-full"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />
        </div>

        <div className="mt-4 grid gap-3 text-sm text-emerald-800 sm:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-white p-4">
            Popular: Costa Rica, Azores, Bali Highlands
          </div>
          <div className="rounded-xl border border-emerald-200 bg-white p-4">
            Themes: Rainforest, Marine, Cultural, Rewilding
          </div>
          <div className="rounded-xl border border-emerald-200 bg-white p-4">
            Tips: Travel off-peak to lower impact and costs
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPlanner;

import React from 'react';
import { Calendar, Heart, MessageSquare, CheckCircle2 } from 'lucide-react';

const DashboardShowcase = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-900">Your dashboard at a glance</h2>
          <p className="text-emerald-800/80">Manage bookings, favorites, and reviews in one place.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <div className="mb-3 inline-flex items-center gap-2 text-emerald-700">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Upcoming booking</span>
            </div>
            <div className="rounded-xl bg-white p-4 text-sm text-emerald-900 shadow-sm">
              Rainforest Night Walk — Monteverde
              <div className="mt-2 text-emerald-700">Apr 19, 7:30 PM</div>
              <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-800">
                <CheckCircle2 className="h-4 w-4" /> Confirmed
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <div className="mb-3 inline-flex items-center gap-2 text-emerald-700">
              <Heart className="h-5 w-5" />
              <span className="font-medium">Saved experiences</span>
            </div>
            <div className="grid gap-3 text-sm text-emerald-900">
              <div className="rounded-xl bg-white p-4 shadow-sm">Sea Turtle Conservation, Tortuguero</div>
              <div className="rounded-xl bg-white p-4 shadow-sm">Organic Coffee Farm Tour, Alajuela</div>
              <div className="rounded-xl bg-white p-4 shadow-sm">Mangrove Kayak, Sierpe</div>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <div className="mb-3 inline-flex items-center gap-2 text-emerald-700">
              <MessageSquare className="h-5 w-5" />
              <span className="font-medium">Recent reviews</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="rounded-xl bg-white p-3 shadow-sm">
                "Knowledgeable guide and strong conservation practices." — 5/5
              </div>
              <div className="rounded-xl bg-white p-3 shadow-sm">
                "Great small-group policy and local community benefits." — 4.5/5
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;

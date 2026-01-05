"use client";

import React from "react";
import { Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import PageHeader from "../_components/page-header";
import { events } from "~/data/events";

export default function ActivitiesPage() {
  const recentEvents = events.filter((e) => e.type === "past");
  const futureEvents = events.filter((e) => e.type === "future");

  return (
    <div className="bg-dark-900 min-h-screen">
      <PageHeader
        title="Activities"
        description="From intimate workshops to global hackathons. Explore what we've been up to and what's coming next."
      />

      {/* RECENT EVENTS GRID */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Recent Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentEvents.map((event) => (
              <Link
                href={event.link || "#"}
                key={event.id}
                className="group bg-dark-800 hover:border-brand-500/50 block overflow-hidden rounded-2xl border border-white/5 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-black/70 px-3 py-1 font-mono text-xs text-white backdrop-blur-sm">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="group-hover:text-brand-500 mb-2 flex items-center justify-between text-xl font-bold text-white transition-colors">
                    {event.title}
                    <ExternalLink
                      size={16}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE EVENTS & JOURNEY */}
      <section className="bg-dark-800 border-t border-white/5 px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Upcoming */}
          <div>
            <h2 className="mb-8 text-2xl font-bold text-white">
              Upcoming Events
            </h2>
            <div className="space-y-6">
              {futureEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-dark-900 flex gap-6 rounded-xl border border-white/5 p-6 transition-colors hover:border-white/20"
                >
                  <div className="bg-brand-900/20 text-brand-500 border-brand-500/20 flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-lg border">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold text-white">
                      {event.title}
                    </h4>
                    <p className="text-brand-400 mb-2 font-mono text-sm">
                      {event.date}
                    </p>
                    <p className="text-sm text-gray-400">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Journey Timeline (x.ai style) */}
          <div className="relative">
            <h2 className="mb-8 text-2xl font-bold text-white">
              The Journey to Main Event
            </h2>
            <div className="relative ml-4 space-y-12 border-l border-white/10">
              {/* Timeline Item 1 */}
              <div className="relative pl-8">
                <div className="absolute top-2 -left-[5px] h-2.5 w-2.5 rounded-full bg-gray-600"></div>
                <h4 className="text-lg font-bold text-gray-400">
                  Q3 2024: Community Building
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  Regional meetups and online workshops.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-8">
                <div className="absolute top-2 -left-[5px] h-2.5 w-2.5 animate-pulse rounded-full bg-white"></div>
                <h4 className="text-lg font-bold text-white">
                  Q4 2024: Partner Announcements
                </h4>
                <p className="mt-1 text-sm text-gray-400">
                  Revealing sponsors and challenge tracks.
                </p>
              </div>

              {/* Timeline Item 3 (Placeholder) */}
              <div className="relative pl-8 opacity-50">
                <div className="absolute top-2 -left-[5px] h-2.5 w-2.5 rounded-full border border-gray-600 bg-gray-800"></div>
                <h4 className="text-lg font-bold text-gray-600 italic">
                  2025: The Main Event
                </h4>
                <div className="mt-4 rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                  <p className="text-brand-500 text-center font-mono text-sm tracking-widest">
                    STAY TUNED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

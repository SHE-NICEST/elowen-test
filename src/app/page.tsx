"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Zap, Target } from "lucide-react";
import { stats, values } from "~/data/home";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. VISION SECTION (Hero) */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="bg-dark-900 absolute top-0 left-0 z-0 h-full w-full">
          <div className="bg-brand-600/20 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-[128px]"></div>
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[128px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            {...({
              initial: { opacity: 0, y: 0 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
            } as any)}
            className="mb-8 text-5xl font-extrabold tracking-tighter text-white md:text-7xl lg:text-9xl"
          >
            CODE LIKE <br />
            <span className="from-brand-500 bg-gradient-to-r to-purple-500 bg-clip-text text-transparent">
              SHE NICEST
            </span>
          </motion.h1>
          <motion.p
            {...({
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
            } as any)}
            className="mx-auto max-w-3xl text-xl leading-relaxed font-light text-gray-400 md:text-2xl"
          >
            A global collective redefining the hackathon experience. We are
            building the infrastructure for the next generation of creative
            technologists.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          {...({
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1, duration: 1 },
          } as any)}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-500 p-2">
            <div className="h-2 w-1 animate-bounce rounded-full bg-gray-500"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. MISSION SECTION */}
      <section className="bg-dark-800 border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-brand-500 mb-4 text-sm font-bold tracking-widest uppercase">
                Our Mission
              </h2>
              <h3 className="mb-8 text-4xl leading-tight font-bold text-white md:text-5xl">
                To democratize access to innovation and foster a borderless
                community of builders.
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">
                We organize world-class events that bring together designers,
                developers, and visionaries. Whether you are writing your first
                line of code or deploying complex AI models, SHE NICEST provides
                the platform, resources, and network to turn ideas into reality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-dark-900/50 hover:border-brand-500/30 rounded-2xl border border-white/5 p-6 transition-colors md:p-8"
                >
                  <div className="mb-2 text-3xl font-bold text-white md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-300 md:text-base">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUES SECTION */}
      <section className="bg-dark-900 relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-brand-500 mb-4 text-sm font-bold tracking-widest uppercase">
              Our Values
            </h2>
            <h3 className="text-3xl font-bold text-white md:text-4xl">
              What Drives Us
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-dark-800 hover:bg-dark-700 group rounded-2xl border border-white/5 p-8 transition-all duration-300"
              >
                <div className="bg-dark-900 text-brand-500 mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
                  {val.icon === "Heart" && <Heart />}
                  {val.icon === "Zap" && <Zap />}
                  {val.icon === "Target" && <Target />}
                </div>
                <h4 className="mb-4 text-xl font-bold text-white">
                  {val.title}
                </h4>
                <p className="leading-relaxed text-gray-400">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

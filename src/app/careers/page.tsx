"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import PageHeader from "../_components/page-header";
import { positions } from "~/data/jobs";

export default function CareersPage() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <PageHeader
        title="Join the Movement"
        description="We are always looking for passionate individuals who want to shape the future of tech communities. Help us build the stage for the next big idea."
        centered
      />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="bg-dark-800 overflow-hidden rounded-2xl border border-white/5">
            <div className="flex items-center justify-between border-b border-white/5 bg-white/5 p-6">
              <h3 className="font-bold text-white">Open Positions</h3>
              <span className="text-sm text-gray-400">
                {positions.length} Roles Available
              </span>
            </div>

            <div className="divide-y divide-white/5">
              {positions.map((job) => (
                <div
                  key={job.id}
                  className="group flex cursor-pointer flex-col justify-between gap-4 p-6 transition-colors hover:bg-white/5 sm:flex-row sm:items-center sm:p-8"
                >
                  <div>
                    <h4 className="group-hover:text-brand-500 text-xl font-bold text-white transition-colors">
                      {job.title}
                    </h4>
                    <div className="mt-2 flex gap-4 font-mono text-sm text-gray-400">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="text-brand-500 flex translate-x-[-10px] transform items-center font-medium opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                    Apply Now <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="from-dark-800 to-dark-900 mt-16 rounded-2xl border border-white/5 bg-gradient-to-b p-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Don't see your role?
            </h3>
            <p className="mx-auto mb-8 max-w-lg text-gray-400">
              We are always interested in meeting talented people. Send your
              portfolio and a short introduction to our team.
            </p>
            <a
              href="mailto:careers@shenicest.com"
              className="text-dark-900 inline-block rounded-full bg-white px-8 py-3 font-bold transition-colors hover:bg-gray-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

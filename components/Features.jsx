"use client";
import React from "react";
import { Button } from "./ui/MovingBorders";

function Features() {
  const FEATURES = [
    {
      id: 0,
      title: "Personalized Matches",
      desc: "Find players who share your passion and skill level.",
    },
    {
      id: 1,
      title: "Scheduling Tools",
      desc: "Easily arrange games and practices with your team.",
    },
    {
      id: 2,
      title: "Community Events",
      desc: "Participate in local sports events and tournaments.",
    },
    {
      id: 3,
      title: "Rating System",
      desc: "Rate your teammates and build your reputation within the community.",
    },
  ];

  return (
    <div id="features" className="py-24 w-full bg-linear-gradient(#CBACF9_40%, transparent_60%) text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">
          Our <span className="text-purple-500">Features</span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {FEATURES.map((feature) => (
            <Button
              key={feature.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col lg:items-start p-4 md:p-5 lg:p-6 gap-2">
                <h1 className="text-start text-lg md:text-xl font-bold">
                  {feature.title}
                </h1>
                <p className="text-start text-gray-300 mt-3 font-medium">
                  {feature.desc}
                </p>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;

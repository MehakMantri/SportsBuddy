"use client";
import React from "react";
import { Button } from "./ui/MovingBorders";

function Features() {
  const FEATURES = [
    {
      id: 0,
      title: "Personalized Matches",
      desc: "Find players who share your passion and skill level. Discover new opportunities to connect with athletes who are equally enthusiastic about your favorite sports.",
    },
    {
      id: 1,
      title: "Scheduling Tools",
      desc: "Easily arrange games and practices with your team. Streamline the process of setting up matches, practices, and events using our intuitive scheduling tools",
    },
    {
      id: 2,
      title: "Community Events",
      desc: "Participate in local sports events and tournaments. Engage with your community by joining various sports events and tournaments happening in your area.",
    },
    {
      id: 3,
      title: "Rating System",
      desc: "Rate your teammates and build your reputation within the community. Establish credibility and trust within the SportsBuddy community by providing feedback and ratings based on your experiences.",
    },
  ];

  return (
    <div id="features" className="py-24 bg-darkPurple text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">
          Our <span className="text-purple-500">Features</span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="bg-purple-900 rounded-lg overflow-hidden  h-full " style={{ width: '560px' }}>
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem * 0.96)`,
                  width: "100%",
                }}
                className="text-white border-neutral-200 dark:border-slate-800 transform hover:scale-105 transition-transform duration-300 h-full flex flex-col justify-between"
              >
                <div className="p-6">
                  <h1 className="text-lg md:text-xl font-bold mb-4">
                    {feature.title}
                  </h1>
                  <p className="text-gray-300 font-medium mb-4">
                    {feature.desc}
                  </p>
                  <p className="text-xs text-gray-400">Learn more about {feature.title}</p>
                </div>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;

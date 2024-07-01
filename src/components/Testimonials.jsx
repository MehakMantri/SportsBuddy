import React from 'react';
import { CardStack } from "./ui/card-stack";
import cn from "../utils/cn";

function Testimonials() {
  const CARDS_1 = [
    {
      id: 0,
      name: "John D.",
      designation: "",
      content: (
        <p>
          "SportsBuddy helped me find a great basketball team in my area. It's been an amazing experience!"
        </p>
      ),
    },
    {
      id: 1,
      name: "Emily W.",
      designation: "",
      content: (
        <p>
          "I've met some fantastic soccer enthusiasts through SportsBuddy. It's been a game-changer for me!"
        </p>
      ),
    },
    {
      id: 2,
      name: "David S.",
      designation: "",
      content: (
        <p>
          "Thanks to SportsBuddy, I've been able to discover new tennis partners and improve my game. Highly recommended!"
        </p>
      ),
    },
  ];
  
  const CARDS_2 = [
    {
      id: 0,
      name: "Sophia M.",
      designation: "",
      content: (
        <p>
          "SportsBuddy made it easy for me to connect with fellow runners. I've found great running buddies through this platform!"
        </p>
      ),
    },
    {
      id: 1,
      name: "Michael R.",
      designation: "",
      content: (
        <p>
          "I'm impressed by the variety of sports activities available on SportsBuddy. It's a great way to stay active and socialize!"
        </p>
      ),
    },
    {
      id: 2,
      name: "Emma K.",
      designation: "",
      content: (
        <p>
          "SportsBuddy helped me discover local yoga classes and connect with like-minded individuals. I'm grateful for this platform!"
        </p>
      ),
    },
  ];
  
  const CARDS_3 = [
    {
      id: 0,
      name: "Daniel B.",
      designation: "",
      content: (
        <p>
          "I've found SportsBuddy to be incredibly user-friendly and efficient. It's been a pleasure using this platform!"
        </p>
      ),
    },
    {
      id: 1,
      name: "Olivia H.",
      designation: "",
      content: (
        <p>
          "I appreciate how SportsBuddy matches me with compatible sports enthusiasts. It saves me time and effort in finding the right teammates!"
        </p>
      ),
    },
    {
      id: 2,
      name: "William L.",
      designation: "",
      content: (
        <p>
          "Thanks to SportsBuddy, I've been able to explore new sports and activities in my area. It's been a fun and rewarding experience!"
        </p>
      ),
    },
  ];

  return (
    <div id="testimonials" className="">
      <div className="container mx-auto text-center">
        {/* <h2 className="text-3xl font-bold mb-8 text-white"> */}
        <h2 className="text-3xl font-bold mb-8 text-white">
          Kind Words from our   <span className="text-purple-500">satisfied Clients</span>
        </h2>
        <p className="text-lg mb-12 text-white">Join Thousands of Happy Players</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First set of testimonials */}
          <CardStack items={CARDS_1} />

          {/* Second set of testimonials */}
          <CardStack items={CARDS_2} />

          {/* Third set of testimonials */}
          <CardStack items={CARDS_3} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
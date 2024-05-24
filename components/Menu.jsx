import React from "react";
import Spotlight from "./ui/Spotlight";

function Menu() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid bg-opacity-25"></div>

      {/* Spotlight Components */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="purple"
      />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Find Your Perfect Playmate <br /> with SportsBuddy
        </h1>
        <p className="text-lg mb-12">
          Connect with fellow sports enthusiasts in your area and start playing
          today!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default Menu;

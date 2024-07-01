import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function AboutUs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div id="about-us" className="py-24 bg-gradient-to-r">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-white">About Us</h2>
        <p className="text-2xl mb-6 text-white">Your Sports Community, Your Way</p>
        <p className="text-lg text-white leading-relaxed mb-8">
          SportsBuddy was created by athletes, for athletes. We understand the challenges of finding <br /> 
          reliable teammates for your favorite sports. Our mission is to build a vibrant community where players of all levels can <br /> 
          connect, play, and grow together. Join us and become part of the SportsBuddy family!
        </p>
        <div className="flex justify-center mt-8">
          <div className="w-full md:w-2/3 lg:w-1/2 max-w-md">
            <Slider {...settings}>
              <div>
                <img 
                  src="https://media.istockphoto.com/id/1194279762/photo/sport-backgrounds-d-rendered-soccer-stadium-view-from-mobile-phone-soccer-ball-before-the.jpg?s=2048x2048&w=is&k=20&c=lYmbBzKNU2RRFuRfz05tEPVdfERiRPtQMuWiwy8DELM=" 
                  alt="SportsBuddy Community" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b" 
                  alt="Sports Event" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <img 
                  src="https://media.istockphoto.com/id/1094296262/photo/asian-badminton-player-is-glad-he-scored.jpg?s=2048x2048&w=is&k=20&c=tI7x3KvTIcoH2XJu-q3F_-5NxcjYALkB4sN49Bijaj8=" 
                  alt="Team Game" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              {/* Add more images as needed */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

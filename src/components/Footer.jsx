import React from 'react';

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 text-white" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Connect with <span className="text-purple">SportsBuddy</span> today
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let's discuss how we can enhance your sports experience.
        </p>
        <a href="mailto:contact@example.com">
          Let's get in touch
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          &copy; 2024 SportsBuddy. All rights reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {/* Example social media icons */}
          {/* Replace `socialMedia` with your actual data */}
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt={info.name} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Example social media data
const socialMedia = [
  {
    id: 1,
    name: 'Facebook',
    img: '/facebook-icon.png',
    link: 'https://www.facebook.com/SportsBuddyOfficial',
  },
  {
    id: 2,
    name: 'Twitter',
    img: '/twitter-icon.png',
    link: 'https://twitter.com/SportsBuddyHQ',
  },
  // Add more social media platforms as needed
];

export default Footer;

import React from 'react';

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 text-white" id="contact">
      {/* Background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div> */}

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
      <div className="flex flex-col items-center mt-16">
          <p className="md:text-base text-sm md:font-normal font-light text-center">
            &copy; 2024 SportsBuddy. All rights reserved.
          </p>
        </div>
    </footer>
  );
}

export default Footer;

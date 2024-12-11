'use client';

import Navs from "./components/navs";
import { pageStyles } from "./assets/css/pageStyles";
import { useState, useEffect, useRef } from "react";
import Testimonials from "./components/testimonial-carousel";
import { slides, whatWeDo } from "./constants";

export default function Home() {
  const [service, setSetservice] = useState([
    'Easy Accessibility',
    'Fast and Reliable Service',
    'Expert Guidance',
    'Flexible Availability',
    'Personalized Support',
    'Affordability'
  ])

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div
      style={pageStyles.mainBg}
      className="font-[family-name:var(--font-geist-sans)]"
    >
      <Navs />
      <div id="home" className="text-white font-['Poppins'] flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:h-screen px-8 lg:px-[200px] relative z-10">
        <div className="text-center lg:text-right mt-10 pt-[100px] lg:mt-0 lg:pt-0">
        <p className="text-[30px] lg:text-[50px] font-normal leading-tight">
          Transform your ideas into apps
      </p>
      <p className="text-[36px] lg:text-[60px] font-semibold leading-tight mt-2">
        We Build Web and Mobile Apps
      </p>
      <p className="text-xl lg:text-3xl mt-2">
        Powered by the Cloud. Supercharged by AI.
      </p>
        <div className="w-full flex justify-center lg:justify-end pt-5 pb-10">
          <a
            href="#"
            className="w-[250px] lg:w-[286px] h-[45px] bg-[#00acec] rounded-[10px] flex justify-center items-center transition-all duration-300 hover:bg-[#0086bb]"
          >
          <span className="text-sm lg:text-base">Contact Us for free consult</span>
          <span className="ml-2">
            <svg 
            width="34" 
            height="34" 
            viewBox="0 0 34 34" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
              <g 
              id="mdi:arrow-up">
              <path 
              id="Vector" 
              d="M12.0209 23.3345L10.6067 21.9203L19.092 13.435H11.3138V11.4268H22.5143V22.6274H20.5062V14.8492L12.0209 23.3345Z" 
              fill="white"
              />
              </g>
            </svg>
          </span>
        </a>     
      </div>
    </div>
  </div>
  <div className="w-full h-auto bg-[#edfaff] z-10 relative">
        <div>
          <p className="flex flex-wrap justify-center pt-10 lg:pt-20 space-x-2">
          <span className="text-black text-2xl lg:text-[30px] font-semibold">WHY</span>
          <span className="text-[#00acec] text-2xl lg:text-[30px] font-semibold">CHOOSE US?</span>
          </p>
          <p className="px-5 lg:px-[250px] text-center pt-5 text-[#848484] text-sm lg:text-base">
            At CloudNext, we are committed to delivering cutting-edge IT solutions tailored to meet your unique needs. Whether you’re an individual or a growing business, we combine innovation, reliability, and a customer-first approach to ensure seamless experiences. Trust CloudNext to simplify your technology journey and empower your goals with excellence.
          </p>   
          <div className="flex justify-center pt-10 w-full items-center pb-[100px]">
            <div className="grid grid-cols-8 gap-[20px] w-[100%] lg:w-[50%] lg:pl-[100px] px-5" ref={containerRef}>
              {
                service.map((ser)=> {
                  return (
                    <div
                    key={ser}
                    className={`flex items-center col-span-4 gap-5 ${
                      isVisible ? 'animate-appear-up' : ''
                    }`}
                  >
                      <svg 
                      width="51" 
                      height="46" 
                      viewBox="0 0 51 46" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <circle 
                      cx="23" 
                      cy="23" 
                      r="23" 
                      fill="#B0EAFF"
                      />
                        <path 
                        d="M21.4671 19.3179L14.5574 14.412C14.5383 14.3984 14.5172 14.3879 14.4948 14.3808C14.3063 14.3209 14.1387 14.5181 14.2231 14.697C17.689 22.0451 19.9383 26.518 22.6819 29.916C23.9877 31.5331 26.6221 31.0448 27.7816 29.3198C32.3836 22.4735 42.8568 9.61803 50.2813 1.83039C50.4083 1.69712 50.5015 1.54067 50.5594 1.36588C50.7936 0.659181 50.3384 -0.0434333 49.6197 0.15101C44.4931 1.5381 32.4699 12.1686 25.3124 19.028C24.2634 20.0333 22.6518 20.1591 21.4671 19.3179Z" 
                        fill="#04516A"
                        />
                      </svg>
                        <p> {ser}</p>
                    </div>
                  )
                })
              }
            {/* <div className="flex items-center gap-5">
              <svg width="51" height="46" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="23" cy="23" r="23" fill="#B0EAFF"/>
                <path d="M21.4671 19.3179L14.5574 14.412C14.5383 14.3984 14.5172 14.3879 14.4948 14.3808C14.3063 14.3209 14.1387 14.5181 14.2231 14.697C17.689 22.0451 19.9383 26.518 22.6819 29.916C23.9877 31.5331 26.6221 31.0448 27.7816 29.3198C32.3836 22.4735 42.8568 9.61803 50.2813 1.83039C50.4083 1.69712 50.5015 1.54067 50.5594 1.36588C50.7936 0.659181 50.3384 -0.0434333 49.6197 0.15101C44.4931 1.5381 32.4699 12.1686 25.3124 19.028C24.2634 20.0333 22.6518 20.1591 21.4671 19.3179Z" fill="#04516A"/>
              </svg>
              <p> Easy Accessibility</p>
            </div> */}
            </div>
          </div>
            <div className="w-full h-auto bg-white font-['Poppins'] py-16 pb-0" id='service'>
              <div>
                <p className="flex justify-center pt-8 space-x-2">
                  <span className="text-black text-[24px] md:text-[30px] font-semibold">WHAT</span>
                  <span className="text-[#00acec] text-[24px] md:text-[30px] font-semibold">WE DO?</span>
                </p>
              </div>
              <div className="flex justify-center pt-12 w-full items-center pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-[90%] lg:w-[70%]">
                  {
                    whatWeDo.map((what, ctr)=> {
                      return (
                        <div key={`${what}-${ctr}`}  className="flex flex-col items-center text-center gap-4 text-[#00acec] hover:scale-105 transition-transform duration-300">
                          <img 
                            src={what.icon}
                            alt={what.title} 
                            className="w-[60px] md:w-[80px] h-auto object-contain hover:w-[70px] md:hover:w-[97px] transition-all"
                          />
                          <p className="font-semibold text-md md:text-lg">{what.title}</p>
                          <p className="text-gray-600 text-sm md:text-base">
                            {what.desc}
                          </p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div id="portfolio" className="w-full h-auto bg-gradient-to-b from-[#F4FFFD] to-[#D3F3FF] font-['Poppins'] text-sm py-16 pb-0">
                <div>
                  <p className="flex justify-center pt-8 space-x-2">
                    <span className="text-black text-[24px] md:text-[30px] font-semibold">WHAT WE'VE</span>
                    <span className="text-[#00acec] text-[24px] md:text-[30px] font-semibold">DONE</span>
                  </p>
                </div>
                <div className="flex justify-center pt-12 w-full items-center pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] lg:w-[70%]">
                  <div className="flex flex-col items-center text-center gap-3 text-[#00acec] bg-white p-6 md:p-8 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/assets/images/TAPKAT.png"
                      alt="Responsive Design" 
                      className="w-[50px] h-auto object-contain"
                    />
                    <p className="font-semibold text-md md:text-lg">TAPKAT</p>
                    <p className="text-gray-600 text-sm">
                      Tapkat is a peer-to-peer marketplace app where one can buy, sell, or barter products and services.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 text-[#00acec] bg-white p-6 md:p-8 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/assets/images/Virtual.png"
                      alt="Tapkat logo" 
                      className="w-[60px] h-auto object-contain"
                    />
                    <p 
                      className="font-semibold text-md md:text-lg text-center px-2" 
                      style={{ paddingLeft: '10px', paddingRight: '10px' }}
                    >
                      VIRTUAL STOCK TRADING
                    </p>
                    <p className="text-gray-600 text-sm">
                      Designed to give investors a realistic environment to access the stock market.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 text-[#00acec] bg-white p-6 md:p-8 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/assets/images/AI DEMOS.png"
                      alt="AI DEMOS" 
                      className="w-[100px] md:w-[140px] h-auto object-contain"
                    />
                    <p className="font-semibold text-md md:text-lg">AI DEMOS</p>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tortor nec eros consequat cursus. 
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 text-[#00acec] bg-white p-6 md:p-8 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/assets/images/brickd.png"
                      alt="BRICKD logo" 
                      className="w-[110px] h-auto object-contain"
                    />
                    <p className="font-semibold text-md md:text-lg">BRICKD</p>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tortor nec eros consequat cursus. 
                    </p>
                  </div>
                </div>

                
              </div>
                  <div>
                    <p className="flex justify-center pt-15 space-x-2">
                      <span className="text-[#262E3A] text-[30px] font-semibold">TESTIMONIALS</span>
                    </p>
                  </div>
                  <Testimonials slides={slides} noscroll={true}/>   {/* change to false if more than 3 of testimonials */}
              <div className="w-full h-auto bg-[#F4FFFD] font-['Poppins'] text-sm" id="contact">
                  <div className="w-full bg-blue-300">
                    <div className="min-h-[700px] bg-[#62D5FF] flex flex-col justify-center items-center px-6 relative">
                      <div className="max-w-md w-full p-8 rounded-lg">
                        <h1 className="text-3xl font-semibold text-white mb-4">Say <span className="text-[#262E3A]">Hello.</span></h1>
                        <p className="text-gray-600 mb-8">
                          Feel free to drop us an email for your inquiries anytime. We’d love to hear from you.
                        </p>
                        <form>
                          <div className="mb-4">
                            <input
                              type="text"
                              id="name"
                              className="w-full bg-transparent border-b pb-2 border-gray-400 text-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 placeholder-gray-500"
                              placeholder="Name"
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="email"
                              id="email"
                              className="w-full bg-transparent border-b pb-2 border-gray-400 text-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 placeholder-gray-500"
                              placeholder="Email Address"
                            />
                          </div>
                          <div className="mb-6">
                            <textarea
                              id="message"
                              rows="4"
                              className="w-full bg-transparent border-b pb-2 border-gray-400 text-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 placeholder-gray-500"
                              placeholder="Write a message . . ."
                            ></textarea>
                          <div className="flex justify-end pt-2">
                            <button
                              type="submit"
                              className="flex items-center space-x-2 bg-white text-black shadow-md px-4 py-2 text-sm rounded-lg font-medium hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                              <span>Send</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </form>
                        <div className="mt-8 text-center">
                          <p className="text-gray-600 mb-2 pt-10">Message us via our social media channels</p>
                          <div className="flex justify-center space-x-4">
                            <a
                              href="#"
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-white opacity-2 hover:bg-blue-400"
                            >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#262E3A"/>
                              </svg>

                            </a>
                            <a
                              href="#"
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-white opacity-2 hover:bg-blue-400"
                            >
                              <svg width="19" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33317 4.99984C4.25365 4.99984 4.99984 4.25365 4.99984 3.33317C4.99984 2.4127 4.25365 1.6665 3.33317 1.6665C2.4127 1.6665 1.6665 2.4127 1.6665 3.33317C1.6665 4.25365 2.4127 4.99984 3.33317 4.99984Z" fill="#262E3A"/>
                                <path d="M3.3335 8.3335V16.6668" stroke="#262E3A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.3335 8.3335V16.6668" stroke="#262E3A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.3335 12.5002C8.3335 10.2002 10.2002 8.3335 12.5002 8.3335C14.8002 8.3335 16.6668 10.2002 16.6668 12.5002V16.6668" stroke="#262E3A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </a>
                            <div className="relative group">
                              <a
                                href="mailto:info@cloud-next.com.au"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white opacity-2 hover:bg-blue-400"
                              >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M16.6665 3.3335H3.33317C2.4165 3.3335 1.67484 4.0835 1.67484 5.00016L1.6665 15.0002C1.6665 15.9168 2.4165 16.6668 3.33317 16.6668H16.6665C17.5832 16.6668 18.3332 15.9168 18.3332 15.0002V5.00016C18.3332 4.0835 17.5832 3.3335 16.6665 3.3335ZM16.6665 6.66683L9.99984 10.8335L3.33317 6.66683V5.00016L9.99984 9.16683L16.6665 5.00016V6.66683Z"
                                    fill="#262E3A"
                                  />
                                </svg>
                              </a>
                              <div className="absolute whitespace-nowrap bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              info@cloud-next.com.au
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      <img 
                        src="/assets/images/b-cloud.png"
                        alt="Responsive Design" 
                        className="w-[650px] h-auto absolute right-0 bottom mt-[100px]"
                      />
                      <footer className="mt-8 text-center text-gray-600 text-sm">
                        Copyright © 2024 CloudNext
                      </footer>
                    </div>
    
                  </div>
                </div>
              </div>
              
            </div>
            
        </div>
      </div>
      <div
  style={{
    backgroundImage: "url('/assets/images/main-bg.png')",
    backgroundSize: 'cover'
  }}
  className="w-screen h-screen fixed z-0 top-0"
></div>
      {/* <img 
          src='/assets/images/main-bg.png'
          alt='main'
          className="w-screen h-auto object-contain fixed z-0 top-0"
        /> */}
    </div>
    
  );
}

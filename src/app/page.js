'use client';

import Navs from "./components/navs";
import { pageStyles } from "./assets/css/pageStyles";
import { useState } from "react";
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

  

  return (
    <div
      style={pageStyles.mainBg}
      className="font-[family-name:var(--font-geist-sans)]"
    >
      <Navs />
      <div className="text-white font-['Poppins'] flex justify-end items-center h-screen px-[200px] relative z-10">
        <div className="text-right"> 
        <p className="text-[50px] font-normal"> Transform your ideas into apps</p>
        <p className="text-[60px] font-semibold"> We Build Web and Mobile Apps</p>
        <p className="text-3xl">Powered by the Cloud. Supercharged by AI.</p>
          <div className="w-full flex justify-end pt-5">
            <a href="#" className="w-[286px] h-[45px] bg-[#00acec] rounded-[10px] flex justify-center items-center"> 
              <span> Contact Us for free consult </span>
              <span>
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
      <div className="w-[100%] h-[550px] bg-[#edfaff] z-10 relative">
        <div>
          <p className="flex justify-center pt-20 space-x-2">
            <span className="text-black text-[30px] font-semibold">WHY</span>
            <span className="text-[#00acec] text-[30px] font-semibold">CHOOSE US?</span>
          </p>
          <p className="px-[250px] text-center pt-5 text-[#848484]"> 
            At CloudNext, we are committed to delivering cutting-edge IT solutions tailored to meet your unique needs. Whether you’re an individual or a growing business, we combine innovation, reliability, and a customer-first approach to ensure seamless experiences. Trust CloudNext to simplify your technology journey and empower your goals with excellence.
          </p>  
          <div className="flex justify-center pt-10 w-full items-center pb-[100px]">
            <div className="grid grid-cols-8 gap-[20px] w-[50%] pl-[100px]">
              {
                service.map((ser)=> {
                  return (
                    <div key={ser} className="flex items-center col-span-4 gap-5">
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
            <div className="w-[100%] h-[813px] bg-white font-['Poppins']">
              <div>
                <p className="flex justify-center pt-20 space-x-2">
                  <span className="text-black text-[30px] font-semibold">WHAT</span>
                  <span className="text-[#00acec] text-[30px] font-semibold">WE DO?</span>
                </p>
              </div>
              <div className="flex justify-center pt-[5%] w-full items-center pb-[150px]">
                <div className="grid grid-cols-3 gap-[100px] w-[70%]">
                  {
                    whatWeDo.map((what)=> {
                      return (
                        <div className="flex flex-col items-center text-center gap-5 text-[#00acec]">
                          <img 
                            src={what.icon}
                            alt={what.title} 
                            className="w-[80px] h-auto object-contain hover:w-[97px] transition-all"
                          />
                          <p className="font-semibold text-lg">{what.title}</p>
                          <p className="text-gray-600 text-sm">
                            {what.desc}
                          </p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="w-[100%] h-[1150px] bg-gradient-to-b from-[#F4FFFD] to-[#D3F3FF] font-['Poppins'] text-sm">
                <div>
                  <p className="flex justify-center pt-20 space-x-2">
                    <span className="text-black text-[30px] font-semibold">WHAT WE'VE</span>
                    <span className="text-[#00acec] text-[30px] font-semibold">DONE</span>
                  </p>
                </div>
                <div className="flex justify-center pt-[5%] w-full items-center pb-[150px]">
                <div className="grid grid-cols-4 gap-6 w-[70%]">
                  <div className="flex flex-col items-center text-center gap-3 text-[#00acec] bg-white p-8 shadow-md rounded-lg">
                    <img 
                      src="/assets/images/TAPKAT.png"
                      alt="Responsive Design" 
                      className="w-[50px] h-auto object-contain"
                    />
                    <p className="font-semibold text-lg">TAPKAT</p>
                    <p className="text-gray-600 text-sm">
                      Tapkat is a peer-to-peer marketplace app where one can buy, sell, or barter products and services.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 text-[#00acec] bg-white p-8 shadow-md rounded-lg">
                    <img 
                      src="/assets/images/Virtual.png"
                      alt="Tapkat logo" 
                      className="w-[60px] h-auto object-contain"
                    />
                    <p 
                      className="font-semibold text-lg text-center " 
                      style={{ paddingLeft: '10px', paddingRight: '10px' }}
                    >
                      VIRTUAL STOCK TRADING
                    </p>
                    <p className="text-gray-600 text-sm">
                      Designed to give investors a realistic environment to access the stock market.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 text-[#00acec] bg-white p-10 shadow-md rounded-lg">
                    <img 
                      src="/assets/images/AI DEMOS.png"
                      alt="AI DEMOS" 
                      className="w-[140px] h-auto object-contain"
                    />
                    <p className="font-semibold text-lg">AI DEMOS</p>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tortor nec eros consequat cursus. 
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 text-[#00acec] bg-white p-8 shadow-md rounded-lg">
                    <img 
                      src="/assets/images/brickd.png"
                      alt="BRICKD logo" 
                      className="w-[110px] h-auto object-contain"
                    />
                    <p className="font-semibold text-lg">BRICKD</p>
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
                  <Testimonials slides={slides} noscroll={true}/> 
              <div className="w-[100%] h-auto bg-[#F4FFFD] font-['Poppins'] text-sm">
                  <div className="w-[100%] bg-blue-300 font-['Poppins']">
                    <div className="h-[700px] bg-[#62D5FF] flex flex-col justify-center items-center px-6">
                      <div className="max-w-md w-full p-8">
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
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-300 opacity-2 hover:bg-blue-400"
                            >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#262E3A"/>
                              </svg>

                            </a>
                            <a
                              href="#"
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-300 opacity-2 hover:bg-blue-400"
                            >
                              <svg width="19" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33317 4.99984C4.25365 4.99984 4.99984 4.25365 4.99984 3.33317C4.99984 2.4127 4.25365 1.6665 3.33317 1.6665C2.4127 1.6665 1.6665 2.4127 1.6665 3.33317C1.6665 4.25365 2.4127 4.99984 3.33317 4.99984Z" fill="#262E3A"/>
                                <path d="M3.3335 8.3335V16.6668" stroke="#262E3A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.3335 8.3335V16.6668" stroke="#262E3A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.3335 12.5002C8.3335 10.2002 10.2002 8.3335 12.5002 8.3335C14.8002 8.3335 16.6668 10.2002 16.6668 12.5002V16.6668" stroke="#262E3A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </a>
                            <a
                              href="#"
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-300 opacity-2 hover:bg-blue-400"
                            >
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6665 3.3335H3.33317C2.4165 3.3335 1.67484 4.0835 1.67484 5.00016L1.6665 15.0002C1.6665 15.9168 2.4165 16.6668 3.33317 16.6668H16.6665C17.5832 16.6668 18.3332 15.9168 18.3332 15.0002V5.00016C18.3332 4.0835 17.5832 3.3335 16.6665 3.3335ZM16.6665 6.66683L9.99984 10.8335L3.33317 6.66683V5.00016L9.99984 9.16683L16.6665 5.00016V6.66683Z" fill="#262E3A"/>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <img 
                        src="/assets/images/b-cloud.png"
                        alt="Responsive Design" 
                        className="w-[650px] h-auto absolute right-0 bottom mt-[100px]"
                      />
                      <footer className="mt-8 text-center text-gray-600 text-sm pt-30">
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

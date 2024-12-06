import { useState, useRef, useEffect } from "react";
const Testimonials = ({slides, noscroll}) => {
    const trackRef = useRef(null);

    // Clone the slides for infinite effect
    const allSlides = [...slides, ...slides];
    return (
         <div className="flex justify-center  pb-[20px] pt-[50px] w-full items-center">
            <div className=" w-[100%]">
                {
                    !noscroll ? (
                        <div style={styles.sliderWrapper}>
                            <div
                            ref={trackRef}
                            style={{
                                ...styles.sliderTrack,
                                animationDuration: `${slides.length * 0.6}s`,
                            }}
                            >
                            {allSlides.map((slide, index) => (
                                <div style={styles.slide} className="flex flex-col items-center text-center gap-3 bg-white p-8 px-5 h-auto shadow-md rounded-lg">
                                    <p className="font-bold text-sm">{slide.name}</p>
                                    <div className="flex">
                                    {
                                        Array(slide.star).fill(null).map((_, index) => (
                                            <svg
                                                key={index} // Always add a unique key when mapping in React
                                                width="28"
                                                height="28"
                                                viewBox="0 0 28 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path
                                                    d="M14.0002 20.1484L18.8419 23.0767C19.7285 23.6134 20.8135 22.8201 20.5802 21.8167L19.2969 16.3101L23.5785 12.6001C24.3602 11.9234 23.9402 10.6401 22.9135 10.5584L17.2785 10.0801L15.0735 4.87672C14.6769 3.93172 13.3235 3.93172 12.9269 4.87672L10.7219 10.0684L5.08687 10.5467C4.06021 10.6284 3.64021 11.9117 4.42187 12.5884L8.70354 16.2984L7.42021 21.8051C7.18687 22.8084 8.27187 23.6017 9.15854 23.0651L14.0002 20.1484Z"
                                                    fill="#FFB922"
                                                />
                                                </svg>
                                            ))
                                    }
                                    </div>
                                    <p className="font-regular text-sm">{slide.mainComment}</p>
                                    <p className="text-gray-500 text-sm">
                                        {
                                            slide.impression
                                        }
                                    </p>
                                    <svg className="absolute bottom-0 -mb-[17px] rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M10.285 3.858c.777-1.294 2.653-1.294 3.43 0l8.468 14.113c.8 1.333-.16 3.029-1.715 3.029H3.532c-1.554 0-2.514-1.696-1.715-3.029z"/></svg>
                                </div>
                            ))}
                            </div>
                        </div>
                    ): (
                        <div className="w-[100%] flex justify-center gap-6 pb-10">
                            {slides.map((slide, index) => (
                                <div className="w-[22%] flex flex-col items-center text-center gap-3 bg-white p-8 px-5 h-auto shadow-md rounded-lg relative">
                                    <p className="font-bold text-sm">{slide.name}</p>
                                    <div className="flex">
                                    {
                                        Array(slide.star).fill(null).map((_, index) => (
                                            <svg
                                                key={index} // Always add a unique key when mapping in React
                                                width="28"
                                                height="28"
                                                viewBox="0 0 28 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path
                                                    d="M14.0002 20.1484L18.8419 23.0767C19.7285 23.6134 20.8135 22.8201 20.5802 21.8167L19.2969 16.3101L23.5785 12.6001C24.3602 11.9234 23.9402 10.6401 22.9135 10.5584L17.2785 10.0801L15.0735 4.87672C14.6769 3.93172 13.3235 3.93172 12.9269 4.87672L10.7219 10.0684L5.08687 10.5467C4.06021 10.6284 3.64021 11.9117 4.42187 12.5884L8.70354 16.2984L7.42021 21.8051C7.18687 22.8084 8.27187 23.6017 9.15854 23.0651L14.0002 20.1484Z"
                                                    fill="#FFB922"
                                                />
                                                </svg>
                                            ))
                                    }
                                    </div>
                                    <p className="font-regular text-sm">{slide.mainComment}</p>
                                    <p className="text-gray-500 text-sm">
                                        {
                                            slide.impression
                                        }
                                    </p>
                                    <svg className="absolute bottom-0 -mb-[17px] rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M10.285 3.858c.777-1.294 2.653-1.294 3.43 0l8.468 14.113c.8 1.333-.16 3.029-1.715 3.029H3.532c-1.554 0-2.514-1.696-1.715-3.029z"/></svg>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
  };
  
  
  export default Testimonials;



  const styles = {
    sliderWrapper: {
      overflow: "hidden",
      width: "100%",
      height: "300px",
      position: "relative",
    },
    sliderTrack: {
      display: "flex",
      width: "calc(25% * 3)", // Adjust based on the number of items (more than visible items)
      animation: "scroll 10s linear infinite",
      gap: "30px"
    },
    slide: {
      flex: "0 0 30%", // 20% width for 5 items visible at a time (adjust as needed)
    },
  };